package model

import "github.com/Nerzal/gocloak/v11"

type ClientRoles struct {
	Id          *string `json:"id" yaml:"id"`
	Name        *string `json:"name" yaml:"name"`
	Description *string `json:"description,omitempty" yaml:"description,omitempty"`
}

// to client roles representation
func (c *ClientRoles) ToClientRolesRepresentation() gocloak.Role {
	return gocloak.Role{
		ID:          c.Id,
		Name:        c.Name,
		Description: c.Description,
		ClientRole:  gocloak.BoolP(true),
	}
}
