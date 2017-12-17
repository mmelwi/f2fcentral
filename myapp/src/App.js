import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import logo from './logo.svg';

import 'react-tabs/style/react-tabs.css';

import '../node_modules/react-accessible-accordion/dist/react-accessible-accordion.css';
import './App.css';
import MyFeedbacksTabAccordion from "./MyFeedbacksTabAccordion";
import { Widget, addResponseMessage } from 'react-chat-widget';
import ForumSorting from "./ForumSorting";
import FeedbackForumTabAccordion from "./FeedbackForumTabAccordion";
import CommentUI from "./CommentUI";

class App extends Component {

    constructor(props)
    {
        super(props);
        this.state = { sorting: '' };
    }

    componentDidMount() {
        addResponseMessage("Thank you for your time. We have some additional questions regarding your feedback.");
    }

    handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);

    }

    onUpdate(sorting) { this.setState({sorting: sorting}); }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>


            <Tabs style={ {activeTabContentStyle: {backgroundColor:'#1A7E92', borderColor: '#1A7E92'}}}>
                <TabList>
                    <Tab>My Feedbacks</Tab>
                    <Tab>Feedback Forum</Tab>
                </TabList>

                <TabPanel>
                    <MyFeedbacksTabAccordion/>
                    <Widget handleNewUserMessage={this.handleNewUserMessage}/>
                </TabPanel>
                <TabPanel>
                    <ForumSorting onUpdate={this.onUpdate.bind(this)}/>
                    <FeedbackForumTabAccordion/>
                    <CommentUI/>
                </TabPanel>

            </Tabs>
      </div>
    );
  }
}

export default App;
