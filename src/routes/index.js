import React from 'react';
import {Layout, Menu, Space} from 'antd';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 100,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 545,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight:100,
    color: '#fff',
    backgroundColor: '#7dbcea',
};

const IndexPage = () => {
    const IsLog = useSelector(state=>state.LogReducer.IsLog);
    const navigate = useNavigate();
    return(
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>

        <Layout>
            <Header style={headerStyle}>
                <h1>
                    Welcome to IndexPage!
                </h1>
            </Header>
            <Layout hasSider>
                <Content style={contentStyle}>
                    <p>
                        未登录请点击登录！

                    </p>
                    <p>
                        若已登录，可直接访问主页
                    </p>
                </Content>
                <Sider style={siderStyle}>
                    <Menu
                        onClick={(e)=>{
                            console.log(e.key,IsLog);
                            if(!IsLog)
                                navigate('login');
                            else navigate('/home');
                        }}
                        items={[
                            {
                                label:'登录',
                                key:'/login'
                            },
                            {
                                label: '主页',
                                key:'/home'
                            }
                        ]}
                        mode="inline"/>
                </Sider>
            </Layout>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    </Space>
);
}

export default IndexPage;