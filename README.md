# image-component
Isomorphic image component, utilising lazy load and responsive transitions

# Usage

## JavaScript

Typically within your React component's `render` method:

```javascript
import Image from 'react-image-lazyload';

const src1 = 'https://www.yourdomain.com/your-image-1.jpg';
const src2 = 'https://www.yourdomain.com/your-image-2.jpg';
const src3 = 'https://www.yourdomain.com/your-image-3.jpg';
const src4 = 'https://www.yourdomain.com/your-image-4.jpg';

<Image
    src={src1}
    width={1280}
    height={300}
    customParams= {{
        quality: 1,
    }}
    backgroundColor="#217CB5"
>
    <Source
        src={src2}
        width={320}
        height={300}
        imgProps={{
            media: '(max-width: 20em)'
        }}
    />
    <Source
        src={src3}
        width={640}
        height={300}
        imgProps={{
            media: '(min-width: 20.0625em) and (max-width: 40em)'
        }}
    />
    <Source
        src={src4}
        width={960}
        height={300}
        imgProps={{
            media: '(min-width: 40.0625em)'
        }}
    />
</Image>
```

## Parameters

### Image (parent) component

Parameter       | Type    | Default value | Required | Description
--------------- | ------- | ------------- | ---------| -----------
src             | string  |               | Yes      | Default image to render
width           | integer |               | No       | Default image width
height          | integer |               | No       | Default image height
backgroundColor | string  | #cccccc       | No       | Background colour for image placeholder
customParams    | object  |               | No       | Used for custom image parameters; see [react-imgix documentation](https://github.com/imgix/react-imgix#customparamsobject)

### Source (child) component

Parameter       | Type    | Default value | Required | Description
--------------- | ------- | ------------- | ---------| -----------
src             | string  |               | Yes      | Default image to render
width           | integer |               | No       | Default image width
height          | integer |               | No       | Default image height
imgProps        | object  |               | Yes      | Used for media query support; see [react-imgix documentation](https://github.com/imgix/react-imgix#imgpropsobject)

### Custom parameters

You can also pass through any other parameters as you would normally in React. This is usefull for passing 
[parameters supported by react-imgix](https://github.com/imgix/react-imgix).

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

* Enforce prop-types
* Add unit tests
* Provide CSS styles fallback for those not using server-side rendering with Glamor

# Credits

This package was created thanks to the following:

* [React](https://reactjs.org)
* [react-imgix](https://github.com/imgix/react-imgix)
* [Glamor](https://github.com/threepointone/glamor)
* [prop-types](https://www.npmjs.com/package/prop-types)
* [NextJS](https://github.com/zeit/next.js)

# Licence

Free for use by one and all under the [General Public Licence](./LICENCE). It would be nice if you use 
this in a project to give me a mention :)
