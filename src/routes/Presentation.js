import React, { PureComponent, Fragment } from 'react';
import { Row, Col } from 'antd';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import sections from '../constants/sections';
const section = sections.find(({ id }) => id === 'home');

export default class Homepage extends PureComponent {
    renderCollaborators() {
        const { collaborators } = section.description;
        const items = collaborators.map((img, idx) => (
            <Col
                xs={12}
                sm={6}
                key={idx}
                id={`collaborator-${idx}`}
                className="col"
            >
                <div className="img-container">
                    <img src={img} />
                </div>
            </Col>
        ));
        const columns = [];
        for (let i = 0; i < items.length; i += 4) {
            columns.push(items.slice(i, i + 4));
        }
        return columns.map((items, idx) =>
            <Row key={idx} className="row">{ items }</Row>
        );
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
                    <div className="wrapper">
                        <Row>
                            <Col span={12}>
                                <h5>{ section.description.title }</h5>
                                <p>{ section.description.content }</p>
                            </Col>
                            <Col span={12}>
                                { this.renderCollaborators() }
                            </Col>
                        </Row>
                    </div>
                </div>
            </Fragment>
        );
    }
}
