import Head from '../Components/head'
import Header from '../Components/header'
import { Layout } from 'antd';
import Footer from '../Components/footer'
import { useState } from 'react';

const DashboardLayout = ({ children, title = 'Dashboard', pageId="dashboardPage" }) => {

  return ( 
      <div id={pageId} className="dashboard-layout">
        <Head title={title} />
        <Layout>

          <Header />

          <Layout>
            <Layout.Sider>Sider</Layout.Sider>
            <Layout.Content style={{ padding: '5px 50px' }} >
              {children}
            </Layout.Content>
          </Layout> 

          <Footer />

        </Layout>
      </div> 
  )
}

export default DashboardLayout