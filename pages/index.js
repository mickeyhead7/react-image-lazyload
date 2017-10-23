import React from 'react';
import Source from '../src/Source';
import Picture from '../src/Picture';

const src = 'https://crowdcube-prototype.imgix.net/opportunity_images/20938/201602/cover_image_001f58fedff5baf1f0f8a800719a461d.jpg';

export default () => (
    <div>
        <Picture
            src={src}
            width={1280}
            height={300}
            aggressiveLoad={true}
            customParams={{
                quality: 1,
            }}
        >
            <Source
                src={src}
                width={320}
                height={300}
                imgProps={{
                    media: '(max-width: 320px)'
                }}
            />
            <Source
                src={src}
                width={640}
                height={300}
                imgProps={{
                    media: '(max-width: 640px)'
                }}
            />
            <Source
                src={src}
                width={960}
                height={300}
                imgProps={{
                    media: '(max-width: 960px)'
                }}
            />
            <Source
                src={src}
                width={1280}
                height={300}
                imgProps={{
                    media: '(min-width: 961px)'
                }}
            />
        </Picture>
        <style global jsx>{`
            body {
                margin: 0;
                min-width: 20em;
                padding: 0;
            }
            picture {
                margin: 0;
                padding: 0;
            }
            img {
                max-width: 100%;
            }
        `}</style>
    </div>
);
