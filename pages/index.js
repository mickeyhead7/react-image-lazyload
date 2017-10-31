import React from 'react';
import Source from '../src/Source';
import Image from '../index';

const src = 'https://crowdcube-prototype.imgix.net/opportunity_images/20938/201602/cover_image_001f58fedff5baf1f0f8a800719a461d.jpg';

export default () => (
    <div>
        <div>Scroll down :)</div>
        <div style={{height: '2000px'}} />
        <Image
            src={src}
            width={1280}
            height={300}
            customParams= {{
                quality: 1,
                // blur: 200,
            }}
            backgroundColor="#217CB5"
        >
            <Source
                src={src}
                width={320}
                height={300}
                imgProps={{
                    media: '(max-width: 20em)'
                }}
            />
            <Source
                src={src}
                width={640}
                height={300}
                imgProps={{
                    media: '(min-width: 20.0625em) and (max-width: 40em)'
                }}
            />
            <Source
                src={src}
                width={960}
                height={300}
                imgProps={{
                    media: '(min-width: 40.0625em) and (max-width: 60em)'
                }}
            />
            <Source
                src={src}
                width={1280}
                height={300}
                imgProps={{
                    media: '(min-width: 60.0625em)'
                }}
            />
        </Image>
    </div>
);
