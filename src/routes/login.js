import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Card} from 'antd';
import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {setUserInfo,changeUsername} from "../Redux/Action/user";
import {Link} from "react-router-dom";
import axios from "axios";
export default function Login()
{
    const username = useSelector(state=>state.username);
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const baseUrl = 'http://127.0.0.1:8000/user/';
    const getApi=()=>{
        let url = baseUrl+username;
        console.log(url);
        axios.get(url)
            .then(function (response){
                console.log(response.data);
                const result = response.data;
                dispatch(setUserInfo(result.username,result.userid,result.nickname));
            })
            .catch(function (error){
                console.log(error);
            })
    }
    return(
        <Card headStyle={{textAlign:'center'}} title={'Log'} style={{width:500,left:540}}>
            <Form
                name={'global_state'}
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
                            dispatch(changeUsername(e.target.value))
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
                    <Button type="primary" htmlType="submit" className={'login-form-button'} onClick={()=>getApi()}>
                        <Link to='/home' replace>
                            Log in
                        </Link>
                    </Button>
                    Or <a href={''}>register now!</a>
                </Form.Item>
            </Form>
            <Card headStyle={{textAlign:'center'}} title={'实时显示'} style={{width:300,left:80}}>
                <p>username:{username}</p>
                <p>password:{password}</p>
            </Card>
        </Card>
    );
}
