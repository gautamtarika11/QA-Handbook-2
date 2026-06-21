---

title: Manual Testing Masterclass
part: 5
slug: manual-testing-masterclass
description: Master all major manual testing types, methodologies, techniques, and real-world testing practices used by QA Engineers, Senior Test Engineers, and SDETs.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Part 5 — Manual Testing Masterclass

## Learning Objectives

By the end of this chapter, you will be able to:

* Understand the complete landscape of manual testing.
* Differentiate functional and non-functional testing.
* Perform smoke, sanity, regression, and retesting effectively.
* Understand integration, system, and end-to-end testing.
* Conduct User Acceptance Testing (UAT).
* Apply exploratory and ad-hoc testing techniques.
* Perform compatibility and cross-browser testing.
* Understand accessibility testing standards.
* Learn the fundamentals of security testing.
* Learn the fundamentals of performance testing.
* Understand mobile application testing.
* Identify appropriate testing types for different scenarios.
* Build comprehensive test coverage strategies.

---

# Part 5 — Manual Testing Masterclass

## Learning Objectives

* Master major testing types used in industry.
* Learn where each testing type fits in STLC.
* Understand practical execution strategies.
* Learn testing techniques used by experienced QA professionals.
* Understand test prioritization.
* Improve defect discovery skills.
* Learn real-world testing workflows.
* Understand quality risks across platforms.
* Learn foundational concepts for automation testing.
* Build an industry-grade testing mindset.

---

## Introduction

Manual Testing is the process of validating software functionality without using automated scripts.

Despite the rise of automation, manual testing remains critical because:

* Human observation identifies usability issues.
* Exploratory testing uncovers unexpected defects.
* New features require initial validation.
* User experience requires human judgment.
* Business workflows require domain understanding.

Every successful Automation Engineer or SDET begins by mastering manual testing fundamentals.

Manual testing teaches:

* Requirement analysis
* Test design
* Risk identification
* Defect reporting
* Product understanding

Automation enhances testing but does not replace critical thinking.

---

## Core Concepts

### Functional Testing

Functional Testing verifies that software behaves according to business and functional requirements.

### Objective

Validate:

* Features
* Workflows
* Business rules
* Inputs and outputs

### Examples

Login Module:

Verify:

* Valid login
* Invalid login
* Account lockout
* Password reset

### Questions Functional Testing Answers

* Does the feature work?
* Does it satisfy requirements?
* Does the output match expectations?

### Common Functional Areas

| Area           | Example        |
| -------------- | -------------- |
| Authentication | Login          |
| Authorization  | User Roles     |
| Payments       | Transactions   |
| Search         | Product Search |
| Reporting      | Reports        |

---

### Non-Functional Testing

Non-Functional Testing validates system characteristics rather than business functionality.

### Areas Covered

| Category      | Purpose                |
| ------------- | ---------------------- |
| Performance   | Speed                  |
| Security      | Protection             |
| Reliability   | Stability              |
| Scalability   | Growth Handling        |
| Accessibility | Inclusiveness          |
| Compatibility | Multi-platform Support |
| Usability     | Ease of Use            |

### Example

Functional:

Can user log in?

Non-Functional:

Can 10,000 users log in simultaneously?

---

### Smoke Testing

Smoke Testing verifies critical functionality after a new build is deployed.

### Purpose

Determine:

> Is the build stable enough for further testing?

### Typical Smoke Suite

* Application launch
* Login
* Navigation
* Core workflow
* Database connectivity

### Example

E-Commerce Build

Smoke Tests:

* Login
* Search Product
* Add to Cart
* Checkout Page Opens

### Characteristics

| Attribute      | Value       |
| -------------- | ----------- |
| Scope          | Broad       |
| Depth          | Shallow     |
| Execution Time | Short       |
| Frequency      | Every Build |

---

### Sanity Testing

Sanity Testing verifies specific functionality after a bug fix or minor change.

### Purpose

Determine:

> Does the modified functionality work correctly?

### Example

Bug Fixed:

Password reset email not received.

Sanity Tests:

* Reset email sent
* Link works
* Password changes successfully

### Smoke vs Sanity

