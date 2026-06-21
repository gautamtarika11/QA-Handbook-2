---

title: Software Development Life Cycle (SDLC)
part: 2
slug: software-development-life-cycle-sdlc
description: Master SDLC models, development methodologies, Agile practices, Scrum framework, and understand how testing integrates throughout the software development lifecycle.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Part 2 — Software Development Life Cycle (SDLC)

## Learning Objectives

By the end of this chapter, you will be able to:

* Understand the purpose and importance of SDLC.
* Explain each phase of the Software Development Life Cycle.
* Differentiate between traditional and modern SDLC models.
* Understand Waterfall, V-Model, Agile, Spiral, Incremental, and Iterative models.
* Explain Scrum roles, ceremonies, and artifacts.
* Compare SDLC models based on project requirements.
* Identify where testing fits into each SDLC model.
* Understand hybrid development approaches used in industry.
* Select the appropriate SDLC model for real-world projects.
* Answer SDLC-related interview questions confidently.

---

# Part 2 — Software Development Life Cycle (SDLC)

## Learning Objectives

* Understand why SDLC exists.
* Learn the phases involved in software development.
* Understand major SDLC models.
* Learn Agile and Scrum fundamentals.
* Understand testing involvement in each model.
* Compare SDLC approaches.
* Learn model selection criteria.
* Understand industry adoption trends.
* Prepare for SDLC interview discussions.
* Build a strong foundation for Agile Testing and Test Automation.

---

## Introduction

Software development is not merely writing code.

Successful software products require:

* Planning
* Requirement gathering
* Design
* Development
* Testing
* Deployment
* Maintenance

Without a structured approach, projects often suffer from:

* Cost overruns
* Missed deadlines
* Poor quality
* Scope creep
* Customer dissatisfaction

To address these challenges, organizations follow a Software Development Life Cycle (SDLC).

SDLC provides a structured framework that defines how software is planned, built, tested, deployed, and maintained.

It ensures:

* Predictability
* Quality
* Traceability
* Risk reduction
* Efficient resource utilization

Every tester, automation engineer, and SDET must understand SDLC because testing activities are tightly integrated with development activities.

---

## Core Concepts

### Introduction to SDLC

SDLC is a systematic process used to develop software from conception to retirement.

### Objectives of SDLC

* Deliver high-quality software
* Meet customer requirements
* Minimize risks
* Reduce development cost
* Improve productivity
* Ensure maintainability

### Typical SDLC Phases

| Phase                 | Purpose                        |
| --------------------- | ------------------------------ |
| Requirement Gathering | Understand business needs      |
| Analysis              | Define solution approach       |
| Design                | Create architecture and design |
| Development           | Build software                 |
| Testing               | Validate software quality      |
| Deployment            | Release software               |
| Maintenance           | Support and enhance software   |

### Generic SDLC Flow

```text
Requirements
     ↓
Analysis
     ↓
Design
     ↓
Development
     ↓
Testing
     ↓
Deployment
     ↓
Maintenance
```

---

### Waterfall Model

Waterfall is the oldest and most traditional SDLC model.

It follows a linear sequence where each phase must be completed before the next phase begins.

### Flow

```text
Requirements
     ↓
Design
     ↓
Development
     ↓
Testing
     ↓
Deployment
```

### Characteristics

* Sequential execution
* Heavy documentation
* Fixed requirements
* Late testing involvement

### Advantages

* Easy to understand
* Simple management
* Clear milestones
* Extensive documentation

### Disadvantages

* Difficult to accommodate changes
* Testing begins late
* High risk of requirement mismatch
* Long delivery cycles

### Best Suited For

* Government projects
* Regulatory systems
* Small stable projects

### Testing Perspective

Testing begins only after development completes.

This often leads to:

* Late defect discovery
* Increased fixing costs

---

### V-Model

The V-Model extends Waterfall by introducing testing activities corresponding to every development phase.

### Core Idea

Testing should be planned early.

### Structure

