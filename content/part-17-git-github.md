---

title: Git & GitHub for QA Engineers
part: 17
slug: git-and-github-for-qa-engineers
description: Master Git and GitHub for Automation Engineers and SDETs including version control, branching strategies, merging, rebasing, pull requests, conflict resolution, and team collaboration workflows.
---

# Part 17 — Git & GitHub for QA Engineers

## Learning Objectives

By the end of this chapter, you will be able to:

* Understand Version Control Systems (VCS).
* Understand Git architecture and internals.
* Create and manage repositories.
* Use Git effectively in automation projects.
* Implement branching strategies.
* Perform merges and rebases.
* Resolve merge conflicts.
* Create and review Pull Requests.
* Collaborate effectively using GitHub.
* Manage automation framework source code.
* Follow industry Git workflows.
* Prepare for Git and GitHub interview questions.

---

## Introduction

Modern software development and test automation teams cannot function efficiently without Version Control Systems.

Imagine a team of:

* Developers
* QA Engineers
* Automation Engineers
* SDETs
* DevOps Engineers

all modifying the same codebase.

Without version control:

* Code would be overwritten.
* Changes would be lost.
* Collaboration would be chaotic.
* Rollbacks would be impossible.

Git solves these challenges.

Git is the world's most widely used Distributed Version Control System (DVCS).

GitHub provides:

* Cloud Repository Hosting
* Collaboration Features
* Pull Requests
* Code Reviews
* CI/CD Integrations

Automation frameworks are typically stored in Git repositories and managed through GitHub.

Example:

```text
Selenium Framework
      ↓
Git Repository
      ↓
GitHub
      ↓
Team Collaboration
      ↓
CI/CD Pipeline
```

---

## Core Concepts

## Version Control Fundamentals

### What is Version Control?

Version Control tracks changes made to files over time.

Benefits:

* History Tracking
* Collaboration
* Rollback Support
* Branching
* Code Reviews

---

### Types of Version Control Systems

| Type            | Example |
| --------------- | ------- |
| Local VCS       | RCS     |
| Centralized VCS | SVN     |
| Distributed VCS | Git     |

---

### Why Git?

Advantages:

* Fast
* Distributed
* Reliable
* Offline Support
* Lightweight Branching
* Industry Standard

---

### Real-World Example

Without Git:

```text
Framework_Final.zip
Framework_Final_v2.zip
Framework_Final_Updated.zip
Framework_Final_Updated_Latest.zip
```

With Git:

```text
Commit History
```

Every change is tracked.

---

## Git Architecture

Git works using snapshots rather than file differences.

### Git Architecture

```text
Working Directory
        ↓
Staging Area
        ↓
Local Repository
        ↓
Remote Repository
```

---

### Working Directory

Current files being edited.

Example:

```text
LoginTest.java
SearchTest.java
```

---

### Staging Area

Temporary holding area.

Command:

```bash
git add .
```

---

### Local Repository

Stored on developer machine.

Command:

```bash
git commit -m "Added Login Tests"
```

---

### Remote Repository

Hosted on GitHub.

Command:

```bash
git push origin main
```

---

### Git Workflow

```text
Modify Files
      ↓
git add
      ↓
git commit
      ↓
git push
      ↓
GitHub
```

---

## Repository Management

### Create Repository

Initialize Git:

```bash
git init
```

---

### Clone Repository

```bash
git clone https://github.com/user/project.git
```

---

### Check Status

```bash
git status
```

---

### Add Files

Single File:

```bash
git add LoginTest.java
```

All Files:

```bash
git add .
```

---

### Commit Changes

```bash
git commit -m "Added Login Module Automation"
```

---

### View Commit History

```bash
git log
```

---

### Short History

```bash
git log --oneline
```

---

### Remove File

```bash
git rm file.txt
```

---

### Rename File

```bash
git mv old.java new.java
```

---

## Important Git Commands

### Configure Username

```bash
git config --global user.name "John Doe"
```

---

### Configure Email

```bash
git config --global user.email "john@email.com"
```

---

### View Configuration

```bash
git config --list
```

---

### Check Branch

```bash
git branch
```

---

### Check Remote

```bash
git remote -v
```

---

### Fetch Latest Changes

```bash
git fetch
```

---

### Pull Changes

```bash
git pull
```

---

### Push Changes

```bash
git push
```

---

## Branching Strategy

Branches allow isolated development.

---

### Why Branches?

Different team members can work independently.

Example:

```text
main
 ├── login-feature
 ├── search-feature
 └── checkout-feature
```

---

### Create Branch

```bash
git branch login-feature
```

---

### Switch Branch

```bash
git checkout login-feature
```

---

### Create and Switch

```bash
git checkout -b login-feature
```

---

### List Branches

```bash
git branch
```

---

### Delete Branch

```bash
git branch -d login-feature
```

---

