import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { Anchor } from 'antd';
import MarkdownIt from "markdown-it";
import markdownItTocAndAnchor from "markdown-it-toc-and-anchor";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import sections from '../constants/sections';
const { Link } = Anchor;
const md = new MarkdownIt()
    .use(markdownItTocAndAnchor, {
        anchorLink: false,
    });

class Doc extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subtitle: '',
            text: '',
            toc: [],
        };
    }
    getData() {
        const { pathname } = this.props.location;
        const url = `/api${pathname}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const { title, subtitle, text } = data;
                const updateToc = toc => this.setState({
                    toc,
                });
                const html = md.render(text, {
                    tocCallback(_, toc, __) {
                        updateToc(toc);
                    },
                });
                this.setState({
                    title, subtitle, text: html,
                });
            })
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
    renderLinks() {
        const { toc } = this.state;
        return toc.map(({ content, anchor }) => (
            <Link key={content} title={content} href={`#${anchor}`} />
        ));
    }
    render() {
        const { title, subtitle, text } = this.state;
        return (
            <Fragment>
                <Navbar
                    sections={sections}
                />
                <div id="doc" className="main">
                    <Jumbotron
                        title={title}
                        subtitle={subtitle}
                    />
                    <div className="description anchor">
                        <Anchor>
                            { this.renderLinks() }
                        </Anchor>
                    </div>
                    <div
                        className="description wrapper markdown-body"
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default connect()(Doc);
