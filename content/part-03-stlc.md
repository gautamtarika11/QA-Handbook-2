---

title: Software Testing Life Cycle (STLC)
part: 3
slug: software-testing-life-cycle-stlc
description: Learn the complete Software Testing Life Cycle including requirement analysis, planning, test design, execution, defect management, closure activities, and industry-standard QA documentation.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Part 3 — Software Testing Life Cycle (STLC)

## Learning Objectives

By the end of this chapter, you will be able to:

* Understand the purpose and phases of STLC.
* Differentiate SDLC and STLC.
* Perform Requirement Analysis from a tester's perspective.
* Create effective Test Plans.
* Design Test Scenarios and Test Cases.
* Prepare and manage Test Data.
* Configure Test Environments.
* Execute tests effectively.
* Manage defects throughout their lifecycle.
* Perform Test Closure activities.
* Create industry-standard testing documents and templates.
* Understand QA deliverables expected in real-world projects.

---

## Introduction

Software Testing is not a single activity performed at the end of development.

Testing is a structured process consisting of multiple phases, activities, deliverables, and reviews.

To ensure quality, testing teams follow a defined lifecycle known as the Software Testing Life Cycle (STLC).

STLC provides a systematic approach to:

* Planning testing activities
* Designing tests
* Executing tests
* Managing defects
* Measuring quality
* Closing testing efforts

A well-defined STLC helps teams:

* Improve quality
* Reduce risks
* Increase traceability
* Ensure complete coverage
* Deliver reliable software

Regardless of methodology (Waterfall, Agile, Hybrid), STLC activities remain relevant.

---

## Core Concepts

### Introduction to STLC

STLC stands for Software Testing Life Cycle.

It defines the sequence of activities performed by QA teams from requirement analysis until test closure.

### Goals of STLC

* Ensure quality
* Detect defects early
* Validate requirements
* Reduce business risk
* Improve customer satisfaction

### STLC Flow

```text
Requirement Analysis
         ↓
Test Planning
         ↓
Test Scenario Design
         ↓
Test Case Design
         ↓
Test Data Preparation
         ↓
Environment Setup
         ↓
Test Execution
         ↓
Defect Management
         ↓
Test Closure
```

---

### STLC vs SDLC

| Aspect       | SDLC                | STLC                 |
| ------------ | ------------------- | -------------------- |
| Purpose      | Build Software      | Test Software        |
| Owner        | Development Team    | QA Team              |
| Focus        | Product Development | Product Validation   |
| Start        | Requirement Phase   | Requirement Analysis |
| End          | Maintenance         | Test Closure         |
| Deliverables | Software Product    | Test Artifacts       |

### Relationship

STLC is a subset of SDLC.

Testing activities align with development activities.

---

### Requirement Analysis

Requirement Analysis is the first phase of STLC.

The QA team reviews requirements to identify:

* Testable requirements
* Ambiguities
* Missing information
* Risks
* Dependencies

### Objectives

* Understand business requirements
* Identify testing scope
* Estimate testing effort
* Clarify uncertainties

### Inputs

* BRD (Business Requirement Document)
* FRD (Functional Requirement Document)
* User Stories
* Acceptance Criteria
* Design Documents

### Activities

#### Requirement Review

Questions to ask:

* Is the requirement complete?
* Is it testable?
* Are acceptance criteria defined?
* Are edge cases covered?

#### Risk Identification

Examples:

* Payment processing
* Authentication
* Security

#### Traceability Planning

Map requirements to future test cases.

### Deliverables

* Requirement Review Notes
* Requirement Traceability Matrix Inputs
* Risk Assessment

---

### Test Planning

Test Planning is the most important management activity in STLC.

It defines how testing will be performed.

### Objectives

* Define strategy
* Allocate resources
* Estimate effort
* Identify risks

### Test Plan Components

