##**Aim**

    To implement and compare different state management strategies in a React application by managing local component state with useState and global application state using the Context API and Redux.
##**Objectives**

    Demonstrate how to maintain isolated state within a single component.

    Implement a Context Provider to share state across multiple component layers without "prop drilling."

    Configure a Redux Store with actions and reducers for scalable, predictable state transitions.

    Identify the specific use cases and trade-offs for local versus global state.

##**Core Concepts**

1. Local State Management (useState)

Local state is isolated. When we use useState inside a component, that data "belongs" to that specific instance of the component only.

    The Scenario: There are two components - Component A and Component B, both using useState.

    Thes two components don't affect each other: Even if they share the exact same logic, React treats them as independent memory cells. Changing the state in Component A triggers a re-render only for Component A (and its children). Component B remains completely unaware of the change because there is no data bridge between them.
    This is because variables used(count) in one instance of component is not passed to another component.


2. Global State Management (Context API)

The Context API creates a shared broadcast system. It allows you to "lift" state out of individual components and place it in a Provider that wraps around them.

    The Scenario: Two components , Component C and Component D wrapped inside a single UserContext.Provider.

    How the change spreads: When Component C updates the context value, the Provider's state changes. Since Component D is a "consumer" (subscriber) of that same Provider, React automatically notifies Component D that the data has changed, forcing it to re-render with the new information.
    This is done by making an object of state variables (count and setCount) and passing them to chidren using CounterContext.Provider component.
    
3. Global State Management (Redux)

Redux acts as a Centralized Single Source of Truth. Unlike Context, which is built into React, Redux is a predictable state container that lives outside the component tree.

    The Scenario: Two components - Component E and Component F connected to a Redux Store.

    The Synchronization: 1.  Component E dispatches an Action.
    2.  The Reducer updates the central Store.
    3.  Because Component F is using a useSelector to watch that specific part of the Store, it "reacts" instantly to the update.

    Effect: Any component "subscribed" to the Redux store stays in perfect sync, regardless of where they are located in the application.

##**Learning Outcomes**

1. Understanding State Isolation: It is clear that local state is private. Updating a variable in one component does not trigger any changes in its siblings, even if they use the same code.

2. Mastering Shared State (Context API): Bypassing "prop drilling" is achieved by using a Provider. When one component updates a Context value, all other components listening to that Context update instantly because they share the same data object.

3. Implementing Centralized Control (Redux): Data management can be handled entirely outside the component tree. By sending "Actions" to a central "Store," multiple components stay synchronized with the exact same data via "Selectors."

4. Identifying Use Cases: The choice between tools depends on the scope. useState is preferred for simple, isolated UI logic, while Context or Redux is necessary for data that needs to be accessed by many different parts of the app.