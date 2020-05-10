import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react'
import ProjectItem from "./WebProjectItems";
import JobItem from "./WorkItems";
import EducationItem from "./EducationItems";


export default class ResumeBody extends Component {

    getBodyText() {
        if (this.props.activeSection === 'Web Projects') {
            return (
                <ProjectItem
                />
            )
        } else if (this.props.activeSection === 'Professional') {
            return (
                <JobItem
                />
            )
        } else if (this.props.activeSection === 'Education') {
            return (
                <EducationItem
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