| Smoke Testing        | Sanity Testing     |
| -------------------- | ------------------ |
| New Build Validation | Change Validation  |
| Broad Coverage       | Narrow Coverage    |
| Build Acceptance     | Feature Acceptance |
| High-Level           | Detailed           |

---

### Regression Testing

Regression Testing verifies that existing functionality remains unaffected after changes.

### Objective

Detect unintended side effects.

### Example

New Feature:

Discount Coupons

Regression Areas:

* Cart
* Checkout
* Payment
* Taxes

### Types

#### Full Regression

Entire application.

#### Partial Regression

Specific modules.

#### Selective Regression

Impacted areas only.

### Importance

Regression testing is one of the most automated testing activities.

---

### Retesting

Retesting validates that a reported defect has been fixed.

### Process

1. Defect reported.
2. Developer fixes defect.
3. QA executes original test case.
4. Verify issue resolution.

### Example

Bug:

Login fails with valid credentials.

Retest:

Execute same scenario after fix.

### Retesting vs Regression

| Retesting       | Regression             |
| --------------- | ---------------------- |
| Verify Fix      | Verify No Side Effects |
| Specific Defect | Entire Application     |
| Narrow Scope    | Wider Scope            |
| Focused         | Broad                  |

---

### Integration Testing

Integration Testing verifies interactions between modules.

### Objective

Ensure integrated components communicate correctly.

### Example

Modules:

* Login
* User Profile
* Database

Testing:

Verify login updates user profile correctly.

### Integration Approaches

#### Top-Down

Parent modules first.

#### Bottom-Up

Child modules first.

#### Big Bang

All modules integrated together.

### Common Issues Found

* API mismatches
* Database failures
* Data inconsistency
* Interface defects

---

### System Testing

System Testing validates the complete integrated application.

### Objective

Verify entire system behavior.

### Scope

* Functional
* Non-functional
* Business workflows

### Example

Banking System

Validate:

* Login
* Transfers
* Statements
* Notifications

### Performed In

QA Environment

---

### End-to-End Testing (E2E)

End-to-End Testing validates complete business workflows across multiple systems.

### Example

E-Commerce Purchase Flow

```text
Login
 ↓
Search Product
 ↓
Add To Cart
 ↓
Checkout
 ↓
Payment Gateway
 ↓
Order Confirmation
 ↓
Email Notification
```

### Objective

Verify real user journeys.

### Common E2E Areas

* Payments
* Notifications
* Integrations
* Reporting

---

### User Acceptance Testing (UAT)

UAT validates whether the software satisfies business needs.

### Performed By

* Clients
* Business Users
* Product Owners

### Objective

Determine:

> Is the system ready for production?

### Example

HR Portal

Business users validate:

* Employee onboarding
* Leave management
* Payroll workflows

### UAT Outcomes

| Status   | Meaning           |
| -------- | ----------------- |
| Accepted | Ready for Release |
| Rejected | Requires Changes  |

---

### Exploratory Testing

Exploratory Testing combines:

* Learning
* Test Design
* Test Execution

Performed simultaneously.

### Objective

Discover unexpected defects.

### Tester Approach

* Investigate behavior
* Explore boundaries
* Challenge assumptions

### Example

Search Feature

Explore:

* Long text
* Special characters
* SQL keywords
* Emojis

### Benefits

* Finds hidden defects
* Encourages creativity
* Improves coverage

---

### Ad-hoc Testing

Ad-hoc Testing is informal testing without predefined documentation.

### Objective

Quick defect discovery.

### Example

Randomly navigate application screens and attempt unusual actions.

### Advantages

* Fast
* Flexible
* Creative

### Disadvantages

* Difficult to reproduce
* No traceability

---

### Compatibility Testing

Compatibility Testing verifies software behavior across environments.

### Areas

| Category          | Example         |
| ----------------- | --------------- |
| Operating Systems | Windows, Linux  |
| Browsers          | Chrome, Firefox |
| Devices           | Desktop, Mobile |
| Networks          | WiFi, 4G, 5G    |

### Example

Verify application works on:

* Windows 11
* macOS
* Ubuntu

---

### Cross Browser Testing

Cross Browser Testing validates application behavior across browsers.

### Common Browsers

| Browser |
| ------- |
| Chrome  |
| Firefox |
| Edge    |
| Safari  |

### Areas To Validate