| Section        | Description          |
| -------------- | -------------------- |
| Scope          | What will be tested  |
| Objectives     | Testing goals        |
| Resources      | Team members         |
| Schedule       | Timelines            |
| Risks          | Potential challenges |
| Deliverables   | Outputs              |
| Environment    | Testing setup        |
| Entry Criteria | Conditions to start  |
| Exit Criteria  | Conditions to finish |

### Example Entry Criteria

* Requirements approved
* Environment available
* Build deployed

### Example Exit Criteria

* Critical defects resolved
* Test cases executed
* Acceptance criteria met

### Deliverables

* Test Plan
* Test Strategy
* Effort Estimates

---

### Test Scenario Design

A Test Scenario is a high-level testing objective.

It defines WHAT to test.

### Example

Feature:

Login

Possible Scenarios:

* Verify valid login
* Verify invalid login
* Verify password reset
* Verify account lockout

### Benefits

* Broad coverage
* Requirement mapping
* Easier planning

### Scenario Characteristics

Good scenarios are:

* Clear
* Traceable
* Business-focused

---

### Test Case Design

Test Cases define HOW to test.

They provide detailed execution steps.

### Test Case Structure

| Field           | Description        |
| --------------- | ------------------ |
| Test Case ID    | Unique identifier  |
| Title           | Test objective     |
| Preconditions   | Setup requirements |
| Steps           | Execution steps    |
| Test Data       | Input values       |
| Expected Result | Desired outcome    |
| Actual Result   | Observed outcome   |
| Status          | Pass/Fail          |

### Example

| Field           | Value             |
| --------------- | ----------------- |
| TC_ID           | TC_LOGIN_001      |
| Scenario        | Valid Login       |
| Steps           | Enter credentials |
| Expected Result | Login successful  |

### Good Test Case Characteristics

* Clear
* Reusable
* Traceable
* Independent

### Types of Test Cases

#### Positive Test Cases

Verify expected behavior.

#### Negative Test Cases

Verify error handling.

#### Boundary Test Cases

Verify edge conditions.

#### Exploratory Test Cases

Investigate unknown behaviors.

---

### Test Data Preparation

Testing quality depends heavily on data quality.

### What is Test Data?

Input values used during testing.

Examples:

* User accounts
* Transactions
* Customer records
* API payloads

### Types of Test Data

| Type                   | Example             |
| ---------------------- | ------------------- |
| Valid Data             | Correct credentials |
| Invalid Data           | Wrong password      |
| Boundary Data          | Max length values   |
| Null Data              | Empty fields        |
| Special Character Data | @#$%^               |

### Best Practices

* Use realistic data
* Mask sensitive information
* Maintain reusable datasets
* Automate test data generation where possible

### Common Sources

* Database dumps
* Mock data
* Generated datasets
* Production clones (masked)

---

### Environment Setup

The test environment should closely resemble production.

### Environment Components

| Component          | Example         |
| ------------------ | --------------- |
| Application Server | Tomcat          |
| Database           | MySQL           |
| API Services       | REST APIs       |
| Browsers           | Chrome, Firefox |
| Mobile Devices     | Android, iOS    |

### Activities

* Deploy application
* Configure databases
* Verify integrations
* Validate connectivity

### Environment Validation Checklist

* Application accessible
* Database connected
* APIs available
* Test accounts ready

### Deliverables

* Environment Readiness Report

---

### Test Execution

This phase involves executing test cases and recording results.

### Activities

1. Execute test cases.
2. Compare actual vs expected results.
3. Record outcomes.
4. Report defects.

### Execution Status

| Status  | Meaning                    |
| ------- | -------------------------- |
| Pass    | Expected behavior observed |
| Fail    | Defect detected            |
| Blocked | Unable to execute          |
| Not Run | Execution pending          |

### Best Practices

* Follow documented steps.
* Capture evidence.
* Update execution logs.
* Report defects immediately.

---

### Defect Management

A defect is logged when actual results differ from expected results.

