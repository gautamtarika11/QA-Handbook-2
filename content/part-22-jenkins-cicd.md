---

title: Jenkins & CI/CD
part: 22
slug: jenkins-and-cicd
description: Master Jenkins and CI/CD for Automation Engineers including CI/CD fundamentals, Jenkins architecture, jobs, pipelines, Git integration, Maven integration, scheduled builds, automated execution, and reporting integration.
---

# Part 22 — Jenkins & CI/CD

## Learning Objectives

By the end of this chapter, you will be able to:

* Understand CI/CD concepts and workflows.
* Understand the importance of DevOps in testing.
* Install and configure Jenkins.
* Understand Jenkins architecture.
* Create and manage Jenkins jobs.
* Build and execute Jenkins pipelines.
* Integrate Jenkins with Git repositories.
* Integrate Jenkins with Maven projects.
* Schedule automated executions.
* Trigger automated test runs.
* Publish reports in Jenkins.
* Design enterprise-grade CI/CD workflows.
* Prepare for Jenkins and CI/CD interviews.

---

# Part 22 — Jenkins & CI/CD

## Introduction

Modern software development requires rapid and reliable delivery of applications.

Traditional development workflow:

```text
Developer Writes Code
        ↓
Manual Build
        ↓
Manual Testing
        ↓
Manual Deployment
```

Problems:

* Slow releases
* Human errors
* Delayed feedback
* High deployment risk

To solve these challenges, organizations use:

```text
CI/CD
```

CI/CD automates:

* Code Integration
* Build Creation
* Test Execution
* Deployment

Jenkins is the most widely used CI/CD automation server.

Automation Engineers commonly integrate:

```text
Git
 ↓
Jenkins
 ↓
Maven
 ↓
TestNG
 ↓
Reports
```

to create fully automated testing pipelines.

---

## Core Concepts

## CI/CD Fundamentals

### What is CI?

CI stands for:

```text
Continuous Integration
```

Developers frequently merge code into a shared repository.

Every commit triggers:

* Build
* Compilation
* Unit Tests
* Automation Tests

---

### Continuous Integration Flow

```text
Developer Commit
       ↓
Git Repository
       ↓
Jenkins Build
       ↓
Tests Execute
       ↓
Feedback
```

---

### Benefits of CI

* Early defect detection
* Faster feedback
* Better code quality
* Reduced integration issues

---

## What is CD?

CD can mean:

### Continuous Delivery

Application is always deployable.

```text
Build
 ↓
Test
 ↓
Ready for Deployment
```

---

### Continuous Deployment

Deployment occurs automatically.

```text
Build
 ↓
Test
 ↓
Deploy
```

No manual intervention.

---

## CI vs CD

| Feature              | CI  | CD       |
| -------------------- | --- | -------- |
| Build Automation     | Yes | Yes      |
| Automated Testing    | Yes | Yes      |
| Deployment Ready     | No  | Yes      |
| Automatic Deployment | No  | Possible |

---

## DevOps Lifecycle

```text
Plan
 ↓
Develop
 ↓
Build
 ↓
Test
 ↓
Release
 ↓
Deploy
 ↓
Monitor
```

Automation Testing primarily contributes to:

```text
Build
 ↓
Test
```

---

## Jenkins Installation

### What is Jenkins?

Jenkins is an open-source automation server used to automate:

* Builds
* Testing
* Deployment
* Reporting

---

### Jenkins Features

| Feature          | Supported |
| ---------------- | --------- |
| Build Automation | Yes       |
| Test Execution   | Yes       |
| Scheduling       | Yes       |
| Reporting        | Yes       |
| Notifications    | Yes       |
| Plugin Ecosystem | Yes       |

---

### Jenkins Requirements

| Requirement    | Description      |
| -------------- | ---------------- |
| Java JDK       | Required         |
| Memory         | Recommended 4GB+ |
| Browser        | Web Interface    |
| Network Access | Required         |

---

### Installation Methods

| Method            | Usage           |
| ----------------- | --------------- |
| Windows Installer | Common          |
| WAR File          | Java-Based      |
| Docker            | Modern Approach |
| Linux Package     | Enterprise      |

---

### Verify Installation

Open:

```text
http://localhost:8080
```

---

### Initial Setup

Steps:

1. Install Jenkins.
2. Start Jenkins.
3. Unlock Jenkins.
4. Install Recommended Plugins.
5. Create Admin User.
6. Login.

---

