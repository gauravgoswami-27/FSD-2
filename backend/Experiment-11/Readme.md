## Aim

To implement and run multiple independent microservices (Customer Service and Order Service) using the Flask framework, demonstrating how each service manages its own data and provides specific RESTful endpoints.

## Theory Concepts
1. Service Isolation

Each microservice is built to perform a single business function. In this experiment:

    Customer Service: Manages user profiles and contact information.

    Order Service: Manages transaction history, order amounts, and statuses.

2. Port Allocation

Since microservices run as separate processes, they cannot share the same network port.

    Customer Service is configured to run on Port 5001.

    Order Service is configured to run on Port 5002.

3. REST API Methods

The code demonstrates two primary HTTP methods:

    GET: Used in both services to retrieve data (Customer details or Order lists).

    PUT: Used in the Order Service to update the order_status of a specific transaction using JSON data.

## Tools Used

    Framework: Flask (Python)

    Data Handling: Python Dictionaries and Lists (In-memory storage)

    Testing: Browser (for GET requests) and Postman/cURL (for PUT requests)

## Learning Outcomes

    Successfully created two distinct Flask applications within the same project environment.

    Learned how to define dynamic routes using path variables like <int:user_id> and <int:order_id>.

    Implemented logic to filter data based on URL parameters (e.g., retrieving orders only for a specific user_id).

    Practiced updating in-memory data structures via API requests (PUT method with request.get_json()).