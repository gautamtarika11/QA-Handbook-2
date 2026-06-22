---

title: Playwright Automation
part: 24
slug: playwright-automation
description: Master Playwright Automation including architecture, installation, locators, actions, assertions, fixtures, hooks, parallel execution, reporting, framework design, and Selenium to Playwright migration strategies.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Part 24 — Playwright Automation

## Learning Objectives

By the end of this chapter, you will be able to:

* Understand Playwright fundamentals.
* Understand Playwright architecture.
* Compare Selenium and Playwright.
* Install and configure Playwright projects.
* Work with advanced Playwright locators.
* Perform browser actions and validations.
* Use assertions effectively.
* Implement fixtures and hooks.
* Execute tests in parallel.
* Configure reporting.
* Design enterprise-grade Playwright frameworks.
* Migrate Selenium frameworks to Playwright.
* Prepare for Playwright interview questions.

---

# Part 24 — Playwright Automation

## Introduction

Web automation has evolved significantly over the last decade.

For years, Selenium dominated browser automation.

Challenges commonly faced with Selenium:

* Synchronization Issues
* Driver Management
* Flaky Tests
* Slow Execution
* Complex Setup

To solve these issues, Microsoft introduced Playwright.

Playwright is a modern browser automation framework that provides:

* Auto Wait Mechanisms
* Cross Browser Support
* Fast Execution
* Parallel Testing
* Network Interception
* Built-in Reporting

Today many organizations are adopting Playwright for:

* UI Automation
* End-to-End Testing
* Regression Testing
* Cross Browser Testing
* API + UI Testing

---

## Core Concepts

## Introduction to Playwright

### What is Playwright?

Playwright is an open-source automation framework developed by:

Microsoft

for automating modern web applications.

---

### Supported Languages

| Language   | Supported |
| ---------- | --------- |
| JavaScript | Yes       |
| TypeScript | Yes       |
| Java       | Yes       |
| Python     | Yes       |
| C#         | Yes       |

---

### Supported Browsers

| Browser | Engine   |
| ------- | -------- |
| Chrome  | Chromium |
| Edge    | Chromium |
| Brave   | Chromium |
| Firefox | Gecko    |
| Safari  | WebKit   |

---

### Why Playwright?

Benefits:

* Faster Execution
* Auto Waiting
* Built-in Assertions
* Parallel Execution
* Screenshots
* Videos
* Tracing
* Network Mocking

---

### Playwright Workflow

```text
Test Script
      ↓
Playwright API
      ↓
Browser
      ↓
Web Application
      ↓
Validation
```

---

## Selenium vs Playwright

### Comparison Table

| Feature              | Selenium | Playwright |
| -------------------- | -------- | ---------- |
| Release              | 2004     | 2020       |
| Driver Required      | Yes      | No         |
| Auto Wait            | No       | Yes        |
| Parallel Execution   | Limited  | Native     |
| Network Interception | Limited  | Excellent  |
| Reporting            | External | Built-in   |
| Speed                | Moderate | Faster     |
| Browser Contexts     | No       | Yes        |
| Multi-Tab Handling   | Complex  | Easier     |

---

### Selenium Architecture

```text
Test Script
      ↓
WebDriver
      ↓
Browser Driver
      ↓
Browser
```

---

### Playwright Architecture

```text
Test Script
      ↓
Playwright
      ↓
Browser
```

---

### Why Companies Are Migrating

* Faster execution
* Better stability
* Less flaky tests
* Easier parallelization
* Better debugging

---

## Playwright Architecture

### High-Level Architecture

```text
Playwright Test
        ↓
Browser Context
        ↓
Page
        ↓
Browser
```

---

### Browser Context

A Browser Context acts like an isolated browser session.

Example:

```text
Browser
   │
   ├── Context 1
   ├── Context 2
   └── Context 3
```

Each context has:

* Separate Cookies
* Separate Cache
* Separate Sessions

---

### Page Object

```java
Page page;
```

Represents a browser tab.

---

### Browser Object

```java
Browser browser;
```

Represents browser instance.

---

### Execution Flow

```text
Browser
   ↓
Context
   ↓
Page
   ↓
Actions
```

---

## Setup & Installation

### Prerequisites

* Java 17+
* Maven
* IDE (IntelliJ/Eclipse)

---

### Maven Dependency

```xml
<dependency>
    <groupId>com.microsoft.playwright</groupId>
    <artifactId>playwright</artifactId>
    <version>1.54.0</version>
</dependency>
```

