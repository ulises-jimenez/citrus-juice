import React, {Component} from 'react';
import {Item, Segment, Flag, Icon, Popup, Divider, List, Grid} from 'semantic-ui-react'

const imageCenteringStyle = {
    marginBottom: 'auto'
};

export default class JobItem extends Component {

    getGeophyPopup() {
        return (
            <Popup
                trigger={<Icon name='info circle' color='violet'/>}
                wide='very'
            >
                <Grid stackable>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Divider horizontal>{<Icon name='wrench' size='large'/>}</Divider>
                            <List>
                                <List.Item>
                                    <List.Icon name='python'/>
                                    <List.Content>Python</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='code'/>
                                    <List.Content>R</List.Content>
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Popup>
        )
    }


    getKAYAKPopup() {
        return (
            <Popup
                trigger={<Icon name='info circle' color='violet'/>}
                wide='very'
            >
                <Grid stackable>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Divider horizontal>{<Icon name='python' size='large'/>}</Divider>
                            <List>
                                <List.Item>
                                    <List.Icon name='code'/>
                                    <List.Content>Django</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='code'/>
                                    <List.Content>Airflow</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='code'/>
                                    <List.Content>Pandas</List.Content>
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Divider horizontal>{<Icon name='wrench' size='large'/>}</Divider>
                            <List>
                                <List.Item>
                                    <List.Icon name='database'/>
                                    <List.Content>Hive</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='database'/>
                                    <List.Content>Vertica</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='database'/>
                                    <List.Content>SQL</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='code branch'/>
                                    <List.Content>git</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='js'/>
                                    <List.Content>JS</List.Content>
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Popup>
        )
    }

    getNu3Popup() {
        return (
            <Popup
                trigger={<Icon name='info circle' color='violet'/>}
                wide='very'
            >
                <Grid stackable>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Divider horizontal>{<Icon name='python' size='large'/>}</Divider>
                            <List>
                                <List.Item>
                                    <List.Icon name='code'/>
                                    <List.Content>Django</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='code'/>
                                    <List.Content>Airflow</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='code'/>
                                    <List.Content>Pandas</List.Content>
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Divider horizontal>{<Icon name='wrench' size='large'/>}</Divider>
                            <List>
                                <List.Item>
                                    <List.Icon name='code branch'/>
                                    <List.Content>git</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='database'/>
                                    <List.Content>SQL</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='js'/>
                                    <List.Content>JS</List.Content>
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Popup>
        )
    }

    getBBGTechPopup() {
        return (
            <Popup
                trigger={<Icon name='info circle' color='violet'/>}
                wide='very'
            >
                <Grid stackable>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Divider horizontal>{<Icon name='python' size='large'/>}</Divider>
                            <List>
                                <List.Item>
                                    <List.Icon name='code'/>
                                    <List.Content>Django</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='code'/>
                                    <List.Content>Flask</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='code'/>
                                    <List.Content>Airflow</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='code'/>
                                    <List.Content>Pandas</List.Content>
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Divider horizontal>{<Icon name='js' size='large'/>}</Divider>
                            <List>
                                <List.Item>
                                    <List.Icon name='vuejs'/>
                                    <List.Content>Vuejs</List.Content>
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Divider horizontal>{<Icon name='wrench' size='large'/>}</Divider>
                            <List>
                                <List.Item>
                                    <List.Icon name='code branch'/>
                                    <List.Content>git</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='code'/>
                                    <List.Content>R</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='database'/>
                                    <List.Content>SQL</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='server'/>
                                    <List.Content>Ansible</List.Content>
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Popup>
        )
    }

