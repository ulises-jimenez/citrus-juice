import React, {Component} from 'react';
import ResumeHeader from "./Header";
import ResumeBodyMenu from "./BodyMenu";
import ResumeBody from "./Body";


export default class BasePage extends Component {
    constructor(props) {
        super(props);
        this.itemClick = this.itemClick.bind(this);
        this.state = {
            bodyActiveSection: 'Professional Experience'
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
                    description={'I\'m a software and data enthusiast'}
                />
                <ResumeBodyMenu menuOptions={['Web Projects', 'Professional Experience', 'Education']}
                                activeSection={this.state.bodyActiveSection}
                                onMenuChange={this.itemClick}
                />
                <ResumeBody activeSection={this.state.bodyActiveSection}
                />
            </div>
        );
    }
}