---

### Install Browsers

```bash
mvn exec:java -e \
-Dexec.mainClass=com.microsoft.playwright.CLI \
-Dexec.args="install"
```

---

### Create Playwright Instance

```java
Playwright playwright =
Playwright.create();
```

---

### Launch Browser

```java
Browser browser =
playwright.chromium()
.launch();
```

---

### Create Page

```java
Page page =
browser.newPage();
```

---

### Navigate

```java
page.navigate(
"https://example.com");
```

---

### Complete Example

```java
Playwright playwright =
Playwright.create();

Browser browser =
playwright.chromium()
.launch();

Page page =
browser.newPage();

page.navigate(
"https://example.com");
```

---

## Locators

Locators identify web elements.

---

### ID Locator

```java
page.locator("#username");
```

---

### CSS Locator

```java
page.locator(
".login-btn");
```

---

### XPath Locator

```java
page.locator(
"//button");
```

---

### Text Locator

```java
page.getByText(
"Login");
```

---

### Placeholder Locator

```java
page.getByPlaceholder(
"Username");
```

---

### Label Locator

```java
page.getByLabel(
"Email");
```

---

### Role Locator

```java
page.getByRole(
AriaRole.BUTTON);
```

---

### Recommended Locator Priority

| Priority | Locator            |
| -------- | ------------------ |
| 1        | getByRole()        |
| 2        | getByLabel()       |
| 3        | getByPlaceholder() |
| 4        | getByText()        |
| 5        | CSS                |
| 6        | XPath              |

---

## Actions

Playwright supports all common browser actions.

---

### Click

```java
page.locator(
"#login")
.click();
```

---

### Fill Text

```java
page.locator(
"#username")
.fill("admin");
```

---

### Clear Field

```java
page.locator(
"#username")
.clear();
```

---

### Press Key

```java
page.keyboard()
.press("Enter");
```

---

### Select Dropdown

```java
page.locator("#country")
.selectOption("India");
```

---

### Check Checkbox

```java
page.locator(
"#remember")
.check();
```

---

### Uncheck Checkbox

```java
page.locator(
"#remember")
.uncheck();
```

---

### Upload File

```java
page.setInputFiles(
"input[type=file]",
Paths.get("file.txt"));
```

---

### Hover

```java
page.locator(
"#menu")
.hover();
```

---

### Double Click

```java
page.locator(
"#btn")
.dblclick();
```

---

## Assertions

Assertions validate expected behavior.

---

### Import Assertions

```java
import static
com.microsoft.playwright.assertions
.PlaywrightAssertions.*;
```

---

### Visibility Assertion

```java
assertThat(
page.locator("#login"))
.isVisible();
```

---

### Text Assertion

```java
assertThat(
page.locator("#msg"))
.hasText("Success");
```

---

### Contains Text

```java
assertThat(
page.locator("#msg"))
.containsText("Success");
```

---

### URL Assertion

```java
assertThat(page)
.hasURL(
"https://demo.com");
```

---

### Title Assertion

```java
assertThat(page)
.hasTitle(
"Dashboard");
```

---

### Enabled Assertion

```java
assertThat(
page.locator("#btn"))
.isEnabled();
```

---

## Fixtures

Fixtures provide reusable test setup.

---

### What Are Fixtures?

Reusable resources for tests.

Examples:

* Browser
* Page
* Test Data
* Authentication

---

### Fixture Architecture

```text
Fixture
   ↓
Test Setup
   ↓
Test Execution
   ↓
Cleanup
```

---

### Example Fixture

```java
@BeforeEach

public void setup() {

browser =
playwright.chromium()
.launch();

page =
browser.newPage();
}
```

---

### Benefits

* Reusability
* Maintainability
* Reduced Code

---

## Hooks

Hooks execute before and after tests.

---

### Before All

```java
@BeforeAll
```

Runs once.

---

### Before Each

```java
@BeforeEach
```

Runs before every test.

---

### After Each

```java
@AfterEach
```

Runs after every test.

---

### After All

```java
@AfterAll
```

Runs once after suite execution.

---

### Hook Flow

```text
BeforeAll
     ↓
BeforeEach
     ↓
Test
     ↓
AfterEach
     ↓
AfterAll
```

---

## Parallel Execution

One of Playwright's biggest strengths.

---

### Why Parallel Execution?

Benefits:

