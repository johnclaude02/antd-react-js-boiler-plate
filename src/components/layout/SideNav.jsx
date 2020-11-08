import React from 'react';
import { Layout, Menu } from 'antd';
import {
    DashboardOutlined, 
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;
const { Sider } = Layout;

const SideNav = ({ collapsed }) => {
    return (
        <Sider
            className="side-nav"
            trigger={null}
            collapsible
            width="240"
            breakpoint="sm"
            collapsed={collapsed}
        >
            <div className="logo" />
            <Menu 
                theme="dark" 
                mode="inline" 
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1" icon={<DashboardOutlined />}>
                    Dashboard
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
                    <Menu.Item key="1.1">Login</Menu.Item>
                    <Menu.Item key="2.1">Register</Menu.Item>
                </SubMenu>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                </Menu.Item>
            </Menu>
        </Sider>
    )
};

export default SideNav;