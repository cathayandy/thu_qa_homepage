import React, { PureComponent, Fragment } from 'react';
import { Icon, Card } from 'antd';
const { Meta } = Card;

export default class MyCard extends PureComponent {
    render() {
        const { cover, actions = [], title, content } = this.props;
        const actionButtons = actions.map(text => (
            <span>
                { text }
                <Icon type="right" />
            </span>
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
                cover={cover}
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
