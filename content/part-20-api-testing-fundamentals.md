---

title: API Testing Fundamentals
part: 20
slug: api-testing-fundamentals
description: Master API Testing Fundamentals including REST, SOAP, HTTP Protocol, Methods, Status Codes, Authentication, JSON, XML, Postman, Swagger, API Validation, and API Test Case Design.
---

# Part 20 — API Testing Fundamentals

## Learning Objectives

By the end of this chapter, you will be able to:

* Understand API fundamentals and architecture.
* Differentiate between REST and SOAP services.
* Understand HTTP protocol fundamentals.
* Use HTTP methods correctly.
* Interpret HTTP status codes.
* Work with request and response headers.
* Understand API authentication mechanisms.
* Handle cookies and session management.
* Read and validate JSON responses.
* Read and validate XML responses.
* Use Postman effectively.
* Use Swagger/OpenAPI documentation.
* Design API validation strategies.
* Create comprehensive API test cases.
* Prepare for API Testing interviews.

---

# Part 20 — API Testing Fundamentals

## Introduction

Modern applications are built using distributed architectures where different systems communicate through APIs.

Examples:

* Mobile Applications
* Web Applications
* Banking Systems
* E-Commerce Platforms
* Healthcare Applications
* Cloud Services

When a user logs in to an application:

```text
Frontend
    ↓
API Request
    ↓
Backend Service
    ↓
Database
    ↓
API Response
    ↓
Frontend
```

Most business logic resides in APIs.

Therefore, API Testing has become one of the most important skills for:

* QA Engineers
* Automation Engineers
* SDETs
* Backend Testers
* Performance Testers

API Testing is generally:

* Faster than UI Testing
* More reliable than UI Testing
* Easier to automate
* Better for early defect detection

---

## Core Concepts

## API Fundamentals

### What is an API?

API stands for:

```text
Application Programming Interface
```

An API enables communication between two software systems.

Example:

```text
Mobile App
     ↓
API
     ↓
Backend Server
```

---

### Real-World Example

Food Delivery Application:

```text
User Orders Food
        ↓
Mobile App
        ↓
Order API
        ↓
Restaurant System
        ↓
Response
```

The user never directly communicates with the database.

The API acts as a mediator.

---

### Why APIs are Important

Benefits:

* System Integration
* Scalability
* Reusability
* Platform Independence
* Faster Development

---

### API Testing Objectives

Validate:

* Functionality
* Reliability
* Security
* Performance
* Data Accuracy

---

## REST Architecture

### What is REST?

REST stands for:

```text
Representational State Transfer
```

REST is the most widely used API architecture.

Introduced by:

Roy Fielding

---

### REST Characteristics

| Characteristic    | Description            |
| ----------------- | ---------------------- |
| Stateless         | No Client State Stored |
| Client-Server     | Separation of Concerns |
| Cacheable         | Better Performance     |
| Layered           | Scalability            |
| Uniform Interface | Consistency            |

---

### REST Architecture

```text
Client
   ↓
HTTP Request
   ↓
REST API
   ↓
Database
   ↓
HTTP Response
```

---

### Resource-Based Design

Example:

```text
/users
/orders
/products
/customers
```

Resources are identified using URLs.

---

### REST Endpoint Example

```http
GET /users/101
```

Response:

```json
{
  "id": 101,
  "name": "John"
}
```

---

## SOAP Basics

### What is SOAP?

SOAP stands for:

```text
Simple Object Access Protocol
```

SOAP is a protocol used for exchanging structured information.

---

### SOAP Characteristics

| Feature     | SOAP   |
| ----------- | ------ |
| Protocol    | Yes    |
| XML Based   | Yes    |
| Security    | Strong |
| Performance | Slower |
| Complexity  | High   |

---

### SOAP Architecture

```text
Client
   ↓
SOAP Request
   ↓
SOAP Service
   ↓
SOAP Response
```

---

### SOAP Request Example

```xml
<soap:Envelope>
   <soap:Body>
      <GetCustomer>
         <CustomerId>101</CustomerId>
      </GetCustomer>
   </soap:Body>
</soap:Envelope>
```

---

### REST vs SOAP

| Feature        | REST      | SOAP     |
| -------------- | --------- | -------- |
| Architecture   | Style     | Protocol |
| Data Format    | JSON/XML  | XML      |
| Performance    | Faster    | Slower   |
| Learning Curve | Easy      | Moderate |
| Security       | Moderate  | Strong   |
| Popularity     | Very High | Medium   |

