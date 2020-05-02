import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react'


export default class ResumeBody extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <Grid stackable
            >
                <Grid.Row columns={3}>
                    <Grid.Column width={3}>
                        Yo
                    </Grid.Column>
                    <Grid.Column width={10}>
                        Yo
                    </Grid.Column>
                    <Grid.Column width={3}>
                        Yo
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

