import Head from '../Components/head'
import Header from '../Components/header'
import { Layout, Menu, Breadcrumb } from 'antd';
import Footer from '../Components/footer'

const DashboardLayout = ({ children, title = 'Dashboard', pageId="dashboardPage" }) => (
  <div id={pageId} className="dashboard-layout">
    <Head title={title} />
    <Layout>

      <Header />
      
      <Layout.Content style={{ padding: '5px 50px' }} >
        {children}
      </Layout.Content>
        
      <Footer />

    </Layout>
  </div>
)

export default DashboardLayout