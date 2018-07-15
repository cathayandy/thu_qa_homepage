import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import sections from '../constants/sections';

class Demo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subtitle: '',
            src: '',
        };
    }
    getData() {
        const { pathname } = this.props.location;
        const url = `/api${pathname}`;
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({ ...data }))
            .catch(err => console.error(err));
    }
    componentDidUpdate(prevProps) {
        const prev = prevProps.location.pathname;
        const cur = this.props.location.pathname;
        if (cur !== prev) {
            this.getData();
        }
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        const { title, subtitle, src } = this.state;
        return (
            <Fragment>
                <Navbar
                    sections={sections}
                />
                <div id="demo" className="main">
                    <Jumbotron
                        title={title}
                        subtitle={subtitle}
                    />
                    <div className="description wrapper">
                        <iframe src={src}/>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default connect()(Demo);
