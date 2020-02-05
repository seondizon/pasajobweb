import React, { useState } from 'react'
import { Form, Icon, Input, Button, Col, Row, Alert } from 'antd';
import Layout from '../Layouts/register'
import FormItem from 'antd/lib/form/FormItem';
import Link from 'next/link';
import gql from 'graphql-tag'
import { print } from 'graphql'
import config from '../utils/config'
import { useRouter } from 'next/router'
import _ from 'lodash'

const LOGIN = gql`query LoginQuery(  $username:String!, $password:String! ) {
	auth_login(object: {email:$username, password:$password} ) {
    token
 }
}`;

const requestAuth = (param) => {

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

const Login = (props) => {

  const [errors, setErrors] = useState([])
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  const router = useRouter()
  
  // const uri = 'https://auth.pasajob.apolidata.com/graphql';
  // const apolloFetch = createApolloFetch({ uri });

  const handleSubmit = (e) => {
    e.preventDefault();
      props.form.validateFields( async (error, values) => {
        if (!error) {
          const { username, password } = values
          requestAuth({ username, password  }).then(
            response => {
              const authObj = response.data.auth_login

              console.log(response)

              if( !_.isNull( authObj ) ){
                //storage
                document.cookie = `authToken=${authObj.token}; path=/`;
                router.push( "/" )
              }else{
                // error login
                setErrors( response.errors )
              }

            }
          )
        }
      });
  }

  const LoginForm = () => (

    <Form onSubmit={ handleSubmit } >

          <Row>
            <Col span={ 24 }>
              <FormItem
                name=""
                label="Email / Username"
                >


          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
            })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}


              </FormItem>
            </Col>
          </Row>
          
          <Row>
            <Col span={ 24 }>
              <FormItem
                name=""
                label="Password"
                >
                  
                  { getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"
                    />,
                  ) }

              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="user-help" >
                <Link href="#">Forgot password?</Link>
                <Link href="#">Create account.</Link>
              </div>
            </Col>
          </Row>

          <Row>
              <Col>
                { errors.map( (d, i) => <Alert key={i} message={d.message} type="error" showIcon />)}
            </Col>
          </Row>

          <Row style={{ marginTop : 10 }} >
            <Col>
              <Button type="primary" block htmlType="submit" >
                Login
              </Button>
            </Col>
          </Row>

        </Form>

  )


  return (
    
    <Layout title="Login" pageId="loginPage" >
    <div className="login-form">
      { LoginForm() }
    </div>
    </Layout>
  )
  
}

export default Form.create()(Login)
