import React from 'react';
import { Menu } from "antd";
import Icon, {
    ShoppingCartOutlined
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const NavIcon = () => (
    <img src={`${process.env.PUBLIC_URL}/microtone-logo.png`} alt="MT" className="logo" />
);

export default class AppMenu extends React.Component {
    render() {
        return (
            <Menu theme="dark" mode="inline">
                <Menu.Item key="0" icon={<Icon component={NavIcon} disabled />}>
                    Dashboard
                </Menu.Item>
                <Menu.Item key="1" icon={<ShoppingCartOutlined />}>
                    <NavLink to="/products">Products</NavLink>
                </Menu.Item>
            </Menu>
        )
    }
}