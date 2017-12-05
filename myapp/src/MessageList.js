import React, {Component} from 'react';
import PropTypes from 'react';

class MessageList extends Component {
    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.object),
    }

    static defaultProps={
        messages: [],
    }

    render() {
        return (
            <div className="MessageList">
                {this.props.messages.map((message, i) => (
                    <div>
                        {message.author && (
                            <span className="author">{message.author}:</span>
                        )};
                        {message.body}
                    </div>
                ))};
            </div>
        )
    }
}

export default MessageList;