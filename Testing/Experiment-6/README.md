## 1. Aim

To implement a robust testing environment for a React application using Vitest and React Testing Library (RTL) to validate component rendering, user interactions, and DOM integrity.

## 2. Tools & Technologies

    Environment: Node.js (v22+)

    Library: React 18+

    Test Runner: Vitest (Fast Vite-native unit test framework)

    DOM Simulation: JSDOM (A pure-JavaScript implementation of web standards)

    Utility: React Testing Library (Provides virtual DOM nodes for testing React components)

## 3. Theory

In modern frontend development, testing ensures that the UI logic remains consistent even as the codebase grows. Unlike backend testing, frontend testing focuses on how components behave in the browser.

Key Concepts:

    Virtual DOM Simulation: Since tests run in a terminal (Node.js) and not a real browser, JSDOM is used to simulate a browser environment, allowing us to interact with elements like buttons and inputs.

    Component Mounting: Using the render() method from React Testing Library, we "mount" the component into the virtual DOM.

    Querying: We use queries like screen.getByText or screen.getByLabelText to find elements, mimicking how a real user would find them.

    Mocking: For frontend tests, we often mock API calls to ensure the tests are fast and don't depend on the backend being online.

## 4. Test Implementation Details
Test Category	Methodology	Expected Outcome
Rendering	expect(element).toBeInTheDocument()	Verifies that the UI components (Form, Header, etc.) appear correctly.
User Input	fireEvent.change() or userEvent.type()	Ensures that form fields correctly capture user data.
Actions	fireEvent.click()	Validates that clicking "Submit" or "Delete" triggers the correct logic.
Async Logic	waitFor() or findBy...	Handles testing of elements that appear after an API call or timeout.

## 5. Execution Commands
Bash

# Run tests once (CI mode)
npx vitest run

# Run tests in watch mode (Development mode)
npx vitest

# Generate coverage report
npx vitest run --coverage

## 6. Learning Outcomes

1.    CI/CD Integration: Successfully configured GitHub Actions to automate frontend testing on every push to the main branch.

2.    Environment Debugging: Learned to resolve ESM (ECMAScript Modules) conflicts between Node.js and legacy CommonJS dependencies using Vite configuration.

3.    Component Integrity: Gained the ability to catch UI regressions (bugs that break existing features) before they reach production.

4.    User-Centric Testing: Mastered the practice of testing components based on user behavior rather than internal implementation details.