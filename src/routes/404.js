import React, { PureComponent, Fragment } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import sections from '../constants/sections';

export default class Homepage extends PureComponent {
    render() {
        return (
            <Fragment>
                <Navbar
                    sections={sections}
                />
                <div id="_404" className="main">
                    <Jumbotron
                        title={404}
                    />
                </div>
                <Footer />
            </Fragment>
        );
    }
}
