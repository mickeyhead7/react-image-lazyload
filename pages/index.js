import React from 'react';
import LazyImage, { Source } from '../src/index';

const lowres = 'https://crowdcube-prototype.imgix.net/opportunity_images/20938/201602/cover_image_001f58fedff5baf1f0f8a800719a461d.jpg?w=1280&h=300&blur=1000';
const small = 'https://crowdcube-prototype.imgix.net/opportunity_images/20938/201602/cover_image_001f58fedff5baf1f0f8a800719a461d.jpg?w=320&h=300';
const medium = 'https://crowdcube-prototype.imgix.net/opportunity_images/20938/201602/cover_image_001f58fedff5baf1f0f8a800719a461d.jpg?w=640&h=300';
const large = 'https://crowdcube-prototype.imgix.net/opportunity_images/20938/201602/cover_image_001f58fedff5baf1f0f8a800719a461d.jpg?w=1280&h=300';

export default () => (
    <div>
        <div>Scroll down :)</div>
        <div style={{height: '2000px'}} />
        <LazyImage
            src={lowres}
            width={'1280px'}
            height={'300px'}
            backgroundColor="#217CB5"
        >
            <Source
                srcSet={small}
                media={'(max-width: 20em)'}
            />
            <Source
                srcSet={medium}
                media={'(min-width: 20.0625em) and (max-width: 40em)'}
            />
            <Source
                srcSet={large}
                media={'(min-width: 40.0625em)'}
            />
        </LazyImage>
    </div>
);
