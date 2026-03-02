## Aim

To design and implement different authentication mechanisms in a RESTful API using Flask, including:

Basic Authentication

 Simple Token-Based Authentication

 JWT (JSON Web Token) Authentication

 The experiment demonstrates how authentication techniques work and how protected routes can be secured in web applications.

## Theory

Authentication is the process of verifying the identity of a user before granting access to protected resources. In modern web applications, different authentication mechanisms are used based on security requirements.

This project implements three common authentication methods using Flask and Flask-JWT-Extended.

**🔹 1. Basic Authentication**
Basic Authentication sends the username and password encoded in Base64 format inside the HTTP Authorization header.

Credentials are sent with every request.

It is simple but not secure without HTTPS.

Server verifies username and password against stored data.

In this project:

Route: /basic-protected

Credentials are verified from an in-memory user dictionary.

**🔹2. Simple Token Authentication (Custom Token)**


Token-based authentication improves security by:

Verifying credentials once.

Generating a token.

Requiring the token in future requests.

In this project:

/token-login generates a Base64-encoded username token.

Client sends the token in x-auth-token header.

/token-protected validates the token.

**🔹 3. JWT Authentication**

JWT (JSON Web Token) is a secure token-based authentication mechanism.

A JWT contains:

Header

Payload

Signature

In this project:

/jwt-login generates a JWT using create_access_token().

/jwt-protected is secured using @jwt_required().

Token must be sent as:

Authorization: Bearer <token>

JWT is widely used in REST APIs because:

It is stateless.

It ensures data integrity.

It supports scalable authentication.


**API Endpoints**
Route               	Method	Description
/	                    GET 	Displays available routes
/basic-protected        GET	    Protected using Basic Auth
/token-login	        POST	Generates simple token
/token-protected    	GET	    Protected using custom token
/jwt-login	            POST	Generates JWT
/jwt-protected	        GET	    Protected using JWT

## Learning Outcomes
1. Implemented Basic Authentication using HTTP headers.

2. Developed a custom token-based authentication mechanism.

3. Generated and verified JWT tokens using Flask-JWT-Extended.

4. Secured API routes using decorators like @jwt_required().

5. Understood the difference between session-based and stateless authentication.