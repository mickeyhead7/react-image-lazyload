'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pictureLoadedStyles = exports.pictureStyles = exports.getContainerStyles = undefined;

var _glamor = require('glamor');

/**
 * @description Getter for container styles
 *
 * @param props Style properties
 */
var getContainerStyles = exports.getContainerStyles = function getContainerStyles(props) {
    return (0, _glamor.css)({
        backgroundColor: props.backgroundColor || '#cccccc',
        display: 'inline-block',
        height: props.height || 'auto',
        overflow: 'hidden',
        width: props.width || 'auto'
    });
};

/**
 * @description Picture element styles
 *
 * @type {StyleAttribute|*}
 */
var pictureStyles = exports.pictureStyles = (0, _glamor.css)({
    display: 'block',
    filter: 'blur(50px)',
    '& img': {
        display: 'block',
        maxWidth: '100%'
    }
});

/**
 * @description Picture loaded styles
 *
 * @type {StyleAttribute|*}
 */
var pictureLoadedStyles = exports.pictureLoadedStyles = (0, _glamor.css)({
    filter: 'blur(0)',
    transition: 'filter 1s ease-in-out'
});