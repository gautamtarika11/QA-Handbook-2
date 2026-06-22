---

title: Complete Automation Cheat Sheets
part: 29
slug: complete-automation-cheat-sheets
description: Complete quick-reference guide covering Software Testing, Agile, Java, OOP, Collections, Selenium, XPath, CSS Selectors, TestNG, Maven, Git, SQL, API Testing, REST Assured, Jenkins, and Playwright.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Part 29 — Complete Automation Cheat Sheets

## Learning Objectives

By the end of this chapter, you will be able to:

* Quickly revise all major Automation Testing topics.
* Use syntax references during development.
* Refresh concepts before interviews.
* Recall frequently used commands and patterns.
* Access a centralized Automation Engineer reference guide.
* Improve productivity during framework development.
* Use cheat sheets for rapid troubleshooting.

---

## Introduction

Automation Engineers frequently need quick access to:

* Commands
* Syntax
* Framework configurations
* SQL queries
* Selenium locators
* Git operations
* API validation patterns

This chapter serves as a one-stop reference guide.

> Use this chapter for quick revision before interviews, project work, certifications, and assessments.

---

## Core Concepts

# Testing Cheat Sheet

## Testing Types

| Testing Type          | Purpose                             |
| --------------------- | ----------------------------------- |
| Smoke Testing         | Verify critical functionality       |
| Sanity Testing        | Verify recent changes               |
| Regression Testing    | Ensure existing functionality works |
| Retesting             | Verify fixed defects                |
| Integration Testing   | Verify module interaction           |
| System Testing        | Validate complete system            |
| UAT                   | User acceptance                     |
| Exploratory Testing   | Simultaneous learning and testing   |
| Ad-Hoc Testing        | Informal testing                    |
| Compatibility Testing | Environment validation              |

---

## Severity vs Priority

| Severity                 | Priority        |
| ------------------------ | --------------- |
| Technical Impact         | Business Impact |
| Set by QA                | Set by Business |
| Critical/High/Medium/Low | P1/P2/P3/P4     |

---

## Defect Lifecycle

```text
New
 ↓
Assigned
 ↓
Open
 ↓
Fixed
 ↓
Retest
 ↓
Closed
```

---

# Agile Cheat Sheet

## Scrum Roles

| Role             | Responsibility        |
| ---------------- | --------------------- |
| Product Owner    | Requirement Ownership |
| Scrum Master     | Process Facilitation  |
| Development Team | Product Delivery      |
| Tester           | Quality Assurance     |

---

## Scrum Ceremonies

| Ceremony           | Duration   |
| ------------------ | ---------- |
| Sprint Planning    | 2–8 Hours  |
| Daily Standup      | 15 Minutes |
| Backlog Refinement | Ongoing    |
| Sprint Review      | 1–2 Hours  |
| Retrospective      | 1 Hour     |

---

## Agile Metrics

| Metric     | Meaning            |
| ---------- | ------------------ |
| Velocity   | Work Completed     |
| Burn Down  | Remaining Work     |
| Burn Up    | Completed Work     |
| Lead Time  | Request → Delivery |
| Cycle Time | Start → Completion |

---

# Java Cheat Sheet

## Data Types

| Type    | Size       |
| ------- | ---------- |
| byte    | 1 Byte     |
| short   | 2 Bytes    |
| int     | 4 Bytes    |
| long    | 8 Bytes    |
| float   | 4 Bytes    |
| double  | 8 Bytes    |
| char    | 2 Bytes    |
| boolean | True/False |

---

## Loops

### For Loop

```java
for(int i=0;i<5;i++){
    System.out.println(i);
}
```

### While Loop

```java
while(condition){
}
```

### Do While

```java
do{
}while(condition);
```

---

## String Methods

| Method      | Purpose        |
| ----------- | -------------- |
| length()    | String Length  |
| charAt()    | Character      |
| substring() | Partial String |
| equals()    | Compare        |
| contains()  | Check Presence |
| replace()   | Replace Text   |
| trim()      | Remove Spaces  |

---

# OOP Cheat Sheet

## Four Pillars

| Pillar        | Meaning             |
| ------------- | ------------------- |
| Encapsulation | Data Hiding         |
| Inheritance   | Reuse               |
| Polymorphism  | Multiple Forms      |
| Abstraction   | Hide Implementation |

