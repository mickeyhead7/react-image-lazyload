import Imgix from 'react-imgix';
import classNames from 'classnames';
import React, { Component } from 'react';

export default class Picture extends Component {
    state = {
        mounted: false,
    };

    removeBlur = () => {
        this.setState({
            mounted: true,
        });
    };

    render () {
        const props = this.props;
        const classes = classNames({
            image: true,
            mounted: this.state.mounted,
        });

        return (
            <div className={classes}>
                <Imgix
                    { ...props }
                    type="picture"
                >
                    {React.Children.map(this.props.children, child => React.cloneElement(child, {
                        onMounted: this.removeBlur,
                    }))}
                </Imgix>
                <style jsx>{`
                    .image {
                        filter: blur(10px);
                    }
                    .mounted {
                        filter: none;
                    }
                `}</style>
            </div>
        );
    }
}
