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
	FILEPATH = helper.GetEnvDefault("FILEPATH", "./def.yml")
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
		errProcessRealm := v.ProcessRealmGitops(client, token.AccessToken)
		if errProcessRealm != nil {
			log.Print(errProcessRealm)
			continue
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
