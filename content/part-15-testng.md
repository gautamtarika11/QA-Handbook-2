---

title: TestNG Masterclass
part: 15
slug: testng-masterclass
description: Master TestNG for Automation Testing including Annotations, Assertions, Groups, Dependencies, Data Providers, Parameters, XML Configuration, Parallel Execution, Retry Mechanisms, Listeners, and Reporting.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Part 15 — TestNG Masterclass

## Learning Objectives

By the end of this chapter, you will be able to:

* Understand TestNG architecture and features.
* Configure TestNG in Selenium projects.
* Use TestNG annotations effectively.
* Implement assertions for validation.
* Manage execution order using priorities.
* Organize tests using groups.
* Create test dependencies.
* Execute data-driven tests using DataProviders.
* Pass parameters through XML configuration.
* Configure and execute test suites.
* Run tests in parallel.
* Implement retry mechanisms.
* Create custom listeners.
* Generate and analyze TestNG reports.
* Design scalable automation frameworks using TestNG.

---

# Part 15 — TestNG Masterclass

## Introduction

TestNG (Test Next Generation) is one of the most popular testing frameworks used with Selenium.

It provides advanced features beyond JUnit, such as:

* Annotations
* Test Prioritization
* Data-Driven Testing
* Parallel Execution
* Dependency Management
* Reporting
* Listener Support

TestNG is widely used in:

* Selenium Automation Frameworks
* API Automation Frameworks
* Mobile Automation Frameworks
* Enterprise Testing Solutions

Benefits of TestNG:

* Better test organization
* Flexible execution
* Easy reporting
* Framework integration
* CI/CD compatibility

Most enterprise Selenium frameworks are built using:

```text
Java + Selenium + TestNG + Maven
```

---

## Core Concepts

## Introduction to TestNG

### What is TestNG?

TestNG is an open-source testing framework inspired by JUnit and NUnit.

### Features

| Feature               | Supported |
| --------------------- | --------- |
| Annotations           | Yes       |
| Assertions            | Yes       |
| Parallel Execution    | Yes       |
| Data Driven Testing   | Yes       |
| Reporting             | Yes       |
| Dependency Management | Yes       |
| Listener Support      | Yes       |
| Retry Logic           | Yes       |

---

## TestNG Setup

### Maven Dependency

```xml
<dependency>
    <groupId>org.testng</groupId>
    <artifactId>testng</artifactId>
    <version>7.10.2</version>
    <scope>test</scope>
</dependency>
```

---

### Sample TestNG Class

```java
import org.testng.annotations.Test;

public class LoginTest {

    @Test
    public void loginTest() {

        System.out.println(
            "Login Test Executed");
    }
}
```

---

## Annotations

Annotations control test execution.

### Common TestNG Annotations

| Annotation    | Purpose            |
| ------------- | ------------------ |
| @BeforeSuite  | Before Suite       |
| @AfterSuite   | After Suite        |
| @BeforeTest   | Before Test Tag    |
| @AfterTest    | After Test Tag     |
| @BeforeClass  | Before Class       |
| @AfterClass   | After Class        |
| @BeforeMethod | Before Test Method |
| @AfterMethod  | After Test Method  |
| @Test         | Test Case          |

---

### Execution Flow

```text
@BeforeSuite
    ↓
@BeforeTest
    ↓
@BeforeClass
    ↓
@BeforeMethod
    ↓
@Test
    ↓
@AfterMethod
    ↓
@AfterClass
    ↓
@AfterTest
    ↓
@AfterSuite
```

---

### Example

```java
public class TestExample {

    @BeforeMethod
    public void setup() {

        System.out.println("Setup");
    }

    @Test
    public void test1() {

        System.out.println("Execute Test");
    }

    @AfterMethod
    public void teardown() {

        System.out.println("Cleanup");
    }
}
```

---

## Assertions

Assertions validate expected outcomes.

### Why Assertions?

Without assertions:

```java
driver.findElement(loginButton)
      .click();
```

Test may pass even if application fails.

---

### Assertion Types

| Type        | Class      |
| ----------- | ---------- |
| Hard Assert | Assert     |
| Soft Assert | SoftAssert |

---

### Hard Assertion

```java
Assert.assertEquals(
actualTitle,
expectedTitle);
```

