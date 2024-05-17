import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Typography, Input, Button } from '@douyinfe/semi-ui';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // 这里可以添加登录逻辑，比如调用API
        // 如果登录成功，导航到点名页面
        navigate("/callroll");
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography.Title level={2}>登录</Typography.Title>
            <Input
                value={username}
                placeholder="用户名"
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginBottom: '20px' }}
            />
            <Input
                value={password}
                placeholder="密码"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: '20px' }}
            />
            <Button onClick={handleLogin} type="primary" style={{ marginRight: '10px' }}>登录</Button>
            <Button onClick={() => navigate("/register")}>注册</Button>
        </div>
    );
};

export default Login;
