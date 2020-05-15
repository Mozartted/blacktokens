import {ApolloProvider} from '@apollo/react-hooks'
import {InMemoryCache} from "apollo-boost";
import ApolloClient from "apollo-client"
import {ApolloLink , concat} from "apollo-link"
import { createHttpLink } from 'apollo-link-http'
import * as React from 'react';
import Screen from './components/Screen';
import './styles/css/app.css';

// import logo from './logo.svg';

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_BLOCKTAP_API_TOKEN}`
    }
  })

  return forward(operation)
})

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAQPHL_API
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink)
})




const App = (props: any) => {
  // tslint:disable-next-line: no-console
  console.log(process.env.REACT_APP_GRAQPHL_API, process.env.REACT_APP_BLOCKTAP_API_TOKEN, client)

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Screen/>
      </ApolloProvider>
    </div>
  );
}

export default App;
