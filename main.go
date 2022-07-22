package main

import (
	"batleforc/keycloakoperator/helper"
	"batleforc/keycloakoperator/model"
	"context"
	"crypto/tls"
	"fmt"
	"log"

	"github.com/Nerzal/gocloak/v11"
	"gopkg.in/yaml.v3"
)

var (
	URL      = helper.GetEnvDefault("URL", "http://localhost:8080")
	USER     = helper.GetEnvDefault("USER", "admin")
	PASSWORD = helper.GetEnvDefault("PASSWORD", "admin")
	REALM    = helper.GetEnvDefault("REALM", "master")
	FILEPATH = helper.GetEnvDefault("FILEPATH", "./def.yaml")
	SKIPTLS  = helper.GetEnvDefault("SKIPTLS", "true")
)

func main() {
	files := helper.LoadFile(FILEPATH)
	data := make(map[string]model.Realm)
	err2 := yaml.Unmarshal(files, &data)
	if err2 != nil {
		log.Fatal(err2)
	}
	client := gocloak.NewClient(URL, gocloak.SetAuthAdminRealms("admin/realms"), gocloak.SetAuthRealms("realms"))
	restyClient := client.RestyClient()
	restyClient.SetTLSClientConfig(&tls.Config{InsecureSkipVerify: SKIPTLS == "true"})
	ctx := context.Background()
	token, err := client.LoginAdmin(ctx, USER, PASSWORD, REALM)
	if err != nil {
		panic("Login failed:" + err.Error())
	}
	for _, v := range data {
		if !v.RealmExist(client, token.AccessToken) {
			name, success, err3 := v.CreateRealm(client, token.AccessToken)
			if success {
				log.Printf("%s => Has been succesfuly created or exist \n", name)
			} else {
				log.Printf("%s => %s \n", name, err3)
			}
		} else {
			ok, err := v.IsGitopsRealm(client, token.AccessToken)
			if err != nil {
				log.Printf("%s => %s \n", *v.Name, err)
			}
			if ok {
				needUpdate, errNeedUpdate := v.NeedUpdate(client, token.AccessToken)
				if errNeedUpdate != nil {
					log.Printf("%s => Error determining if need update : %s \n", *v.Name, errNeedUpdate)
				} else {
					if needUpdate {
						err3 := v.UpdateRealm(client, token.AccessToken)
						if err3 == nil {
							log.Printf("%s => Has been succesfuly updated \n", *v.Name)
						} else {
							log.Printf("%s => %s \n", *v.Name, err3)
						}
					} else {
						log.Printf("%s => No need to update \n", *v.Name)
					}
				}

			} else {
				log.Printf("%s => is not a gitops handled realm \n", *v.Name)
			}

			// Test fetching clients and roles
			clients, errGetClients := v.GetAllClients(client, token.AccessToken)
			if errGetClients != nil {
				log.Printf("%s => %s \n", *v.Name, errGetClients)
			} else {
				for _, clien := range clients {
					log.Printf("%s => %s : %s \n", *v.Name, *clien.ClientID, *clien.ID)
					if val, ok := (*clien.Attributes)["GitOpsHandler"]; ok {
						if val == "true" {
							log.Printf("%s : %s => Is a GitOps client \n", *v.Name, *clien.ClientID)
						} else {
							log.Printf("%s : %s => Is not a GitOps client \n", *v.Name, *clien.ClientID)
						}
					}
					if clien.ClientID != nil && *clien.ClientID == "sonarqube" {
						role, errGetRole := client.GetClientRoles(ctx, token.AccessToken, *v.Name, *clien.ID, gocloak.GetRoleParams{})
						if errGetRole != nil {
							log.Printf("%s => %s \n", *v.Name, errGetRole)
						} else {
							for _, r := range role {
								log.Printf("%s => %s \n", *v.Name, *r.Name)
							}
						}
					}
				}
			}
		}
	}
	realms, err := client.GetRealms(ctx, token.AccessToken)
	if err != nil {
		panic("GetRealm failed:" + err.Error())
	}
	for _, realm := range realms {
		fmt.Printf("%s\n", *realm.Realm)
	}
}
