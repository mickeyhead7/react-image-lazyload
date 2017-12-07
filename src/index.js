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
     * @description On unmount
     */
    componentWillUnmount () {
        this.observer.unobserve(this.node);
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
     * @description Set the loaded status when the image is loaded
     */
    setLoadedStatus = () => {
        if (!this.node) {
            return;
        }

        const img = this.node.querySelector('img');

        if (!img) {
            return;
        }

        img.onload = () => {
            this.setState({
                isLoaded: true,
            });
        }
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
        const onMountPicture = !this.props.children 
            ? this.setLoadedStatus.bind(this) 
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
                            onMounted: this.setLoadedStatus.bind(this),
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
