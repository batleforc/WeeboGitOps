package main

import (
	"batleforc/keycloakoperator/model"
	"context"
	"fmt"
	"io/ioutil"
	"log"

	"github.com/Nerzal/gocloak/v11"
	"gopkg.in/yaml.v3"
)

func main() {
	yfiles, err := ioutil.ReadFile("def.yml")
	if err != nil {
		log.Fatal(err)
	}
	data := make(map[string]model.KeyCloakRealm)
	err2 := yaml.Unmarshal(yfiles, &data)
	if err2 != nil {
		log.Fatal(err2)
	}
	for k, v := range data {
		fmt.Printf("%s -> %d\n", k, v)
	}
}

func KeyCloakTest() {
	client := gocloak.NewClient("http://localhost:8080")
	ctx := context.Background()
	token, err := client.LoginAdmin(ctx, "admin", "admin", "admin-realm")
	if err != nil {
		panic("Login failed:" + err.Error())
	}
	realm := gocloak.RealmRepresentation{
		Realm:           gocloak.StringP("test"),
		DisplayNameHTML: gocloak.StringP("Test Realm"),
	}
	client.CreateRealm(ctx, token.AccessToken, realm)
}
