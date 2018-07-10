import React, { PureComponent, Fragment } from 'react';
import { Row, Col } from 'antd';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import MyCard from '../components/MyCard';
import sections from '../constants/sections';
const section = sections.find(({ id }) => id === 'data');

export default class Homepage extends PureComponent {
    renderCards() {
        const { cards } = section.description;
        return cards.map(item => (
            <div className="card-wrapper" key={item.title}>
                <MyCard { ...item } />
            </div>
        ));
    }
    render() {
        return (
            <Fragment>
                <Navbar
                    sections={sections}
                    selectedKeys={['data']}
                />
                <div id="data" className="main">
                    <Jumbotron
                        { ...section.jumbotron }
                    />
                    <div className="description wrapper">
                        <Row>
                            { this.renderCards() }
                        </Row>
                    </div>
                </div>
            </Fragment>
        );
    }
}
