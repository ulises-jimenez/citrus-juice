import React, {Component} from 'react';
import ResumeHeader from "./Header";
import ResumeBodyMenu from "./BodyMenu";
import ResumeBody from "./Body";
import {Divider} from "semantic-ui-react";


export default class BasePage extends Component {
    constructor(props) {
        super(props);
        this.itemClick = this.itemClick.bind(this);
        this.state = {
            bodyActiveSection: 'Professional'
        };
    }

    itemClick(name) {
        this.setState({bodyActiveSection: name});
    }

    render() {
        return (
            <div ref={this.contextRef}>
                <ResumeHeader
                    name='Ulises Jimenez'
                    description={'Hi there, I\'m a software and data professional'}
                />
                <Divider/>
                <ResumeBodyMenu menuOptions={['Web Projects', 'Professional', 'Education']}
                                activeSection={this.state.bodyActiveSection}
                                onMenuChange={this.itemClick}
                />
                <ResumeBody activeSection={this.state.bodyActiveSection}
                />
            </div>
        );
    }
}
