import Imgix from 'react-imgix';
import React, { Component } from 'react';

export default class Source extends Component {
    render () {
        const props = this.props;

        return (
            <Imgix { ...props } type="source" />
        );
    }
}
