import Head from '../Components/head'
import { Layout } from 'antd';
import { PageContext } from '../utils/context';
import { useContext, useState } from 'react';
import Loader from '../Components/global-loader';

const { Content } = Layout;

const RegisterLayout = ({ children, title = 'Pasa Job', pageId="registerPage" }) => {

  const { pageState } = useContext(PageContext)

  return (
      <div id={pageId} className="register-layout">
        <img className="background-logo" src="/images/logo.png" />
        <Head title={title} />
        <Layout>
          <Content >
            {children}
          </Content>
        </Layout>
        <Loader active={ pageState.loading } />
      </div>
  )

}

export default RegisterLayout