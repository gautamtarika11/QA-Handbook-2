---

title: REST Assured API Automation
part: 23
slug: rest-assured-api-automation
description: Master REST Assured API Automation including project setup, HTTP requests, request specifications, response validation, assertions, JSON parsing, serialization, deserialization, framework design, and reporting integration.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Part 23 — REST Assured API Automation

## Learning Objectives

By the end of this chapter, you will be able to:

* Understand REST Assured architecture and usage.
* Set up REST Assured projects from scratch.
* Perform API automation using REST Assured.
* Execute GET, POST, PUT, PATCH, and DELETE requests.
* Build reusable Request Specifications.
* Validate API responses effectively.
* Perform assertions using REST Assured.
* Parse JSON responses.
* Implement serialization and deserialization.
* Design scalable API automation frameworks.
* Integrate reporting and logging.
* Execute API tests through CI/CD pipelines.
* Prepare for API Automation interviews.

---

# Part 23 — REST Assured API Automation

## Introduction

Modern applications expose APIs that handle business logic.

Examples:

* Login
* Registration
* Product Search
* Payments
* Transactions
* User Management

Testing APIs manually through Postman is useful, but automation is required for:

* Regression Testing
* CI/CD Pipelines
* Frequent Releases
* Large Test Suites

REST Assured is the most popular Java library for API Automation.

Advantages:

* Easy to Learn
* Powerful Assertions
* TestNG Integration
* Maven Integration
* JSON Support
* CI/CD Friendly

---

## Core Concepts

## REST Assured Introduction

### What is REST Assured?

REST Assured is a Java-based library used for testing REST APIs.

It simplifies:

* Sending Requests
* Validating Responses
* Authentication
* JSON Parsing
* API Automation

---

### REST Assured Architecture

```text
TestNG
   ↓
REST Assured
   ↓
HTTP Request
   ↓
API Server
   ↓
Response Validation
```

---

### Why REST Assured?

| Feature               | Benefit                     |
| --------------------- | --------------------------- |
| Java Based            | Easy for Selenium Engineers |
| Fluent Syntax         | Readable Code               |
| JSON Support          | Built-in                    |
| Assertions            | Powerful Validation         |
| CI/CD Support         | Excellent                   |
| Framework Integration | Easy                        |

---

### Basic Flow

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

## Project Setup

### Maven Dependencies

### REST Assured

```xml
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <version>5.5.0</version>
</dependency>
```

---

### TestNG

```xml
<dependency>
    <groupId>org.testng</groupId>
    <artifactId>testng</artifactId>
    <version>7.10.2</version>
    <scope>test</scope>
</dependency>
```

---

### Jackson

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.18.0</version>
</dependency>
```

---

### Typical Project Structure

```text
APIFramework
│
├── src
│   ├── test
│   │   ├── java
│   │   │
│   │   ├── tests
│   │   ├── payloads
│   │   ├── utilities
│   │   ├── specifications
│   │   └── listeners
│
├── reports
│
├── logs
│
├── pom.xml
│
└── testng.xml
```

---

## HTTP Requests

REST Assured supports all HTTP methods.

---

## GET Request

Used for retrieving data.

### Example

```java
import static io.restassured.RestAssured.*;

given()

.when()
.get("https://reqres.in/api/users/2")

.then()
.statusCode(200);
```

---

## POST Request

Used for creating resources.

```java
given()

.contentType("application/json")

.body(payload)

.when()

.post("/users")

.then()

.statusCode(201);
```

---

## PUT Request

Used for updating resources.

```java
given()

.body(payload)

.when()

.put("/users/2")

.then()

.statusCode(200);
```

---

## PATCH Request

Partial update.

```java
given()

.body(payload)

.when()

.patch("/users/2")

.then()

.statusCode(200);
```

---

## DELETE Request

Delete resource.

```java
given()

.when()

.delete("/users/2")

.then()