If assertion fails:

```text
Execution Stops
```

---

### Assert True

```java
Assert.assertTrue(
element.isDisplayed());
```

---

### Assert False

```java
Assert.assertFalse(
element.isDisplayed());
```

---

### Assert Null

```java
Assert.assertNull(object);
```

---

### Assert Not Null

```java
Assert.assertNotNull(object);
```

---

### Soft Assertion

```java
SoftAssert soft =
new SoftAssert();

soft.assertEquals(
actual,
expected);

soft.assertAll();
```

Execution continues until:

```java
soft.assertAll();
```

---

### Hard vs Soft Assert

| Feature              | Hard Assert | Soft Assert |
| -------------------- | ----------- | ----------- |
| Stops Execution      | Yes         | No          |
| Multiple Validations | Limited     | Yes         |
| Framework Usage      | Common      | Very Common |

---

## Priorities

Priorities control execution order.

### Example

```java
@Test(priority = 1)
public void login() {
}
```

```java
@Test(priority = 2)
public void search() {
}
```

```java
@Test(priority = 3)
public void logout() {
}
```

Execution:

```text
Login
 ↓
Search
 ↓
Logout
```

---

### Negative Priorities

```java
@Test(priority = -1)
```

Executes before:

```java
@Test(priority = 0)
```

---

## Groups

Groups organize tests logically.

### Example

```java
@Test(groups = {"smoke"})
```

```java
@Test(groups = {"regression"})
```

---

### Multiple Groups

```java
@Test(
groups = {
"smoke",
"regression"
})
```

---

### XML Execution

```xml
<groups>
    <run>
        <include name="smoke"/>
    </run>
</groups>
```

---

### Common Grouping Strategy

| Group      | Purpose          |
| ---------- | ---------------- |
| Smoke      | Critical Tests   |
| Sanity     | Basic Validation |
| Regression | Full Coverage    |
| API        | API Tests        |
| UI         | UI Tests         |

---

## Dependencies

Dependencies ensure tests run in sequence.

### Method Dependency

```java
@Test
public void login() {
}
```

```java
@Test(dependsOnMethods =
{"login"})
public void search() {
}
```

Execution:

```text
Login
 ↓
Search
```

---

### Multiple Dependencies

```java
@Test(dependsOnMethods =
{
"login",
"search"
})
```

---

### Group Dependency

```java
@Test(dependsOnGroups =
{"smoke"})
```

---

## Data Providers

DataProviders enable data-driven testing.

### Why Use Data Providers?

Avoid duplicate test methods.

---

### Example

```java
@DataProvider(name = "loginData")
public Object[][] data() {

    return new Object[][] {

        {"admin","admin123"},
        {"user","user123"}
    };
}
```

---

### Use Data Provider

```java
@Test(dataProvider = "loginData")
public void loginTest(
String user,
String password) {

}
```

---

### Execution

```text
Run 1
admin/admin123

Run 2
user/user123
```

---

### Data Provider from Separate Class

```java
@DataProvider
public Object[][] getData() {
}
```

Usage:

```java
@Test(
dataProvider = "getData",
dataProviderClass =
DataProviderUtil.class)
```

---

## Parameters

Parameters pass values from XML.

### XML

```xml
<parameter
name="browser"
value="chrome"/>
```

---

### Java

```java
@Parameters({"browser"})
@Test
public void launch(
String browser) {

}
```

---

### Multiple Parameters

```xml
<parameter
name="url"
value="https://demo.com"/>
```

```xml
<parameter
name="browser"
value="chrome"/>
```

---

### Use Case

Cross-browser execution.

---

## XML Configuration

### testng.xml

Controls execution.

---

### Basic XML

```xml
<!DOCTYPE suite SYSTEM
"https://testng.org/testng-1.0.dtd">

<suite name="Suite">

    <test name="Login">

        <classes>

            <class
            name="tests.LoginTest"/>

        </classes>

    </test>

</suite>
```

---

### Multiple Classes

```xml
<classes>

<class name="tests.LoginTest"/>

<class name="tests.SearchTest"/>

</classes>
```

---

### Multiple Tests

```xml
<suite>

<test name="Smoke"/>

<test name="Regression"/>

</suite>
```

---

## Parallel Execution

Parallel execution reduces execution time.

