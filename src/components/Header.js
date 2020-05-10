import React, {Component} from 'react';
import {Grid, Card, Icon, Popup, Divider, Flag} from 'semantic-ui-react'
import {Link, BrowserRouter as Router} from "react-router-dom";

const headerCenteringStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
};

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
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Card fluid={true}
                              centered={true}
                              raised={true}
                        >
                            <h2 style={headerCenteringStyle}>{this.state.name} <Popup
                                trigger={<Icon name='info circle' size='small' color='violet'/>}
                            >
                                {this.getHeaderIconInfo()}
                            </Popup>

                            </h2>
                            <Card.Content>
                                <Card.Description>
                                    <p>
                                        <a href='mailto:ulises@ulisesjimenez.com'>
                                            ulises@ulisesjimenez.com
                                        </a>
                                        &nbsp;•&nbsp;
                                        <a href='https://www.github.com/ulises-jimenez' target='_blank'
                                           rel='noopener noreferrer'>
                                            <Icon name='github alternate'
                                                  size='large'
                                                  color='violet'
                                            />
                                            github profile
                                        </a>
                                    </p>
                                    <p>
                                        Download the paper version&nbsp;<Router>
                                        <Link to='ulises_resume_2020.pdf'
                                              target="_blank"
                                              download>
                                            here!
                                        </Link>
                                    </Router>
                                    </p>
                                    <p>
                                        <Flag name='us'/>US Citizen
                                    </p>
                                </Card.Description>
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
