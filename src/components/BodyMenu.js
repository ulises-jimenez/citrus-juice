import React, {Component} from 'react';
import {Menu, Container} from 'semantic-ui-react'

const bodyMenuCenteringStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
};

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
            <Container textAlign='center'
            >
                    <Menu compact
                          pointing
                          secondary
                          stackable
                          color='violet'
                    >
                        {this.getMenuItems()}
                    </Menu>
            </Container>
        );
    }
}
