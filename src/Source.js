import Imgix from 'react-imgix';
import propTypes from 'prop-types';
import React, { Component } from 'react';

export default class Source extends Component {
    static propTypes = {
        src: propTypes.string,
    };

    render () {
        return (
            <Imgix { ...this.props } type="source" />
        );
    }
}
