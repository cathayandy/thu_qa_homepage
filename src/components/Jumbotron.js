import React, { PureComponent } from 'react';

export default class Jumbotron extends PureComponent {
    renderSubtitles() {
        let { subtitle = [] } = this.props;
        if (typeof subtitle === 'string') {
            subtitle = [subtitle];
        }
        return subtitle.map(title => <h3 key={title}>{ title }</h3>);
    }
    render() {
        const { title } = this.props;
        return (
            <div className="pane">
                <h1>{ title }</h1>
                { this.renderSubtitles() }
            </div>
        );
    }
}