---

## Access Modifiers

| Modifier  | Scope           |
| --------- | --------------- |
| private   | Class           |
| default   | Package         |
| protected | Package + Child |
| public    | Everywhere      |

---

## OOP Relationships

| Relationship | Example               |
| ------------ | --------------------- |
| IS-A         | Car IS-A Vehicle      |
| HAS-A        | Car HAS-A Engine      |
| Association  | Teacher ↔ Student     |
| Aggregation  | Department ↔ Employee |
| Composition  | House ↔ Room          |

---

# Collections Cheat Sheet

## Collection Hierarchy

```text
Collection
├── List
├── Set
└── Queue

Map
```

---

## List Implementations

| Collection | Characteristics |
| ---------- | --------------- |
| ArrayList  | Fast Retrieval  |
| LinkedList | Fast Insertion  |
| Vector     | Thread Safe     |

---

## Set Implementations

| Collection    | Characteristics |
| ------------- | --------------- |
| HashSet       | Unordered       |
| LinkedHashSet | Ordered         |
| TreeSet       | Sorted          |

---

## Map Implementations

| Collection    | Characteristics |
| ------------- | --------------- |
| HashMap       | Fastest         |
| LinkedHashMap | Insertion Order |
| TreeMap       | Sorted          |

---

# Selenium Cheat Sheet

## Browser Commands

```java
driver.get(url);

driver.navigate().back();

driver.navigate().forward();

driver.navigate().refresh();

driver.close();

driver.quit();
```

---

## WebElement Commands

```java
click();

sendKeys();

clear();

submit();

getText();

getAttribute();

isDisplayed();

isEnabled();

isSelected();
```

---

## Waits

### Implicit Wait

```java
driver.manage().timeouts()
.implicitlyWait(Duration.ofSeconds(10));
```

### Explicit Wait

```java
WebDriverWait wait =
new WebDriverWait(
driver,
Duration.ofSeconds(10));
```

---

# XPath Cheat Sheet

## Basic XPath

```xpath
//input

//button

//a
```

---

## Attribute XPath

```xpath
//*[@id='username']

//input[@name='email']
```

---

## Contains

```xpath
//button[contains(text(),'Login')]
```

---

## Starts-With

```xpath
//input[starts-with(@id,'user')]
```

---

## Text

```xpath
//*[text()='Login']
```

---

## Parent

```xpath
//input/parent::div
```

---

## Following Sibling

```xpath
//label/following-sibling::input
```

---

# CSS Selector Cheat Sheet

## ID

```css
#username
```

---

## Class

```css
.login-btn
```

---

## Attribute

```css
input[name='email']
```

---

## Contains

```css
input[id*='user']
```

---

## Starts With

```css
input[id^='user']
```

---

## Ends With

```css
input[id$='name']
```

---

## Child

```css
div > input
```

---

## Descendant

```css
div input
```

---

# TestNG Cheat Sheet

## Common Annotations

```java
@BeforeSuite

@BeforeTest

@BeforeClass

@BeforeMethod

@Test

@AfterMethod

@AfterClass

@AfterTest

@AfterSuite
```

---

## Priority

```java
@Test(priority=1)
```

---

## Groups

```java
@Test(groups={"smoke"})
```

---

## Data Provider

```java
@DataProvider
```

---

## Assertion

```java
Assert.assertEquals();

Assert.assertTrue();

Assert.assertFalse();
```

---

# Maven Cheat Sheet

## Commands

```bash
mvn clean

mvn compile

mvn test

mvn package

mvn install
```

---

## Common Lifecycle

```text
validate
 ↓
compile
 ↓
test
 ↓
package
 ↓
install
 ↓
deploy
```

---

## Dependency Structure

```xml
<dependency>
    <groupId></groupId>
    <artifactId></artifactId>
    <version></version>
</dependency>
```

---

# Git Cheat Sheet

## Repository Commands

```bash
git init

git clone

git status

git add .

git commit -m "message"

git push

git pull
```

---

## Branch Commands

```bash
git branch

git checkout branch

git checkout -b feature

git merge branch
```

---

## Useful Commands

