import React, { PureComponent } from 'react';

export default class Jumbotron extends PureComponent {
    renderSubtitles() {
        const { subtitle = [] } = this.props;
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
