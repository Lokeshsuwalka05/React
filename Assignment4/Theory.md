## Namaste React Course by Akshay Saini

# Episode 04 - Talk is Cheap, show me the code

## Q: Is `JSX` mandatory for React?

A: 
- No, JSX is not mandatory in React — but it is highly recommended.
- You can write React using pure JavaScript with React.createElement().

#### Example without JSX:

const heading = React.createElement("h1", {}, "Hello World");

#### Example of `JSX`

JSX is just syntactic sugar for React.createElement, and it's easier to write and read.

const heading = `<h1>Hello World</h1>`;

### `“JSX is not mandatory in React, but it makes the code cleaner and more readable. Behind the scenes, JSX is compiled into React.createElement calls.”`

## Q: Is `ES6` mandatory for React?

A: 
 No, ES6 is not strictly mandatory for React — but it's highly recommended.
## ✅ Explanation:
 React itself is just JavaScript — it works with ES5, but most modern React codebases use ES6+ because:
 | ES6 Feature           | Syntax Example                                   | Why It Helps in React                                |
|-----------------------|--------------------------------------------------|------------------------------------------------------|
| `const` / `let`       | ```js const count = 0; let total = 5; ```        | Safer, block‑scoped variables—avoids accidental re‑assignment. |
| Arrow functions       | ```js const add = (a, b) => a + b; ```           | Concise syntax; keeps `this` lexical (great for event handlers). |
| Classes               | ```js class Button extends React.Component { ... } ``` | Enables class‑based components (lifecycle methods, state). |
| Destructuring         | ```js const { name, age } = props; ```           | Cleaner access to `props` / `state` & nested objects. |
| Template literals     | ```js `Hello, ${userName}!` ```                  | Easier multi‑line strings & interpolation—for dynamic JSX. |
| Spread / Rest `...`   | ```js const newState = { ...state, count: 1 }; ``` | Quickly clone/merge objects & arrays; handy in reducers. |
| Default parameters    | ```js function greet(msg = "Hi") { ... } ```     | Simpler function defaults; reduces guards inside components. |
| Modules `import/export` | ```js export default App;```  ```js import App from "./App"; ``` | Keeps components in separate files; promotes reusable, maintainable code. |

### `“ES6 is not mandatory for React, but it's used almost everywhere because it provides cleaner syntax and makes React code more readable and maintainable.”`

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

A: The Difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable or React element.
  The `{}` can embed a javascript expression or a variable or React element inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. If component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

#### Example

