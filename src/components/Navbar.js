import React, { PureComponent } from 'react';
import { Link } from 'dva/router';
import { Menu } from 'antd';
const { Item } = Menu;
const menuStyle = {
    background: '#2C3E50',
    lineHeight: 'inherit',
    border: 0,
};

export default class Navbar extends PureComponent {
    renderNavItems() {
        const { sections } = this.props;
        return sections
            .filter(({ link }) => !!link)
            .map(({ id, title, link }) => (
                <Item key={id}>
                    <Link to={link}>{ title }</Link>
                </Item>
            ));
    }
    render() {
        return (
            <div id="header">
                <div className="wrapper">
                    <Menu
                        mode="horizontal"
                        theme="dark"
                        style={menuStyle}
                        defaultSelectedKeys={this.props.selectedKeys}
                    >
                        { this.renderNavItems() }
                    </Menu>
                </div>
            </div>
        );
    }
}
