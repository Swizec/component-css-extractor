import css from "css";

function getClassNames(node) {
    return [
        node.className,
        ...Array.from(node.children).map(getClassNames)
    ].flat();
}

export default function extractCSS(node) {
    // Collect class names for a DOM subtree
    // Works for styled-components and CSS modules (anything based on CSS classes)
    const classNames = getClassNames(node)
        .map(name => name.split(" "))
        .flat()
        .map(name => `.${name}`);

    // Gets embedded CSS for the entire page
    const cssStyles = Array.from(document.head.getElementsByTagName("style"))
        .map(style => style.innerHTML)
        .join("");

    // Filters CSS for our classes
    const parsedCSS = css.parse(cssStyles);
    parsedCSS.stylesheet.rules = parsedCSS.stylesheet.rules
        .filter(rule => rule.type === "rule")
        .filter(rule =>
            rule.selectors.some(selector =>
                classNames.some(name => name === selector)
            )
        );

    return css.stringify(parsedCSS);
}
