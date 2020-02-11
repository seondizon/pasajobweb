import { useState } from 'react';
import Head from '../Components/head'
import { Layout } from 'antd';
import Loader from '../Components/global-loader';
import LayoutCtx from '../Context/layout';

const { Content } = Layout;

const RegisterLayout = ({ children, title = 'Pasa Job', pageId="registerPage" }) => {
   
  const [ layoutState, setLayoutState ] = useState({
    loader : false
  })

  return (
    <LayoutCtx.Provider value={{ layoutState, setLayoutState }} >
      <div id={pageId} className="register-layout">
        <img className="background-logo" src="/images/logo.png" />
        <Head title={title} />
        <Layout>
          <Content >
            {children}
          </Content>
        </Layout>
        <Loader active={ layoutState.loader } />
      </div>
    </LayoutCtx.Provider>
  )

}

export default RegisterLayout