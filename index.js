import { css } from 'glamor';
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
        const containerStyles = css({
            background: this.props.backgroundColor || '#cccccc',
            display: 'inline-block',
            overflow: 'hidden',
        });
        const imgStyles = css({
            display: 'block',
            filter: 'blur(50px)',
            '& img': {
                display: 'block',
            },
        });
        const loadedStyles = css({
            filter: 'blur(0)',
            transition: `filter ${this.props.transitionSpeed} ease-in-out`,
        });
        const classes = classNames({
            [imgStyles]: true,
            [loadedStyles]: this.state.loaded,
        });

        return (
            <div className={containerStyles}>
                <Picture {...this.props} aggressiveLoad={true} className={classes}>
                    {this.state.mounted ? (
                        React.Children.map(this.props.children, child => cloneElement(child, {
                            onMounted: this.onLoad,
                        }))
                    ) : null}
                </Picture>
            </div>
        );
    }
}
