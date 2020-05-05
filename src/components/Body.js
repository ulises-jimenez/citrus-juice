import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react'
import ProjectItem from "./WebProjectItems";
import JobItem from "./WorkItems";


export default class ResumeBody extends Component {

    getBodyText() {
        if (this.props.activeSection === 'Web Projects') {
            return (
                <ProjectItem imgSrc='uliandfreja.jpg'
                />
            )
        } else if (this.props.activeSection === 'Professional Experience') {
            return (
                <JobItem
                />
            )
        } else if (this.props.activeSection === 'Education') {
            return (
                <ProjectItem imgSrc='headphones.jpg'
                />
            )
        }
    }

    render() {
        return (
            <Grid stackable
            >
                <Grid.Row columns={3}>
                    <Grid.Column width={4}>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        {this.getBodyText()}
                    </Grid.Column>
                    <Grid.Column width={4}>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