* Faster Suites
* Reduced Build Time
* Better Scalability

---

### Parallel Architecture

```text
Worker 1 → Test A

Worker 2 → Test B

Worker 3 → Test C
```

---

### Example

```java
@Test

void loginTest() {

}
```

Multiple tests execute simultaneously.

---

### Enterprise Example

```text
1000 Tests

Sequential:
2 Hours

Parallel:
15 Minutes
```

---

## Reporting

Playwright includes built-in reporting.

---

### HTML Report

```bash
npx playwright show-report
```

---

### Report Features

* Pass/Fail Status
* Screenshots
* Videos
* Execution Time

---

### Report Structure

```text
Dashboard
    ↓
Suites
    ↓
Tests
    ↓
Attachments
```

---

### Screenshot Capture

```java
page.screenshot(
new Page.ScreenshotOptions()
.setPath(
Paths.get("login.png")));
```

---

### Video Recording

```java
BrowserContext context =
browser.newContext(
new Browser.NewContextOptions()
.setRecordVideoDir(
Paths.get("videos")));
```

---

### Trace Viewer

```bash
npx playwright show-trace trace.zip
```

---

### Benefits

* Faster Debugging
* Failure Investigation
* Root Cause Analysis

---

## Framework Design

### Enterprise Framework Structure

```text
PlaywrightFramework
│
├── src
│   ├── pages
│   ├── tests
│   ├── utilities
│   ├── listeners
│   ├── constants
│   └── config
│
├── reports
│
├── screenshots
│
├── videos
│
├── traces
│
├── pom.xml
│
└── testng.xml
```

---

### Layered Architecture

```text
Tests
 ↓
Page Objects
 ↓
Utilities
 ↓
Playwright
 ↓
Browser
```

---

### POM Example

```java
public class LoginPage {

Page page;

public LoginPage(
Page page){

this.page = page;
}

public void login(
String user,
String pass){

page.locator("#user")
.fill(user);

page.locator("#pass")
.fill(pass);

page.locator("#login")
.click();
}
}
```

---

### Framework Components

| Component    | Purpose            |
| ------------ | ------------------ |
| Page Objects | UI Actions         |
| Utilities    | Reusable Functions |
| Config       | Environment Data   |
| Reports      | Execution Results  |
| Listeners    | Event Handling     |

---

## Migration from Selenium

### Migration Strategy

```text
Selenium Framework
       ↓
Analyze Components
       ↓
Replace WebDriver
       ↓
Replace Locators
       ↓
Replace Waits
       ↓
Implement Playwright
```

---

### Selenium Example

```java
driver.findElement(
By.id("username"))
.sendKeys("admin");
```

---

### Playwright Equivalent

```java
page.locator(
"#username")
.fill("admin");
```

---

### Selenium Wait

```java
WebDriverWait wait =
new WebDriverWait(
driver,
Duration.ofSeconds(10));
```

---

### Playwright Wait

```java
Auto Wait
Built In
```

No explicit wait required in most scenarios.

---

### Migration Challenges

| Challenge         | Solution          |
| ----------------- | ----------------- |
| WebDriver Usage   | Replace with Page |
| Explicit Waits    | Use Auto Wait     |
| Driver Setup      | Remove Drivers    |
| Framework Changes | Refactor POM      |

---

## Real World Industry Examples

### Banking Application

Uses:

* Playwright
* Parallel Execution
* Trace Viewer

---

### E-Commerce Platform

Automates:

* Login
* Product Search
* Checkout

---

### Healthcare Application

Uses:

* Cross Browser Testing
* Video Recording
* Reporting

---

### SaaS Platform

Uses:

* CI/CD Integration
* Parallel Regression
* Cloud Execution

---

## Diagrams (Markdown Compatible)

### Playwright Architecture

```text
Tests
  ↓
Playwright
  ↓
Browser Context
  ↓
Page
  ↓
Browser
```

---

### Execution Flow

```text
Launch Browser
       ↓
Create Context
       ↓
Create Page
       ↓
Execute Actions
       ↓
Validate Results
```

---

### Framework Architecture

```text
Tests
 ↓
Pages
 ↓
Utilities
 ↓
Playwright
 ↓
Browser
```

---

### Parallel Execution

```text
Worker 1 → Login Tests

Worker 2 → Search Tests

Worker 3 → Checkout Tests
```

---

## Best Practices