```bash
git log

git stash

git reset

git revert
```

---

# SQL Cheat Sheet

## SELECT

```sql
SELECT * FROM employees;
```

---

## WHERE

```sql
SELECT *
FROM employees
WHERE salary > 50000;
```

---

## ORDER BY

```sql
SELECT *
FROM employees
ORDER BY salary DESC;
```

---

## GROUP BY

```sql
SELECT department,
COUNT(*)
FROM employees
GROUP BY department;
```

---

## HAVING

```sql
SELECT department,
COUNT(*)
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```

---

## INNER JOIN

```sql
SELECT *
FROM emp e
INNER JOIN dept d
ON e.dept_id=d.id;
```

---

## LEFT JOIN

```sql
SELECT *
FROM emp e
LEFT JOIN dept d
ON e.dept_id=d.id;
```

---

## Second Highest Salary

```sql
SELECT MAX(salary)
FROM employees
WHERE salary <
(
SELECT MAX(salary)
FROM employees
);
```

---

# API Cheat Sheet

## HTTP Methods

| Method | Purpose        |
| ------ | -------------- |
| GET    | Read           |
| POST   | Create         |
| PUT    | Update         |
| PATCH  | Partial Update |
| DELETE | Remove         |

---

## Status Codes

| Code | Meaning      |
| ---- | ------------ |
| 200  | Success      |
| 201  | Created      |
| 204  | No Content   |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 403  | Forbidden    |
| 404  | Not Found    |
| 500  | Server Error |

---

## Headers

```http
Content-Type

Authorization

Accept
```

---

## Authentication Types

| Type    | Example           |
| ------- | ----------------- |
| Basic   | Username/Password |
| Bearer  | JWT Token         |
| OAuth2  | Access Token      |
| API Key | Secret Key        |

---

# REST Assured Cheat Sheet

## GET Request

```java
given()

.when()

.get("/users")

.then()

.statusCode(200);
```

---

## POST Request

```java
given()

.body(payload)

.when()

.post("/users")

.then()

.statusCode(201);
```

---

## Assertion

```java
body(
"id",
equalTo(1)
);
```

---

## JSON Path

```java
response.jsonPath()
.getString("name");
```

---

## Request Specification

```java
RequestSpecification req =
new RequestSpecBuilder()
.build();
```

---

# Jenkins Cheat Sheet

## Common Concepts

| Concept    | Meaning                |
| ---------- | ---------------------- |
| CI         | Continuous Integration |
| CD         | Continuous Delivery    |
| Controller | Jenkins Master         |
| Agent      | Execution Node         |
| Pipeline   | Workflow               |
| Job        | Executable Task        |

---

## Jenkins Pipeline

```groovy
pipeline {

 agent any

 stages {

   stage('Build') {

     steps {

       echo 'Build'
     }
   }
 }
}
```

---

## Build Commands

```bash
mvn clean test
```

---

## Cron Example

```text
0 2 * * *
```

Meaning:

```text
Every Day at 2 AM
```

---

# Playwright Cheat Sheet

## Launch Browser

```java
Playwright playwright =
Playwright.create();

Browser browser =
playwright.chromium()
.launch();
```

---

## Open Page

```java
Page page =
browser.newPage();
```

---

## Navigate

```java
page.navigate(
"https://example.com");
```

---

## Click

```java
page.locator(
"#login")
.click();
```

---

## Fill

```java
page.locator(
"#username")
.fill("admin");
```

---

## Assertion

```java
assertThat(
page.locator("#msg"))
.isVisible();
```

---

## Screenshot

```java
page.screenshot(
new Page.ScreenshotOptions()
.setPath(
Paths.get("image.png")));
```

---

## Playwright Locator Priority

| Priority | Locator            |
| -------- | ------------------ |
| 1        | getByRole()        |
| 2        | getByLabel()       |
| 3        | getByPlaceholder() |
| 4        | getByText()        |
| 5        | CSS                |
| 6        | XPath              |

---

## Real World Industry Examples

### Daily Automation Workflow

```text
Git Pull
   ↓
Code Changes
   ↓
Execute Tests
   ↓
Generate Reports
   ↓
Push Changes
```

---

### CI/CD Workflow

