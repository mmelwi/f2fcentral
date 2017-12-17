import React, {Component} from 'react';

import FaBug from 'react-icons/lib/fa/bug';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import FaWechat from 'react-icons/lib/fa/wechat';
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o';
import FaHandPeaceO from 'react-icons/lib/fa/hand-peace-o';

class ForumBody extends Component {

  constructor(props) {
    super(props);
    this.handleShowCommentChange = this.handleShowCommentChange.bind(this);
  }

  handleShowCommentChange(e) {
    this.props.onShowCommentChange({showComment: true, index: this.props.index});
  }

    render()
    {
        return (<div><div align="left" style={{fontSize: 10}}>sent on {this.props.date}</div>
            <div align="left" style={{fontSize: 10, color: '#169BDD'}}>Status: {this.props.status}</div>
            <div align="left" class="forum-body-show-comment-container"><button type="button" onClick={this.handleShowCommentChange}>Show comments</button></div></div>);
    }
}

export default ForumBody;
