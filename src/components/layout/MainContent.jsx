import React, { useState } from 'react';
import { Layout } from 'antd';

import SideNav from './SideNav';
import HeaderNav from './HeaderNav';
import Content from './ContentBody';
import Footer from './Footer';

const MainContent = () => {
    const [collapsed, setCollapsed] = useState(false);

    const setToggle = () => setCollapsed(!collapsed);

    return (
        <Layout>
            <SideNav collapsed={collapsed} />
            <Layout className="site-layout">
                <HeaderNav collapsed={collapsed} setToggle={setToggle} />
                <Content />
                <Footer />
            </Layout>
        </Layout>
    )
};

export default MainContent;