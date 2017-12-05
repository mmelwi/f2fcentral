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

import '../node_modules/react-accessible-accordion/dist/react-accessible-accordion.css';
import MyFeedbacksTabPanel from './MyFeedbacksTabPanel';
import FeedbackCentral from "./FeedbackCentral";
import MyFeedbacksTabAccordion from "./MyFeedbacksTabAccordion";
import { Widget, addResponseMessage } from 'react-chat-widget';

class App extends Component {
    componentDidMount(){
        addResponseMessage("Welcome to this awesome chat!");
    }

    handleNewUserMessage=(newMessage) => {
        console.log(`New message incoming! ${newMessage}`);

    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

            <Tabs style={ {activeTabContentStyle: {backgroundColor:'#1A7E92', borderColor: '#1A7E92'}}}>
                <TabList>
                    <Tab>My Feedbacks</Tab>
                    <Tab>Feedback Forum</Tab>
                </TabList>

                <TabPanel>
                    <MyFeedbacksTabPanel/>
                    <MyFeedbacksTabAccordion/>
                    <div> <Widget handleNewUserMessage={this.handleNewUserMessage}/>
                    </div>
                    senf
                </TabPanel>
            </Tabs>
        </p>
      </div>
    );
  }
}

export default App;
