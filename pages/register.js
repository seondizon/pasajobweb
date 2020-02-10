import React, { useState } from 'react'
import { Form, Radio, Input, Button, Col, Row, Checkbox } from 'antd';
import Layout from '../Layouts/register'
import FormItem from 'antd/lib/form/FormItem';
import Link from 'next/link';

const Register = (props) => {

  const { getFieldDecorator } = props.form;
  const [state, setstate] = useState({
    step : 1
  })

  const handleSubmit = () => {
    
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
        {getFieldDecorator('firstname', {
          rules: [{ required: true, message: 'Please input your firstname!' }],
        })(<Input />)}
      </Form.Item>

      <Form.Item label="Lastname">
        {getFieldDecorator('lastname', {
          rules: [{ required: true, message: 'Please input your Lastname!' }],
        })(<Input />)}
      </Form.Item>

      <Form.Item label="Email Address">
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Please input your Email Address!' }],
        })(<Input type="email" />)}
      </Form.Item>

      <Form.Item label="Password">
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(<Input type="password" />)}
      </Form.Item>

      <Form.Item label="Re-Enter Password">
        {getFieldDecorator('c_password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(<Input type="password" />)}
      </Form.Item>

      <Form.Item>

          { getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>
            I agree to PasaJob's <a>Terms of use</a> and <a>Privacy Policy</a>.
            </Checkbox>
          )}


          <Button type="primary" style={{ margin : "15px 0px" }} block onClick={ () => setstate({ step : 2 }) }>
            Register
          </Button>

          <div>
            Already have an account? <Link href="/login"><a>Sign in</a></Link>.
          </div>
      </Form.Item>



    </Form>             

  )

  const renderStepOne = () => (

    <Form>
          <Row>
            <Col span={ 12 } style={{ paddingRight : '5px' }} >
              <FormItem
                name=""
                label="Contact Person"
              >
                <Input placeholder="Firstname"/>
              </FormItem>
            </Col>
            <Col span={ 12 } style={{ paddingLeft : '5px' }}>
              <FormItem
              name=""
              label="None"
              className="no-label"
              >
                <Input placeholder="Lastname"/>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span={ 24 } >
              <FormItem
                name=""
                label="Company"
                >
                  <Input placeholder="Company"/>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span={ 24 }>
              <FormItem
                name=""
                label="Contact Number"
                >
                  <Input placeholder="Contact Number"/>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span={ 24 }>
              <FormItem
                name=""
                label="Email"
                >
                  <Input placeholder="Email"/>
              </FormItem>
            </Col>
          </Row>
          
          <Row>
            <Col span={ 24 }>
              <FormItem
                name=""
                label="Password"
                >
                  <Input type="password" placeholder="Password"/>Login
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span={ 24 }>
              <FormItem
                name=""
                label=""
                style={{ margin : '10px 0px' }}
                >
                  <Checkbox>
                    I agree to PasaJob's <a>Terms of use</a> and <a>Privacy Policy</a>.
                  </Checkbox>
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button type="primary" block onClick={ () => setstate({ step : 2 }) }>
                Register
              </Button>
            </Col>
          </Row>

          <Row>
            <Col style={{ margin : '15px 0px' }} >
              Already have an account? <Link href="/login"><a>Sign in</a></Link>.
            </Col>
          </Row>

        </Form>

  )

  const renderStep2 = () => (

    <Form>
    
      <Row>
        <Col>
          <div>
            <p>Thank you for registering! Before you can start posting job ads, we first need to validate you account and your company. Kindly do the following:</p>
            <p>1) Validate you account using the validation link that we sent to email@website.com.</p>
            <p>2) Upload a scanned copy of your company DTI or SEC registration. Once you have uploaded either of the required documents, you should then be able to post job ads within 24 hours after your submission.</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="fileUploader" >
            <b>Drag file here or click upload</b>
          </div>
          <div style={{ margin : '10px 0px' }}>
            <Button type="primary" block> Submit </Button>
          </div>
        </Col>
      </Row>

    </Form>

  )

  return (

    <Layout title="Registration" pageId="registerPage" >
      
      <div className="register-form">

        {/* { state.step == 1 && renderStepOne() } */}
        {/* { state.step == 2 && renderStep2() } */}

        { dualSignUp() } 
        

      </div>
      
    </Layout>

  )
  
}

export default Form.create()(Register)
