import React, {Component} from 'react';
import Avatar from "avataaars";
import {Grid, Card, Menu} from 'semantic-ui-react'

const headerCenteringStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
};

export default class ResumeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <Grid stackable>
                <Grid.Row columns={3}>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Card fluid={true}
                              centered={true}
                              raised={true}
                        >
                            <h2 style={headerCenteringStyle}>{this.state.name}</h2>
                            <Avatar
                                avatarStyle={this.state.avatarStyle}
                                topType={this.state.topType}
                                accessoriesType={this.state.accessoriesType}
                                hairColor={this.state.hairColor}
                                facialHairType={this.state.facialHairType}
                                clotheType={this.state.clotheType}
                                clotheColor={this.state.clotheColor}
                                eyeType={this.state.eyeType}
                                eyebrowType={this.state.eyebrowType}
                                mouthType={this.state.mouthType}
                                skinColor={this.state.skinColor}
                                style={headerCenteringStyle}
                            />
                            <Card.Content>
                                <Card.Header
                                    textAlign={"center"}>{this.state.description}</Card.Header>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
