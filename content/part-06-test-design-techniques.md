---

title: Test Design Techniques & Test Cases
part: 6
slug: test-design-techniques-and-test-cases
description: Master test design techniques, test case creation, test data preparation, RTM creation, and industry-standard test case design methodologies used by QA Engineers and SDETs.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Part 6 — Test Design Techniques & Test Cases

## Learning Objectives

By the end of this chapter, you will be able to:

* Design effective test scenarios.
* Write high-quality test cases.
* Create reusable test data.
* Build Requirement Traceability Matrices (RTM).
* Apply Equivalence Partitioning.
* Apply Boundary Value Analysis.
* Create Decision Tables.
* Design State Transition tests.
* Apply Use Case Testing techniques.
* Use Error Guessing effectively.
* Design complete test suites for common application modules.
* Improve defect detection through optimized test coverage.

---

## Introduction

One of the most important skills of a QA Engineer is designing effective tests.

A tester's value is not measured by the number of test cases written but by the ability to uncover risks and defects efficiently.

Poorly designed test cases result in:

* Missed defects
* Duplicate coverage
* Increased maintenance effort
* Longer execution cycles

Modern testers use structured test design techniques to maximize coverage while minimizing effort.

These techniques help answer:

* What should be tested?
* What data should be used?
* What edge cases exist?
* What risks are present?

Test design techniques are heavily used in:

* Manual Testing
* Automation Testing
* API Testing
* Performance Testing
* Security Testing

---

## Core Concepts

### Test Scenario Design

A Test Scenario is a high-level testing objective that identifies what needs to be tested.

### Purpose

* Ensure requirement coverage
* Identify business workflows
* Simplify planning

### Example

Feature:

Login

Possible Scenarios:

| Scenario ID | Description             |
| ----------- | ----------------------- |
| TS-001      | Verify successful login |
| TS-002      | Verify invalid password |
| TS-003      | Verify account lockout  |
| TS-004      | Verify password reset   |
| TS-005      | Verify session timeout  |

### Characteristics of Good Test Scenarios

* Clear
* Traceable
* Business-focused
* Reusable

### Scenario Design Process

1. Understand requirements.
2. Identify workflows.
3. Identify alternate flows.
4. Identify negative paths.
5. Define priorities.

---

### Test Case Writing

A Test Case describes how to validate a requirement.

### Standard Test Case Structure

| Field           | Description        |
| --------------- | ------------------ |
| Test Case ID    | Unique Identifier  |
| Requirement ID  | Linked Requirement |
| Title           | Test Objective     |
| Preconditions   | Setup Needed       |
| Steps           | Execution Steps    |
| Test Data       | Inputs             |
| Expected Result | Expected Output    |
| Actual Result   | Observed Output    |
| Status          | Pass/Fail          |

### Example Test Case

| Field           | Value                     |
| --------------- | ------------------------- |
| TC_ID           | TC_LOGIN_001              |
| Title           | Verify valid login        |
| Test Data       | Valid username/password   |
| Expected Result | User logs in successfully |

### Characteristics of Good Test Cases

* Atomic
* Clear
* Independent
* Repeatable
* Traceable

### Common Mistakes

* Ambiguous steps
* Missing expected results
* Excessive dependencies

---

### Test Data Design

Test Data significantly impacts testing effectiveness.

### Purpose

Ensure realistic and meaningful validation.

### Types of Test Data

| Type                   | Example               |
| ---------------------- | --------------------- |
| Valid Data             | Correct credentials   |
| Invalid Data           | Wrong password        |
| Boundary Data          | Max length values     |
| Null Data              | Empty field           |
| Special Character Data | @#$%^                 |
| Security Data          | SQL Injection Strings |

### Example Login Data

| Username                                | Password | Expected            |
| --------------------------------------- | -------- | ------------------- |
| [valid@test.com](mailto:valid@test.com) | Valid123 | Success             |
| [valid@test.com](mailto:valid@test.com) | Wrong123 | Error               |
| blank                                   | Valid123 | Validation          |
| admin'--                                | test     | Security Validation |

### Best Practices

* Maintain reusable datasets.
* Use masked production data.
* Cover edge cases.
* Automate data generation where possible.

---

### RTM (Requirement Traceability Matrix)

RTM maps requirements to testing artifacts.

### Purpose

Ensure complete requirement coverage.

### RTM Flow

