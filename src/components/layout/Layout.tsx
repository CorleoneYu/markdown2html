import React from 'react';
/* component */
import Main from '../main';

/* antd */
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default () => {
  return (
    <Layout>
      <Header className="header">
        <h1 style={{ color: 'white' }}>Markdown</h1>
      </Header>
      <Content
        style={{
          padding: '30px 20px',
          height: 'calc(100vh - 64px - 70px)'
        }}
      >
        <div className="site-layout-content">
          <Main />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Markdown To Html ©2020 Created by Yu
      </Footer>
    </Layout>
  );
};
