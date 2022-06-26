package model

type KeyCloakRealm struct {
	Name            string `json:"name"`
	DisplayName     string `json:"displayName,omitempty" yaml:"displayName,omitempty"`
	DisplayNameHTML string `json:"displayNameHTML,omitempty" yaml:"displayNameHTML,omitempty"`
	Enabled         bool   `json:"enabled,omitempty"`
}
