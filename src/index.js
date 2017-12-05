import Imgix from 'react-imgix';
import classNames from 'classnames';
import propTypes, { string } from 'prop-types';
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
        height: propTypes.number,
        src: propTypes.string.isRequired,
        width: propTypes.number,
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

        // Auto load if there are no children
        if (!this.props.children) {
            this.setLoadedStatus();
        }
    }

    componentWillUnmount () {
        this.observer.unobserve(this.node);
        this.node = null;
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
            
            this.observer = new IntersectionObserver(callback, options);
            this.observer.observe(this.node);
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
        const { backgroundColor, height, width } = this.props;
        const containerStyles = getContainerStyles({
            backgroundColor,
            height,
            width,
        });
        const classes = classNames({
            [pictureStyles]: true,
            [pictureLoadedStyles]: this.state.loaded,
        });

        return (
            <div className={containerStyles} ref={node => this.node = node}>
                <Picture 
                    {...this.props} 
                    aggressiveLoad={true} 
                    className={classes}
                >
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
