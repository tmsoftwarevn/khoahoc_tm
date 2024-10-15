"use client";
import React, { useState } from 'react';
import {
  DesktopOutlined,

} from '@ant-design/icons';
import { Dropdown, Layout, Menu, Space, theme } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const { Header, Content, Footer, Sider } = Layout;
import "./layoutAdmin.scss";
import withAuth from '@/components/with auth/WithAuth';
function getItem(label: any, key: any, icon: any, children: any) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Quản lý ảnh', 'sub3', <DesktopOutlined />, [
    getItem(<Link href="/admin/slide">Slide</Link>, '1', <DesktopOutlined />, ''),
    getItem(<Link href="/admin/gallery">Gallery</Link>, '1232', <DesktopOutlined />, ''),

  ]),


  getItem(<Link href="/admin/gioi-thieu">Quản lý giới thiệu</Link>, '311', <DesktopOutlined />, ''),
  // getItem(<Link href="/admin/gioi-thieu-shop">Quản lý mô tả shop</Link>, '31122', <DesktopOutlined />, ''),

  getItem(<Link href="/admin/bai-viet">Quản lý bài viết</Link>, '2', <DesktopOutlined />, ''),
  

  getItem(<Link href="/admin/the-loai">Quản lý danh mục</Link>, '3', <DesktopOutlined />, ''),
  getItem(<Link href="/admin/lien-he">Quản lý liên hệ</Link>, '355', <DesktopOutlined />, ''),
  getItem(<Link href="/admin/thong-tin">Quản lý thông tin</Link>, '35545', <DesktopOutlined />, ''),

  getItem('Quản lý sản phẩm', 'sub34', <DesktopOutlined />, [
    getItem(<Link href="/admin/product">Sản phẩm thường</Link>, '9', <DesktopOutlined />, ''),
    getItem(<Link href="/admin/combo">Sản phẩm combo - quà tặng</Link>, '999', <DesktopOutlined />, ''),
    getItem(<Link href="/admin/qua-tang">Sản phẩm quà tặng</Link>, '4569', <DesktopOutlined />, ''),


  ]),



  getItem(<Link href="/admin/order">Quản lý đơn hàng</Link>, '9435', <DesktopOutlined />, ''),



];

const AccountAdmin = () => {

  const route = useRouter();

  const handleLogout = async () => {
    // window.localStorage.clear();
    localStorage.clear();
    route.push('/')
  };

  const items = [
    {
      label: (
        <p onClick={() => route.push("/")}>
          Trang chủ
        </p>
      ),
      key: "tt",
    },
    {
      label: (
        <p onClick={() => route.push("/change-pass")}>
          Đổi mật khẩu
        </p>
      ),
      key: "home",
    },
    {
      label: <p onClick={() => handleLogout()}>Đăng xuất</p>,
      key: "logout",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Space direction="vertical">
        <Space wrap>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
          >
            <div className="admin">TM Book</div>
          </Dropdown>
        </Space>
      </Space>
    </div>
  );
};

const App = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',

      }}

    >
      <Sider

        width={250} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          // style={{ backgroundColor: 'gray' }}
          theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          hidden
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content

        >
          <AccountAdmin />
          <div
            style={{
              padding: 24,
              minHeight: 500,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onClick={() => window.open("https://tmsoftware.vn/", "_blank")}
        >
          ©{new Date().getFullYear()} Design by TM Software
        </Footer>
      </Layout>
    </Layout>
  );
};

export default withAuth(App)