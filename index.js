import classNames from 'classnames';
import Picture from './src/Picture';
import Observer from 'react-intersection-observer';
import React, { cloneElement, Component } from 'react';
import { getContainerStyles, imgStyles, imgLoadedStyles } from './src/styles';

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
        const { backgroundColor } = this.props;
        const containerStyles = getContainerStyles({
            backgroundColor: backgroundColor,
        });
        const classes = classNames({
            [imgStyles]: true,
            [imgLoadedStyles]: this.state.loaded,
        });

        return (
            <div>
                <div>Scroll down :)</div>
                <div style={{height: '2000px;'}} />
                <Observer>
                    {inView => (
                        <div className={containerStyles}>
                            <Picture {...this.props} aggressiveLoad={true} className={classes}>
                                {inView && this.state.mounted ? (
                                    React.Children.map(this.props.children, child => cloneElement(child, {
                                    onMounted: this.onLoad,
                                }))) : null}
                            </Picture>
                        </div>
                    )}
                </Observer>
            </div>
        );
    }
}
