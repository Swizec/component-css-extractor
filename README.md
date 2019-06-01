# 👨‍🎨 component-css-extractor

Extract CSS from any scoped styles in a component framework. In the browser.

Try it in a CodeSandbox 👇

[![CodeSandbox thumbnail](https://s3.amazonaws.com/techletter.app/screenshot-1559432321264.png)](https://codesandbox.io/s/heuristic-leakey-b645b)

## How to use

```
$ yarn add component-css-extractor
```

To extract CSS from any component, use the `extractCSS` method with a DOM node reference.

```javascript
import extractCSS from 'component-css-extractor'

// ...
const styles = extractCSS(node);
```

Tested with React and styled-componets, but should work on anything that renders to the DOM and puts class-based CSS in `<style>` tags in your HTML header. Works on CodeSandbox and create-react-app. Probably others. ✌️

Happy CSS extracting! ❤️

PS:  👨‍🎨 component-css-extractor won't work with server-side-rendering. This is purely a client-side library. There are plenty of built-in solutions for the server.

## But why?

![](https://s3.amazonaws.com/techletter.app/screenshot-1559432321264.png)

I built this for a project where I needed to export parts of my UI to raw HTML. Getting the HTML is easy, but you need styles as well or it doesn't work that great.

Turns out extracting the styles isn't so trivial. Styled-components supports it when you're doing server-side-rendering, but not in the browser.

Using `element.getComputedStyle` works okay, but produces too much code. You get values for every CSS property in the standard, not just what you defined.

If you wanna see all the approaches I tried before landing on this one, you can watch this video.

[![](https://s3.amazonaws.com/techletter.app/screenshot-1559432795164.png)](https://www.youtube.com/watch?v=v-akMfXZZNE)