### Defect Lifecycle

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

### Alternative States

```text
Rejected
Duplicate
Deferred
Cannot Reproduce
Reopened
```

### Defect Severity

| Severity | Description                |
| -------- | -------------------------- |
| Critical | System unusable            |
| High     | Major functionality broken |
| Medium   | Partial impact             |
| Low      | Minor issue                |

### Defect Priority

| Priority | Meaning         |
| -------- | --------------- |
| P1       | Fix immediately |
| P2       | High urgency    |
| P3       | Medium urgency  |
| P4       | Low urgency     |

### Sample Defect Report

| Field       | Example                            |
| ----------- | ---------------------------------- |
| Defect ID   | BUG-101                            |
| Title       | Login fails with valid credentials |
| Severity    | Critical                           |
| Priority    | P1                                 |
| Environment | QA                                 |
| Steps       | Detailed reproduction              |
| Expected    | Login successful                   |
| Actual      | Error displayed                    |

---

### Test Closure

Test Closure determines whether testing objectives were achieved.

### Activities

* Verify completion criteria
* Review defect status
* Prepare closure report
* Conduct lessons learned

### Metrics Collected

| Metric             | Example |
| ------------------ | ------- |
| Test Cases Planned | 500     |
| Executed           | 490     |
| Passed             | 470     |
| Failed             | 20      |
| Defects Found      | 120     |

### Deliverables

* Test Summary Report
* Closure Report
* Lessons Learned Document

---

### STLC Documentation Templates

---

### Test Plan Template

```text
Project Name:
Test Objective:
Scope:
Out of Scope:
Resources:
Timeline:
Tools:
Risks:
Entry Criteria:
Exit Criteria:
Deliverables:
```

---

### Test Scenario Template

```text
Scenario ID:
Requirement ID:
Module:
Scenario Description:
Priority:
```

---

### Test Case Template

```text
Test Case ID:
Requirement ID:
Title:
Preconditions:
Test Steps:
Test Data:
Expected Result:
Actual Result:
Status:
```

---

### Defect Report Template

```text
Defect ID:
Summary:
Module:
Severity:
Priority:
Environment:
Steps to Reproduce:
Expected Result:
Actual Result:
Attachments:
Status:
```

---

### Test Closure Report Template

```text
Project:
Testing Period:
Scope:
Executed Tests:
Passed:
Failed:
Defects Found:
Defects Closed:
Risks:
Lessons Learned:
Recommendations:
```

---

## Real World Industry Examples

### Banking Application

Requirement:

Transfer funds between accounts.

Testing Activities:

* Requirement review
* Risk analysis
* Scenario creation
* Positive and negative testing
* Security validation

---

### E-Commerce Website

Feature:

Checkout Process

Test Scenarios:

* Guest checkout
* Registered user checkout
* Payment failure
* Coupon application
* Inventory shortage

---

### Healthcare Application

Feature:

Patient Record Management

Focus Areas:

* Data integrity
* Compliance
* Security
* Audit logging

---

## Diagrams (Markdown Compatible)

### Complete STLC Flow

```text
Requirement Analysis
         ↓
Test Planning
         ↓
Scenario Design
         ↓
Test Case Design
         ↓
Data Preparation
         ↓
Environment Setup
         ↓
Execution
         ↓
Defect Management
         ↓
Closure
```

### Requirement Traceability Flow

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

### Defect Lifecycle

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

## Best Practices

* Involve QA early.
* Review requirements thoroughly.
* Maintain requirement traceability.
* Design reusable test cases.
* Prioritize based on risk.
* Prepare realistic test data.
* Validate environments before execution.
* Report defects clearly.
* Capture execution evidence.
* Conduct meaningful test closure reviews.

---

## Common Mistakes