---

## HTTP Protocol

### What is HTTP?

HTTP stands for:

```text
HyperText Transfer Protocol
```

HTTP is the foundation of web communication.

---

### Communication Flow

```text
Client
   ↓
HTTP Request
   ↓
Server
   ↓
HTTP Response
```

---

### HTTP Request Structure

```text
Method
URL
Headers
Body
```

Example:

```http
POST /login
Host: demo.com

{
  "username":"admin"
}
```

---

### HTTP Response Structure

```text
Status Code
Headers
Body
```

Example:

```http
200 OK
Content-Type: application/json
```

---

## HTTP Methods

HTTP methods define actions.

---

### GET

Retrieve data.

```http
GET /users/101
```

---

### POST

Create data.

```http
POST /users
```

---

### PUT

Update entire resource.

```http
PUT /users/101
```

---

### PATCH

Partial update.

```http
PATCH /users/101
```

---

### DELETE

Delete resource.

```http
DELETE /users/101
```

---

### HTTP Methods Comparison

| Method | Operation      |
| ------ | -------------- |
| GET    | Read           |
| POST   | Create         |
| PUT    | Update         |
| PATCH  | Partial Update |
| DELETE | Delete         |

---

## Status Codes

Status codes indicate request outcome.

---

### 1xx Informational

```text
100 Continue
```

---

### 2xx Success

```text
200 OK
201 Created
204 No Content
```

---

### 3xx Redirection

```text
301 Moved Permanently
302 Redirect
```

---

### 4xx Client Errors

```text
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
405 Method Not Allowed
```

---

### 5xx Server Errors

```text
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
```

---

### Most Common Status Codes

| Code | Meaning      |
| ---- | ------------ |
| 200  | Success      |
| 201  | Created      |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 403  | Forbidden    |
| 404  | Not Found    |
| 500  | Server Error |

---

## Headers

Headers carry metadata.

---

### Request Header Example

```http
Content-Type: application/json
Authorization: Bearer token
```

---

### Response Header Example

```http
Server: nginx
Content-Type: application/json
```

---

### Common Headers

| Header        | Purpose         |
| ------------- | --------------- |
| Content-Type  | Data Format     |
| Authorization | Security        |
| Accept        | Response Format |
| Cookie        | Session Data    |
| User-Agent    | Client Info     |

---

## Authentication

Authentication verifies identity.

---

### Basic Authentication

```text
username:password
```

Encoded using Base64.

---

### Bearer Token Authentication

```http
Authorization: Bearer abc123xyz
```

Most common in REST APIs.

---

### API Key Authentication

```http
x-api-key: 123456789
```

---

### OAuth 2.0

Most widely used enterprise authentication mechanism.

Flow:

```text
User
 ↓
Authorization Server
 ↓
Access Token
 ↓
API Access
```

---

### Authentication Comparison

| Method       | Security  |
| ------------ | --------- |
| Basic        | Low       |
| API Key      | Medium    |
| Bearer Token | High      |
| OAuth 2.0    | Very High |

---

## Cookies

Cookies maintain session information.

---

### Cookie Example

```http
Set-Cookie:
SessionId=12345
```

---

### Why Cookies Matter

Used for:

* Login Sessions
* User Tracking
* Personalization

---

### Cookie Flow

```text
Login
  ↓
Session Created
  ↓
Cookie Returned
  ↓
Subsequent Requests
```

---

## JSON

### What is JSON?

JSON stands for:

```text
JavaScript Object Notation
```

Most common API response format.

---

### JSON Example

```json
{
  "id": 101,
  "name": "John",
  "email": "john@test.com"
}
```

---

### JSON Data Types

| Type    | Example |
| ------- | ------- |
| String  | "John"  |
| Number  | 101     |
| Boolean | true    |
| Array   | []      |
| Object  | {}      |
| Null    | null    |

---

### Nested JSON

```json
{
  "user":{
    "name":"John",
    "city":"Delhi"
  }
}
```

---

### JSON Array

```json
{
  "users":[
    {
      "id":1
    },
    {
      "id":2
    }
  ]
}
```

---

## XML

### What is XML?

XML stands for:

```text
eXtensible Markup Language
```

Commonly used in SOAP APIs.

---

### XML Example

```xml
<User>
    <Id>101</Id>
    <Name>John</Name>
</User>
```

---

### XML Characteristics

* Hierarchical
* Tag Based
* Structured
* Self Descriptive