```text
Business Requirements
         ↓
System Requirements
         ↓
High-Level Design
         ↓
Low-Level Design
         ↓
Coding
         ↑
Unit Testing
         ↑
Integration Testing
         ↑
System Testing
         ↑
Acceptance Testing
```

### Mapping

| Development Phase     | Testing Phase       |
| --------------------- | ------------------- |
| Business Requirements | Acceptance Testing  |
| System Requirements   | System Testing      |
| High-Level Design     | Integration Testing |
| Low-Level Design      | Unit Testing        |

### Advantages

* Early test planning
* Better traceability
* Improved defect prevention

### Disadvantages

* Limited flexibility
* Expensive requirement changes
* Not ideal for evolving projects

### Industry Usage

* Banking
* Healthcare
* Aerospace
* Defense Systems

---

### Agile Model

Agile is the most widely adopted software development methodology today.

Agile emphasizes:

* Collaboration
* Continuous delivery
* Customer feedback
* Iterative development

### Agile Values

Individuals and interactions over processes and tools.

Working software over comprehensive documentation.

Customer collaboration over contract negotiation.

Responding to change over following a plan.

### Agile Workflow

```text
Backlog
   ↓
Sprint Planning
   ↓
Development
   ↓
Testing
   ↓
Review
   ↓
Release
```

### Key Characteristics

* Short iterations
* Frequent releases
* Continuous testing
* Rapid feedback

### Advantages

* Faster delivery
* Greater flexibility
* Improved customer satisfaction
* Early defect detection

### Challenges

* Requires active stakeholder involvement
* Scope changes frequently
* Documentation may be lighter

### Testing in Agile

Testing occurs continuously.

QA participates in:

* Requirement discussions
* Sprint planning
* Test design
* Automation
* Regression testing

---

### Scrum Framework

Scrum is the most popular Agile framework.

### Scrum Roles

#### Product Owner

Responsible for:

* Product vision
* Backlog prioritization
* Stakeholder communication

#### Scrum Master

Responsible for:

* Removing blockers
* Facilitating Scrum events
* Coaching Agile practices

#### Development Team

Responsible for:

* Design
* Coding
* Testing
* Delivery

---

### Scrum Artifacts

| Artifact        | Purpose                    |
| --------------- | -------------------------- |
| Product Backlog | Master requirement list    |
| Sprint Backlog  | Sprint tasks               |
| Increment       | Working software delivered |

---

### Scrum Ceremonies

#### Sprint Planning

Team decides:

* What to build
* How to build

#### Daily Standup

15-minute daily meeting.

Typical Questions:

* What did I do yesterday?
* What will I do today?
* Any blockers?

#### Sprint Review

Demonstrate completed work.

#### Sprint Retrospective

Discuss:

* What went well?
* What didn't?
* Improvements

---

### Sprint Lifecycle

```text
Planning
    ↓
Development
    ↓
Testing
    ↓
Review
    ↓
Retrospective
    ↓
Next Sprint
```

---

### Spiral Model

The Spiral Model combines:

* Waterfall
* Prototyping
* Risk Analysis

It is highly risk-driven.

### Spiral Stages

```text
Planning
    ↓
Risk Analysis
    ↓
Development
    ↓
Evaluation
    ↓
Next Iteration
```

### Advantages

* Excellent risk management
* Early prototypes
* Suitable for large projects

### Disadvantages

* Complex
* Expensive
* Requires risk expertise

### Best Suited For

* Enterprise systems
* Defense systems
* Mission-critical applications

---

### Incremental Model

Software is delivered in multiple increments.

Each release adds functionality.

### Example

Release 1:

* Login

Release 2:

* User Profile

Release 3:

* Payment Module

### Flow

```text
Core Product
      ↓
Increment 1
      ↓
Increment 2
      ↓
Increment 3
```

### Advantages

* Faster delivery
* Reduced risk
* Early customer feedback

### Disadvantages

* Architecture planning required
* Integration challenges

---

### Iterative Model

Software evolves through repeated refinement cycles.

Initial version may be incomplete.

Each iteration improves functionality.

### Example

Iteration 1:

* Basic Login

Iteration 2:

* Password Recovery

Iteration 3:

* MFA Authentication

