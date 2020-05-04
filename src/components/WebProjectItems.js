import React, {Component} from 'react';
import {Item} from 'semantic-ui-react'

export default class ProjectItem extends Component {

    getItems(src) {
        return [
    {
        childKey: 0,
        image: src, //should be a screenshot of the project webpage
        header: 'Header',
        description: 'Description',
        meta: 'Metadata',
        extra: 'Extra',
    },
    {
        childKey: 1,
        image: src,
        header: 'Header',
        description: 'Description',
        meta: 'Metadata',
        extra: 'Extra',
    },
];
    }

    render() {
        return (
            <Item.Group items={this.getItems(this.props.imgSrc)}/>
        );
    }
}
