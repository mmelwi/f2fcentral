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
import ForumModel from "./ForumModel";


class FeedbackForumTabAccordion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testData: [
                {
                    type: "Bug",
                    title: "Is it possible to display...",
                    status: "work in progress",
                    date: "25.09.2017 at 01:02 pm"
                },
                {
                    type: "Feature",
                    title: "Help text should be bigger...",
                    status: "work in progress",
                    date: "10.09.2017 at 06:22 pm"
                },
                {
                    type: "Response",
                    title: "I like your company...",
                    status: "Public",
                    date: "03.09.2017 at 10:31 am"
                }
            ],
            showComment: false
        };
    }


    render() {

        let content = null;
        if(!this.state.showComment)
        {
            content = <Accordion>
                {this.state.testData.map(function (testItem, index) {
                    const model = new ForumModel(testItem.type, testItem.title, testItem.status, testItem.date);
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
        }

        return (
            <div className="MyFeedbacksTabAccordion">
                <div className="MyFeedback">
                    {content}
                </div>
            </div>
        );
    }
}

export default FeedbackForumTabAccordion;