### Advantages

* Continuous improvement
* Frequent feedback
* Adaptable requirements

### Disadvantages

* Scope management challenges
* Requires careful planning

---

### Hybrid Models

Most organizations do not follow a pure SDLC model.

Instead, they combine multiple approaches.

### Common Hybrid Examples

#### Waterfall + Agile

Requirements:

* Waterfall

Development:

* Agile

#### Agile + DevOps

Development:

* Agile

Deployment:

* CI/CD

#### V-Model + Agile

Regulated industries often combine:

* Agile development
* Structured validation

### Benefits

* Increased flexibility
* Better compliance
* Faster delivery

---

### SDLC Model Comparison

| Criteria            | Waterfall | V-Model   | Agile      | Spiral     | Incremental | Iterative |
| ------------------- | --------- | --------- | ---------- | ---------- | ----------- | --------- |
| Flexibility         | Low       | Low       | High       | High       | Medium      | High      |
| Documentation       | High      | High      | Medium     | Medium     | Medium      | Medium    |
| Risk Handling       | Low       | Medium    | Medium     | High       | Medium      | Medium    |
| Customer Feedback   | Low       | Low       | High       | High       | High        | High      |
| Delivery Speed      | Slow      | Slow      | Fast       | Medium     | Fast        | Fast      |
| Change Management   | Difficult | Difficult | Easy       | Easy       | Medium      | Easy      |
| Testing Involvement | Late      | Early     | Continuous | Continuous | Early       | Early     |

---

### Selecting an SDLC Model

### Choose Waterfall When

* Requirements are fixed
* Heavy compliance exists

### Choose V-Model When

* Validation is critical
* Regulatory requirements exist

### Choose Agile When

* Requirements evolve
* Frequent releases are required

### Choose Spiral When

* High-risk project
* Large budget

### Choose Incremental When

* Fast delivery required
* Features can be divided

### Choose Iterative When

* Product evolves continuously

---

### SDLC from a Tester's Perspective

| Model       | Tester Involvement |
| ----------- | ------------------ |
| Waterfall   | Late               |
| V-Model     | Early              |
| Agile       | Continuous         |
| Spiral      | Risk-Focused       |
| Incremental | Increment-Based    |
| Iterative   | Iteration-Based    |

### Responsibilities

* Requirement analysis
* Test planning
* Test design
* Defect reporting
* Automation support
* Risk assessment

---

## Real World Industry Examples

### Banking Application

Model Used:

* V-Model
* Hybrid Agile

Reason:

* Regulatory compliance
* High-quality requirements

---

### Startup Product

Model Used:

* Agile Scrum

Reason:

* Rapid changes
* Fast releases

---

### Defense System

Model Used:

* Spiral Model

Reason:

* High risk
* Critical functionality

---

### E-Commerce Platform

Model Used:

* Agile + DevOps

Reason:

* Continuous delivery
* Frequent feature releases

---

## Diagrams (Markdown Compatible)

### Waterfall Model

```text
Requirements
     ↓
Design
     ↓
Development
     ↓
Testing
     ↓
Deployment
```

### Agile Lifecycle

```text
Backlog
    ↓
Sprint
    ↓
Build
    ↓
Test
    ↓
Review
    ↓
Release
```

### Scrum Framework

```text
Product Backlog
       ↓
Sprint Planning
       ↓
Sprint
       ↓
Daily Standups
       ↓
Review
       ↓
Retrospective
```

### V-Model

```text
Requirements      Acceptance Testing
      \           /
       \         /
        \       /
         Coding
        /       \
       /         \
Design            Testing
```

---

## Best Practices

* Involve QA during requirements gathering.
* Review requirements thoroughly.
* Select SDLC based on project needs.
* Automate regression testing.
* Maintain traceability.
* Use Agile ceremonies effectively.
* Prioritize risk-driven testing.
* Continuously improve processes.
* Encourage cross-functional collaboration.
* Integrate testing into CI/CD pipelines.

---

## Common Mistakes