.statusCode(204);
```

---

## HTTP Methods Comparison

| Method | Purpose        |
| ------ | -------------- |
| GET    | Read           |
| POST   | Create         |
| PUT    | Update         |
| PATCH  | Partial Update |
| DELETE | Remove         |

---

## Request Specification

### What is Request Specification?

Request Specification centralizes reusable request configurations.

Without Specification:

```java
given()
.contentType("application/json")
.header("Authorization", token)
.baseUri(baseUrl);
```

Repeated everywhere.

---

### With Specification

```java
RequestSpecification request =
new RequestSpecBuilder()

.setBaseUri(baseUrl)

.setContentType(ContentType.JSON)

.build();
```

---

### Usage

```java
given()

.spec(request)

.when()

.get("/users");
```

---

### Benefits

* Reusability
* Maintainability
* Reduced Duplication

---

## Response Validation

Validation ensures API correctness.

---

### Status Code Validation

```java
then()
.statusCode(200);
```

---

### Header Validation

```java
then()
.header(
"Content-Type",
"application/json");
```

---

### Body Validation

```java
then()
.body(
"id",
equalTo(2));
```

---

### Multiple Validations

```java
then()

.statusCode(200)

.body("id", equalTo(2))

.body("data.first_name",
equalTo("Janet"));
```

---

### Validation Categories

| Validation    | Example      |
| ------------- | ------------ |
| Status Code   | 200          |
| Headers       | Content-Type |
| Body          | JSON Values  |
| Schema        | Structure    |
| Response Time | Performance  |

---

## Assertions

Assertions verify expected behavior.

---

### Hamcrest Assertions

```java
import static
org.hamcrest.Matchers.*;
```

---

### Equal To

```java
body(
"name",
equalTo("John"));
```

---

### Contains String

```java
body(
"name",
containsString("Joh"));
```

---

### Not Null

```java
body(
"id",
notNullValue());
```

---

### Greater Than

```java
body(
"salary",
greaterThan(1000));
```

---

### Assertion Examples

```java
then()

.body("id",
equalTo(101))

.body("name",
notNullValue())

.body("salary",
greaterThan(5000));
```

---

## JSON Parsing

Most REST APIs return JSON.

---

### Sample JSON

```json
{
  "id": 1,
  "name": "John",
  "city": "Delhi"
}
```

---

### Extract Response

```java
Response response =

given()

.when()

.get("/user/1");
```

---

### Get String Value

```java
String name =

response.jsonPath()
.getString("name");
```

---

### Get Integer Value

```java
int id =

response.jsonPath()
.getInt("id");
```

---

### Get List

```java
List<String> users =

response.jsonPath()
.getList("users.name");
```

---

### Nested JSON Parsing

JSON:

```json
{
  "user": {
    "name": "John"
  }
}
```

Extract:

```java
String name =

response.jsonPath()
.getString(
"user.name");
```

---

## Serialization

### What is Serialization?

Converting Java Objects into JSON.

---

### Java Object

```java
public class User {

private String name;
private String job;

}
```

---

### Object Creation

```java
User user =
new User();

user.setName("John");

user.setJob("Tester");
```

---

### Automatic Serialization

```java
given()

.body(user)

.when()

.post("/users");
```

Generated JSON:

```json
{
  "name":"John",
  "job":"Tester"
}
```

---

### Benefits

* Cleaner Code
* Object-Oriented
* Reusable Payloads

---

## Deserialization

### What is Deserialization?

Converting JSON response into Java Object.

---

### JSON Response

```json
{
  "name":"John",
  "job":"Tester"
}
```

---

### POJO Class

```java
public class User {

private String name;

private String job;

}
```

---

### Convert Response

```java
User user =

