# image-component

[![Greenkeeper badge](https://badges.greenkeeper.io/mickeyhead7/react-image-lazyload.svg)](https://greenkeeper.io/)
Isomorphic image component, utilising lazy load and responsive transitions

# Usage

## JavaScript

Typically within your React component's `render` method:

```javascript
import LazyImage, { Source } from 'react-image-lazyload';

const lowres = 'https://www.yourdomain.com/your-image-1.jpg';
const small = 'https://www.yourdomain.com/your-image-2.jpg';
const medium = 'https://www.yourdomain.com/your-image-3.jpg';
const large = 'https://www.yourdomain.com/your-image-4.jpg';

<Image
    src={lowres}
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
</Image>
```

## Parameters

### Parent component

Parameter       | Type    | Default value | Required | Description
--------------- | ------- | ------------- | ---------| -----------
backgroundColor | string  | #cccccc       | No       | Background colour for image placeholder
height          | string  |               | No       | Image placeholder height (can be px, em, rem, vh, etc)
src             | string  |               | Yes      | Default image to render (typically lowres)
width           | string  |               | No       | Image placeholder width (can be px, em, rem, vw, etc)

### Source (child) component

Parameter       | Type    | Default value | Required | Description
--------------- | ------- | ------------- | ---------| -----------
srcSet          | string  |               | Yes      | Default image to render
media           | string  |               | Yes      | Media query parameters

### Styling

This uses [Glamor](https://github.com/threepointone/glamor) for CSS-in-JS styling. If you require 
server-side rendering please see the 
[Glamor how-to](https://github.com/threepointone/glamor/blob/master/docs/server.md).

This has been implemented in the 
[demo](https://github.com/mickeyhead7/react-image-lazyload/blob/master/pages/_document.js) 
with [NextJS](https://github.com/zeit/next.js).

# Build

Run `yarn build` to compile src code into the `dist` folder.

# Demo

When developing, run `yarn demo:dev`. Then preview this in your [browser](http://localhost:3000). 
Please note, you will not be able to fully test lazyloading in this mode, as NextJS hot-reloading 
blocks the event used to detect the DOM loaded state.

To fully test, run `yarn demo` before previewing in your [browser](http://localhost:3000); 
everything will work in this mode.

# @todo

* Add unit tests
* Provide CSS styles fallback for those not using server-side rendering with Glamor

# Credits

This package was created thanks to the following:

* [React](https://reactjs.org)
* [Glamor](https://github.com/threepointone/glamor)
* [prop-types](https://www.npmjs.com/package/prop-types)
* [NextJS](https://github.com/zeit/next.js)

# Licence

Free for use by one and all under the [General Public Licence](./LICENCE). It would be nice if you use 
this in a project to give me a mention :)
