import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import logo from './logo.svg';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import './App.css';
import 'react-tabs/style/react-tabs.css';

import 'react-accessible-accordion/dist/react-accessible-accordion.css';
import FaBug from 'react-icons/lib/fa/bug';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import FaWechat from 'react-icons/lib/fa/wechat';
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o';
import MessageList from "./MessageList";

class MyFeedbacksTabAccordion extends Component {

    constructor(props){
        super(props)
        this.state = {
            messages: [
                { body: "Connecting..."},
                { author: "You", body: "Hello!", me: true},
                { author: "Them", body: "Hey there!"},
            ],
        }
    }

    render() {
        return (
            <div className="MyFeedbacksTabAccordion">
                <p className="MyFeedback">
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h5 align="left" style={ {fontSize: 12, fontStyle: 'italic'}} cellPadding={30}><FaBug Icon size={35}/> On click the form was not sent...  <FaWechat Icon size={35} align="right" margin='25%' color={'#63C050'}/> <MessageList messages={this.state}/></h5>

                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p align="left" style={ {fontSize: 10}}>sent on 01.08.2017 at 01:02 pm</p>
                                <p align="left" style={ {fontSize: 10, color: '#169BDD'}}>Status: work in progress </p>
                                <p align="left" style={ {fontSize: 10, color: '#169BDD'}}>Forum activity: <FaThumbsOUp  Icon size={20}/> <FaThumbsODown Icon size={20} color={'black'} padding={10}/> <FaWechat Icon size={20} color={'#63C050'} padding={10}/></p>
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h5 align="left" style={ {fontSize: 12, fontStyle: 'italic'}}><FaLightbulbO Icon size={35}/> Help text should be bigger... </h5>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p align="left" style={ {fontSize: 10}}>sent on 22.08.2017 at 18:22 pm</p>
                                <p align="left" style={ {fontSize: 10, color: '#169BDD'}}>Status: work in progress</p>
                                <p align="left" style={ {fontSize: 10, color: '#169BDD'}}>Forum activity: <FaThumbsOUp  Icon size={20}/> <FaThumbsODown Icon size={20} color={'black'} padding={10}/> <FaWechat Icon size={20} color={'#63C050'} padding={10}/></p>
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h5 align="left" style={ {fontSize: 12, fontStyle: 'italic'}}><FaLightbulbO Icon size={35}/> Help text should be bigger... </h5>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p align="left" style={ {fontSize: 10}}>sent on 22.08.2017 at 18:22 pm</p>
                                <p align="left" style={ {fontSize: 10, color: '#169BDD'}}>Status: work in progress</p>
                                <p align="left" style={ {fontSize: 10, color: '#169BDD'}}>Forum activity: <FaThumbsOUp  Icon size={20}/> <FaThumbsODown Icon size={20} color={'black'} padding={10}/> <FaWechat Icon size={20} color={'#63C050'} padding={10}/></p>
                            </AccordionItemBody>
                        </AccordionItem>
                    </Accordion>
                </p>
            </div>
        );
    }
}

export default MyFeedbacksTabAccordion;