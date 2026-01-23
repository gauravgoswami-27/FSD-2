**Aim**

To implement client-side routing in a React-based Single Page Application (SPA) using the React Router DOM library to manage navigation without page reloads.

**Description**

This experiment focuses on the core concepts of client-side routing, where JavaScript handles URL updates and component rendering locally rather than requesting new HTML files from a server. Key features implemented include dynamic routing with URL parameters, nested layouts using placeholders, programmatic navigation.
**Technologies Used**

React JS, JavaScript, HTML & CSS, and React Router DOM v6.

**Core Concepts**

*BrowserRouter*: This is the top-level wrapper that uses the HTML5 History API to keep your application’s UI synchronized with the browser's URL. It allows for clean URLs and ensures that navigation occurs without a full page refresh, preserving the application state.

*Routes*: A container component that functions as the modern replacement for the "Switch". It examines all its child Route elements to find the best match for the current location and renders only that specific component.

*Route*: This component defines the relationship between a specific URL path and the React element that should be displayed. For example, <Route path="/about" element={<About />} /> ensures the About component renders when the URL is /about.

*Link*: A component used to enable navigation between routes. Unlike a standard anchor tag (<a>), it updates the URL and changes the view locally, preventing the browser from reloading the entire page.

**Steps Performed**

    Initialized a React application and installed the react-router-dom package.

    Configured the BrowserRouter as the root provider to enable HTML5 History API support.

    Defined primary application routes (Login,Home, About, Contact) using the Routes and Route components.

    Implemented dynamic routing to handle product details using useParams for URL parameters.

    Created a persistent site layout using nested routes and the Outlet component for content rendering.

    Built a ProtectedRoute component to redirect unauthenticated users using the Maps component.

**Output**

A functional Multi-Page SPA featuring instant transitions, active navigation highlighting, breadcrumbs, and secure access to protected dashboards.

**Learning Outcomes**

    Understood the fundamental differences between Client-Side and Server-Side routing.

    Mastered the implementation of dynamic and nested routing structures in React Router v6.

    Learned to handle programmatic navigation and URL query parameters effectively.

    Gained experience in implementing authentication guards and handling invalid route errors.

    Applied performance optimization techniques like lazy loading to reduce initial bundle size.

**Conclusion**

Through this experiment, I successfully developed a deep understanding of how client-side routing enables a "multi-page" feel within an SPA while maintaining application state and ensuring fast, smooth transitions between different views.