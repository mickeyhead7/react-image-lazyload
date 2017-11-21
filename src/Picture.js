import Imgix from 'react-imgix';
import propTypes from 'prop-types';
import React, { Component } from 'react';

export default class Picture extends Component {
    static propTypes = {
        src: propTypes.string,
    };

    render () {
        return (
            <Imgix { ...this.props } type="picture">
                {this.props.children}
            </Imgix>
        );
    }
}
