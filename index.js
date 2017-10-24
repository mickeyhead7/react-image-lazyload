import classNames from 'classnames';
import Picture from './src/Picture';
import React, { cloneElement, Component } from 'react';

export default class extends Component {
    state = {
        loaded: false,
        mounted: false,
    };

    componentDidMount () {
        this.setState({
            mounted: true,
        });
    }

    onLoad = () => {
        this.setState({
            loaded: true,
        });
    };

    render () {
        const classes = classNames({
            image: true,
            loaded: this.state.mounted,
        });

        return (
            <div className={classes}>
                <Picture {...this.props} aggressiveLoad={true}>
                    {this.state.mounted ? (
                        React.Children.map(this.props.children, child => cloneElement(child, {
                            onMounted: this.onLoad,
                        }))
                    ) : null}
                </Picture>
                <style jsx>{`
                    .image {
                        filter: blur(25px);
                        margin: -25px;
                        overflow: hidden;
                    }
                    .loaded {
                        filter: none;
                        transition: filter ${this.props.transitionSpeed} ease-in-out;
                    }
                `}</style>
            </div>
        );
    }
}
