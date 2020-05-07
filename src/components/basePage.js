import React, {Component, createRef} from 'react';
import ResumeHeader from "./Header";
import ResumeBodyMenu from "./BodyMenu";
import ResumeBody from "./Body";
import {Sticky} from "semantic-ui-react";


export default class BasePage extends Component {
    constructor(props) {
        super(props);
        this.itemClick = this.itemClick.bind(this);
        this.state = {
            bodyActiveSection: 'Professional Experience'
        };
    }

    contextRef = createRef();

    itemClick(name) {
        this.setState({bodyActiveSection: name});
    }

    render() {
        return (
            <div ref={this.contextRef}>
                <ResumeHeader name="Ulises Jimenez"
                              avatarStyle='Transparent'
                              topType='ShortHairDreads01'
                              accessoriesType='Blank'
                              hairColor='Black'
                              facialHairType='Blank'
                              clotheType='Hoodie'
                              clotheColor='PastelGreen'
                              eyeType='Default'
                              eyebrowType='Default'
                              mouthType='Grimace'
                              skinColor='Pale'
                              meta='Me'
                              description={'I\'m a software and data enthusiast 🤷🏻‍♂ Why not both? 🌮🌯️'}
                />
                <Sticky context={this.contextRef}>
                    <ResumeBodyMenu menuOptions={['Web Projects', 'Professional Experience', 'Education']}
                                    activeSection={this.state.bodyActiveSection}
                                    onMenuChange={this.itemClick}
                    />
                </Sticky>
                <ResumeBody activeSection={this.state.bodyActiveSection}
                />
            </div>
        );
    }
}