```text
Requirement
      ↓
Scenario
      ↓
Test Case
      ↓
Execution
      ↓
Defect
```

### Sample RTM

| Requirement ID | Requirement    | Scenario ID | Test Case ID | Status  |
| -------------- | -------------- | ----------- | ------------ | ------- |
| R-001          | Login          | TS-001      | TC-001       | Covered |
| R-002          | Password Reset | TS-002      | TC-002       | Covered |
| R-003          | Lockout        | TS-003      | TC-003       | Covered |

### Benefits

* Coverage tracking
* Audit support
* Impact analysis
* Requirement validation

---

### Equivalence Partitioning

Equivalence Partitioning divides inputs into logical groups.

### Objective

Reduce number of test cases while maintaining coverage.

### Example

Age Field

Requirement:

Age must be between 18 and 60.

### Partitions

| Partition | Type    |
| --------- | ------- |
| <18       | Invalid |
| 18–60     | Valid   |
| >60       | Invalid |

### Test Cases

| Input | Expected |
| ----- | -------- |
| 10    | Reject   |
| 25    | Accept   |
| 70    | Reject   |

### Benefits

* Reduced redundancy
* Efficient testing

---

### Boundary Value Analysis (BVA)

Defects often occur at boundaries.

### Rule

Test:

* Minimum
* Minimum+1
* Maximum-1
* Maximum
* Outside boundaries

### Example

Age Range:

18–60

### Test Values

| Value | Expected |
| ----- | -------- |
| 17    | Fail     |
| 18    | Pass     |
| 19    | Pass     |
| 59    | Pass     |
| 60    | Pass     |
| 61    | Fail     |

### Common Usage

* Numeric fields
* Character limits
* Date ranges

---

### Decision Table Testing

Used when outputs depend on multiple conditions.

### Example

Loan Approval

Conditions:

* Credit Score
* Income

Decision Table:

| Credit Score | Income | Result  |
| ------------ | ------ | ------- |
| High         | High   | Approve |
| High         | Low    | Review  |
| Low          | High   | Review  |
| Low          | Low    | Reject  |

### Benefits

* Excellent for business rules
* Prevents missing combinations

---

### State Transition Testing

Used when system behavior changes based on state.

### Example

Account Status

States:

```text
Active
  ↓
Locked
  ↓
Unlocked
```

### Login Example

Rule:

After 3 failed logins account locks.

### Test Cases

| Attempts | Expected State |
| -------- | -------------- |
| 1        | Active         |
| 2        | Active         |
| 3        | Locked         |

### Common Use Cases

* Login systems
* ATM systems
* Workflow applications

---

### Use Case Testing

Use Case Testing validates complete user workflows.

### Example

Online Shopping

Use Case:

Purchase Product

Steps:

```text
Login
 ↓
Search Product
 ↓
Add To Cart
 ↓
Checkout
 ↓
Payment
```

### Benefits

* User-focused
* Business-driven
* End-to-end coverage

---

### Error Guessing

Relies on tester experience.

### Objective

Predict likely defects.

### Examples

Experienced tester checks:

* Empty inputs
* Special characters
* Network interruptions
* Duplicate submissions
* Session expiration

### Common Error Guessing Areas

| Area         | Example             |
| ------------ | ------------------- |
| Login        | Blank Password      |
| Payment      | Double Click Submit |
| Search       | Emoji Inputs        |
| Registration | Duplicate Email     |

### Advantages

* Finds hidden defects
* Complements structured testing

---

## Login Module Test Cases

### Sample Test Suite

| TC ID     | Test Case                 | Expected Result  |
| --------- | ------------------------- | ---------------- |
| LOGIN-001 | Valid Login               | Success          |
| LOGIN-002 | Invalid Password          | Error            |
| LOGIN-003 | Invalid Username          | Error            |
| LOGIN-004 | Blank Username            | Validation       |
| LOGIN-005 | Blank Password            | Validation       |
| LOGIN-006 | Both Fields Blank         | Validation       |
| LOGIN-007 | SQL Injection Attempt     | Blocked          |
| LOGIN-008 | Password Case Sensitivity | Correct Handling |
| LOGIN-009 | Locked Account            | Access Denied    |
| LOGIN-010 | Session Timeout           | Login Required   |

---

## Registration Module Test Cases

### Sample Test Suite

