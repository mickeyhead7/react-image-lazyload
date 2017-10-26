import React from 'react';
import Source from '../src/Source';
import Image from '../index';

const src = 'https://crowdcube-prototype.imgix.net/opportunity_images/20938/201602/cover_image_001f58fedff5baf1f0f8a800719a461d.jpg';

export default () => (
    <div>
        <Image
            src={src}
            width={1280}
            height={300}
            customParams= {{
                quality: 1,
                // blur: 200,
            }}
            transitionSpeed="1s"
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
                    media: '(max-width: 40em)'
                }}
            />
            <Source
                src={src}
                width={960}
                height={300}
                imgProps={{
                    media: '(max-width: 60em)'
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
