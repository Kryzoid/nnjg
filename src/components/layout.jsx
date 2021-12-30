import React from 'react';
import { Layout as AntLayout, Typography } from 'antd'
import { Link, Outlet } from 'react-router-dom';
import ErrorBoundary from './error-boundary';
import Breadcrumbs from './breadcrumbs';
import logo from '../logo.png';
import layout from './layout.css';

const { Header, Content, Footer } = AntLayout;

const Layout = () => (
  <AntLayout style={{ minHeight: '100%' }}>
    <Header style={{ backgroundColor: '#25526e' }}>
      <Link to="/">
        <img src={logo} style={{ float: 'left', maxHeight: '100%', transform: 'translateX(-72px)' }} />
      </Link>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <ErrorBoundary>
        <Breadcrumbs />
        <Outlet />
      </ErrorBoundary>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Read-only restoration by <a href="https://steamcommunity.com/id/kryzoid" target="_blank">Kryzoid</a>. Forum backup provided by <a href="https://steamcommunity.com/id/tunasuit" target="_blank">Tunasuit</a>.
      <Typography.Paragraph type="secondary">Forum backup created on Nov 21, 2011.</Typography.Paragraph>
    </Footer>
  </AntLayout>
);

export default Layout;
