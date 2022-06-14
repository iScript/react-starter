import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Tooltip, Avatar } from "antd";
import React, { useState } from "react";
import { useAuth } from "@/providers/authProvider";
const { Header, Sider, Content, Footer } = Layout;

const AdminLayout = () => {
  let navigate = useNavigate();
  const { logout, user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="logo"
          style={{
            height: "38px",
            margin: "10px 16px",
            paddingLeft: "7px",
            overflow: "hidden",
          }}
        >
          <img
            src="https://raw.githubusercontent.com/iScript/r-admin/master/src/assets/logo.svg"
            alt="logo"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              height: "32px",
            }}
          />
          <h1
            style={{
              color: "white",
              display: "inline-block",
              fontSize: "20px",
              verticalAlign: "middle",
              margin: "0 0 0 12px",
              fontWeight: "600",
            }}
          >
            XM后台管理
          </h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              key: "/admin",
              icon: <UserOutlined />,
              label: "Dashboard",
            },
            {
              key: "/admin/user",
              icon: <VideoCameraOutlined />,
              label: "用户管理",
            },
            {
              key: "admin/sys",
              icon: <UploadOutlined />,
              label: "系统管理",
              children: [{ label: "配置", key: "/admin/test" }],
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            background: "#fff",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              style: {
                padding: "0 24px",
                fontSize: "18px",
                lineHeight: "64px",
                cursor: "pointer",
                transition: "color 0.3s",
              },
              onClick: () => setCollapsed(!collapsed),
            }
          )}

          <span style={{ float: "right", marginRight: "20px" }}>
            <Avatar size="small" className="avatar" src="" />
            <span>123</span>
            <button
              style={{ color: "blue" }}
              onClick={() => {
                logout();
              }}
            >
              退出
            </button>
          </span>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "white",
            minHeight: "650px",
          }}
        >
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