response.as(User.class);
```

---

### Usage

```java
System.out.println(
user.getName());
```

---

### Benefits

* Strong Typing
* Better Readability
* Framework Friendly

---

## Framework Design

### Why Framework Design?

Large API projects may contain:

```text
500+
1000+
5000+
API Tests
```

Framework structure becomes critical.

---

### Enterprise API Framework

```text
APIFramework
│
├── src
│
├── tests
│
├── payloads
│
├── utilities
│
├── specifications
│
├── listeners
│
├── reports
│
├── logs
│
├── resources
│
└── testng.xml
```

---

### Framework Layers

```text
Tests
 ↓
Endpoints
 ↓
Payloads
 ↓
Utilities
 ↓
REST Assured
```

---

## Endpoint Class Pattern

### User Endpoints

```java
public class UserEndpoints {

public static Response
getUser(int id){

return given()

.when()

.get("/users/" + id);
}
}
```

---

### Test Class

```java
Response response =

UserEndpoints
.getUser(1);
```

---

## Payload Management

### Create Payload Class

```java
public class UserPayload {

private String name;

private String job;
}
```

---

### Benefits

* Reusable
* Maintainable
* Centralized

---

## Configuration Management

### config.properties

```properties
baseUrl=https://reqres.in/api

token=abc123
```

---

### Usage

```java
prop.getProperty(
"baseUrl");
```

---

## Reporting

API automation requires detailed reporting.

---

### Extent Reports Integration

```java
ExtentTest test =
extent.createTest(
"Get User API");
```

---

### Log Request

```java
test.info(
"Sending GET Request");
```

---

### Log Response

```java
test.pass(
"Status Code 200");
```

---

### Failure Reporting

```java
test.fail(
response.asPrettyString());
```

---

### Allure Integration

```java
Allure.addAttachment(
"Response",
response.asPrettyString());
```

---

### Reporting Architecture

```text
API Test
    ↓
Execution
    ↓
Validation
    ↓
Report
```

---

## Logging Integration

### Log4j2 Example

```java
logger.info(
"API Execution Started");
```

---

### Request Logging

```java
given()

.log().all()
```

---

### Response Logging

```java
then()

.log().all();
```

---

### Logging Flow

```text
Request
 ↓
Log
 ↓
Response
 ↓
Log
```

---

## Authentication Automation

### Basic Authentication

```java
given()

.auth()

.basic(
"admin",
"password");
```

---

### Bearer Token

```java
given()

.header(
"Authorization",
"Bearer " + token);
```

---

### OAuth 2.0

```java
given()

.auth()

.oauth2(token);
```

---

## Real World Industry Examples

### Banking API Framework

Modules:

* Accounts
* Transactions
* Payments

Validation:

* Status Codes
* Security
* Business Rules

---

### E-Commerce API Framework

Modules:

* Login
* Products
* Cart
* Checkout

Automation:

* REST Assured
* TestNG
* Extent Reports

---

### Healthcare Platform

Modules:

* Patients
* Appointments
* Prescriptions

Automation:

* OAuth
* JSON Validation
* Reporting

---

### CRM System

Modules:

* Leads
* Opportunities
* Accounts

Automation:

* Serialization
* Deserialization
* CI/CD Execution

---

## Diagrams (Markdown Compatible)

### REST Assured Flow

```text
TestNG
  ↓
REST Assured
  ↓
API
  ↓
Response
  ↓
Validation
```

---

### Framework Architecture

```text
Tests
 ↓
Endpoints
 ↓
Payloads
 ↓
Utilities
 ↓
REST Assured
```

---

### Request Lifecycle

```text
Request
  ↓
API
  ↓
Response
  ↓
Assertion
```

---

### Reporting Flow

```text
Execution
  ↓
Logs
  ↓
