import React, {Component} from 'react';
import {Item, Segment, Icon} from 'semantic-ui-react'

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
                                <Icon name={'android'} size={'large'}/>
                                <a href='http://play.google.com/store/apps/details?id=com.raksha.babyphone'
                                   target='_blank' rel='noopener noreferrer'>Android App</a>
                            </p>
                            <p>
                                <Icon name={'apple'} size={'large'}/>
                                <a href='https://apps.apple.com/app/apple-store/id1481048538'
                                   target='_blank' rel='noopener noreferrer'>iOS App</a>
                            </p>
                            <Segment>
                                Fun little app that can serve as a baby monitor. Runs on iOS, Android and in the
                                browser (experimental). Uses async python and WebRTC to link video and audio across
                                different platforms. Has noise detection alerts and background audio to let you browse
                                the web or whatever while still being alerted to noise.
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
