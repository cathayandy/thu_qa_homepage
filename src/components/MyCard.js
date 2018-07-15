import React, { PureComponent, Fragment } from 'react';
import { Icon, Card } from 'antd';
import { Link } from 'dva/router';
const { Meta } = Card;

export default class MyCard extends PureComponent {
    handleClick(link) {
        if (link) {
            this.props.history.push(link);
        }
    }
    render() {
        const { cover, actions = [], title, content, link } = this.props;
        const actionButtons = actions.map(([text, url]) => (
            <Link key={text} to={url}>
                { text }
                <Icon type="right" />
            </Link>
        ));
        const titleWithHr = (
            <Fragment>
                { title }
                <hr />
            </Fragment>
        );
        return (
            <Card
                hoverable
                onClick={() => this.handleClick(link)}
                style={{ width: '100%' }}
                cover={cover ? <img alt="icon" src={cover} /> : undefined}
                actions={actionButtons}
            >
                <Meta
                    title={titleWithHr}
                    description={content}
                />
            </Card>
        );
    }
}
