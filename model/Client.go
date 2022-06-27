package model

import (
	"context"

	"github.com/Nerzal/gocloak/v11"
)

type Client struct {
	Id                        *string   `json:"id" yaml:"id"`
	Name                      *string   `json:"name,omitempty" yaml:"name,omitempty"`
	Description               *string   `json:"description,omitempty" yaml:"description,omitempty"`
	Enabled                   *bool     `json:"enabled,omitempty" yaml:"enabled,omitempty"`
	StandardFlowEnabled       *bool     `json:"standardFlowEnabled,omitempty" yaml:"standardFlowEnabled,omitempty"`
	ImplicitFlowEnabled       *bool     `json:"implicitFlowEnabled,omitempty" yaml:"implicitFlowEnabled,omitempty"`
	DirectAccessGrantsEnabled *bool     `json:"directAccessGrants,omitempty" yaml:"directAccessGrants,omitempty"`
	RootUrl                   *string   `json:"rootUrl,omitempty" yaml:"rootUrl,omitempty"`
	ValidRedirectUris         *[]string `json:"validRedirectUris,omitempty" yaml:"validRedirectUris,omitempty"`
	WebOrigins                *[]string `json:"webOrigins,omitempty" yaml:"webOrigins,omitempty"`
	DefaultRoles              *[]string `json:"defaultRoles,omitempty" yaml:"defaultRoles,omitempty"`
}

func (c *Client) ToClientRepresentation() gocloak.Client {
	return gocloak.Client{
		ClientID:                  c.Id,
		Name:                      c.Name,
		Description:               c.Description,
		Enabled:                   c.Enabled,
		StandardFlowEnabled:       c.StandardFlowEnabled,
		ImplicitFlowEnabled:       c.ImplicitFlowEnabled,
		DirectAccessGrantsEnabled: c.DirectAccessGrantsEnabled,
		RootURL:                   c.RootUrl,
		RedirectURIs:              c.ValidRedirectUris,
		WebOrigins:                c.WebOrigins,
	}
}

func (c *Client) GetClientsInRealm(client gocloak.GoCloak, token, realm string) (*gocloak.Client, error) {
	ctx := context.Background()
	return client.GetClient(ctx, token, realm, *c.Id)
}
