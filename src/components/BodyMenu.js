import React, {Component} from 'react';
import {Menu, Container} from 'semantic-ui-react'

const bottomBodyMenuMarginStyle = {
    marginTop: '20px',
    marginBottom: '20px'
};


export default class ResumeBodyMenu extends Component {

    handleItemClick = (e, {name}) => this.props.onMenuChange(name);

    getMenuItems() {
        return this.props.menuOptions.map((resumeSection, index) =>
            <Menu.Item key={index}
                       name={resumeSection}
                       active={this.props.activeSection === resumeSection}
                       onClick={this.handleItemClick}
            />);
    }

    render() {
        return (
            <Container textAlign='center'
                       style={bottomBodyMenuMarginStyle}
            >
                <Menu compact
                      color='violet'
                >
                    {this.getMenuItems()}
                </Menu>
            </Container>
        );
    }
}