* UI Rendering
* CSS Layout
* JavaScript Functionality
* Responsive Design

### Common Issues

* CSS differences
* Browser-specific APIs
* Font rendering issues

---

### Accessibility Testing

Accessibility Testing ensures applications are usable by people with disabilities.

### Standards

WCAG (Web Content Accessibility Guidelines)

### Areas

#### Visual Accessibility

* Color contrast
* Screen reader support

#### Motor Accessibility

* Keyboard navigation

#### Hearing Accessibility

* Captions
* Transcripts

### Example Checks

* Tab navigation
* ARIA labels
* Alternative text

---

### Security Testing Fundamentals

Security Testing identifies vulnerabilities.

### Objectives

Protect:

* Data
* Systems
* Users

### Common Security Risks

| Risk                  | Example                       |
| --------------------- | ----------------------------- |
| SQL Injection         | Malicious Queries             |
| XSS                   | Script Injection              |
| Broken Authentication | Unauthorized Access           |
| Session Hijacking     | Session Theft                 |
| Data Exposure         | Sensitive Information Leakage |

### Basic Security Tests

* Password policies
* Session timeout
* Access control
* Input validation

### OWASP Awareness

Testers should understand common OWASP Top Risks.

---

### Performance Testing Fundamentals

Performance Testing evaluates speed, stability, and scalability.

### Types

#### Load Testing

Expected user load.

#### Stress Testing

Beyond expected limits.

#### Spike Testing

Sudden traffic increase.

#### Endurance Testing

Long-duration testing.

### Example

Expected Users:

10,000

Test:

Verify response times remain acceptable.

### Key Metrics

| Metric        | Description             |
| ------------- | ----------------------- |
| Response Time | Request Completion Time |
| Throughput    | Requests Processed      |
| Error Rate    | Failed Requests         |
| CPU Usage     | Resource Consumption    |

---

### Mobile Testing Fundamentals

Mobile Testing validates mobile applications.

### Types

#### Native Applications

Android and iOS specific.

#### Hybrid Applications

Web technologies inside mobile containers.

#### Mobile Web Applications

Browser-based applications.

### Mobile Testing Areas

| Area                 | Example            |
| -------------------- | ------------------ |
| Installation         | Install/Uninstall  |
| Network              | 3G/4G/WiFi         |
| Battery              | Consumption        |
| Orientation          | Portrait/Landscape |
| Notifications        | Push Notifications |
| Device Compatibility | Multiple Devices   |

### Mobile Risks

* Device fragmentation
* Network variability
* OS differences

---

## Real World Industry Examples

### Banking Application

Testing Types Used:

* Functional
* Security
* Integration
* UAT
* Performance

Critical Focus:

Fund Transfers

---

### E-Commerce Application

Testing Types Used:

* Regression
* Cross Browser
* End-to-End
* Performance

Critical Focus:

Checkout and Payment

---

### Healthcare Application

Testing Types Used:

* System Testing
* UAT
* Security
* Accessibility

Critical Focus:

Patient Safety

---

### Food Delivery App

Testing Types Used:

* Mobile Testing
* API Testing
* End-to-End
* Performance

Critical Focus:

Order Placement and Tracking

---

## Diagrams (Markdown Compatible)

### Testing Pyramid Overview

```text
            E2E
             ▲
             │
        System Tests
             ▲
             │
      Integration Tests
             ▲
             │
       Unit Tests
```

### Defect Validation Flow

```text
Defect Found
      ↓
Report Defect
      ↓
Developer Fix
      ↓
Retesting
      ↓
Regression Testing
      ↓
Close Defect
```

### End-to-End Workflow

```text
User Login
     ↓
Search Product
     ↓
Add To Cart
     ↓
Checkout
     ↓
Payment
     ↓
Confirmation
```

---

## Best Practices

* Understand requirements thoroughly.
* Prioritize high-risk testing areas.
* Combine functional and exploratory testing.
* Maintain regression suites.
* Execute smoke tests on every build.
* Use realistic test data.
* Validate integrations carefully.
* Include accessibility checks.
* Verify security basics regularly.
* Think like an end user.

---

## Common Mistakes

