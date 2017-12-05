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
import './MyFeedbacksTabAccordion';

class MyFeedbacksTabPanel extends Component {

    render() {
        return (
            <div className="MyFeedbacksTabPanel">
                <p className="MyFeedbacks">
                    <Tabs>
                        <TabPanel>
                            <Accordion>

                            </Accordion>
                        </TabPanel>

                    </Tabs>
                </p>
            </div>
        );
    }
}

export default MyFeedbacksTabPanel;