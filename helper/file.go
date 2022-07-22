package helper

import (
	"io/ioutil"
	"log"
)

func LoadFile(filePath string) []byte {
	yfiles, err := ioutil.ReadFile(filePath)
	if err != nil {
		log.Fatal("Error file couldn't be loaded :", err)
	}
	return yfiles
}
