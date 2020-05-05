import React, {Component} from 'react';
import {Item, Segment, Flag, Icon, Popup} from 'semantic-ui-react'

const imageCenteringStyle = {
    marginBottom: 'auto'
};

export default class JobItem extends Component {

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
                        <Item.Header content='Lead Data & Analytics Engineer'
                        />
                        <Item.Meta><Flag name='de'/> Berlin • November 2018 - Present</Item.Meta>
                        <Item.Description>
                            <p>
                                <a href='https://www.berlin-brands-group.com/'>Berlin Brands Group GmbH</a>
                            </p>
                            <Segment>
                                <strong>• Data Engineering</strong> – Created and implemented computing, reporting,
                                and
                                ETL infrastructure in order to automate all report generation and data refreshing.
                                Led
                                to a reduction in 1000s of man hours used on repetitive reporting tasks.
                            </Segment>
                            <Segment>
                                <strong>• Customer Retention and Lifecycle Modeling</strong> - Implemented
                                infrastructure to monitor
                                past purchase behaviour and predict probability of future purchase behavior across
                                time.
                            </Segment>
                            <Segment>
                                <strong> Price Optimization Application</strong> - Created application to monitor
                                price discrepancies among a 5000+ product portfolio spread out across 80+ web shops
                                and multiple currencies. Automated Alerts and tools help product managers to find
                                price discrepancies and correct them
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
                        <Item.Header content='Data Science and Automation Lead'
                        />
                        <Item.Meta><Flag name='de'/> Berlin • May 2016 - October 2018</Item.Meta>
                        <Item.Description>
                            <p>
                                <a href='https://www.nu3.de/'>Nu3 GmbH</a>
                            </p>
                            <Segment>
                                <strong>• Automated Bidding Algorithms</strong> – Authored several Google Ads bidding
                                algorithms and end to end data pipelines taking into account cost per click bid history
                                using measures related to user behavior
                            </Segment>
                            <Segment>
                                <strong>• Customer Lifetime Value Modeling</strong> – Implemented regression and
                                classification models to identify channels where high lifetime value customers where
                                being acquired and adjust spend programmatically
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
                        <Item.Header content='Data Scientist'
                        />
                        <Item.Meta><Flag name='de'/> Berlin • August 2015 - April 2016</Item.Meta>
                        <Item.Description>
                            <p>
                                <a href='https://www.kayak.com/'>Kayak</a>
                            </p>
                            <Segment>
                                <strong>• Automated Bidding Algorithms</strong> – Worked on writing etc pipelines, unit
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
                        <Item.Header content='Analytics Intern'
                        />
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
