import React, {Component} from 'react';
import {Menu, Grid} from 'semantic-ui-react'

export default class ResumeBodyMenu extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    itemClick = (e, {name}) => this.setState({activeSection: name});

    getMenuItems() {
        return this.state.menuOptions.map((resumeSection, index) =>
            <Menu.Item key={index}
                       name={resumeSection}
                       active={this.state.activeSection === resumeSection}
                       onClick={this.itemClick}
            />);
    }

    render() {
        return (
            <Grid stackable>
                <Grid.Row columns={3}>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Menu compact
                              pointing
                              secondary
                              stackable
                              color='violet'
                        >
                            {this.getMenuItems()}
                        </Menu>
                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