---

### Types

| Type      | Description        |
| --------- | ------------------ |
| Methods   | Parallel Methods   |
| Classes   | Parallel Classes   |
| Tests     | Parallel Tests     |
| Instances | Parallel Instances |

---

### Parallel Methods

```xml
<suite parallel="methods"
thread-count="5">
```

---

### Parallel Classes

```xml
<suite parallel="classes"
thread-count="3">
```

---

### Example

```xml
<suite
parallel="tests"
thread-count="4">
```

---

### Benefits

* Faster execution
* Better CI/CD performance
* Reduced regression cycle

---

### Challenges

* Thread Safety
* Shared Data
* Driver Management

---

## Retry Mechanisms

Retry failed tests automatically.

---

### Retry Analyzer

```java
public class RetryAnalyzer
implements IRetryAnalyzer {

    int count = 0;

    public boolean retry(
    ITestResult result) {

        if(count < 2) {

            count++;

            return true;
        }

        return false;
    }
}
```

---

### Use Retry

```java
@Test(
retryAnalyzer =
RetryAnalyzer.class)
```

---

### Benefits

* Handles flaky tests
* Reduces false failures

---

### Caution

Do not use retry to hide real defects.

---

## Listeners

Listeners monitor execution events.

### Common Listeners

| Listener               | Purpose        |
| ---------------------- | -------------- |
| ITestListener          | Test Events    |
| ISuiteListener         | Suite Events   |
| IInvokedMethodListener | Method Events  |
| IReporter              | Custom Reports |

---

### Implement Listener

```java
public class TestListener
implements ITestListener {

    public void onTestSuccess(
    ITestResult result){

        System.out.println(
        "PASS");
    }
}
```

---

### Register Listener

```java
@Listeners(TestListener.class)
```

---

### Common Listener Events

```text
onStart()
onTestStart()
onTestSuccess()
onTestFailure()
onFinish()
```

---

## Reporting

Reporting provides execution insights.

---

### Default Reports

Generated automatically.

Location:

```text
test-output
```

---

### Reports Generated

| Report                | Description    |
| --------------------- | -------------- |
| index.html            | Summary        |
| emailable-report.html | Email Friendly |
| testng-results.xml    | XML Results    |

---

### Sample Report Metrics

* Passed
* Failed
* Skipped
* Duration
* Execution Summary

---

### Extent Reports Integration

Popular third-party reporting tool.

```java
ExtentReports extent =
new ExtentReports();
```

Benefits:

* Screenshots
* Charts
* Categories
* Logs

---

### Allure Reports

Advanced reporting solution.

Features:

* Beautiful UI
* Attachments
* Execution History
* CI/CD Integration

---

## Real World Industry Examples

### Selenium UI Framework

Uses:

* TestNG
* Data Providers
* Listeners
* Retry Logic

---

### API Automation Framework

Uses:

* Groups
* XML Suites
* Parallel Execution

---

### CI/CD Pipeline

Uses:

* XML Configuration
* Parallel Execution
* Reporting

---

### Enterprise Regression Suite

Uses:

* Smoke Groups
* Retry Mechanism
* Extent Reports

---

## Diagrams (Markdown Compatible)

### TestNG Architecture

```text
Test Cases
     ↓
Annotations
     ↓
Execution Engine
     ↓
Listeners
     ↓
Reports
```

---

### Annotation Flow

```text
@BeforeSuite
      ↓
@BeforeClass
      ↓
@BeforeMethod
      ↓
@Test
      ↓
@AfterMethod
      ↓
@AfterClass
```

---

### Data Provider Flow

```text
Data Provider
      ↓
Test Method
      ↓
Iteration 1
      ↓
Iteration 2
      ↓
Iteration N
```

---

### Listener Flow

```text
Test Start
      ↓
Execute Test
      ↓
Pass/Fail
      ↓
Listener Trigger
      ↓
Report Update
```

---

## Best Practices

* Use @BeforeMethod for setup.
* Use Data Providers for test data.
* Use Groups for suite organization.
* Avoid excessive priorities.
* Prefer dependencies only when necessary.
* Use listeners for logging and screenshots.
* Implement parallel execution carefully.
* Use retry only for flaky scenarios.
* Generate detailed reports.
* Keep XML configurations modular.

