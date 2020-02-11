import React, { useState, useContext } from 'react'
import { Form, Radio, Input, Button, Alert, Checkbox } from 'antd';
import Layout from '../Layouts/register'
import FormItem from 'antd/lib/form/FormItem';
import Link from 'next/link';
import gql from 'graphql-tag';
import { print } from 'graphql';
import config from '../utils/config'
import { PageContext } from '../utils/context';
import _ from 'lodash'
import { useRouter } from 'next/router';

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

const requestReg = (param) => {

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

const Register = (props) => {

  const { getFieldDecorator } = props.form;
  const { setPageState } = useContext( PageContext )
  const [ errors, setErrors ] = useState([])
  const router = useRouter()

  const compareToFirstPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Password did not match!');
    } else {
      callback();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // set loading on
    setPageState(os=>({ ...os, loading : true }))

    props.form.validateFields( async (error, values) => {
      
      const { first_name, last_name, email, password } = values

      requestReg({ first_name, last_name, email, password }).then(
        response => {
          
          // set loading off
          setPageState(os=>({ ...os, loading : false }))
          
          const authObj = response.data.auth_register

          if( !_.isNull( authObj ) ){
                
            /* TODO: success message alert */
            router.push( "/login" )

          }else{
            // error login
            setErrors( response.errors )
          }

        }
      )

    });
  }

  const dualSignUp = () => (
    

    <Form wrapperCol={{ span: 24 }} onSubmit={handleSubmit}>

      <div className="sign-up-type" >
        <Radio.Group defaultValue="seeker" buttonStyle="solid" size="Large" >
          <Radio.Button value="seeker">Job Seeker</Radio.Button>
          <Radio.Button value="recruiter">Job Recruiter</Radio.Button>
        </Radio.Group>
      </div>

      <Form.Item label="Firstname">
        {getFieldDecorator('first_name', {
          rules: [{ required: true, message: 'Please input your firstname!' }],
        })(<Input />)}
      </Form.Item>

      <Form.Item label="Lastname">
        {getFieldDecorator('last_name', {
          rules: [{ required: true, message: 'Please input your Lastname!' }],
        })(<Input />)}
      </Form.Item>

      <Form.Item label="Email Address">
        {getFieldDecorator('email', {
          rules: [
            { required: true, message: 'Please input your Email Address!' },
            { type : "email", message : 'Please input a valid Email Address format.' }
          ],
        })(<Input />)}
      </Form.Item>

      <Form.Item label="Password">
        {getFieldDecorator('password', {
          rules: [
            { required: true, message: 'Please input your Password!' },
            { min : 6, message : 'Password must be 6 characters minimum' }
          ],
        })(<Input type="password" />)}
      </Form.Item>

      <Form.Item label="Re-Enter Password">
        {getFieldDecorator('c_password', {
          rules: [
            { required: true, message: 'Please input your Password!' },
            { validator : compareToFirstPassword }
          ],
        })(<Input type="password" />)}
      </Form.Item>

      <Form.Item>

          { getFieldDecorator('agree', {
            valuePropName: 'checked',
            initialValue: false,
          })(
            <Checkbox>
            I agree to PasaJob's <a>Terms of use</a> and <a>Privacy Policy</a>.
            </Checkbox>
          )}

          { errors.map( (d, i) => <Alert key={i} message={d.message} type="error" showIcon />)}
          
          <Button type="primary" block htmlType="submit" style={{ margin : "15px 0px" }} >
            Register
          </Button>

          <div>
            Already have an account? <Link href="/login"><a>Sign in</a></Link>.
          </div>
      </Form.Item>



    </Form>             

  )


    return (

      <Layout title="Registration" pageId="registerPage" >
        <div className="register-form">
          { dualSignUp() } 
        </div>
      </Layout>

    )
  
}

export default Form.create()(Register)
