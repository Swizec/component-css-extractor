import e from"css";function r(e){return[e.className].concat(Array.from(e.children).map(r)).flat()}export default function(t){var n=r(t).map(function(e){return e.split(" ")}).flat().map(function(e){return"."+e}),u=Array.from(document.head.getElementsByTagName("style")).map(function(e){return e.innerHTML}).join(""),o=e.parse(u);return o.stylesheet.rules=o.stylesheet.rules.filter(function(e){return"rule"===e.type}).filter(function(e){return e.selectors.some(function(e){return n.some(function(r){return r===e})})}),e.stringify(o)}
//# sourceMappingURL=index.mjs.map