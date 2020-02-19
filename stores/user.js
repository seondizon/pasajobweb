import gql from 'graphql-tag'
import { print } from 'graphql'
import config from '../utils/config'

const LOGIN = gql`query LoginQuery(  $username:String!, $password:String! ) {
	auth_login(object: {email:$username, password:$password} ) {
    token
    user_info {
        id
        first_name
        last_name
        user_type
        is_social_account
        email
        created_at
        updated_at
    }
 }
}`;

const REGISTER = gql`mutation RegisterQuery( $first_name:String!, $last_name:String!, $email:String!, $password:String!, ) {
    auth_register(object: {
      email: $email, 
      first_name: $first_name, 
      last_name: $last_name, 
      password: $password
    }) {
      email
    }
  } `;

export const requestAuth = (param) => {

    const  myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const  graphql = JSON.stringify({
      query: print( LOGIN ),
      variables: {
        "username":param.username,
        "password":param.password
      }
    })
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: graphql,
      redirect: 'follow'
    };
  
    return fetch( config.AUTH_ENDPOINT , requestOptions)
      .then((response) => response.json())
      .then((responseData) => responseData)
      .catch(error => console.log('error', error));
    
  }
  
  export const requestReg = (param) => {
  
    const  myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const  graphql = JSON.stringify({
      query: print( REGISTER ),
      variables: param
    })
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: graphql,
      redirect: 'follow'
    };
  
    return fetch( config.AUTH_ENDPOINT , requestOptions)
      .then((response) => response.json())
      .then((responseData) => responseData)
      .catch(error => console.log('error', error));
    
  }