| TC ID   | Test Case                 | Expected Result   |
| ------- | ------------------------- | ----------------- |
| REG-001 | Valid Registration        | Account Created   |
| REG-002 | Duplicate Email           | Error             |
| REG-003 | Weak Password             | Validation        |
| REG-004 | Invalid Email Format      | Validation        |
| REG-005 | Missing Mandatory Fields  | Validation        |
| REG-006 | Password Mismatch         | Error             |
| REG-007 | Maximum Length Validation | Correct Handling  |
| REG-008 | Special Characters        | Proper Validation |
| REG-009 | Terms Not Accepted        | Error             |
| REG-010 | OTP Verification          | Success           |

---

## Search Module Test Cases

### Sample Test Suite

| TC ID      | Test Case               | Expected Result          |
| ---------- | ----------------------- | ------------------------ |
| SEARCH-001 | Valid Search            | Relevant Results         |
| SEARCH-002 | Partial Keyword         | Matching Results         |
| SEARCH-003 | Invalid Keyword         | No Results               |
| SEARCH-004 | Empty Search            | Validation               |
| SEARCH-005 | Special Characters      | Safe Handling            |
| SEARCH-006 | Long Search String      | Proper Response          |
| SEARCH-007 | Case Insensitive Search | Results Displayed        |
| SEARCH-008 | Filter Application      | Correct Results          |
| SEARCH-009 | Sorting Validation      | Proper Order             |
| SEARCH-010 | Search Performance      | Acceptable Response Time |

---

## Checkout Module Test Cases

### Sample Test Suite

| TC ID        | Test Case            | Expected Result     |
| ------------ | -------------------- | ------------------- |
| CHECKOUT-001 | Successful Checkout  | Order Created       |
| CHECKOUT-002 | Empty Cart           | Error               |
| CHECKOUT-003 | Invalid Coupon       | Validation          |
| CHECKOUT-004 | Payment Failure      | Error Handling      |
| CHECKOUT-005 | Address Missing      | Validation          |
| CHECKOUT-006 | Session Timeout      | Redirect Login      |
| CHECKOUT-007 | Out-of-Stock Item    | Notification        |
| CHECKOUT-008 | Tax Calculation      | Correct Total       |
| CHECKOUT-009 | Shipping Charges     | Correct Calculation |
| CHECKOUT-010 | Duplicate Submission | Single Order        |

---

## Profile Management Test Cases

### Sample Test Suite

| TC ID       | Test Case                    | Expected Result    |
| ----------- | ---------------------------- | ------------------ |
| PROFILE-001 | Update Name                  | Saved Successfully |
| PROFILE-002 | Update Email                 | Saved Successfully |
| PROFILE-003 | Invalid Email                | Validation         |
| PROFILE-004 | Upload Profile Image         | Success            |
| PROFILE-005 | Unsupported File Format      | Error              |
| PROFILE-006 | Remove Profile Picture       | Success            |
| PROFILE-007 | Update Phone Number          | Saved Successfully |
| PROFILE-008 | Maximum Character Validation | Proper Handling    |
| PROFILE-009 | Unauthorized Access          | Denied             |
| PROFILE-010 | Concurrent Updates           | Consistent Data    |

---

## Real World Industry Examples

### Banking Application

Design Techniques Used:

* Boundary Value Analysis
* Decision Tables
* State Transition Testing

Critical Area:

Fund Transfers

---

### E-Commerce Platform

Design Techniques Used:

* Use Case Testing
* Equivalence Partitioning
* Error Guessing

Critical Area:

Checkout

---

### Healthcare System

Design Techniques Used:

* Decision Tables
* Boundary Testing

Critical Area:

Patient Records

---

### Fintech Platform

Design Techniques Used:

* State Transition Testing
* Boundary Analysis

Critical Area:

Authentication

---

## Diagrams (Markdown Compatible)

### Test Design Workflow

```text
Requirements
      ↓
Scenarios
      ↓
Test Cases
      ↓
Test Data
      ↓
Execution
```

### RTM Structure

```text
Requirement
     ↓
Scenario
     ↓
Test Case
     ↓
Execution
     ↓
Defect
```

### State Transition Example

```text
Active
 ↓
Failed Login
 ↓
Failed Login
 ↓
Failed Login
 ↓
Locked
```

---

## Best Practices