| Mistake                  | Impact                   |
| ------------------------ | ------------------------ |
| Only happy path testing  | Missed defects           |
| Ignoring edge cases      | Production failures      |
| Weak regression coverage | Defect leakage           |
| No exploratory testing   | Hidden bugs remain       |
| Limited browser coverage | User complaints          |
| Ignoring accessibility   | Compliance issues        |
| Weak UAT support         | Business dissatisfaction |

---

## Interview Questions

### Beginner Level

1. What is Functional Testing?
2. What is Non-Functional Testing?
3. What is Smoke Testing?
4. What is Sanity Testing?
5. What is Regression Testing?
6. What is Retesting?
7. What is Integration Testing?
8. What is System Testing?
9. What is UAT?
10. What is Exploratory Testing?

### Intermediate Level

1. Differentiate Smoke and Sanity Testing.
2. Explain Regression Testing strategy.
3. What is End-to-End Testing?
4. Explain Integration Testing approaches.
5. What is Compatibility Testing?
6. Explain Accessibility Testing.
7. What is Cross Browser Testing?
8. Explain Security Testing basics.
9. What is Load Testing?
10. What is Mobile Testing?

### Advanced Level

1. How would you design a regression suite?
2. How do you prioritize testing types in Agile?
3. How would you test a payment gateway manually?
4. Explain risk-based manual testing.
5. How do you uncover hidden defects through exploratory testing?
6. What accessibility standards should QA know?
7. How would you validate mobile app performance?
8. What security checks should every tester perform?
9. How would you test a multi-browser SaaS platform?
10. How do you balance depth and speed in manual testing?

---

## Practical Assignments

### Assignment 1

Create:

* 30 Functional Test Cases
* 20 Negative Test Cases

For an online banking login module.

---

### Assignment 2

Perform exploratory testing on any public website and document:

* Observations
* Defects
* Improvement suggestions

---

### Assignment 3

Design a regression suite for an e-commerce checkout process.

---

### Assignment 4

Create a compatibility testing matrix for:

* Browsers
* Devices
* Operating Systems

---

## Mini Project

### Project: Complete Manual Testing of an E-Commerce Application

#### Modules

* Registration
* Login
* Product Search
* Product Details
* Cart
* Checkout
* Payment
* Order History

### Tasks

1. Requirement Analysis
2. Test Scenario Creation
3. Test Case Design
4. Smoke Testing
5. Functional Testing
6. Exploratory Testing
7. Regression Testing
8. Defect Reporting
9. UAT Preparation
10. Test Closure

### Deliverables

* Test Plan
* Test Scenarios
* Test Cases
* Defect Report
* Regression Suite
* UAT Checklist
* Test Summary Report

---

## Cheat Sheet

| Testing Type   | Purpose                       |
| -------------- | ----------------------------- |
| Functional     | Verify business requirements  |
| Non-Functional | Verify quality attributes     |
| Smoke          | Build validation              |
| Sanity         | Change validation             |
| Regression     | Check side effects            |
| Retesting      | Verify defect fix             |
| Integration    | Verify module interactions    |
| System         | Verify complete application   |
| E2E            | Verify complete workflow      |
| UAT            | Business validation           |
| Exploratory    | Discover hidden defects       |
| Ad-hoc         | Informal testing              |
| Compatibility  | Multi-environment validation  |
| Cross Browser  | Browser validation            |
| Accessibility  | Inclusive usability           |
| Security       | Vulnerability identification  |
| Performance    | Speed and scalability         |
| Mobile         | Mobile application validation |

---

## Key Takeaways

* Manual testing remains a critical QA skill.
* Functional testing validates business requirements.
* Non-functional testing validates quality attributes.
* Smoke testing determines build stability.
* Sanity testing validates recent changes.
* Regression testing protects existing functionality.
* Retesting verifies defect fixes.
* Integration testing validates module communication.
* System testing validates the entire application.
* End-to-End testing validates business workflows.
* UAT determines production readiness.
* Exploratory testing finds hidden defects.
* Compatibility testing ensures broader user support.
* Accessibility testing improves inclusivity.
* Security awareness is essential for modern testers.
* Performance testing validates scalability.
* Mobile testing introduces unique challenges.
* Every testing type serves a specific purpose.
* Effective QA combines multiple testing approaches.
* Strong manual testing skills form the foundation of successful automation engineering.
