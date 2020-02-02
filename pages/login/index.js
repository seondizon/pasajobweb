import React from 'react'
import './style.scss'
import { Form, Icon, Input, Button, Col, Row, Checkbox } from 'antd';
import Layout from '../../Layouts/register'
import FormItem from 'antd/lib/form/FormItem';

const Login = (props) => {

  const LoginForm = () => (

    <Form>

          <Row>
            <Col span={ 24 }>
              <FormItem
                name=""
                label="Email / Username"
                >
                  <Input placeholder="Username"/>
              </FormItem>
            </Col>
          </Row>
          
          <Row>
            <Col span={ 24 }>
              <FormItem
                name=""
                label="Password"
                >
                  <Input type="password" placeholder="Password"/>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button type="primary" block>
                Login
              </Button>
            </Col>
          </Row>

        </Form>

  )


  return (
    <Layout title="Login"  >
    <div className="login-form">
    { LoginForm() }
    </div>
  </Layout>
  )
  
}

export default Login
