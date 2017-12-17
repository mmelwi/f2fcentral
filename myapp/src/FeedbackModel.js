import React from 'react';

import FaBug from 'react-icons/lib/fa/bug';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import FaWechat from 'react-icons/lib/fa/wechat';
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o';
import FaHandPeaceO from 'react-icons/lib/fa/hand-peace-o';
import {toggleWidget} from 'react-chat-widget';

class FeedbackModel {

    constructor(type, title, status, date)
    {
        this.type = type;
        this.title = title;
        this.status = status;
        this.date = date;
    }

    getIconForFeedbackType() {
        if (this.type === "Bug") {
            return <FaBug Icon size={35} padding={75}/>;
        }

        if (this.type === "Feature") {
            return <FaLightbulbO Icon size={35} padding={75}/>;
        }

        return <FaHandPeaceO Icon size={35} padding={75}/>;
    }

    getAccordionTitle()
    {
        return (<div style={{display: "flex", justifyContent: "flex-start"}}><h5 align="left" style={{
            flexGrow: 2,
            fontSize: 12,
            fontStyle: 'italic'
        }}>{this.getIconForFeedbackType()}&nbsp; {this.title}</h5><FaWechat Icon align="left" size={35} color={'#63C050'} style={{flexGrow: "1"}} onClick={toggleWidget}/></div>);
    }

    getAccordionBody()
    {
        return (<div><div align="left" style={{fontSize: 10}}>sent on {this.date}</div>
            <div align="left" style={{fontSize: 10, color: '#169BDD'}}>Status: {this.status}</div>
            <div align="left" style={{fontSize: 10, color: '#169BDD'}}>Forum activity: <FaThumbsOUp Icon size={20}/><FaThumbsODown Icon size={20} color={'black'} padding={10}/> <FaWechat Icon size={20}color={'#63C050'} padding={10} /></div></div>);
    }
}

export default FeedbackModel;