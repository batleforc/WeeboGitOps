package model

import (
	"context"
	"fmt"

	"github.com/Nerzal/gocloak/v11"
)

type KeyCloakRealm struct {
	Name            *string `json:"name"`
	DisplayName     *string `json:"displayName,omitempty" yaml:"displayName,omitempty"`
	DisplayNameHTML *string `json:"displayNameHTML,omitempty" yaml:"displayNameHTML,omitempty"`
	Enabled         *bool   `json:"enabled,omitempty"`
	ForceGitops     *bool   `json:"forceGitops,omitempty" yaml:"forceGitops,omitempty"`
}

// does Realm Exist ?
func (r *KeyCloakRealm) RealmExist(client gocloak.GoCloak, token string) bool {
	realms, err := r.GetRealm(client, token)
	return realms != nil && err == nil
}

// Is Gitops Realm ?
func (r *KeyCloakRealm) IsGitopsRealm(client gocloak.GoCloak, token string) (bool, error) {
	if !r.RealmExist(client, token) {
		return false, fmt.Errorf("realm %s does not exist", *r.Name)
	}
	if r.ForceGitops != nil && *r.ForceGitops {
		return true, nil
	}
	return r.isGitopsRealm(client, token)
}

// is gitops realm
func (r *KeyCloakRealm) isGitopsRealm(client gocloak.GoCloak, token string) (bool, error) {
	realmRep, err := r.GetRealm(client, token)
	if err != nil {
		return false, err
	}
	if realmRep.Attributes == nil {
		return false, nil
	}
	if val, ok := (*realmRep.Attributes)["GitOpsHandler"]; ok {
		return val == "true", nil
	}
	return false, nil
}

// get keyCloak Realm
func (r *KeyCloakRealm) GetRealm(client gocloak.GoCloak, token string) (*gocloak.RealmRepresentation, error) {
	ctx := context.Background()
	realms, err := client.GetRealm(ctx, token, *r.Name)
	if err != nil {
		return nil, err
	}
	return realms, nil
}

// Create realm if not exist
func (r *KeyCloakRealm) CreateRealm(client gocloak.GoCloak, token string) (string, bool, error) {
	if r.RealmExist(client, token) {
		return *r.Name, true, nil
	}
	return r.createRealm(client, token)
}

func (r *KeyCloakRealm) createRealm(client gocloak.GoCloak, token string) (string, bool, error) {
	ctx := context.Background()
	str, err := client.CreateRealm(ctx, token, r.ToRealmRepresentation())
	if err != nil {
		fmt.Println("CreateRealm failed:" + err.Error())
	}
	return str, err == nil, err
}

// Upate realm if exist
func (r *KeyCloakRealm) UpdateRealm(client gocloak.GoCloak, token string) error {
	if !r.RealmExist(client, token) {
		return fmt.Errorf("realm %s does not exist", *r.Name)
	}
	return r.updateRealm(client, token)
}

// Update Realm
func (r *KeyCloakRealm) updateRealm(client gocloak.GoCloak, token string) error {
	ctx := context.Background()
	err := client.UpdateRealm(ctx, token, r.ToRealmRepresentation())
	if err != nil {
		fmt.Println("UpdateRealm failed:" + err.Error())
	}
	return err
}

// to RealmRepresentation
func (r *KeyCloakRealm) ToRealmRepresentation() gocloak.RealmRepresentation {
	return gocloak.RealmRepresentation{
		Realm:           r.Name,
		DisplayNameHTML: r.DisplayNameHTML,
		DisplayName:     r.DisplayName,
		Enabled:         r.Enabled,
		Attributes:      &map[string]string{"GitOpsHandler": "true"},
	}
}

// check if need update
func (r *KeyCloakRealm) NeedUpdate(client gocloak.GoCloak, token string) (bool, error) {
	if !r.RealmExist(client, token) {
		return false, fmt.Errorf("realm %s does not exist", *r.Name)
	}
	return r.needUpdate(client, token)
}

func (r *KeyCloakRealm) needUpdate(client gocloak.GoCloak, token string) (bool, error) {
	realmRep := r.ToRealmRepresentation()
	distRealm, err := r.GetRealm(client, token)
	if err != nil {
		return false, err
	}
	if realmRep.DisplayNameHTML != nil && *realmRep.DisplayNameHTML != *distRealm.DisplayNameHTML {
		return true, nil
	}
	if realmRep.DisplayName != nil && *realmRep.DisplayName != *distRealm.DisplayName {
		return true, nil
	}
	if realmRep.Enabled != nil && *realmRep.Enabled != *distRealm.Enabled {
		return true, nil
	}

	return false, nil
}

// Delete realm if exist
func (r *KeyCloakRealm) DeleteRealm(client gocloak.GoCloak, token string) error {
	if !r.RealmExist(client, token) {
		return fmt.Errorf("realm %s does not exist", *r.Name)
	}
	return r.deleteRealm(client, token)
}

// Delete Realm
func (r *KeyCloakRealm) deleteRealm(client gocloak.GoCloak, token string) error {
	ctx := context.Background()
	err := client.DeleteRealm(ctx, token, *r.Name)
	return err
}
