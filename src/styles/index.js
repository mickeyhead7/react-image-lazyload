import { css } from 'glamor';

export const getContainerStyles = props => css({
    backgroundColor: props.backgroundColor || '#cccccc',
    display: 'inline-block',
    overflow: 'hidden',
});

export const imgStyles = css({
    display: 'block',
    filter: 'blur(50px)',
    '& img': {
        display: 'block',
        maxWidth: '100%',
    },
});

export const imgLoadedStyles = css({
    filter: 'blur(0)',
    transition: 'filter 1s ease-in-out',
});
