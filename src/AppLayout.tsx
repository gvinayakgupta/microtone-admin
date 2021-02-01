import React from "react";
import { Button, Layout } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { BrowserRouter as Router } from "react-router-dom";
import { InfoContext } from "./context/InfoContext";
import AppMenu from "./components/AppMenu";
import Routes from "./components/Routes";


const { Header, Sider, Content } = Layout;

export default class AppLayout extends React.Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ position: 'sticky', height: '100vh', top: 0, left: 0 }}>
            <AppMenu />
          </Sider>
          <Layout className="site-layout">
            <Header className={this.state.collapsed ? "site-layout-background header-collapsed" : "site-layout-background header"}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                  style: { fontSize: 24 }
                }
              )}
              <InfoContext.Consumer>{appContext => (
                <Button type="primary" icon={<LogoutOutlined />} onClick={() => { localStorage.clear(); appContext.setLogin(false); appContext.setAuth('Null') }}>{this.state.collapsed || window.innerWidth > 424 ? 'Logout' : ''}</Button>
              )}</InfoContext.Consumer>
            </Header>
            <Content className="site-layout-background site-content" >
              <Routes />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
