import React from 'react'
import { Form, Icon, Input, Button, Col, Row, Checkbox } from 'antd';
import Layout from '../Layouts/register'
import FormItem from 'antd/lib/form/FormItem';
import Link from 'next/link';
import axios from 'axios';
import gql from 'graphql-tag'
import { print } from 'graphql'
// import { request } from 'request'

const LOGIN = gql`query MyQuery {
	auth_login(object: {email: "johnmaclained@gmail.com", password: "123456"}) {
    token
 }
}`;

const Login = (props) => {

  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  
  // const uri = 'https://auth.pasajob.apolidata.com/graphql';
  // const apolloFetch = createApolloFetch({ uri });

  const handleSubmit = (e) => {
    e.preventDefault();
      props.form.validateFields( async (error, values) => {
        if (!error) {
          // console.log( "asdasd", values )



          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var graphql = JSON.stringify({
            query: "query MyQuery(  $username:String!, $password:String! ) {\n	auth_login(object: {email: $username, password: $password}) {\n    token\n }\n}",
            variables: {"username":"johnmaclained@gmail.com","password":"123456"}
          })
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: graphql,
            redirect: 'follow'
          };

          await fetch("https://auth.pasajob.apolidata.com/graphql", requestOptions)
            .then(response => console.log( response.text() ))
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


          // apolloFetch.use(({ request, options }, next) => {
          //   if (!options.headers) {
          //     options.headers = { 
          //       "Access-Control-Allow-Origin" : "*",
          //       "Content-Type" : "application/json"
          //     };  // Create the headers object if needed.
          //   }
          //   options.headers['authorization'] = 'created token';
          
          //   next();
          // });

          // apolloFetch({ LOGIN })
          //   .then(res => console.log("ret", res))
          //   .catch(err => console.log("fa", err))

          // await axios.post("https://auth.pasajob.apolidata.com/graphql", {
          //   headers : { "Access-Control-Allow-Origin" : "*" }
          // }, {
          //   query:print( LOGIN ),
          //   variables: {
          //     username: values.username,
          //     password: values.password
          //   }
          // })
          // .then(res => console.log("ret", res))
          // .catch(err => console.log("fa", err))


          

          
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
