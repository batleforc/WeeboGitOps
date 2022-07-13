import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import siteConfig from "@generated/docusaurus.config";

var client: ApolloClient<any>;

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${siteConfig.customFields.GITHUB_TOKEN}`,
    },
  };
});

export const getApolloClient = () => {
  if (client === undefined) {
    client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }
  return client;
};