Reports
```

---

## Best Practices

* Use Request Specifications.
* Centralize endpoint URLs.
* Use POJOs for payloads.
* Externalize configurations.
* Implement reporting.
* Validate schemas.
* Validate response times.
* Use reusable utilities.
* Log requests and responses.
* Integrate with CI/CD.

---

## Common Mistakes

| Mistake                  | Impact              |
| ------------------------ | ------------------- |
| Hardcoded URLs           | Maintenance Issues  |
| Hardcoded Tokens         | Security Risk       |
| No Request Specification | Duplicate Code      |
| No Logging               | Difficult Debugging |
| No Reporting             | Poor Visibility     |
| No Deserialization       | Complex Code        |
| Poor Framework Structure | Scalability Issues  |

---

## Interview Questions

### Beginner Level

1. What is REST Assured?
2. Why use REST Assured?
3. How do you send a GET request?
4. What is response validation?
5. What are assertions?
6. What is JSONPath?
7. What is serialization?
8. What is deserialization?
9. How do you validate status codes?
10. How do you validate response bodies?

---

### Intermediate Level

1. What is Request Specification?
2. How do you perform authentication?
3. Explain JSON parsing.
4. How do you validate headers?
5. How do you design API test cases?
6. How do you log requests and responses?
7. Explain serialization with examples.
8. Explain deserialization with examples.
9. How do you integrate reporting?
10. Explain API framework architecture.

---

### Advanced Level

1. Design an enterprise API automation framework.
2. How would you automate OAuth-protected APIs?
3. How would you manage hundreds of endpoints?
4. Explain reusable request specifications.
5. How would you integrate REST Assured with Jenkins?
6. How would you perform schema validation?
7. How would you design data-driven API automation?
8. How would you handle dynamic tokens?
9. How would you automate microservices APIs?
10. Explain the API automation framework used in your project.

---

## Practical Assignments

### Assignment 1

Create REST Assured project and automate:

* GET API
* POST API
* PUT API
* DELETE API

---

### Assignment 2

Implement:

* Request Specification
* Response Specification

---

### Assignment 3

Create POJO classes and perform:

* Serialization
* Deserialization

---

### Assignment 4

Validate:

* Status Codes
* Headers
* Response Body
* Response Time

---

### Assignment 5

Integrate:

* Extent Reports
* Log4j2
* TestNG

---

## Mini Project

### Project: E-Commerce API Automation Framework

### Objective

Build a complete REST Assured Framework for an E-Commerce Application.

### Modules

* Authentication API
* Product API
* Cart API
* Checkout API
* User API

### Framework Features

* Request Specifications
* Response Validation
* Serialization
* Deserialization
* Reporting
* Logging
* CI/CD Integration

### Deliverables

* API Automation Framework
* POJO Models
* TestNG Suite
* Reports
* Logs
* Framework Documentation

---

## Cheat Sheet

| Concept               | Purpose                |
| --------------------- | ---------------------- |
| REST Assured          | API Automation Library |
| GET                   | Retrieve Data          |
| POST                  | Create Data            |
| PUT                   | Update Resource        |
| PATCH                 | Partial Update         |
| DELETE                | Remove Resource        |
| Request Specification | Reusable Request Setup |
| JSONPath              | Extract JSON Values    |
| Assertion             | Validation             |
| Serialization         | Java → JSON            |
| Deserialization       | JSON → Java            |
| POJO                  | Payload Object         |
| Extent Reports        | Reporting              |
| Log4j2                | Logging                |

---

## Key Takeaways

* REST Assured is the most popular Java API automation library.
* REST Assured integrates seamlessly with TestNG and Maven.
* HTTP methods form the foundation of API automation.
* Request Specifications reduce code duplication.
* Response validation ensures API correctness.
* Assertions verify expected behavior.
* JSONPath is used to extract response values.
* Serialization converts Java objects into JSON.
* Deserialization converts JSON into Java objects.
* POJOs improve framework maintainability.
* API frameworks should follow layered architecture.
* Endpoint management should be centralized.
* Reporting improves execution visibility.
* Logging improves debugging capabilities.
* Authentication automation is essential in enterprise APIs.
* Configuration should always be externalized.
* REST Assured supports enterprise-scale API automation.
* CI/CD integration is critical for API testing.
* REST Assured questions are extremely common in SDET interviews.
* Strong REST Assured knowledge is mandatory for modern Automation Engineers and SDETs.
