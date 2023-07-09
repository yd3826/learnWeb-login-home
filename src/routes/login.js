import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Card} from 'antd';
import {useState} from "react";
export default function Login()
{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    function handleLog(){
        console.log('Username:',username);
        console.log('Password:',password);
    }
    return(
        <Card headStyle={{textAlign:'center'}} title={'Log'} style={{width:500}}>
            <Form
                name={'global_state'}
                labelCol="{span:18}"
                wrapperCol="{span:18}"
            >
                <Form.Item
                    name={'username'}
                    label={'username'}
                    rules={[
                        {
                            required:true,
                            message:'username is required!',
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className='site-form-item-icon' />} placheholder={'Username'} style={{width:300}}
                        value={username}
                        onChange={(e)=>{
                            setUsername(e.target.value);
                        }}
                    />
                </Form.Item>

                <Form.Item
                    label="password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password
                        prefix={<LockOutlined className='site-form-item-icon' />} type={'password'} placheholder={'Password'} style={{width:300}}
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className={'login-form-forgot'} href={''}>
                        Forgot password
                    </a>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className={'login-form-button'} onClick={handleLog}>
                        Log in
                    </Button>
                    Or <a href={''}>register now!</a>
                </Form.Item>
            </Form>
            <Card headStyle={{textAlign:'center'}} title={'实时显示'} style={{width:300}}>
                <p>username:{username}</p>
                <p>password:{password}</p>
            </Card>
        </Card>
    );
}
