import React, {Component} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody
} from 'react-accessible-accordion';

import './App.css';
import 'react-tabs/style/react-tabs.css';

import 'react-accessible-accordion/dist/react-accessible-accordion.css';
import FeedbackModel from './FeedbackModel.js';


class MyFeedbacksTabAccordion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testData: [
                {
                    type: "Bug",
                    title: "On click the form was not sent...",
                    status: "work in progress",
                    date: "01.08.2017 at 01:02 pm"
                },
                {
                    type: "Feature",
                    title: "Help text should be bigger...",
                    status: "work in progress",
                    date: "22.08.2017 at 18:22 pm"
                },
                {
                    type: "Response",
                    title: "I like the feedback options...",
                    status: "work in progress",
                    date: "03.09.2017 at 10:31 am"
                }
            ]
        };
    }


    render() {

        return (
            <div className="MyFeedbacksTabAccordion">
                <div className="MyFeedback">
                    <Accordion>
                        {this.state.testData.map(function (testItem, index) {
                            const model = new FeedbackModel(testItem.type, testItem.title, testItem.status, testItem.date);
                            return (
                                <AccordionItem>
                                    <AccordionItemTitle>
                                        {model.getAccordionTitle()}
                                    </AccordionItemTitle>
                                    <AccordionItemBody>
                                        <div>
                                        {model.getAccordionBody()}
                                        </div>
                                    </AccordionItemBody>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </div>
            </div>
        );
    }
}

export default MyFeedbacksTabAccordion;