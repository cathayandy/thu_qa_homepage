import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { Row } from 'antd';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import MyCard from '../components/MyCard';
import sections from '../constants/sections';
const section = sections.find(({ id }) => id === 'data');

class Data extends PureComponent {
    renderCards() {
        const { cards } = section.description;
        const { history } = this.props;
        return cards.map(item => (
            <div className="card-wrapper" key={item.title}>
                <MyCard { ...item } history={history} />
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
                <Footer />
            </Fragment>
        );
    }
}

export default connect()(Data);