```text
GitHub
   ↓
Jenkins
   ↓
Maven
   ↓
TestNG
   ↓
Reports
```

---

### API Automation Flow

```text
Request
   ↓
REST Assured
   ↓
Response
   ↓
Validation
```

---

### Playwright Execution Flow

```text
Browser
   ↓
Context
   ↓
Page
   ↓
Actions
   ↓
Assertions
```

---

## Best Practices

* Keep this cheat sheet accessible during development.
* Memorize concepts, not syntax.
* Use IDE auto-completion effectively.
* Practice commands regularly.
* Revise cheat sheets weekly.
* Maintain personal notes alongside references.
* Use framework templates for consistency.
* Update cheat sheets with new technologies.
* Focus on understanding before memorization.
* Convert cheat sheets into flashcards for interview preparation.

---

## Common Mistakes

| Mistake                       | Impact                  |
| ----------------------------- | ----------------------- |
| Memorizing Without Practice   | Poor Retention          |
| Ignoring Fundamentals         | Weak Foundations        |
| Over-Reliance on Cheat Sheets | Limited Problem Solving |
| Not Revising Regularly        | Knowledge Decay         |
| Copy-Pasting Code Blindly     | Debugging Challenges    |

---

## Interview Questions

### Quick Revision Questions

1. What is the difference between Smoke and Sanity Testing?
2. Explain Encapsulation with an example.
3. ArrayList vs LinkedList?
4. Checked vs Unchecked Exception?
5. Implicit Wait vs Explicit Wait?
6. XPath vs CSS Selector?
7. DataProvider in TestNG?
8. Maven lifecycle phases?
9. Git merge vs rebase?
10. INNER JOIN vs LEFT JOIN?
11. PUT vs PATCH?
12. Serialization vs Deserialization?
13. Jenkins Controller vs Agent?
14. Selenium vs Playwright?
15. What is CI/CD?

---

## Practical Assignments

### Assignment 1

Create your own personalized cheat sheet from this chapter.

### Assignment 2

Print and review one cheat sheet daily for 30 days.

### Assignment 3

Create flashcards for:

* Java
* Selenium
* SQL
* API

### Assignment 4

Write all common Git commands without referring to notes.

### Assignment 5

Perform mock interview revisions using this chapter only.

---

## Mini Project

### Project: Personal Automation Reference Handbook

#### Objective

Create a customized quick-reference guide containing:

* Frequently Used Java Snippets
* Selenium Commands
* XPath Patterns
* SQL Queries
* API Validation Templates
* Git Commands
* Jenkins Pipelines

#### Deliverables

* Personal Notes Repository
* Interview Revision Guide
* Printable PDF Version
* GitHub Documentation Repository

---

## Cheat Sheet

| Area         | Quick Focus          |
| ------------ | -------------------- |
| Testing      | STLC, Defects        |
| Agile        | Scrum Events         |
| Java         | Syntax & OOP         |
| Collections  | List, Set, Map       |
| Selenium     | WebDriver            |
| XPath        | Dynamic Locators     |
| CSS          | Fast Locators        |
| TestNG       | Execution Control    |
| Maven        | Build Management     |
| Git          | Version Control      |
| SQL          | Queries & Joins      |
| API          | HTTP & Validation    |
| REST Assured | Automation           |
| Jenkins      | CI/CD                |
| Playwright   | Modern UI Automation |

---

## Key Takeaways

* Cheat sheets improve productivity.
* Testing fundamentals remain critical.
* Agile concepts appear in most interviews.
* Java syntax should become second nature.
* OOP concepts drive framework design.
* Collections are heavily used in automation.
* Selenium commands should be memorized.
* XPath and CSS selectors are core automation skills.
* TestNG powers execution management.
* Maven simplifies dependency management.
* Git is mandatory for collaborative development.
* SQL is essential for backend validation.
* API Testing is a mandatory SDET skill.
* REST Assured is the industry standard for Java API automation.
* Jenkins knowledge is expected in automation roles.
* Playwright adoption is growing rapidly.
* Regular revision significantly improves retention.
* Cheat sheets are references, not substitutes for understanding.
* Building personal reference material accelerates growth.
* Consistent practice combined with quick-reference guides leads to long-term mastery.
