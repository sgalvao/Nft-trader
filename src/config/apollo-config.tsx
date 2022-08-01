import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

type Props = {
  children: React.ReactNode;
};

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API,
  cache: new InMemoryCache(),
});

const ApolloContext = ({ children }: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloContext;
