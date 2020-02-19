import React from 'react'
import { Card } from 'antd';
import Layout from '../Layouts/dashboard'
import privateRoute from '../Components/hoc/privateRoute'
import JobPost from '../Components/dashboard/jobposts'
import MostAppliedJob from '../Components/dashboard/mostAppliedJobs';
import ShortlistedApplicants from '../Components/dashboard/shorlisted';
import RecentApplicants from '../Components/dashboard/recentApplicants';
import Schedule from '../Components/dashboard/schedule';

const Dashboard = (props) => {

  return (
    <Layout title="Dashboard" pageId="dashboardPage"  >

        <div className="dash-content" >
          <Card className="dash-containers job-post" title="Job Posts" >
            <JobPost />
            <MostAppliedJob />
          </Card>
          
          <Card className="dash-containers candidate" title="Shortlisted Candidates" >
            <ShortlistedApplicants />
            <RecentApplicants />
          </Card>

          <Card className="dash-containers schedule" title="Schedule" >
            <Schedule />
          </Card>
        </div>

    </Layout>
  )
  
}

export default privateRoute(Dashboard)
