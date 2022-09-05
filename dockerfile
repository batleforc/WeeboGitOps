FROM golang:1.17-alpine as build
WORKDIR /usr/local/go/src/batleforc/keycloakoperator
LABEL org.opencontainers.image.source = "https://github.com/batleforc/WeeboGitOps"

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY . ./

RUN go build -o /keycloak

##
## Deploy
##
FROM alpine:3.15.0 as deploy

WORKDIR /
COPY --from=build /keycloak /keycloak

ENTRYPOINT ["/keycloak"]