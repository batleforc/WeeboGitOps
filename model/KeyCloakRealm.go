package model

import (
	"context"
	"fmt"

	"github.com/Nerzal/gocloak/v11"
)

type KeyCloakRealm struct {
	Name            string `json:"name"`
	DisplayName     string `json:"displayName,omitempty" yaml:"displayName,omitempty"`
	DisplayNameHTML string `json:"displayNameHTML,omitempty" yaml:"displayNameHTML,omitempty"`
	Enabled         bool   `json:"enabled,omitempty"`
}

// does Realm Exist ?
func (r *KeyCloakRealm) RealmExist(client gocloak.GoCloak, token string) bool {
	realms, err := r.GetRealm(client, token)
	return realms != nil && err == nil

}

// get keyCloak Realm
func (r *KeyCloakRealm) GetRealm(client gocloak.GoCloak, token string) (*gocloak.RealmRepresentation, error) {
	ctx := context.Background()
	realms, err := client.GetRealm(ctx, token, r.Name)
	if err != nil {
		return nil, err
	}
	return realms, nil
}

// Create realm if not exist
func (r *KeyCloakRealm) CreateRealm(client gocloak.GoCloak, token string) (string, bool, error) {
	if r.RealmExist(client, token) {
		return r.Name, true, nil
	}
	return r.createRealm(client, token)
}

func (r *KeyCloakRealm) createRealm(client gocloak.GoCloak, token string) (string, bool, error) {
	ctx := context.Background()
	str, err := client.CreateRealm(ctx, token, gocloak.RealmRepresentation{
		Realm:           gocloak.StringP(r.Name),
		DisplayNameHTML: gocloak.StringP(r.DisplayNameHTML),
		DisplayName:     gocloak.StringP(r.DisplayName),
		Enabled:         gocloak.BoolP(r.Enabled),
	})
	if err != nil {
		fmt.Println("CreateRealm failed:" + err.Error())
	}
	return str, err == nil, err
}

// Upate realm if exist
func (r *KeyCloakRealm) UpdateRealm(client gocloak.GoCloak, token string) error {
	if !r.RealmExist(client, token) {
		return fmt.Errorf("realm %s does not exist", r.Name)
	}
	return r.updateRealm(client, token)
}

// Update Realm
func (r *KeyCloakRealm) updateRealm(client gocloak.GoCloak, token string) error {
	ctx := context.Background()
	err := client.UpdateRealm(ctx, token, gocloak.RealmRepresentation{
		Realm:           gocloak.StringP(r.Name),
		DisplayNameHTML: gocloak.StringP(r.DisplayNameHTML),
		DisplayName:     gocloak.StringP(r.DisplayName),
		Enabled:         gocloak.BoolP(r.Enabled),
	})
	if err != nil {
		fmt.Println("UpdateRealm failed:" + err.Error())
	}
	return err
}
