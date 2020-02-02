import Head from 'next/head'
import Headbar from '../Components/headbar'
import { Layout, Menu, Breadcrumb } from 'antd';
import './dashboard.scss'

const { Header, Content, Footer } = Layout;

const DashboardLayout = ({ children, title = 'Dashboard' }) => (
  <div>
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Layout>

      <Header>
        <Headbar />
      </Header>
      
      <Content>
        {children}
      </Content>
      
      <Footer>
        <p>© Copyright 2020 PasaJob.com - All Rights Reserved</p>
      </Footer>

    </Layout>
  </div>
)

export default DashboardLayout