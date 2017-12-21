'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Source = exports.Picture = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description Lazy load image component
 */
var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            hasViewed: false,
            isLoaded: false
        }, _this.initObserver = function () {
            _this.node = _reactDom2.default.findDOMNode(_this);

            if (!_this.node) {
                return;
            }

            if (!('IntersectionObserver' in window)) {
                _this.setState({
                    hasViewed: true
                });

                return;
            }

            var callback = function callback(entries) {
                entries.forEach(function (entry) {
                    var hasViewed = _this.state.hasViewed || entry.isIntersecting;

                    _this.setState({
                        hasViewed: hasViewed
                    });
                });
            };
            var options = {
                threshold: 0
            };

            _this.observer = new IntersectionObserver(callback, options);
            _this.observer.observe(_this.node);
        }, _this.addImageListener = function () {
            if (!_this.node) {
                return;
            }

            _this.img = _this.node.querySelector('img');

            if (!_this.img) {
                return;
            }

            _this.img.addEventListener('load', _this.setLoadedStatus);
        }, _this.setLoadedStatus = function () {
            _this.setState({
                isLoaded: true
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    /**
     * @description prop-types
     */


    /**
     * @description Initial component state
     */


    _createClass(_class, [{
        key: 'componentDidMount',


        /**
         * @description On mount
         */
        value: function componentDidMount() {
            this.initObserver();
        }

        /**
         * @description Cleanup on unmount
         */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
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


        /**
         * @description Adds a listener to the component image
         */


        /**
         * @description Set the loaded status of the component img
         */

    }, {
        key: 'render',


        /**
         * @description Render the component
         *
         * @returns {XML}
         */
        value: function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                backgroundColor = _props.backgroundColor,
                height = _props.height,
                width = _props.width;

            var containerStyles = (0, _styles.getContainerStyles)({
                backgroundColor: backgroundColor,
                height: height,
                width: width
            });
            var classes = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, _styles.pictureStyles, true), _defineProperty(_classNames, _styles.pictureLoadedStyles, this.state.isLoaded), _classNames));

            // Mount the picture element if no child components are set
            var onMountPicture = typeof this.props.children !== 'undefined' || !this.props.children ? this.addImageListener : function () {};

            return _react2.default.createElement(
                'div',
                { className: containerStyles },
                this.state.hasViewed ? _react2.default.createElement(
                    Picture,
                    _extends({}, this.props, {
                        className: classes,
                        onMounted: onMountPicture
                    }),
                    _react2.default.Children.map(this.props.children, function (child) {
                        return (0, _react.cloneElement)(child, {
                            onMounted: _this2.addImageListener
                        });
                    }),
                    _react2.default.createElement(Img, _extends({}, this.props, {
                        src: this.props.src
                    }))
                ) : null
            );
        }
    }]);

    return _class;
}(_react.Component);

/**
 * @description Picture element
 */


_class.propTypes = {
    backgroundColor: _propTypes2.default.string,
    height: _propTypes2.default.number,
    src: _propTypes2.default.string.isRequired,
    width: _propTypes2.default.number
};
exports.default = _class;

var Picture = exports.Picture = function (_Component2) {
    _inherits(Picture, _Component2);

    function Picture() {
        _classCallCheck(this, Picture);

        return _possibleConstructorReturn(this, (Picture.__proto__ || Object.getPrototypeOf(Picture)).apply(this, arguments));
    }

    _createClass(Picture, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.onMounted) {
                this.props.onMounted();
            }
        }

        /**
         * @description Render the component
         *
         * @returns {XML}
         */

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'picture',
                { className: this.props.className },
                this.props.children
            );
        }
    }]);

    return Picture;
}(_react.Component);

/**
 * @description Source element
 */


Picture.propTypes = {
    onMounted: _propTypes2.default.func
};

var Source = exports.Source = function (_Component3) {
    _inherits(Source, _Component3);

    function Source() {
        _classCallCheck(this, Source);

        return _possibleConstructorReturn(this, (Source.__proto__ || Object.getPrototypeOf(Source)).apply(this, arguments));
    }

    _createClass(Source, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.onMounted) {
                this.props.onMounted();
            }
        }

        /**
         * @description Render the component
         *
         * @returns {XML}
         */

        /**
         * @description prop-types
         */

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('source', {
                media: this.props.media,
                srcSet: this.props.srcSet
            });
        }
    }]);

    return Source;
}(_react.Component);

/**
 * @description Img element
 */


Source.propTypes = {
    media: _propTypes2.default.string.isRequired,
    onMounted: _propTypes2.default.func,
    srcSet: _propTypes2.default.string.isRequired
};

var Img = function (_Component4) {
    _inherits(Img, _Component4);

    function Img() {
        _classCallCheck(this, Img);

        return _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).apply(this, arguments));
    }

    _createClass(Img, [{
        key: 'render',


        /**
         * @description Render the component
         *
         * @returns {XML}
         */
        value: function render() {
            return _react2.default.createElement('img', {
                alt: this.props.alt,
                src: this.props.src,
                title: this.props.title
            });
        }
        /**
         * @description prop-types
         */

    }]);

    return Img;
}(_react.Component);

Img.propTypes = {
    alt: _propTypes2.default.string,
    src: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string
};