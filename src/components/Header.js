import React, {Component} from 'react';
import {Grid, Card, Icon, Popup, Divider, Flag, Header, Item} from 'semantic-ui-react'
import {Link, BrowserRouter as Router} from "react-router-dom";

const headerCenteringStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1%'
};

const smallHeaderCenteringStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
};

const listSpacing = {
    paddingBottom: '2em',
    fontSize: 16
}

export default class ResumeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    getHeaderIconInfo() {
        return (
            <>
                <p><strong>Hover over these to see which tech was used. For example</strong></p>
                <Divider/>
                <strong>I mostly work in...</strong>
                <Divider/>
                <p>
                    <Icon name='python' size='large'/> Python
                </p>
                <p>
                    <Icon name='js' size='large'/> JS
                </p>
                <p>
                    <Icon name='database' size='large'/> SQL
                </p>
                <p>
                    <Icon name='terminal' size='large'/>bash
                </p>
                <p>
                    <Icon name='linux' size='large'/> Linux
                </p>
                <Divider/>
                <strong>But I also have experience in...</strong>
                <Divider/>
                <p>
                    <Icon name='server' size='large'/> Devops
                </p>
                <p>
                    <Icon name='apple' size='large'/> iOS
                </p>
                <p>
                    <Icon name='android' size='large'/> Android
                </p>
                <p>
                    <Icon name='react' size='large'/> React
                </p>
                <p>
                    <Icon name='vuejs' size='large'/> Vuejs
                </p>
            </>
        )
    }

    render() {
        return (
            <Grid stackable>
                <Grid.Row columns={3}>
                    <Grid.Column width={3}>
                    </Grid.Column>
                    <Grid.Column textAlign='center'
                                 width={10}
                    >
                        <Item
                        >
                            <h1 style={headerCenteringStyle}>
                                {this.state.name}
                            </h1>
                            <h5>{this.state.description}</h5>
                            <p>
                                <a href='mailto:me@ulisesjimenez.com'>
                                    <Icon name='mail outline'
                                          size='large'
                                          color='violet'
                                    />
                                </a> <a href='https://www.github.com/ulises-jimenez' target='_blank'
                                        rel='noopener noreferrer'>
                                <Icon name='github alternate'
                                      size='large'
                                      color='violet'
                                />
                            </a> <a href='ulises_resume_2020.pdf'
                                    target="_blank"
                                    download>
                                <Icon name='file pdf outline'
                                      size='large'
                                      color='violet'
                                />
                            </a> <a href='https://www.github.com/ulises-jimenez'
                                    target="_blank"
                                    rel='noopener noreferrer'>
                                <Icon name='linkedin'
                                      size='large'
                                      color='violet'
                                />
                            </a>
                            </p>
                        </Item>
                    </Grid.Column>
                    <Grid.Column width={3}>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
