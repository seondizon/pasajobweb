import React, { useState, useContext } from 'react'
import { Form, Icon, Input, Button, Col, Row, Alert } from 'antd';
import Layout from '../Layouts/register'
import FormItem from 'antd/lib/form/FormItem';
import Link from 'next/link';
import gql from 'graphql-tag'
import { print } from 'graphql'
import config from '../utils/config'
import { useRouter } from 'next/router'
import _ from 'lodash'
import { setCookie } from 'nookies'
import { PageContext } from '../utils/context';

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

  const { pageState, setPageState } = useContext(PageContext)
  const [errors, setErrors] = useState([])
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();

      setPageState(os=>({ ...os, loading : true }))

      props.form.validateFields( async (error, values) => {
        if (!error) {
          const { username, password } = values
          requestAuth({ username, password  }).then(
            response => {
              const authObj = response.data.auth_login

              if( !_.isNull( authObj ) ){
                
                setCookie({}, 'authToken', authObj.token, {
                  maxAge: 365 * 24 * 60 * 60,
                  path: '/'
                })

                router.push( "/" )

              }else{
                // error login
                setErrors( response.errors )
              }

              setPageState(os=>({ ...os, loading : false }))

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
                <Link href="#"><a>Forgot password?</a></Link>
                <Link href="/register"><a>Create account.</a></Link>
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
