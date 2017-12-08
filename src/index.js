import Imgix from 'react-imgix';
import ReactDOM from 'react-dom';
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
        hasViewed: false,
        isLoaded: false,
    };

    /**
     * @description On mount
     */
    componentDidMount () {
        this.initObserver();
    }

    /**
     * @description Cleanup on unmount
     */
    componentWillUnmount () {
        if (this.img) {
            this.img.removeEventListener('load', this.setLoadedStatus);
        }

        this.observer.unobserve(this.node);
        this.observer = null;
        this.node = null;
    }

    /**
     * @description Initialize the observer
     */
    initObserver = () => {
        this.node = ReactDOM.findDOMNode(this);
        
        if (!this.node) {
            return;
        }

        if (!('IntersectionObserver' in window)) {
            this.setState({
                hasViewed: true,
            });

            return;
        }

        const callback = (entries) => {
            entries.forEach(entry => {
                const hasViewed = this.state.hasViewed || entry.isIntersecting;

                this.setState({
                    hasViewed,
                });
            });
        };
        const options = {
            threshold: 0,
        };
        
        this.observer = new IntersectionObserver(callback, options);
        this.observer.observe(this.node);
    };

    /**
     * @description Adds a listener to the component image
     */
    addImageListener = () => {
        if (!this.node) {
            return;
        }

        this.img = this.node.querySelector('img');

        if (!this.img) {
            return;
        }

        this.img.addEventListener('load', this.setLoadedStatus);
    };

    /**
     * @description Set the loaded status of the component img
     */
    setLoadedStatus = () => {
        this.setState({
            isLoaded: true,
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
            [pictureLoadedStyles]: this.state.isLoaded,
        });

        // Mount the picture element if no child components are set
        const onMountPicture = typeof this.props.children !== 'undefined' || !this.props.children
            ? this.addImageListener 
            : () => {};

        return (
            <div className={containerStyles}>
                {this.state.hasViewed ? (
                    <Picture 
                        {...this.props} 
                        className={classes}
                        onMounted={onMountPicture}
                    >
                        {React.Children.map(this.props.children, child => cloneElement(child, {
                            onMounted: this.addImageListener,
                        }))}
                    </Picture>
                ) : null}
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
