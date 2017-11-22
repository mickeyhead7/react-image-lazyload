import propTypes, { string } from 'prop-types';
import classNames from 'classnames';
import React, { cloneElement, Component } from 'react';
import { getContainerStyles, pictureStyles, pictureLoadedStyles } from './styles';

/**
 * @description Lazy load image component
 */
export default class extends Component {
    /**
     * @description prop-types
     */
    static propTypes = {
        backgroundColor: propTypes.string,
        src: string.propTypes.isRequired,
    };

    /**
     * @description Initial component state
     */
    state = {
        inView: false,
        loaded: false,
    };

    /**
     * @description On mount
     */
    componentDidMount () {
        this.handleObserver();
    }

    /**
     * @description Handle the observer
     */
    handleObserver = () => {
        if (this.node) {
            if (!('IntersectionObserver' in window)) {
                this.setState({
                    inView: true,
                });

                return;
            }

            const callback = (entries) => {
                entries.forEach(entry => {
                    this.setState({
                        inView: entry.isIntersecting,
                    });
                });
            };
            const options = {
                threshold: 0,
            };
            const observer = new IntersectionObserver(callback, options);

            observer.observe(this.node);
        }
    };

    /**
     * @description Set the loaded status
     */
    setLoadedStatus = () => {
        this.setState({
            loaded: true,
        });
    };

    /**
     * @description Render the component
     *
     * @returns {XML}
     */
    render () {
        const { backgroundColor } = this.props;
        const containerStyles = getContainerStyles({
            backgroundColor: backgroundColor,
        });
        const classes = classNames({
            [pictureStyles]: true,
            [pictureLoadedStyles]: this.state.loaded,
        });

        return (
            <div className={containerStyles} ref={node => this.node = node}>
                <Picture {...this.props} aggressiveLoad={true} className={classes}>
                    {this.state.inView ? (
                        React.Children.map(this.props.children, child => cloneElement(child, {
                            onMounted: this.setLoadedStatus,
                        }))
                    ) : null}
                </Picture>
            </div>
        );
    }
}

/**
 * @description Picture element
 */
export class Picture extends Component {
    /**
     * @description prop-types
     */
    static propTypes = {
        src: propTypes.string,
    };

    /**
     * @description Render the component
     *
     * @returns {XML}
     */
    render () {
        return (
            <Imgix { ...this.props } type="picture">
                {this.props.children}
            </Imgix>
        );
    }
}

/**
 * @description Img element
 */
export class Img extends Component {
    /**
     * @description prop-types
     */
    static propTypes = {
        src: propTypes.string,
    };

    /**
     * @description Render the component
     *
     * @returns {XML}
     */
    render () {
        return (
            <Imgix { ...this.props } type="img" />
        );
    }
}

/**
 * @description Source element
 */
export class Source extends Component {
    /**
     * @description prop-types
     */
    static propTypes = {
        src: propTypes.string,
    };

    /**
     * @description Render the component
     *
     * @returns {XML}
     */
    render () {
        return (
            <Imgix { ...this.props } type="source" />
        );
    }
}