    createJobIndividualItems() {
        return (
            <>
                <Item
                >
                    <Item.Image size='tiny'
                                src='bbg.png'
                                style={imageCenteringStyle}
                    />
                    <Item.Content>
                        <Item.Header>
                            Lead Data & Analytics Engineer
                            {this.getBBGTechPopup()}
                        </Item.Header>
                        <Item.Meta><Flag name='de'/> Berlin • November 2018 - Present</Item.Meta>
                        <Item.Description>
                            <p>
                                <a href='https://www.berlin-brands-group.com/' target='_blank'
                                   rel='noopener noreferrer'>Berlin Brands Group GmbH</a>
                            </p>
                            <Segment>
                                <strong>• Data Engineering</strong> – Established new data science team to create and
                                implement computing, reporting, and ETL infrastructure
                            </Segment>
                            <Segment>
                                <strong>• Customer Retention and Lifecycle Modeling</strong> - Implemented
                                infrastructure to monitor purchase behavior and predict future
                            </Segment>
                            <Segment>
                                <strong>• Price Optimization Application</strong> - Created application to monitor
                                price discrepancies and model price elasticity among a 5000+ product portfolio across
                                80+ web shops
                            </Segment>
                        </Item.Description>
                    </Item.Content>
                </Item>
                <Item
                >
                    <Item.Image size='tiny'
                                src='nu3_logo.jpg'
                                style={imageCenteringStyle}
                    />
                    <Item.Content>
                        <Item.Header>
                            Data Science and Automation Lead
                            {this.getNu3Popup()}
                        </Item.Header>
                        <Item.Meta><Flag name='de'/> Berlin • May 2016 - October 2018</Item.Meta>
                        <Item.Description>
                            <p>
                                <a href='https://www.nu3.de/' target='_blank' rel='noopener noreferrer'>Nu3 GmbH</a>
                            </p>
                            <Segment>
                                <strong>• Automated Bidding Algorithms</strong> – Created bidding algorithms and
                                infrastucture for customer acquisition
                            </Segment>
                            <Segment>
                                <strong>• Customer Lifetime Value Modeling</strong> – Implemented regression and
                                classification models to identify high lifetime value customers and customers at high
                                risk of churning
                            </Segment>
                            <Segment>
                                <strong>• Analysis Automation</strong> – Implemented and maintained dashboards and ETLs
                                to keep continuous track of key marketing measures
                            </Segment>
                        </Item.Description>
                    </Item.Content>
                </Item>
                <Item
                >
                    <Item.Image size='tiny'
                                src='kayak.png'
                                style={imageCenteringStyle}
                    />
                    <Item.Content>
                        <Item.Header>
                            Data Scientist
                            {this.getKAYAKPopup()}
                        </Item.Header>
                        <Item.Meta><Flag name='de'/> Berlin • August 2015 - April 2016</Item.Meta>
                        <Item.Description>
                            <p>
                                <a href='https://www.kayak.com/' target='_blank' rel='noopener noreferrer'>KAYAK</a>
                            </p>
                            <Segment>
                                <strong>• Automated Bidding Algorithms</strong> – Worked on ETL pipelines, testing,
                                anomaly detection, and algorithm development in order to automatically manage
                                AdWords accounts with millions in monthly spend
                            </Segment>
                            <Segment>
                                <strong>• Dashboard Creation</strong> – Created dashboards to keep track of results of
                                AB testing on the site.
                            </Segment>
                            <Segment>
                                <strong>• Data Engineering</strong> – Created many end to end data pipelines so
                                stakeholders could see daily or hourly updates on KPIs that impacted their projects
                            </Segment>
                        </Item.Description>
                    </Item.Content>
                </Item>
                <Item
                >
                    <Item.Image size='tiny'
                                src='geophy.png'
                                style={imageCenteringStyle}
                    />
                    <Item.Content>
                        <Item.Header>
                            Analytics Intern
                            {this.getGeophyPopup()}
                        </Item.Header>
                        <Item.Meta><Flag name='nl'/> The Hague, The Netherlands • January 2015 - July 2015</Item.Meta>
                        <Item.Description>
                            <p>
                                <a href='https://www.geophy.com/' target='_blank' rel='noopener noreferrer'>GeoPhy</a>
                            </p>
                            <Segment>
                                <strong>• Machine Learning</strong> – Implemented regression and classification models
                                to valuate commercial real estate assets and portfolios
                            </Segment>
                            <Segment>
                                <strong>• Web Scraping and Data Cleaning</strong> – Wrote data mining and cleaning
                                programs to collect commercial real estate data
                            </Segment>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </>
        )
    }

    render() {
        return (
            <Item.Group divided>
                {this.createJobIndividualItems()}
            </Item.Group>
        );
    }
}
