package model

import (
	"context"
	"fmt"

	"github.com/Nerzal/gocloak/v11"
)

type Client struct {
	GlobalId                  *string   `json:"globalId,omitempty"`
	Id                        *string   `json:"id" yaml:"id"`
	ForceGitops               *bool     `json:"forceGitops,omitempty" yaml:"forceGitops,omitempty"`
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
		ID:                        c.GlobalId,
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
		Attributes:                &map[string]string{"GitOpsHandler": "true"},
	}
}

// ClientExist
func (c *Client) ClientExist(client gocloak.GoCloak, token, realm string) bool {
	_, err := c.GetClientsInRealm(client, token, realm)
	return err == nil
}

// Client is Gitops
func (c *Client) IsGitopsClient(client gocloak.GoCloak, token, realm string) (bool, error) {
	if !c.ClientExist(client, token, realm) {
		return false, fmt.Errorf("client %s does not exist", *c.Id)
	}
	if c.ForceGitops != nil && *c.ForceGitops {
		return true, nil
	}
	return c.isGitopsClient(client, token, realm)
}

// isGitopsClient
func (c *Client) isGitopsClient(client gocloak.GoCloak, token, realm string) (bool, error) {
	clientGo, err := c.GetClientsInRealm(client, token, realm)
	if err != nil {
		return false, err
	}
	if clientGo.Attributes == nil {
		return false, nil
	}
	if _, ok := (*clientGo.Attributes)["GitOpsHandler"]; ok {
		return true, nil
	}
	return false, nil
}

func (c *Client) GetClientsInRealm(client gocloak.GoCloak, token, realm string) (*gocloak.Client, error) {
	ctx := context.Background()
	return client.GetClient(ctx, token, realm, *c.Id)
}

// CreateClient
func (c *Client) CreateClient(client gocloak.GoCloak, token, realm string) error {
	if c.ClientExist(client, token, realm) {
		return fmt.Errorf("client %s already exists in %s", *c.Id, realm)
	}
	ctx := context.Background()
	_, err := client.CreateClient(ctx, token, realm, c.ToClientRepresentation())
	return err
}

// DeleteClient
func (c *Client) DeleteClient(client gocloak.GoCloak, token, realm string) error {
	if !c.ClientExist(client, token, realm) {
		return fmt.Errorf("client %s does not exist in %s", *c.Id, realm)
	}
	ctx := context.Background()
	return client.DeleteClient(ctx, token, realm, *c.Id)
}

// UpdateClient
func (c *Client) UpdateClient(client gocloak.GoCloak, token, realm string) error {
	if !c.ClientExist(client, token, realm) {
		return fmt.Errorf("client %s does not exist in %s", *c.Id, realm)
	}
	ctx := context.Background()
	return client.UpdateClient(ctx, token, realm, c.ToClientRepresentation())
}