| Mistake                         | Impact               |
| ------------------------------- | -------------------- |
| Choosing wrong SDLC model       | Project delays       |
| Late testing                    | High defect costs    |
| Ignoring risk analysis          | Production failures  |
| Poor sprint planning            | Missed commitments   |
| Weak requirements               | Rework               |
| Lack of stakeholder involvement | Requirement mismatch |
| No retrospective actions        | Repeated mistakes    |

---

## Interview Questions

### Beginner Level

1. What is SDLC?
2. Why is SDLC important?
3. What are SDLC phases?
4. What is the Waterfall model?
5. What is Agile?
6. What is Scrum?
7. What is a Sprint?
8. What is a Product Backlog?
9. What is Incremental development?
10. What is Iterative development?

### Intermediate Level

1. Compare Waterfall and Agile.
2. Explain V-Model.
3. What are Scrum ceremonies?
4. What are Scrum roles?
5. What is the Spiral Model?
6. What is risk analysis?
7. Explain Incremental Model.
8. Explain Iterative Model.
9. When should Agile not be used?
10. What is a Hybrid SDLC model?

### Advanced Level

1. How do you choose an SDLC model for a project?
2. Explain Agile testing strategy.
3. Compare V-Model and Agile from a QA perspective.
4. How does SDLC impact automation testing?
5. What challenges arise in Agile projects?
6. How does DevOps complement Agile?
7. How would you test in a highly regulated environment?
8. Explain traceability across SDLC.
9. How would you transition from Waterfall to Agile?
10. What SDLC model would you recommend for a fintech platform and why?

---

## Practical Assignments

### Assignment 1

Choose a mobile banking application and identify:

* Suitable SDLC model
* Risks
* Testing approach

---

### Assignment 2

Create comparison charts for:

* Waterfall
* V-Model
* Agile
* Spiral

---

### Assignment 3

Attend a Scrum simulation and document:

* Sprint Planning
* Daily Standups
* Sprint Review
* Retrospective

---

### Assignment 4

Design a release plan using:

* Incremental Model
* Iterative Model

---

## Mini Project

### Project: SDLC Strategy Design for an E-Commerce Platform

#### Objective

Create a complete SDLC recommendation document.

#### Tasks

1. Gather hypothetical requirements.
2. Choose an SDLC model.
3. Justify selection.
4. Define testing strategy.
5. Identify project risks.
6. Plan releases.
7. Define QA involvement.

#### Deliverables

* SDLC Recommendation Report
* Risk Analysis Document
* Test Strategy Overview
* Sprint Plan Sample

---

## Cheat Sheet

| Concept          | Summary                                 |
| ---------------- | --------------------------------------- |
| SDLC             | Structured software development process |
| Waterfall        | Sequential model                        |
| V-Model          | Verification and Validation focused     |
| Agile            | Iterative and flexible                  |
| Scrum            | Agile framework                         |
| Sprint           | Time-boxed iteration                    |
| Product Backlog  | Prioritized requirements                |
| Spiral           | Risk-driven model                       |
| Incremental      | Feature-by-feature delivery             |
| Iterative        | Progressive refinement                  |
| Hybrid           | Combination of multiple models          |
| Retrospective    | Process improvement meeting             |
| Product Owner    | Business representative                 |
| Scrum Master     | Process facilitator                     |
| Development Team | Delivery team                           |

---

## Key Takeaways

* SDLC provides structure to software development.
* Every project requires a suitable lifecycle model.
* Waterfall works best for stable requirements.
* V-Model emphasizes verification and validation.
* Agile dominates modern software development.
* Scrum is the most popular Agile framework.
* Spiral excels in risk management.
* Incremental development delivers value faster.
* Iterative development enables continuous improvement.
* Hybrid approaches are common in industry.
* Testing involvement varies across SDLC models.
* Early testing reduces project risk.
* Agile promotes customer collaboration.
* Scrum ceremonies drive transparency.
* SDLC selection directly impacts project success.
* QA engineers must understand development processes.
* SDETs participate throughout the lifecycle.
* Continuous feedback improves product quality.
* Risk analysis is essential for large projects.
* Understanding SDLC is foundational for advanced testing practices.
