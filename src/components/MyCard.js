import React, { PureComponent, Fragment } from 'react';
import { Icon, Card } from 'antd';
import { Link } from 'dva/router';
const { Meta } = Card;

export default class MyCard extends PureComponent {
    render() {
        const { cover, actions = [], title, content } = this.props;
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
                style={{ width: '100%' }}
                cover={<img alt="icon" src={cover} />}
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
