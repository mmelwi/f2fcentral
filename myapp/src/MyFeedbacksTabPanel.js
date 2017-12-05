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

class MyFeedbacksTabPanel extends Component {

    render() {
        return (
            <div className="MyFeedbacksTabPanel">
                <p className="MyFeedbacks">
                    <Tabs>
                        <TabPanel>
                            <Accordion>
                                <AccordionItem>
                                    <AccordionItemTitle>
                                        <h5 align="left" style={ {fontSize: 12, fontStyle: 'italic'}}><FaBug Icon size={35}/> On click the form was not sent </h5>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <p align="left" style={ {fontSize: 10}}>sent on 01.08.2017 at 01:02 pm</p>
                                        <p align="left" style={ {fontSize: 10, color: '#169BDD'}}>Status: work in progress</p>
                                        <p align="left" style={ {fontSize: 10, color: '#169BDD'}}>Forum activity: <FaThumbsOUp  Icon size={20}/> <FaThumbsODown Icon size={20} color={'black'} padding={10}/> <FaWechat Icon size={20} color={'#63C050'} padding={10}/></p>
                                    </AccordionItemBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemTitle>
                                        <h5 align="left" style={ {fontSize: 12, fontStyle: 'italic'}}><FaLightbulbO Icon size={35}/> Complex title</h5>
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <p align="left" style={ {fontSize: 10}}>sent on 01.08.2017 at 01:02 pm</p>
                                        <p align="left" style={ {fontSize: 10, color: '#169BDD'}}>Status: work in progress</p>
                                        <p align="left" style={ {fontSize: 10, color: '#169BDD'}}>Forum activity: <FaThumbsOUp  Icon size={20}/> <FaThumbsODown Icon size={20} color={'black'} padding={10}/> <FaWechat Icon size={20} color={'#63C050'} padding={10}/></p>
                                    </AccordionItemBody>
                                </AccordionItem>
                            </Accordion>
                        </TabPanel>

                    </Tabs>
                </p>
            </div>
        );
    }
}

export default MyFeedbacksTabPanel;