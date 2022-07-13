import { gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { getApolloClient } from "./helper/apolloClient";

export interface GithubRepoBranch {
  repository: {
    name: string;
    refs: {
      edges: Array<{
        node: {
          name: string;
        };
      }>;
    };
  };
}

const gqlGetBranches = gql`
  {
    repository(name: "WeeboGitOps", owner: "batleforc") {
      name
      refs(refPrefix: "refs/heads/", first: 30) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

export default () => {
  const [subProjects, setSubProjects] = useState<Array<string>>([]);
  useEffect(() => {
    getApolloClient()
      .query<GithubRepoBranch>({ query: gqlGetBranches })
      .then((result) => {
        setSubProjects(
          result.data.repository.refs.edges.reduce((old, cur) => {
            if (
              cur.node.name.includes("/") &&
              !old.includes(cur.node.name.split("/")[0])
            ) {
              old.push(cur.node.name.split("/")[0]);
            }
            return old;
          }, [])
        );
      });
  }, []);
  return (
    <div className="flexContainer">
      {subProjects.map((val) => (
        <a
          href={`https://github.com/batleforc/WeeboGitOps/blob/${val}/Main/README.md`}
          target="_blank"
          rel="noopener noreferrer"
          key={val}
        >
          {val}
        </a>
      ))}
    </div>
  );
};