## Common Branching Models

### Git Flow

```text
main
 │
develop
 │
 ├── feature/login
 ├── feature/search
 ├── release
 └── hotfix
```

---

### Trunk-Based Development

```text
main
 │
Small Short-Lived Branches
```

---

### Automation Team Strategy

```text
main
 │
automation-feature
 │
bug-fix
 │
framework-enhancement
```

---

## Merge

Merge combines branches.

### Example

```bash
git checkout main

git merge login-feature
```

---

### Merge Visualization

```text
main
 │
 └── login-feature
         │
         ▼
      merge
         │
         ▼
       main
```

---

### Advantages

* Preserves history
* Safe
* Widely used

---

## Rebase

Rebase rewrites commit history.

### Example

```bash
git checkout login-feature

git rebase main
```

---

### Visualization

Before:

```text
main
  A-B-C

feature
  D-E
```

After:

```text
main
  A-B-C

feature
        D-E
```

Replayed on latest main branch.

---

### Advantages

* Cleaner history
* Linear commit structure

---

### Risks

* Can rewrite history
* Dangerous on shared branches

---

## Merge vs Rebase

| Feature               | Merge | Rebase    |
| --------------------- | ----- | --------- |
| History Preserved     | Yes   | No        |
| Cleaner History       | No    | Yes       |
| Safer                 | Yes   | Less Safe |
| Recommended for Teams | Yes   | Limited   |

---

## Pull Requests

Pull Requests (PRs) are GitHub collaboration mechanisms.

Purpose:

* Code Review
* Discussion
* Quality Checks

---

### Pull Request Workflow

```text
Create Branch
      ↓
Develop Code
      ↓
Push Branch
      ↓
Create PR
      ↓
Code Review
      ↓
Approval
      ↓
Merge
```

---

### Creating Pull Request

1. Push branch.
2. Open GitHub.
3. Select Compare & Pull Request.
4. Add title.
5. Add description.
6. Request reviewers.
7. Submit PR.

---

### Good PR Description

```text
Feature:
Login Automation

Changes:
- Added Login Page
- Added Login Tests
- Added Reporting

Impact:
Smoke Regression
```

---

## Conflict Resolution

Conflicts occur when two users modify the same lines.

---

### Example

Developer A:

```java
String browser = "Chrome";
```

Developer B:

```java
String browser = "Firefox";
```

---

### Conflict Example

```text
<<<<<<< HEAD

Chrome

=======

Firefox

>>>>>>> branch
```

---

### Resolve Conflict

1. Open file.
2. Choose correct code.
3. Save file.
4. Stage file.

```bash
git add .
```

5. Commit.

```bash
git commit -m "Resolved Conflict"
```

---

### Conflict Resolution Flow

```text
Conflict
    ↓
Manual Fix
    ↓
git add
    ↓
git commit
```

---

## Team Collaboration Workflow

### Enterprise Workflow

```text
Developer
      ↓
Feature Branch
      ↓
Commit
      ↓
Push
      ↓
Pull Request
      ↓
Review
      ↓
Approval
      ↓
Merge
      ↓
CI/CD
```

---

### QA Engineer Workflow

```text
Clone Framework
       ↓
Create Branch
       ↓
Add Tests
       ↓
Commit
       ↓
Push
       ↓
Create PR
       ↓
Review
       ↓
Merge
```

---

### Daily Workflow

```bash
git pull

git checkout feature

git add .

git commit -m "Added tests"

git push
```

---

## GitHub Best Practices

### Branch Naming

Good:

```text
feature/login-tests
```

```text
bugfix/search-validation
```

Bad:

```text
test1
```

```text
newbranch
```

---

### Commit Message Standards

Good:

```text
Added Login Automation
```

```text
Fixed Search Validation Issue
```

Bad:

```text
changes
```

```text
update
```

---

### Pull Request Standards

Include:

* Objective
* Changes
* Impact
* Screenshots
* Test Evidence

---

### Repository Structure

```text
Framework
│
├── src
├── test
├── reports
├── screenshots
├── pom.xml
└── README.md
```

---

### README Best Practices

Include:

* Project Overview
* Setup Instructions
* Execution Commands
* Reporting Information

---

### .gitignore Example

```text
target/
.idea/
logs/
screenshots/
```

---

## GitHub Features Useful for QA Engineers

### Issues

Track:

* Bugs
* Tasks
* Enhancements

---

### Projects

Kanban Boards.

Example:

```text
To Do
 ↓
In Progress
 ↓
Done
```

---

### Actions

CI/CD Automation.

Example:

```text
Push
 ↓
Build
 ↓
Execute Tests
 ↓
Publish Reports
```

---

### Releases

Versioned framework releases.

Example:

```text
v1.0
v1.1
v2.0
```

---

## Real World Industry Examples

### Selenium Automation Framework

Stored in GitHub.

