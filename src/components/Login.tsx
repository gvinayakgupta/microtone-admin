import React, { useContext, useState } from "react";
import { InfoContext } from "../context/InfoContext";
import { Button, Input, Space } from "antd";
import {
    EyeInvisibleOutlined,
    EyeTwoTone, LoginOutlined
} from '@ant-design/icons';

export default function LoginPage() {
    const { setLogin, setAuth } = useContext(InfoContext);
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const CheckPass = async () => {
        // fetch call for username & password

        const sendData = async () => {
        };

        sendData().then((data) => {
            console.log(data);
                setLogin(true);
                setAuth(`Token`);
                localStorage.setItem("login", "true");
                localStorage.setItem("authtoken", `Token `)
        })
    }

    return (
        <div className="login">
            <Space direction="vertical">
                <h2>Microtone Admin</h2>
                <Input
                    placeholder="Username"
                    value={user}
                    onChange={(e) => { setUser(e.target.value) }}
                />
                <Input.Password
                    placeholder="Password"
                    value={pass}
                    onChange={(e) => { setPass(e.target.value) }}
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <Button onClick={CheckPass} icon={<LoginOutlined />} type="primary">{"Login"}</Button>
            </Space>
        </div>
    )
};