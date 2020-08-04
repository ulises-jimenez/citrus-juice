import React, {Component} from 'react';
import {Item, Segment, Flag} from 'semantic-ui-react'


const imageCenteringStyle = {
    marginBottom: 'auto'
};

export default class EducationItem extends Component {

    createEducationIndividualItems() {
        return (
            <>
                <Item
                >
                    <Item.Image size='tiny'
                                src='baer.png'
                                style={imageCenteringStyle}
                    />
                    <Item.Content>
                        <Item.Header content='Hochschule für Wirtschaft und Recht Berlin - Berlin School of Economics'
                        />
                        <Item.Meta><Flag name='de'/> Berlin, Germany • 2012 - 2014</Item.Meta>
                        <Item.Description>
                            <p>
                                <a href='https://www.hwr-berlin.de/' target='_blank' rel='noopener noreferrer'>HWR
                                    Website</a>
                            </p>
                            <Segment>
                                <strong>Master of Science: International Finance</strong>
                            </Segment>
                        </Item.Description>
                    </Item.Content>
                </Item>
                <Item
                >
                    <Item.Image size='tiny'
                                src='ucsc.jpg'
                                style={imageCenteringStyle}
                    />
                    <Item.Content>
                        <Item.Header content='UC Santa Cruz'
                        />
                        <Item.Meta><Flag name='us'/> Santa Cruz, CA • 2006 - 2011</Item.Meta>
                        <Item.Description>
                            <p>
                                <a href='https://www.ucsc.edu/' target='_blank' rel='noopener noreferrer'>UCSC
                                    Website</a>
                            </p>
                            <Segment>
                                <strong>Bachelor of Arts: Global Economics and Mathematics</strong>
                            </Segment>
                        </Item.Description>
                    </Item.Content>
                </Item>
                <Item
                >
                    <Item.Image size='tiny'
                                src='odowd.jpg'
                                style={imageCenteringStyle}
                    />
                    <Item.Content>
                        <Item.Header content={'Bishop O\'Dowd High School'}
                        />
                        <Item.Meta><Flag name='us'/> Oakland, CA • 2002 - 2006</Item.Meta>
                        <Item.Description>
                            <p>
                                <a href='https://www.bishopodowd.org/' target='_blank' rel='noopener noreferrer'>Bishop
                                    O'Dowd Website</a>
                            </p>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </>
        )
    }


    render() {
        return (
            <Item.Group divided>
                {this.createEducationIndividualItems()}
            </Item.Group>
        );
    }
}