## Jenkins Architecture

### High-Level Architecture

```text
Developer
     ↓
Git Repository
     ↓
Jenkins Master
     ↓
Build Agent
     ↓
Execution
```

---

### Jenkins Components

| Component           | Purpose              |
| ------------------- | -------------------- |
| Controller (Master) | Manage Builds        |
| Agent (Node)        | Execute Builds       |
| Job                 | Build Configuration  |
| Pipeline            | Automated Workflow   |
| Plugin              | Extend Functionality |

---

### Jenkins Architecture Diagram

```text
Users
  ↓
Jenkins Controller
  ↓
Agents
  ↓
Build/Test Execution
```

---

### Controller Responsibilities

* Manage Jobs
* Schedule Builds
* Store Configurations
* Generate Reports

---

### Agent Responsibilities

* Execute Builds
* Run Automation Tests
* Generate Results

---

## Jobs

### What is a Job?

A Job is a Jenkins task configuration.

Examples:

* Build Project
* Execute Automation
* Generate Reports

---

### Types of Jobs

| Job Type              | Purpose             |
| --------------------- | ------------------- |
| Freestyle             | Basic Jobs          |
| Pipeline              | Workflow Automation |
| Multi-Branch Pipeline | Branch Automation   |
| Folder                | Organization        |

---

### Create Freestyle Job

Steps:

1. New Item
2. Enter Job Name
3. Select Freestyle Project
4. Configure Source Code
5. Configure Build Steps
6. Save

---

### Execute Maven Project

Build Step:

```bash
mvn clean test
```

---

## Pipelines

### What is a Pipeline?

A Pipeline is code-based automation workflow.

Advantages:

* Version Controlled
* Reusable
* Scalable
* Easy Maintenance

---

### Pipeline Flow

```text
Code
 ↓
Build
 ↓
Test
 ↓
Report
 ↓
Deploy
```

---

### Pipeline Syntax

```groovy
pipeline {

    agent any

    stages {

        stage('Build') {

            steps {

                echo 'Building'
            }
        }
    }
}
```

---

### Multiple Stages

```groovy
pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Git Checkout'
            }
        }

        stage('Build') {
            steps {
                echo 'Build'
            }
        }

        stage('Test') {
            steps {
                echo 'Execute Tests'
            }
        }
    }
}
```

---

### Enterprise Pipeline

```text
Checkout
   ↓
Build
   ↓
Execute Tests
   ↓
Generate Reports
   ↓
Publish Results
```

---

## Git Integration

### Why Integrate Git?

Jenkins retrieves latest code automatically.

---

### Git Integration Flow

```text
GitHub
   ↓
Jenkins
   ↓
Build
   ↓
Execution
```

---

### Configure Git

Source Code Management:

```text
Git
```

Repository URL:

```text
https://github.com/user/framework.git
```

---

### Authentication

Methods:

* Username/Password
* Personal Access Token
* SSH Key

---

### Automatic Build Trigger

```text
Git Commit
     ↓
Webhook
     ↓
Jenkins Trigger
     ↓
Build Execution
```

---

## Maven Integration

### Why Maven?

Most Selenium frameworks use Maven.

---

### Maven Build Command

```bash
mvn clean test
```

---

### Jenkins + Maven Flow

```text
Git Checkout
      ↓
Maven Build
      ↓
TestNG Execution
      ↓
Report Generation
```

---

### Build Steps

```bash
mvn clean test
```

---

### Execute Specific Suite

```bash
mvn test -DsuiteXmlFile=testng.xml
```

---

### Common Maven Commands

| Command     | Purpose          |
| ----------- | ---------------- |
| mvn clean   | Remove Old Build |
| mvn compile | Compile Code     |
| mvn test    | Execute Tests    |
| mvn package | Package Project  |
| mvn install | Install Artifact |

---

## Scheduled Builds

### Why Schedule Builds?

Automate execution without manual intervention.

Examples:

* Nightly Regression
* Weekly Smoke Tests
* Daily API Tests

---

### Schedule Example

```text
Every Day
2:00 AM
```

---

### Cron Syntax

```text
MIN HOUR DAY MONTH WEEKDAY
```

---

### Example

```text
0 2 * * *
```

Meaning:

```text
Every Day at 2 AM
```

---

### Jenkins Schedule

```text
Build periodically
```

---

### Common Schedules

| Schedule     | Cron      |
| ------------ | --------- |
| Daily 2 AM   | 0 2 * * * |
| Every Hour   | 0 * * * * |
| Every Sunday | 0 0 * * 0 |

