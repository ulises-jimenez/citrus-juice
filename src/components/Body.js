import React, {Component} from 'react';
import {Grid, Image, Item} from 'semantic-ui-react'


export default class ResumeBody extends Component {

    getBodyText() {
        if (this.props.activeSection === 'Web Projects') {
            return (<Item>
                <Item.Image size='tiny' src='uliandfreja.jpg'/>

                <Item.Content>
                    <Item.Header as='a'>Header</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                        hello there
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>
            </Item>)
        } else if (this.props.activeSection === 'Professional Experience') {
            return 'pro'
        } else if (this.props.activeSection === 'Education') {
            return 'edu'
        }
    }

    render() {
        return (
            <Grid stackable
            >
                <Grid.Row columns={3}>
                    <Grid.Column width={3}>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        {this.getBodyText()}
                    </Grid.Column>
                    <Grid.Column width={3}>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

