import React, {Component} from 'react';

import FaBug from 'react-icons/lib/fa/bug';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import FaWechat from 'react-icons/lib/fa/wechat';
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o';
import FaHandPeaceO from 'react-icons/lib/fa/hand-peace-o';

class ForumTitle extends Component
{

  constructor(props) {
    super(props);
    this.handleShowCommentChange = this.handleShowCommentChange.bind(this);
  }

  handleShowCommentChange(e) {
    this.props.onShowCommentChange({showComment: true, index: this.props.index});
  }

  getIconForFeedbackType(type) {
      if (type === "Bug") {
          return <FaBug Icon size={35} padding={75}/>;
      }

      if (type === "Feature") {
          return <FaLightbulbO Icon size={35} padding={75}/>;
      }

      return <FaHandPeaceO Icon size={35} padding={75}/>;
  }

  render() {
    return (<div style={{display: "flex", justifyContent: "flex-start"}}>
        <h5 align="left" style={{flexGrow: 5, fontSize: 12, fontStyle: 'italic'}}>{this.getIconForFeedbackType(this.props.type)}&nbsp; {this.props.title}</h5>
        <div class="iconContainer" style={{flexGrow: 1, marginTop: '20px'}}><FaWechat Icon align="left" size={35} color={'#63C050'} onClick={this.handleShowCommentChange}/><FaThumbsOUp Icon size={20} /><FaThumbsODown Icon size={20} color={'black'} padding={10}/></div>
    </div>);
  }
}

export default ForumTitle;
