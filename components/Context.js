import { createContext } from "react";

const Context = createContext();

export default Context;

// CONTEXT.JS
// 1. import createContext, and define a const for it ---> MyContext with a default value.
// It will be used if the value is not defined.

// INSIDE THE PARENT _app.js
// 2. import Context.js Component in the parent.
// 3. Then in the parent we define the dafault States that we need to change content globally.
// We use States to change the Context through the States.
// 4. Then we wrap the all in the return in the parent Component with <Context.Provider></Context.Provider>
// 5. And define the values that we want to pass <Context.Provider value={{state, setState}}></Context.Provider> including the setStates --> The callback that will change the value.

// INSIDE THE COMPONENT CONSUMERS (Basket.js and Nav.js)
// 1. import Context.js Component in the child Component and the the useContext from react.
// 2. in the function component (){ we define a new const named context = useContext(Context)}
// 3. So if I need the value in somewhere inside the component we write <h1>{context.state}</h1>
//
//
