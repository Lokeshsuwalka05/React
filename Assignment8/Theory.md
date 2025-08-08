## Namaste React Course by Akshay Saini

# Episode 08 - Let's get Classy

## Q: What is the order of life cycle method calls in `Class Based Components`?

A: Following is the order of lifecycle methods calls in `Class Based Components`:

1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Q: Why do we use `componentDidMount`?

A: The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
Wwe can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`.

## Q: Why do we use `componentWillUnmount`? Show with example.

A: `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.
For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.

## Q: (Research) Why do we use `super(props)` in constructor?

A: 
super class means parent class and sub class means child class
### ✅ Simple Explanation:
super(props) tells the parent class (React.Component)
- 👉 “Hey, we are passing props, please set them up so we can use this.props inside our child class.”
### 🧠 Think of it like this:
- When you create a class that extends another class (like React.Component), you are inheriting from the parent.
- The parent class (React.Component) has its own setup process.
- Calling super(props) runs that setup and allows you to access this.props in your constructor.

#### `"Hey Superclass, set up these props so that I (the subclass) can use this.props inside my component."`

## Q: (Research) Why can't we have the `callback function` of `useEffect async`?
A: 
 useEffect(()=>{
        const timer= setInterval(()=>{

        },1000);

        //similar to the componentWillUnmount() method in class based component
        //cleanUp function
        return ()={
          clearInterval(timer);   
        }
  },[])
``useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.``



- componentDidUpdate():-similar to the depency array in useEffect
Why use it?
- You use it when you want to run code after the DOM is updated — for example:
Fetching new data when a prop changes
Running animations after a state update
Updating something outside React (like localStorage or a 3rd-party library)


 React life cycle diagram:- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/