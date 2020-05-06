import React, {Component} from 'react';
import {Item, Segment} from 'semantic-ui-react'

const imageCenteringStyle = {
    marginBottom: 'auto'
};

export default class ProjectItem extends Component {

    getItems() {
        return (
            <>
                <Item
                >
                    <Item.Image size='tiny'
                                src='kid_sleeping.jpg'
                                style={imageCenteringStyle}
                    />
                    <Item.Content>
                        <Item.Header content='Baby Phone Monitor'
                        />
                        <Item.Description>
                            <p>
                                <a href='https://www.ulisesjimenez.com/'>Baby Phone</a>
                            </p>
                            <Segment>
                                Fun little app that can serve as a baby monitor. Runs on iOS, Android and in the
                                browser (experimental). Uses async python and WebRTC to link video and audio across
                                different platforms
                            </Segment>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </>
        )
    }

    render() {
        return (
            <Item.Group divided
            >
                {this.getItems()}
            </Item.Group>
        );
    }
}
