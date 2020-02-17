import React from 'react'
import { Card } from 'antd';
import Layout from '../Layouts/dashboard'
import privateRoute from '../Components/hoc/privateRoute'
const Dashboard = (props) => {

  return (
    <Layout title="Job Posts" pageId="jobpostPage"  >

        <div className="jobpost-content" >
          
          <Card className="dash-containers job-post" title="Job Posts" >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          
          <Card className="dash-containers candidate" title="Shortlisted Candidates" >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>

          <Card className="dash-containers schedule" title="Schedule" >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          
        </div>

    </Layout>
  )
  
}

export default privateRoute(Dashboard)