* Prefer role-based locators.
* Use Page Object Model.
* Avoid hardcoded waits.
* Leverage auto-waiting.
* Capture screenshots on failures.
* Enable trace recording.
* Use parallel execution.
* Externalize configuration.
* Maintain reusable page objects.
* Integrate with CI/CD pipelines.

---

## Common Mistakes

| Mistake                   | Impact                |
| ------------------------- | --------------------- |
| Using XPath Everywhere    | Fragile Tests         |
| Hardcoded Waits           | Flaky Execution       |
| No POM Usage              | Poor Maintainability  |
| Large Test Classes        | Difficult Maintenance |
| Ignoring Trace Viewer     | Slow Debugging        |
| Hardcoded Test Data       | Maintenance Issues    |
| Sequential Execution Only | Slow Suites           |

---

## Interview Questions

### Beginner Level

1. What is Playwright?
2. Why was Playwright created?
3. What browsers does Playwright support?
4. What are Playwright locators?
5. What is auto waiting?
6. How do you launch a browser?
7. How do you click an element?
8. How do you perform assertions?
9. What are hooks?
10. What are fixtures?

---

### Intermediate Level

1. Selenium vs Playwright?
2. Explain Playwright architecture.
3. What is Browser Context?
4. How does Playwright handle synchronization?
5. Explain Playwright reporting.
6. How do you capture screenshots?
7. What is trace viewer?
8. Explain Playwright POM design.
9. How do you execute tests in parallel?
10. How would you design a Playwright framework?

---

### Advanced Level

1. Design an enterprise Playwright framework.
2. How would you migrate Selenium to Playwright?
3. Explain Playwright's auto-wait mechanism.
4. How would you implement parallel execution at scale?
5. How would you integrate Playwright with Jenkins?
6. Explain browser context isolation.
7. How would you handle test data management?
8. How would you design reusable fixtures?
9. How would you debug flaky Playwright tests?
10. Explain the Playwright framework used in your project.

---

## Practical Assignments

### Assignment 1

Create a Playwright project and automate:

* Login
* Logout

---

### Assignment 2

Implement:

* Role Locators
* Text Locators
* CSS Locators

---

### Assignment 3

Create:

* Page Objects
* Utility Classes

---

### Assignment 4

Capture:

* Screenshots
* Videos
* Traces

for failed tests.

---

### Assignment 5

Execute:

* Smoke Suite
* Regression Suite

in parallel.

---

## Mini Project

### Project: Enterprise Playwright Automation Framework

### Objective

Build a scalable Playwright automation framework.

### Modules

* Login
* Search
* Product Details
* Cart
* Checkout

### Framework Features

* POM
* Parallel Execution
* Reporting
* Screenshots
* Videos
* Trace Viewer
* Configuration Management
* CI/CD Integration

### Deliverables

* Framework Source Code
* Architecture Diagram
* Test Suites
* Reports
* Videos
* Documentation

---

## Cheat Sheet

| Concept            | Purpose                |
| ------------------ | ---------------------- |
| Playwright         | Browser Automation     |
| Browser            | Browser Instance       |
| Context            | Isolated Session       |
| Page               | Browser Tab            |
| Locator            | Element Identification |
| Assertion          | Validation             |
| Fixture            | Reusable Setup         |
| Hook               | Lifecycle Method       |
| Screenshot         | Evidence               |
| Trace              | Debugging              |
| Video              | Failure Analysis       |
| POM                | Framework Design       |
| Parallel Execution | Faster Testing         |

---

## Key Takeaways

* Playwright is a modern browser automation framework.
* Playwright was developed by Microsoft.
* Playwright supports Chromium, Firefox, and WebKit.
* Playwright eliminates the need for browser drivers.
* Auto-waiting reduces flaky tests.
* Browser Contexts provide isolated sessions.
* Playwright offers superior parallel execution capabilities.
* Reporting, screenshots, videos, and traces are built in.
* Role-based locators are recommended.
* POM remains a best practice in Playwright frameworks.
* Fixtures improve code reuse.
* Hooks manage test lifecycle activities.
* Playwright executes faster than traditional Selenium frameworks.
* CI/CD integration is straightforward.
* Trace Viewer significantly improves debugging.
* Most organizations adopting modern UI automation are evaluating Playwright.
* Selenium-to-Playwright migration is a common industry initiative.
* Playwright interview demand is growing rapidly.
* Enterprise frameworks benefit significantly from Playwright architecture.
* Playwright is becoming a key skill for Automation Engineers and SDETs.
