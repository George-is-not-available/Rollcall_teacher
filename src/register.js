import React, { useState } from 'react';
import { Typography, Divider, Button, Input } from '@douyinfe/semi-ui';
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    
    const handleRegister = () => {
        if (password !== confirmPassword) {
            setErrorMsg('两次输入的密码不一致');
            return;
        }
        // 保存密码到本地存储
        localStorage.setItem('user', JSON.stringify({ username, password }));
        // 注册成功后导航到登录页面
        navigate("/login");
    };

    return (
        <div>
            <Typography.Title level={2}>注册</Typography.Title>
            <Input
                value={username}
                placeholder="用户名"
                onChange={(e) => setUsername(e)}
                style={{ marginBottom: '20px' }}
            />
            <Input
                value={password}
                placeholder="密码"
                type="password"
                onChange={(e) => setPassword(e)}
                style={{ marginBottom: '20px' }}
            />
            <Input
                value={confirmPassword}
                placeholder="确认密码"
                type="password"
                onChange={(e) => setConfirmPassword(e)}
                style={{ marginBottom: '20px' }}
            />
            <Button onClick={handleRegister} style={{ marginRight: '10px' }}>注册</Button>
            <Button onClick={() => navigate("/login")}>返回登陆界面</Button>
            {errorMsg && <Typography.Text type="danger">{errorMsg}</Typography.Text>}
            <Divider />
        </div>
    );
}

export default Register;
