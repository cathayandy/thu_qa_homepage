import React, { PureComponent, Fragment } from 'react';
import { Link } from 'dva/router';
import { Row, Col } from 'antd';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import MyCard from '../components/MyCard';
import sections from '../constants/sections';
const section = sections.find(({ id }) => id === 'algorithm');

export default class Homepage extends PureComponent {
    renderItems(items) {
        return items.map(({ title, content, link }, idx) => {
            let className = 'item';
            if (idx === items.length - 1) {
                className += ' last';
            }
            return (
                <div className={className} key={title}>
                    <Link to={link}><h5>{ title }</h5></Link>
                    <p>{ content }</p>
                </div>
            )
        });
    }
    renderBlocks() {
        const { blocks } = section.description;
        return blocks.map(({ title, items }, idx) => {
            let className = 'block';
            if (idx === blocks.length - 1) {
                className += ' last';
            }
            return (
                <div className={className} key={title}>
                    <h4>{ title }</h4>
                    <hr />
                    { this.renderItems(items) }
                </div>
            );
        });
    }
    render() {
        return (
            <Fragment>
                <Navbar
                    sections={sections}
                    selectedKeys={['algorithm']}
                />
                <div id="algorithm" className="main">
                    <Jumbotron
                        { ...section.jumbotron }
                    />
                    <div className="description wrapper">
                        { this.renderBlocks() }
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
