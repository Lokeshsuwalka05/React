## Namaste React Course by Akshay Saini

# Episode 07 - Finding the Path

## Q: What are various ways to `add images` into our App? Explain with `code examples`.

A: Using the `full URL of the image` for the web (CDN) or any public images.
Example :

```
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

Adding the image into the project
`Drag your image into your project` and `import it` into the desired component

```
import reactLogo from "./reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.

```
import reactLogo from "../../assets/images/reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

## Q: What would happen if we do `console.log(useState())`?

A: If we do `console.log(useState())`, we get an array `[undefined, function]` where first item in an array is `state` is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.

## Q: How will `useEffect` behave if we `don't add` a `dependency array`?

A: Syntax of `useEffect` is:

```
useEffect(() => {}, []);
```

Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.

```
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
```

Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.

```
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```

Case 3 : When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `change in the condition`.

```
useEffect(() => {
	console.log("I run every-time when my condition changed")
}, [condition]);
```

## Q: What is `SPA`?

A:
A Single Page Application (SPA) in React is a type of web application that loads a single HTML page and dynamically updates the content without reloading the whole page when the user interacts with the app.

### 🚀 Key Characteristics of SPA in React:
#### Initial Load:

- Only one HTML file (index.html) is loaded once.
- JavaScript (React) takes control of routing and rendering components dynamically.

#### No Page Reloads:
- When navigating between pages/components (like Home → About → Contact), React updates the view without reloading the full page.

#### Client-Side Routing:

- Managed by libraries like React Router.

#### Fast & Responsive:

- Since only a portion of the DOM is updated, it feels snappier and more app-like.

#### 🛠️ Behind the Scenes:
- React uses Virtual DOM to efficiently update only what changed.
- Routing is handled via React Router, not by reloading the browser.
- API calls (like fetching data) happen in the background using fetch or axios.


## Q: What is the difference between `Client Side Routing` and `Server Side Routing`?

A: 
### 🛣️ What is Routing?
Routing is the process of deciding which content to show when the user goes to a specific URL in your app.
Example:
  /home → Home page
  /about → About page
But how this decision is made depends on client-side or server-side routing.

### 🖥️ Server-Side Routing (Traditional Websites)

#### 🔁 How it works:
- Every time you click a link or enter a new URL, the browser sends a request to the server.
- The server reads the URL, prepares a new HTML page, and sends it back to the browser.
- The entire page reloads.

#### 🧠 Example:
  You visit www.example.com/about:
- Browser sends a GET request to server.
- Server responds with about.html.
- Full page reload.

#### 📉 Downsides:
- Slower because it loads a new page every time.
- Breaks the app-like smoothness.

### ⚛️ Client-Side Routing (Used in React SPAs)
#### 🔁 How it works:
- Only one HTML file (index.html) is loaded.
- After that, React takes over.
- Clicking a link doesn't reload the page—instead, React updates the content dynamically using JavaScript.

#### 🧠 Example:
  You visit www.reactapp.com/about:
- index.html is already loaded.
- React sees /about, and renders the <About /> component.
- No page reload!

#### 📦 Tools:
- React Router DOM handles the routing on the client side.

#### 📈 Benefits:
- Fast and smooth transitions
- Better user experience (like mobile apps)



- Use Outlet to Replace with the original component when the routes are changed.
- don't  use anchot tag to go to the specific route in react because it Reloads whole page.
  but we want to reload the updated page.
- Use Link component from React Router DOM.