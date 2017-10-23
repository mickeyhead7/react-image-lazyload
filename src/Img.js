import Imgix from 'react-imgix';
import React, { Component } from 'react';

export default class Img extends Component {
    render () {
        const props = this.props;

        return (
            <Imgix { ...props } type="img" />
        );
    }
}
