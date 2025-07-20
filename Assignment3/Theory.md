## Namaste React Course by Akshay Saini

# Episode 03 - Laying the Foundation

- ECMAScript is the rulebook. JavaScript is the actual game played using those rules.
- Each version brings new features to JavaScript:

      ES5 (2009) – Added strict mode, JSON support

      ES6 / ES2015 – Added let, const, arrow functions, classes, promises

      ES7, ES8...ES2024 – Add more modern features every year

- React.createElement=>object=>Html Element(render)

## Q: What is `JSX`?

A: JSX stands for JavaScript XML.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
JSX makes it easier to write and add HTML in React.
JSX converts HTML tags into react elements.

Note:-
- Jsx is not the part of the React
- Jsx is Html like syntax not html inside the javascript
- Jsx- HTML-like or XML Like Syntax
- creating element by using createElement is not developer friendly and facebook engineer realise it and made JSX
- Before Reaches to Js Engine (Parcel->Bable) transpile your jsx code because js engine only understand Ecmascript
- If You want to give attribute to jsx then it should be in camelCase.
- JSX->Babel transpiles it->React.CreateElement->React Element Js Object->Html element(Render)

### Example 1 using JSX:

```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

### Example 2 Without JSX:

```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

## Q: Superpowers of `JSX`.

A: Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

### Example

```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```
## Q:How many types of React Component??
A: 
Functional and the class Component

Functional Component:
- it is just a javascript function which returns the some piece of jsx or React Element.
- Write FC in the capital Letter
- Component compostion means put one or more component in a single component