| Mistake                        | Impact            |
| ------------------------------ | ----------------- |
| Skipping requirement reviews   | Requirement gaps  |
| Weak test planning             | Scope issues      |
| Poor test data                 | False failures    |
| Missing traceability           | Coverage gaps     |
| Incomplete defect reports      | Delayed fixes     |
| Ignoring closure activities    | Repeated mistakes |
| Lack of environment validation | Execution delays  |

---

## Interview Questions

### Beginner Level

1. What is STLC?
2. What are STLC phases?
3. What is Requirement Analysis?
4. What is a Test Plan?
5. What is a Test Scenario?
6. What is a Test Case?
7. What is Test Data?
8. What is a Test Environment?
9. What is Defect Management?
10. What is Test Closure?

### Intermediate Level

1. Differentiate STLC and SDLC.
2. Explain Test Planning activities.
3. What should a Test Plan contain?
4. Explain Requirement Traceability Matrix.
5. What makes a good test case?
6. Explain defect severity and priority.
7. How do you prepare test data?
8. What is entry criteria?
9. What is exit criteria?
10. What metrics are collected during closure?

### Advanced Level

1. How would you design STLC for an Agile project?
2. How do you estimate testing effort?
3. Explain risk-based test planning.
4. How do you ensure complete requirement coverage?
5. What challenges arise in environment management?
6. How do you improve defect quality?
7. Explain defect leakage.
8. How do you measure testing effectiveness?
9. How would you create a test strategy for a fintech application?
10. What metrics matter most to senior management?

---

## Practical Assignments

### Assignment 1

Create:

* 20 test scenarios
* 50 test cases

For a login and registration module.

---

### Assignment 2

Prepare:

* Test Plan
* Test Strategy

For an e-commerce website.

---

### Assignment 3

Create a defect report for:

* Login failure
* Payment failure
* Search malfunction

---

### Assignment 4

Prepare a complete RTM mapping:

* Requirements
* Scenarios
* Test Cases

---

## Mini Project

### Project: Complete STLC for Online Banking Login Module

#### Objective

Execute the full STLC process.

#### Tasks

1. Analyze requirements.
2. Create Test Plan.
3. Create Test Scenarios.
4. Create Test Cases.
5. Prepare Test Data.
6. Execute Tests.
7. Report Defects.
8. Prepare Closure Report.

#### Deliverables

* Test Plan
* RTM
* Test Cases
* Defect Reports
* Test Summary Report
* Closure Report

---

## Cheat Sheet

| Concept              | Key Point                    |
| -------------------- | ---------------------------- |
| STLC                 | Software Testing Life Cycle  |
| Requirement Analysis | Understand what to test      |
| Test Planning        | Define testing strategy      |
| Test Scenario        | What to test                 |
| Test Case            | How to test                  |
| Test Data            | Inputs for testing           |
| Environment Setup    | Prepare testing platform     |
| Execution            | Run test cases               |
| Defect Management    | Track issues                 |
| Test Closure         | Final testing review         |
| Entry Criteria       | Conditions to start          |
| Exit Criteria        | Conditions to finish         |
| RTM                  | Requirement coverage mapping |

---

## Key Takeaways

* STLC provides a structured testing framework.
* Requirement Analysis is the foundation of successful testing.
* Test Planning drives overall testing success.
* Test Scenarios define coverage.
* Test Cases define execution.
* Good test data improves defect detection.
* Environment readiness is critical.
* Test execution requires discipline and traceability.
* Effective defect reporting accelerates resolution.
* Severity and priority are different concepts.
* RTM ensures complete requirement coverage.
* Test closure captures valuable lessons learned.
* Documentation is a key QA responsibility.
* Quality metrics help measure effectiveness.
* STLC applies in Agile and traditional projects.
* Strong STLC execution improves product quality.
* Every QA engineer must master STLC before automation.
* STLC forms the operational backbone of software testing.
* High-quality deliverables improve stakeholder confidence.
* Understanding STLC is essential for progressing toward SDET and QA leadership roles.