---

### JSON vs XML

| Feature     | JSON    | XML         |
| ----------- | ------- | ----------- |
| Readability | High    | Medium      |
| Size        | Smaller | Larger      |
| Performance | Better  | Slower      |
| REST Usage  | Common  | Less Common |
| SOAP Usage  | Rare    | Common      |

---

## Postman

### What is Postman?

Postman is the most popular API testing tool.

Uses:

* API Testing
* Automation
* Validation
* Debugging

---

### Postman Components

| Component       | Purpose             |
| --------------- | ------------------- |
| Collections     | Group APIs          |
| Environment     | Variables           |
| Request Builder | API Requests        |
| Tests           | Validation          |
| Runner          | Execute Collections |

---

### Send GET Request

```http
GET https://api.demo.com/users
```

---

### Postman Validation Example

```javascript
pm.test(
"Status Code is 200",
function() {

pm.response.to.have.status(200);

});
```

---

### Validate Response Time

```javascript
pm.test(
"Response Time",
function() {

pm.expect(
pm.response.responseTime)
.to.be.below(2000);

});
```

---

## Swagger

### What is Swagger?

Swagger is an API documentation framework.

Also known as:

```text
OpenAPI Specification
```

---

### Benefits

* API Documentation
* Interactive Testing
* Contract Validation

---

### Example Endpoint

```http
GET /users/{id}
```

Swagger provides:

* Parameters
* Responses
* Examples
* Error Codes

---

### Swagger Workflow

```text
Swagger UI
      ↓
Read Documentation
      ↓
Execute API
      ↓
Validate Response
```

---

## API Validation

API validation ensures correctness of responses.

---

### Types of Validation

| Validation     | Example          |
| -------------- | ---------------- |
| Status Code    | 200              |
| Response Body  | Data Correctness |
| Schema         | Structure        |
| Headers        | Metadata         |
| Response Time  | Performance      |
| Authentication | Security         |

---

### Status Code Validation

```text
Expected: 200
Actual: 200
PASS
```

---

### Response Body Validation

```json
{
  "id":101
}
```

Validate:

```text
id = 101
```

---

### Header Validation

```http
Content-Type:
application/json
```

---

### Response Time Validation

```text
Response Time < 2000 ms
```

---

### Schema Validation

Verify structure:

```json
{
  "id":101,
  "name":"John"
}
```

Fields must exist.

---

## API Test Case Design

### API Test Design Approach

Validate:

1. Functionality
2. Security
3. Reliability
4. Performance
5. Data Integrity

---

### Login API Test Cases

| Test Case            | Expected Result |
| -------------------- | --------------- |
| Valid Credentials    | 200             |
| Invalid Username     | 401             |
| Invalid Password     | 401             |
| Empty Username       | 400             |
| Empty Password       | 400             |
| Missing Request Body | 400             |

---

### User API Test Cases

| Test Case           | Expected Result |
| ------------------- | --------------- |
| Get Existing User   | 200             |
| Get Invalid User    | 404             |
| Unauthorized Access | 401             |
| Invalid Token       | 401             |
| Expired Token       | 401             |

---

### Create User API Test Cases

| Test Case       | Expected Result |
| --------------- | --------------- |
| Valid Request   | 201             |
| Missing Name    | 400             |
| Duplicate Email | 409             |
| Invalid Email   | 400             |
| Empty Body      | 400             |

---

### API Test Design Checklist

* Verify Status Code
* Verify Headers
* Verify Response Body
* Verify Response Time
* Verify Authentication
* Verify Schema
* Verify Database Impact
* Verify Error Messages

---

## Real World Industry Examples

### Banking APIs

Validation:

* Authentication
* Authorization
* Transactions
* Audit Trails

---

### E-Commerce APIs

Validation:

* Product APIs
* Cart APIs
* Checkout APIs
* Payment APIs

---

### Healthcare APIs

Validation:

* Patient Records
* Appointments
* Security Compliance

---

### SaaS Applications

Validation:

* User Management
* Subscription APIs
* Role-Based Access

---

## Diagrams (Markdown Compatible)

### REST Request Flow

```text
Client
   ↓
HTTP Request
   ↓
REST API
   ↓
Database
   ↓
HTTP Response
```

---

### Authentication Flow

```text
User
 ↓
Login API
 ↓
Token
 ↓
Protected API
```

---

### API Testing Flow

```text
Request
  ↓
API
  ↓
Response
  ↓
Validation
```

