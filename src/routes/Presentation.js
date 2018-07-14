import React, { PureComponent, Fragment } from 'react';
import { Row, Col } from 'antd';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import MyCard from '../components/MyCard';
import sections from '../constants/sections';
const section = sections.find(({ id }) => id === 'presentation');

export default class Homepage extends PureComponent {
    renderCards() {
        const { cards } = section.description;
        return cards.map(item => (
            <Col className="col" span={8} key={item.title}>
                <MyCard { ...item } />
            </Col>
        ));
    }
    render() {
        return (
            <Fragment>
                <Navbar
                    sections={sections}
                    selectedKeys={['presentation']}
                />
                <div id="presentation" className="main">
                    <Jumbotron
                        { ...section.jumbotron }
                    />
                    <div className="description wrapper">
                        <Row>
                            { this.renderCards() }
                        </Row>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