* Design scenarios before test cases.
* Link all test cases to requirements.
* Use RTM for coverage tracking.
* Prioritize high-risk areas.
* Include positive and negative cases.
* Apply structured design techniques.
* Reuse test data.
* Consider security and usability.
* Validate boundaries thoroughly.
* Supplement formal testing with error guessing.

---

## Common Mistakes

| Mistake                | Impact                 |
| ---------------------- | ---------------------- |
| Missing boundary tests | Escaped defects        |
| Weak negative testing  | Production issues      |
| No RTM                 | Coverage gaps          |
| Duplicate test cases   | Maintenance overhead   |
| Poor test data         | Ineffective validation |
| Ignoring workflows     | User-impacting defects |
| No risk prioritization | Resource waste         |

---

## Interview Questions

### Beginner Level

1. What is a Test Scenario?
2. What is a Test Case?
3. What is RTM?
4. What is Test Data?
5. What is Equivalence Partitioning?
6. What is Boundary Value Analysis?
7. What is Decision Table Testing?
8. What is State Transition Testing?
9. What is Use Case Testing?
10. What is Error Guessing?

### Intermediate Level

1. How do you write effective test cases?
2. Explain RTM with an example.
3. Compare Scenario vs Test Case.
4. When should BVA be used?
5. Explain Equivalence Classes.
6. What are Decision Tables useful for?
7. Explain State Transition Testing using login functionality.
8. How do you prepare test data?
9. How do you ensure coverage?
10. What is risk-based test design?

### Advanced Level

1. How would you design test cases for a payment gateway?
2. How do you optimize large test suites?
3. Explain traceability in Agile projects.
4. How do you identify missing scenarios?
5. How would you test a highly configurable workflow?
6. What design technique would you use for tax calculations and why?
7. How do you balance coverage versus execution effort?
8. How would you design tests for a banking application?
9. Explain advanced error guessing techniques.
10. How do test design techniques support automation frameworks?

---

## Practical Assignments

### Assignment 1

Create:

* 25 Login Test Cases
* 25 Registration Test Cases

Using BVA and Equivalence Partitioning.

---

### Assignment 2

Create an RTM for:

* User Registration
* Login
* Forgot Password

---

### Assignment 3

Design a Decision Table for:

* Loan Approval System
* Insurance Eligibility System

---

### Assignment 4

Create a State Transition Diagram and test suite for:

* ATM Card PIN Validation
* Account Lockout Functionality

---

## Mini Project

### Project: Complete Test Design for an E-Commerce Platform

#### Modules

* Registration
* Login
* Product Search
* Product Details
* Cart
* Checkout
* Payment
* Profile Management

### Deliverables

1. Requirement Analysis
2. Test Scenarios
3. RTM
4. Test Cases
5. Test Data
6. Decision Tables
7. Boundary Analysis Matrix
8. State Transition Tests
9. Defect Report Samples
10. Coverage Report

---

## Cheat Sheet

| Technique                | Purpose                  |
| ------------------------ | ------------------------ |
| Test Scenario            | What to Test             |
| Test Case                | How to Test              |
| RTM                      | Coverage Tracking        |
| Equivalence Partitioning | Input Grouping           |
| Boundary Value Analysis  | Edge Validation          |
| Decision Table           | Business Rules           |
| State Transition         | State-Based Behavior     |
| Use Case Testing         | User Workflows           |
| Error Guessing           | Experience-Based Testing |
| Test Data Design         | Input Preparation        |

---

## Key Takeaways

* Effective test design is a core QA skill.
* Test Scenarios define coverage at a high level.
* Test Cases define execution details.
* RTM ensures complete requirement coverage.
* Equivalence Partitioning reduces redundant tests.
* Boundary Value Analysis finds edge-case defects.
* Decision Tables validate complex business logic.
* State Transition Testing validates state-dependent behavior.
* Use Case Testing focuses on real user journeys.
* Error Guessing leverages tester experience.
* High-quality test data improves defect detection.
* Login, Registration, Search, Checkout, and Profile modules are common interview topics.
* Traceability improves auditability and coverage.
* Structured test design improves testing efficiency.
* Good test cases are reusable and maintainable.
* Negative testing is as important as positive testing.
* Risk-based prioritization maximizes testing value.
* Design techniques apply equally to manual and automation testing.
* Strong test design skills distinguish senior testers from beginners.
* Test design mastery is essential before moving into automation frameworks and SDET practices.