Workflow:

```text
Feature Branch
 ↓
PR
 ↓
Review
 ↓
Merge
```

---

### Enterprise Regression Suite

Uses:

* Protected Branches
* Code Reviews
* GitHub Actions

---

### CI/CD Integration

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

## Diagrams (Markdown Compatible)

### Git Architecture

```text
Working Directory
        ↓
Staging Area
        ↓
Local Repository
        ↓
Remote Repository
```

---

### Branch Workflow

```text
main
 │
 ├── login-feature
 ├── search-feature
 └── checkout-feature
```

---

### Pull Request Workflow

```text
Branch
  ↓
Commit
  ↓
Push
  ↓
PR
  ↓
Review
  ↓
Merge
```

---

### Conflict Resolution Flow

```text
Conflict
   ↓
Manual Fix
   ↓
Commit
   ↓
Push
```

---

## Best Practices

* Commit frequently.
* Write meaningful commit messages.
* Use feature branches.
* Keep pull requests small.
* Pull latest changes regularly.
* Resolve conflicts immediately.
* Protect main branch.
* Review code before merging.
* Maintain README documentation.
* Use .gitignore properly.

---

## Common Mistakes

| Mistake                    | Impact               |
| -------------------------- | -------------------- |
| Direct commits to main     | Production Risk      |
| Poor commit messages       | Difficult Tracking   |
| Large Pull Requests        | Difficult Reviews    |
| Ignoring Conflicts         | Build Failures       |
| Force Push Misuse          | Lost History         |
| Missing .gitignore         | Repository Pollution |
| Not Pulling Latest Changes | Frequent Conflicts   |

---

## Interview Questions

### Beginner Level

1. What is Git?
2. What is Version Control?
3. Difference between Git and GitHub?
4. What is a repository?
5. What is a commit?
6. What is staging?
7. What is git add?
8. What is git commit?
9. What is git push?
10. What is git pull?

---

### Intermediate Level

1. Explain Git architecture.
2. What is branching?
3. Explain merge.
4. Explain rebase.
5. What is a pull request?
6. How do you resolve merge conflicts?
7. What is .gitignore?
8. What is git fetch?
9. Difference between fetch and pull?
10. Explain Git workflow in automation projects.

---

### Advanced Level

1. Merge vs Rebase?
2. Explain Git internals.
3. How would you manage large automation teams using Git?
4. What are protected branches?
5. How would you design a Git branching strategy?
6. Explain GitHub Actions.
7. How would you recover from a bad merge?
8. Explain cherry-pick.
9. What is detached HEAD state?
10. How does Git store commits internally?

---

## Practical Assignments

### Assignment 1

Create:

* New Repository
* README
* Initial Commit

---

### Assignment 2

Perform:

* Clone
* Add
* Commit
* Push

Operations.

---

### Assignment 3

Create:

* Feature Branch
* Add Selenium Tests
* Merge Branch

---

### Assignment 4

Create and resolve a merge conflict.

---

### Assignment 5

Create Pull Request workflow using GitHub.

---

## Mini Project

### Project: Git-Based Selenium Automation Framework

### Objective

Manage a Selenium Automation Framework using Git and GitHub.

### Components

* Branching Strategy
* Pull Requests
* Code Reviews
* Conflict Resolution
* GitHub Repository

### Deliverables

* Repository Structure
* Branching Plan
* PR Workflow
* Conflict Resolution Example
* README Documentation

---

## Cheat Sheet

| Command       | Purpose               |
| ------------- | --------------------- |
| git init      | Initialize Repository |
| git clone     | Clone Repository      |
| git status    | Check Status          |
| git add .     | Stage Changes         |
| git commit -m | Commit Changes        |
| git push      | Push Changes          |
| git pull      | Pull Changes          |
| git fetch     | Fetch Updates         |
| git branch    | List Branches         |
| git checkout  | Switch Branch         |
| git merge     | Merge Branch          |
| git rebase    | Rebase Branch         |
| git log       | View History          |

---

## Key Takeaways

* Git is the industry-standard version control system.
* GitHub provides collaboration and repository hosting.
* Git tracks code history efficiently.
* Repositories store project source code.
* Commits represent tracked changes.
* Branches enable parallel development.
* Merging combines branch changes.
* Rebasing creates cleaner history.
* Pull Requests enable code reviews.
* Conflict resolution is a critical Git skill.
* GitHub supports team collaboration.
* README files improve project usability.
* .gitignore prevents unwanted files from entering repositories.
* Automation frameworks should always use Git.
* Branch naming standards improve maintainability.
* Commit message quality matters.
* Git integrates seamlessly with CI/CD pipelines.
* GitHub Actions support automated execution workflows.
* Git questions are common in Automation and SDET interviews.
* Strong Git knowledge is mandatory for modern QA Engineers and Automation Engineers.

:::writing-end:::