---

### Postman Workflow

```text
Collection
   ↓
Request
   ↓
Execution
   ↓
Validation
```

---

## Best Practices

* Validate every status code.
* Validate response body content.
* Validate response schema.
* Validate headers.
* Verify response time.
* Use environment variables.
* Externalize test data.
* Test positive and negative scenarios.
* Validate security requirements.
* Document API test cases properly.

---

## Common Mistakes

| Mistake                     | Impact                |
| --------------------------- | --------------------- |
| Validating Only Status Code | Missed Defects        |
| Ignoring Negative Scenarios | Low Coverage          |
| No Authentication Testing   | Security Risks        |
| Hardcoded Test Data         | Maintenance Issues    |
| Ignoring Headers            | Incomplete Validation |
| No Schema Validation        | Contract Breakages    |
| No Performance Validation   | User Impact           |

---

## Interview Questions

### Beginner Level

1. What is an API?
2. What is API Testing?
3. What is REST?
4. What is SOAP?
5. What is JSON?
6. What is XML?
7. What is HTTP?
8. What are HTTP Methods?
9. What is Postman?
10. What is Swagger?

---

### Intermediate Level

1. REST vs SOAP?
2. Explain HTTP request structure.
3. Explain HTTP response structure.
4. What are status codes?
5. What are headers?
6. What is authentication?
7. What is OAuth 2.0?
8. What validations do you perform in API testing?
9. What is schema validation?
10. How do you design API test cases?

---

### Advanced Level

1. Design an API testing strategy for a banking application.
2. How would you validate complex nested JSON?
3. How would you test OAuth-protected APIs?
4. Explain API security testing fundamentals.
5. How would you validate API contracts?
6. What API metrics would you track?
7. How would you design a reusable API framework?
8. Explain REST constraints.
9. How would you test microservices APIs?
10. Explain end-to-end API validation in enterprise systems.

---

## Practical Assignments

### Assignment 1

Test a public REST API using Postman.

Validate:

* Status Codes
* Headers
* Response Body

---

### Assignment 2

Create test cases for:

* Login API
* User API
* Product API

---

### Assignment 3

Validate:

* JSON Schema
* Response Time
* Authentication

---

### Assignment 4

Explore a Swagger API and document all endpoints.

---

### Assignment 5

Create a Postman Collection containing:

* GET
* POST
* PUT
* DELETE

Requests.

---

## Mini Project

### Project: E-Commerce API Test Suite

### Objective

Design and execute API testing for an e-commerce platform.

### Modules

* Login API
* Product API
* Cart API
* Checkout API
* User API

### Validation Areas

* Status Codes
* Headers
* JSON Responses
* Authentication
* Response Times

### Deliverables

* API Test Cases
* Postman Collection
* Test Execution Report
* Defect Report
* API Validation Checklist

---

## Cheat Sheet

| Concept        | Key Point                    |
| -------------- | ---------------------------- |
| API            | System Communication         |
| REST           | Most Common API Architecture |
| SOAP           | XML-Based Protocol           |
| HTTP           | Communication Protocol       |
| GET            | Retrieve Data                |
| POST           | Create Data                  |
| PUT            | Update Data                  |
| DELETE         | Remove Data                  |
| JSON           | Most Common Response Format  |
| XML            | Common in SOAP               |
| Postman        | API Testing Tool             |
| Swagger        | API Documentation            |
| Status Code    | Response Result              |
| Headers        | Metadata                     |
| Authentication | Identity Verification        |

---

## Key Takeaways

* APIs are the backbone of modern applications.
* API testing is faster and more reliable than UI testing.
* REST is the most widely used API architecture.
* SOAP is still used in many enterprise systems.
* HTTP forms the foundation of API communication.
* HTTP methods define operations on resources.
* Status codes indicate request outcomes.
* Headers provide request and response metadata.
* Authentication protects APIs from unauthorized access.
* OAuth 2.0 is the most common enterprise authentication mechanism.
* Cookies help maintain sessions.
* JSON is the dominant API data format.
* XML remains important for SOAP services.
* Postman is the most widely used API testing tool.
* Swagger simplifies API discovery and testing.
* API validation should cover functionality, security, and performance.
* Test both positive and negative scenarios.
* Response schema validation is critical.
* API testing is a mandatory skill for modern Automation Engineers and SDETs.
* Strong API fundamentals are required before learning API Automation frameworks such as Rest Assured.