```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

## Q: How can I write `comments` in JSX?

A: JSX comments are written as follows:

- `{/*  */}` - for single or multiline comments

#### Example

```
{/* A JSX comment */}
{/*
  Multi
  line
  JSX
  comment
*/}
```

## Q: What is `<React.Fragment></React.Fragment>` and `<></>`?

A: 
`<React.Fragment>` and its shorthand `<>...</>` are used to group JSX elements without adding extra nodes to the DOM. This helps in writing cleaner JSX and avoids unnecessary wrappers.

- Use React.Fragment (full form) when:
### You want to pass props to the fragment:

#### Example

```
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```
#### Super Powers Of React
- whenever a state variable changes React Rerender the component.
- react is only good at doing DOM operations.
- React makes the DOM Operation SuperFast.

## Q: What is `Reconciliation` in React?

A: 
Reconciliation in React is the process React uses to update the DOM when your component's state or props change.
#### 🧠 In Simple Words:
When something changes in your app (like state or props), React:
- Renders the virtual DOM again with the new data.
- Compares the new virtual DOM with the old one.
- Finds out what changed.
- Updates only the changed parts in the real DOM (not the whole page).
- uses difing algorithm

This process of comparing old and new virtual DOM and updating the actual DOM is called Reconciliation.

## Q: What is `React Fiber`?

A: 
React Fiber is the reconciliation engine (or core algorithm) of React 16 and above.
It improves how React renders components and updates the DOM.

#### 🏗️ Why was Fiber introduced?

Older React (pre-v16) used a stack-based recursive algorithm, which was fast but not interruptible.
If the update was big, the UI could freeze for a moment.

Fiber fixes this with a linked list structure that allows React to:
- Split work into chunks.
- Pause and continue when the browser is free.

`“React Fiber is the reimplementation of React’s core algorithm from v16 onwards. It enables incremental rendering, prioritization of tasks, and better responsiveness by making rendering interruptible and resumable.”`

- incremental rendering:- Breaks rendering into units and spreads them over multiple frames (smoother UI).
- Pause / resume renderin:- React can pause, abort, and resume rendering work.
- Prioritization:-React can assign priority to updates (e.g., user input is more important than loading data).

## Q: Why do we need `keys` in React?

A: 
Keys help React identify which items in a list have changed, been added, or removed.
They make list rendering efficient during updates.

#### Example

```
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
```

## Q: Can we use `index as keys` in React?

A: 
Although using index as keys is allowed in React, it's not recommended unless the list is static. If the list order changes or items are added/removed, React may incorrectly reuse components, causing rendering issues or bugs. Instead, we should use a unique and stable key like an ID from the data itself to help React track elements accurately and update efficiently.

🧪 1. Suppose we have a list of users with an input box to update names:
const [users, setUsers] = useState([
  { id: 1, name: "Lokesh" },
  { id: 2, name: "Sanjay" },
  { id: 3, name: "Amit" },
]);
Now you render inputs to allow editing:

#### ❌ With index as key:

{users.map((user, index) => (
  <input
    key={index}
    value={user.name}
    onChange={(e) => handleChange(index, e.target.value)}
  />
))}

#### 🤯 Problem:
Suppose you remove the first user (Lokesh):

setUsers([
  { id: 2, name: "Sanjay" },
  { id: 3, name: "Amit" },
]);

React still uses index as the key:

Sanjay gets key = 0

Amit gets key = 1

But now:

React reuses the old DOM elements for index 0 and 1.

So the input that had "Lokesh" is now showing "Sanjay", but internally it's still the same old input box.

This causes React to mix up state, e.g., cursor positions, focus, or custom behavior like validation.

- not using key(not acceptable) <<< index as a key <<<< use a unique ID(Best Practice)

## Q: What is `props in React`? Ways to.

A: props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.

- Props is similar to the arguments and in function,we pass arguments but in component we pass props.

#### Example

```
function App() {
  return (
    <div className="App">
      <Tool name="Chetan Nada" tool="Figma"/> // name and tool are props
    </div>
  )
}
```

## Q: What is `Config Driven UI`?

A: Config Driven UI (Configuration-Driven User Interface) is a design approach in frontend development where the structure and behavior of the UI is controlled by external configuration (usually JSON or similar) instead of hardcoding the UI in co de.

## Q: Difference between `Virtual DOM` and `Real DOM`?

A: 
#### 🧠 Virtual DOM vs Real DOM (in short)

| Feature       | Virtual DOM                                           | Real DOM                                        |
|---------------|--------------------------------------------------------|-------------------------------------------------|
| What is it?   | A lightweight **JavaScript object** that mimics the real DOM | The actual **HTML structure** rendered in the browser |
| Speed         | **Fast updates** – React updates it first, then syncs with real DOM | **Slow updates** – re-rendering the full DOM takes time |
| Usage         | Used by **React** to detect and apply minimal changes | Used by the **browser** to display the UI        |
| Updating      | **Efficient** – compares old vs new (diffing), then updates only what's needed | **Inefficient** – changing one element may re-render the entire DOM |

---

#### 🔧 Summary:
> **Virtual DOM** is like a blueprint of the UI. React uses it to detect changes and updates the **Real DOM** efficiently, resulting in **faster performance** and a **better user experience**.
