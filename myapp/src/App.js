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

class App extends Component {

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

                    <h2>Any content 2</h2>
                    senf
                </TabPanel>
            </Tabs>
        </p>
      </div>
    );
  }
}

export default App;
