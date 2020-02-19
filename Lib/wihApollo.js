import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import config from '../utils/config'

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: config.HASURA_GRAPHQL,
      cache: new InMemoryCache().restore(initialState || {})
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);


/** 
 * Apollo HOC 
 * https://github.com/lfades/next-with-apollo 
 */
