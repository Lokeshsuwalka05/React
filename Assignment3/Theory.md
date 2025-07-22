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

React Functional Component:
- it is just a javascript function which returns the some piece of jsx or React Element.
- Write FC in the capital Letter
- Component compostion means put one or more component in a single component


## Q: Role of `type` attribute in script tag? What options can I use there?

A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.

### `type` attribute can be of the following types:

- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
  ### Syntax
  ```
  <script type="text/javascript"></script>
  ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

A: The Difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable.
  The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
  A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

### Example

```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

### if there are no child elements, then we can write

```
<TitleComponent />
```