---

## Common Mistakes

| Mistake                | Impact                |
| ---------------------- | --------------------- |
| Excessive Priorities   | Maintenance Issues    |
| Hardcoded Test Data    | Poor Scalability      |
| Overusing Dependencies | Fragile Suites        |
| No Listener Usage      | Poor Debugging        |
| Excessive Retries      | Hidden Defects        |
| Shared Driver Objects  | Parallel Failures     |
| Large XML Files        | Difficult Maintenance |

---

## Interview Questions

### Beginner Level

1. What is TestNG?
2. Why is TestNG preferred over JUnit?
3. What are TestNG Annotations?
4. What is @Test?
5. What is a Data Provider?
6. What are Assertions?
7. What is testng.xml?
8. What are Groups?
9. What are Dependencies?
10. What is Parallel Execution?

---

### Intermediate Level

1. Difference between Hard and Soft Assertions?
2. Explain TestNG execution flow.
3. How do Data Providers work?
4. Explain Parameters in TestNG.
5. What are Listeners?
6. How does Retry Analyzer work?
7. How do you run tests in parallel?
8. Explain Group execution.
9. What reports does TestNG generate?
10. How is TestNG integrated with Selenium?

---

### Advanced Level

1. Design a TestNG framework architecture.
2. How do you handle thread safety in parallel execution?
3. Explain listener-based screenshot capture.
4. How would you implement custom reporting?
5. Explain DataProvider vs Parameter.
6. How would you execute 10,000 tests efficiently?
7. Design a Retry Strategy for flaky tests.
8. Explain TestNG lifecycle internally.
9. How would you organize a large regression suite?
10. How do enterprise frameworks leverage TestNG?

---

## Practical Assignments

### Assignment 1

Create:

* BeforeSuite
* BeforeClass
* BeforeMethod
* Test
* AfterMethod

Execution example.

---

### Assignment 2

Create:

* Smoke Group
* Regression Group
* Sanity Group

Execute via XML.

---

### Assignment 3

Implement Data Providers for:

* Login
* Registration
* Search

---

### Assignment 4

Create:

* Retry Analyzer
* Custom Listener
* Screenshot Capture Utility

---

### Assignment 5

Run:

* 20 Tests
* Parallel Execution
* Generate Reports

---

## Mini Project

### Project: Enterprise TestNG Automation Suite

### Features

* Login Module
* Search Module
* Cart Module
* Checkout Module

### Framework Components

* Data Providers
* XML Suites
* Retry Analyzer
* Listeners
* Reports
* Parallel Execution

### Deliverables

* TestNG Framework
* testng.xml
* Listener Classes
* Retry Utility
* Reports
* Execution Screenshots

---

## Cheat Sheet

| Concept       | Usage                |
| ------------- | -------------------- |
| @Test         | Test Method          |
| @BeforeMethod | Setup                |
| @AfterMethod  | Cleanup              |
| Assert        | Validation           |
| SoftAssert    | Multiple Validations |
| Groups        | Categorization       |
| Dependencies  | Execution Order      |
| DataProvider  | Data Driven Testing  |
| Parameters    | XML Input            |
| testng.xml    | Execution Control    |
| Parallel      | Faster Execution     |
| RetryAnalyzer | Retry Failed Tests   |
| Listener      | Event Monitoring     |
| Report        | Execution Results    |

---

## Key Takeaways

* TestNG is the most popular framework used with Selenium.
* Annotations control test execution flow.
* Assertions validate application behavior.
* Groups organize test suites effectively.
* Dependencies control execution relationships.
* Data Providers enable data-driven testing.
* Parameters support XML-based configuration.
* testng.xml controls suite execution.
* Parallel execution significantly reduces execution time.
* Retry mechanisms help handle flaky tests.
* Listeners enable advanced framework customization.
* Reporting provides execution visibility.
* Extent Reports and Allure are commonly used.
* Enterprise frameworks heavily rely on TestNG.
* Data-driven testing improves maintainability.
* Listener-based screenshot capture is industry standard.
* Parallel execution requires proper thread management.
* TestNG integrates seamlessly with Selenium.
* Strong TestNG knowledge is mandatory for Automation Engineers and SDETs.
* Mastering TestNG is a prerequisite for advanced framework development.
