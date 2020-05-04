import React, {Component} from 'react';
import {Item, Responsive, Tab} from 'semantic-ui-react'

export default class JobItem extends Component {

    getPanes() {
        return [
            {
                menuItem: {content: <b>Data Engineering</b>}, render: () => <Tab.Pane>
                    DE stuff
                </Tab.Pane>
            },
            {
                menuItem: {content: <b>Customer Retention</b>}, render: () => <Tab.Pane>
                    CR Stuff
                </Tab.Pane>
            },
            {
                menuItem: {content: <b>Behavioral Targeting</b>}, render: () => <Tab.Pane>
                    BT Stuff
                </Tab.Pane>
            },
        ]
    }

    render() {
        return (
            <Item.Group>
                <Item
                >
                    <Item.Image size='tiny'
                                src='bbg.png'
                    />
                    <Item.Content>
                        <Item.Header content='Lead Data & Analytics Engineer'
                        />
                        <Item.Description>
                            <p>
                                <a href='https://www.berlin-brands-group.com/'>Berlin Brands Group GmbH</a>
                            </p>
                            <p>
                                <Tab
                                    menu={{
                                        vertical: true,
                                        fluid: true
                                    }}
                                    menuPosition='left'
                                    panes={this.getPanes()}
                                />
                            </p>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        );
    }
}
