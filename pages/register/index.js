import React, { useState } from 'react'
import './style.scss'
import { Form, Icon, Input, Button, Col, Row, Checkbox } from 'antd';
import Layout from '../../Layouts/register'
import FormItem from 'antd/lib/form/FormItem';
import Link from 'next/link';

const Register = (props) => {

  const [state, setstate] = useState({
    step : 1
  })

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
                  <Input type="password" placeholder="Password"/>
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
    <Layout title="Registration"  >
    <div className="register-form">

    { state.step == 1 && renderStepOne() }
    { state.step == 2 && renderStep2() }

    </div>
  </Layout>
  )
  
}

export default Register
