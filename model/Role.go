package model

import (
	"context"
	"log"

	"github.com/Nerzal/gocloak/v11"
)

type Role struct {
	Name        *string `json:"name"`
	Description *string `json:"description,omitempty" yaml:"description,omitempty"`
	Id          *string `json:"id" yaml:"id"`
	Delete      *bool   `json:"delete,omitempty" yaml:"delete,omitempty"`
}

func (role *Role) ProcessRoleGitOps(client gocloak.GoCloak, token, realm string, clientYML *Client) error {
	roleDistant, _ := role.GetDistantRole(client, token, realm, clientYML)
	if role.Delete != nil && *role.Delete {
		if roleDistant == nil {
			return nil
		}
		return role.DeleteRole(client, token, realm, clientYML)
	}
	if roleDistant == nil {
		role.CreateRole(client, token, realm, clientYML)
	} else {
		role.UpdateRole(client, token, realm, clientYML)
	}
	return nil
}

func (role *Role) DeleteRole(client gocloak.GoCloak, token, realm string, clientYML *Client) error {
	clientID, errGetClientDistantID := clientYML.GetDistantClientID(client, token, realm)
	if errGetClientDistantID != nil {
		return errGetClientDistantID
	}
	return client.DeleteClientRole(context.Background(), token, realm, clientID, *role.Name)
}
func (role *Role) CreateRole(client gocloak.GoCloak, token, realm string, clientYML *Client) error {
	clientID, errGetClientDistantID := clientYML.GetDistantClientID(client, token, realm)
	if errGetClientDistantID != nil {
		return errGetClientDistantID
	}
	_, err := client.CreateClientRole(context.Background(), token, realm, clientID, role.ToRoleRepresentation())
	return err
}
func (role *Role) UpdateRole(client gocloak.GoCloak, token, realm string, clientYML *Client) error {
	clientID, errGetClientDistantID := clientYML.GetDistantClientID(client, token, realm)
	if errGetClientDistantID != nil {
		return errGetClientDistantID
	}
	if role.Delete != nil && *role.Delete {
		return nil
	}
	roleDistant := role.GetRoleDistant(client, token, realm, *clientYML)
	roleRep := role.ToRoleRepresentation()
	if roleDistant == nil {
		log.Println("There is a fucking error", *clientYML.Name, *role.Name)
		return nil
	}
	roleRep.ID = roleDistant.ID
	return client.UpdateRole(context.Background(), token, realm, clientID, roleRep)
}

// check if role exist
func (role *Role) RoleExist(client gocloak.GoCloak, token, realm string, clientYML *Client) bool {
	return role.GetRoleDistant(client, token, realm, *clientYML) != nil
}

func (role *Role) ToRoleRepresentation() gocloak.Role {
	attri := &map[string][]string{}
	(*attri)["GitOpsHandler"] = []string{"true"}
	return gocloak.Role{
		ID:          role.Id,
		Name:        role.Name,
		Description: role.Description,
		Attributes:  attri,
	}
}

func (role *Role) GetRoleDistant(client gocloak.GoCloak, token, realm string, clientYML Client) *gocloak.Role {
	clientID, errGetClientDistantID := clientYML.GetDistantClientID(client, token, realm)
	if errGetClientDistantID != nil {
		return nil
	}
	roles, err := client.GetClientRoles(context.Background(), token, realm, clientID, gocloak.GetRoleParams{})
	if err != nil {
		return nil
	}

	for _, roleDistant := range roles {
		if *roleDistant.Name == *role.Name {
			return roleDistant
		}
	}
	return nil
}

func (role *Role) GetDistantRole(client gocloak.GoCloak, token, realm string, clientYML *Client) (*gocloak.Role, error) {
	return clientYML.GetDistantRoleByName(client, token, realm, *role.Name)
}
