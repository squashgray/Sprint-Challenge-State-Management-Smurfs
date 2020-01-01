1. What problem does the context API help solve?
   ANSWER: Context API was made to solve the problem of prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   ANSWER: actions dispatch the logic from your reducer, reducer takes your previous state and applys logic to it, store is where you put all your state. Store is know as that because everything that changes your app is in the store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   ANSWER: application state is global, and your component state is local and lives in the specific component. If data is only being used by one component and not needed by the rest of the app use compoenet state otherwise use application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   ANSWER: redux thunk gives us the ability to perform aynchronous operations in redux, our action creators will have an inner function that uses dispatch as a parameter.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
   ANSWER: I really liked Context API, it was really easy to use and to follow the flow.