---

## Automated Execution

### Automation Execution Flow

```text
Code Commit
      ↓
Git Trigger
      ↓
Jenkins Build
      ↓
Maven
      ↓
TestNG
      ↓
Reports
```

---

### TestNG Execution

```bash
mvn clean test
```

---

### Browser Automation Execution

```text
Launch Browser
      ↓
Execute Tests
      ↓
Generate Results
```

---

### Parallel Execution

Pipeline can execute:

* Smoke Suite
* Regression Suite
* API Suite

simultaneously.

---

### Automated Regression Example

```text
Daily Build
      ↓
Execute 2000 Tests
      ↓
Publish Reports
      ↓
Email Results
```

---

## Reporting Integration

### Why Reporting Integration?

Stakeholders need execution visibility.

---

### Reporting Flow

```text
Test Execution
      ↓
Generate Report
      ↓
Publish in Jenkins
```

---

## TestNG Reports

Generated automatically.

Location:

```text
test-output
```

---

### Publish HTML Reports

Plugin:

```text
HTML Publisher Plugin
```

---

### Extent Reports Integration

Framework generates:

```text
reports/index.html
```

Jenkins publishes report.

---

### Allure Reports Integration

Plugin:

```text
Allure Jenkins Plugin
```

---

### Reporting Architecture

```text
TestNG
   ↓
Extent Reports
   ↓
Jenkins
   ↓
Dashboard
```

---

### Email Notification

After execution:

```text
Build Status
Pass Count
Fail Count
Report Link
```

sent automatically.

---

## Jenkins Plugins Useful for Automation Engineers

| Plugin          | Purpose         |
| --------------- | --------------- |
| Git Plugin      | Git Integration |
| Maven Plugin    | Maven Builds    |
| TestNG Plugin   | Test Reports    |
| Allure Plugin   | Allure Reports  |
| HTML Publisher  | HTML Reports    |
| Email Extension | Notifications   |
| Pipeline Plugin | CI/CD Pipelines |

---

## Jenkinsfile

### What is Jenkinsfile?

Pipeline stored in source code.

---

### Example

```groovy
pipeline {

    agent any

    stages {

        stage('Checkout') {

            steps {

                git 'https://github.com/repo.git'
            }
        }

        stage('Build') {

            steps {

                sh 'mvn clean test'
            }
        }
    }
}
```

---

### Benefits

* Version Controlled
* Reusable
* Easy Collaboration

---

## Real World Industry Examples

### Selenium Framework

Pipeline:

```text
Git
 ↓
Jenkins
 ↓
Maven
 ↓
TestNG
 ↓
Extent Reports
```

---

### API Automation Framework

Pipeline:

```text
Git
 ↓
Jenkins
 ↓
Maven
 ↓
REST Assured
 ↓
Allure Reports
```

---

### Enterprise Regression Suite

```text
Nightly Trigger
       ↓
5000 Test Cases
       ↓
Report Generation
       ↓
Email Notification
```

---

### Banking Project

```text
Code Commit
      ↓
Build
      ↓
Security Scan
      ↓
Automation Testing
      ↓
Deployment Approval
```

---

## Diagrams (Markdown Compatible)

### CI/CD Flow

```text
Developer
     ↓
Git
     ↓
Jenkins
     ↓
Build
     ↓
Test
     ↓
Deploy
```

---

### Jenkins Architecture

```text
Controller
     ↓
Agents
     ↓
Execution
```

---

### Pipeline Flow

```text
Checkout
    ↓
Build
    ↓
Test
    ↓
Report
```

---

### Automation Execution Flow

```text
Git Commit
     ↓
Webhook
     ↓
Jenkins
     ↓
Maven
     ↓
TestNG
     ↓
Report
```

---

## Best Practices

* Store pipelines as code.
* Use Git for version control.
* Keep builds small and fast.
* Automate regression suites.
* Publish reports automatically.
* Use separate environments.
* Implement build notifications.
* Use credentials securely.
* Archive build artifacts.
* Maintain pipeline documentation.

---

## Common Mistakes

| Mistake                          | Impact                   |
| -------------------------------- | ------------------------ |
| Manual Build Execution           | Slow Delivery            |
| No Reporting                     | Poor Visibility          |
| Large Pipelines                  | Difficult Maintenance    |
| Hardcoded Credentials            | Security Risk            |
| Ignoring Build Failures          | Quality Issues           |
| No Scheduling                    | Reduced Automation Value |
| No Version Control for Pipelines | Poor Traceability        |

