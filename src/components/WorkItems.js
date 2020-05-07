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
                                <a href='https://www.berlin-brands-group.com/'>Berlin Brands Group GmbH</a>
                            </p>
                            <Segment>
                                <strong>• Data Engineering</strong> – Created and implemented computing, reporting,
                                and
                                ETL infrastructure in order to automate all report generation, data refreshing, and
                                dashboard infrastructure. Led to a reduction in 1000s of man hours used on repetitive
                                reporting tasks.
                            </Segment>
                            <Segment>
                                <strong>• Customer Retention and Lifecycle Modeling</strong> - Implemented
                                infrastructure to monitor
                                past purchase behavior and predict probability of future purchase behavior and future
                                churn behavior.
                            </Segment>
                            <Segment>
                                <strong> Price Optimization Application</strong> - Created application to monitor
                                price discrepancies among a 5000+ product portfolio spread out across 80+ web shops
                                and multiple currencies. Automated Alerts and tools help product managers to find
                                price discrepancies and recommends price changes based on product demand.
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
                                <a href='https://www.nu3.de/'>Nu3 GmbH</a>
                            </p>
                            <Segment>
                                <strong>• Automated Bidding Algorithms</strong> – Authored several Google Ads bidding
                                algorithms and end to end data pipelines taking into account past bid history and
                                measures related to user behavior
                            </Segment>
                            <Segment>
                                <strong>• Customer Lifetime Value Modeling</strong> – Implemented regression and
                                classification models to identify channels where high lifetime value customers where
                                being acquired and adjust spend programmatically. Created mechanisms to identify ‘at
                                risk’ customers to decrease churn rate by ~20%
                            </Segment>
                            <Segment>
                                <strong>• Analysis Automation</strong> – Created dashboards using Django to keep
                                continuous track of key marketing measures including estimated daily customer LTV
                                generated by new customers, daily churn, daily cost, and other important strategic KPIs
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
                                <a href='https://www.kayak.com/'>KAYAK</a>
                            </p>
                            <Segment>
                                <strong>• Automated Bidding Algorithms</strong> – Worked on writing ETL pipelines, unit
                                tests, anomaly detection, and algorithm development in order to automatically manage
                                AdWords accounts
                            </Segment>
                            <Segment>
                                <strong>• Dashboard Creation</strong> – Created dashboards to keep track of results of
                                AB testing on the site. Included automated statistical validation of results
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
                                <a href='https://www.geophy.com/'>GeoPhy</a>
                            </p>
                            <Segment>
                                <strong>• Machine Learning</strong> – Implemented regression and classification models
                                to valuate commercial real estate assets and portfolios
                            </Segment>
                            <Segment>
                                <strong>• Web Scraping and Data Cleaning</strong> – Wrote data mining and cleaning
                                programs to process tens of thousands of data points representing buildings in real
                                estate markets around the world from public and private data sources.
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
