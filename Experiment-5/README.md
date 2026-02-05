##**Aim**

To implement and demonstrate Lazy Loading in a Single Page Application (SPA) using React Suspense and lazy() to optimize initial load time and performance.
##Objectives

    Implement code-splitting by dynamically importing components only when they are required.

    Utilize React Suspense to provide fallback UI (loading indicators) during component fetching.

    Integrate lazy-loaded components with React Router for route-based splitting.

    Analyze the reduction in the main bundle size by viewing network requests.

##**Core Concepts**
1. Code Splitting

By default, a React build bundles the entire application into one large JavaScript file. Lazy loading breaks this file into smaller "chunks." These chunks are downloaded only when the user navigates to a specific part of the app.

2. React.lazy()

This function allows you to render a dynamic import as a regular component. It automatically handles the loading of the separate bundle containing the component.

    Syntax: const LazyComponent = React.lazy(() => import('./Component'));

3. React Suspense

Because lazy-loaded components are fetched asynchronously, there is a delay where the component isn't ready. Suspense acts as a wrapper that displays a "fallback" (like a spinner or "Loading..." text) until the component is fully loaded.

4. Route-based Splitting

The most common implementation of lazy loading is at the route level. Instead of loading all pages (Home, About, Dashboard) at once, the browser only fetches the code for the page the user is currently viewing.

##**Learning Outcomes**

    Optimization of Initial Load: Understanding how to decrease the initial "Time to Interactive" by preventing the browser from downloading unnecessary code.

    Graceful Loading States: Mastering the use of the fallback prop in Suspense to maintain a smooth user experience during network transitions.

    Dynamic Imports: Recognizing how import() statements work behind the scenes to trigger network requests for specific JS chunks.

    Performance Analysis: Identifying the difference in the "Network" tab of browser dev tools, observing separate .js files being fetched upon navigation.