---

## Interview Questions

### Beginner Level

1. What is CI/CD?
2. What is Jenkins?
3. What is Continuous Integration?
4. What is Continuous Delivery?
5. What is Continuous Deployment?
6. What is a Jenkins Job?
7. What is a Jenkins Pipeline?
8. What is a Jenkins Agent?
9. Why integrate Jenkins with Git?
10. Why integrate Jenkins with Maven?

---

### Intermediate Level

1. Explain Jenkins architecture.
2. Freestyle Job vs Pipeline?
3. What is Jenkinsfile?
4. How does Git integration work?
5. Explain webhook triggers.
6. How do scheduled builds work?
7. How do you publish reports in Jenkins?
8. Explain Maven integration.
9. What are Jenkins plugins?
10. How do you trigger automated tests?

---

### Advanced Level

1. Design a CI/CD pipeline for a Selenium framework.
2. How would you execute tests in parallel using Jenkins?
3. Explain master-agent architecture.
4. How would you secure Jenkins credentials?
5. How would you manage large-scale regression execution?
6. How would you integrate Allure Reports?
7. Explain pipeline-as-code.
8. How would you troubleshoot Jenkins build failures?
9. How would you integrate Jenkins with cloud infrastructure?
10. Explain the CI/CD pipeline used in your project.

---

## Practical Assignments

### Assignment 1

Install Jenkins and:

* Create Admin User
* Configure Plugins

---

### Assignment 2

Create a Freestyle Job to execute:

```bash
mvn clean test
```

---

### Assignment 3

Integrate:

* Git Repository
* Maven Project

---

### Assignment 4

Create a Jenkins Pipeline with:

* Checkout
* Build
* Test
* Report

Stages.

---

### Assignment 5

Schedule:

* Daily Regression Run
* Hourly Smoke Run

Using Cron expressions.

---

## Mini Project

### Project: End-to-End Automation CI/CD Pipeline

### Objective

Create a complete CI/CD pipeline for a Selenium Automation Framework.

### Components

* GitHub Repository
* Jenkins
* Maven
* TestNG
* Extent Reports
* Email Notifications

### Workflow

```text
Code Commit
      ↓
GitHub
      ↓
Jenkins
      ↓
Build
      ↓
Automation Execution
      ↓
Report Publishing
      ↓
Email Notification
```

### Deliverables

* Jenkins Setup
* Jenkinsfile
* Scheduled Jobs
* Git Integration
* Maven Integration
* Published Reports
* CI/CD Documentation

---

## Cheat Sheet

| Command / Concept | Purpose                        |
| ----------------- | ------------------------------ |
| CI                | Continuous Integration         |
| CD                | Continuous Delivery/Deployment |
| Jenkins           | Automation Server              |
| Job               | Jenkins Task                   |
| Pipeline          | Automated Workflow             |
| Agent             | Execution Node                 |
| Jenkinsfile       | Pipeline as Code               |
| Git Integration   | Source Control                 |
| Maven Integration | Build Automation               |
| Cron              | Scheduling                     |
| Webhook           | Automatic Trigger              |
| HTML Publisher    | Report Publishing              |
| Allure Plugin     | Allure Reports                 |
| TestNG Plugin     | TestNG Reports                 |

---

## Key Takeaways

* CI/CD is essential for modern software delivery.
* Continuous Integration enables early defect detection.
* Continuous Delivery keeps applications deployment-ready.
* Jenkins is the most widely used CI/CD tool.
* Jenkins automates builds, testing, and reporting.
* Jobs define executable tasks in Jenkins.
* Pipelines provide scalable workflow automation.
* Jenkins integrates seamlessly with Git.
* Maven integration enables automated builds.
* Scheduled builds automate regression execution.
* Webhooks trigger builds automatically after commits.
* Jenkins supports extensive plugin-based customization.
* Reports should be automatically published after execution.
* Jenkinsfiles enable Pipeline as Code.
* CI/CD improves software quality and delivery speed.
* Automation Engineers are expected to understand Jenkins fundamentals.
* Enterprise automation frameworks commonly run through Jenkins pipelines.
* Reporting integration improves execution visibility.
* Jenkins interview questions are common for Automation and SDET roles.
* CI/CD knowledge is mandatory for modern QA Automation Engineers.
