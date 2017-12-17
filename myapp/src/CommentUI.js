import React, { Component } from 'react';
import CommentList from 'react-uikit-comment-list';
import Comment from 'react-uikit-comment';
import placeholder_avatar from './placeholder_avatar.svg';
import logo from './logo.svg';


class CommentUI extends Component {
    render() {
        return (
            <CommentList>
                <li>
                    <Comment title='Author' meta='12 days ago | Profile | #'
                             avatar={{src: placeholder_avatar, alt: 'Avatar placeholder'}}>

                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua.
                        </p>
                    </Comment>
                    <CommentList>
                        <li>
                            <Comment title='Author' meta='12 days ago | Profile | #'
                                     avatar={{src: placeholder_avatar , alt: 'Avatar placeholder'}}>

                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua.
                                </p>
                            </Comment>
                        </li>
                    </CommentList>
                </li>
            </CommentList>
        );
    }
}

export default CommentUI;
