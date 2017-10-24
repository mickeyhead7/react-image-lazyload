import Imgix from 'react-imgix';
import React, { Component } from 'react';

export default class Picture extends Component {
    render () {
        return (
            <Imgix
                { ...this.props }
                type="picture"
            >
                {this.props.children}
            </Imgix>
        );
    }
}
