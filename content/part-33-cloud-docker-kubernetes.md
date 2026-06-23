---

title: Cloud, Docker & Kubernetes for SDETs
part: 33
slug: cloud-docker-and-kubernetes-for-sdets
description: Comprehensive guide for SDETs covering AWS fundamentals, Azure fundamentals, Docker, containerized automation frameworks, Kubernetes basics, and Selenium Grid on Docker.

---
# Part 33 — Cloud, Docker & Kubernetes for SDETs

## Learning Objectives

By the end of this chapter, you will be able to:

* Understand cloud computing fundamentals.
* Differentiate between AWS, Azure, and traditional infrastructure.
* Understand cloud services commonly used by QA and SDETs.
* Learn Docker architecture and containerization concepts.
* Build Docker images for automation frameworks.
* Execute automation tests inside containers.
* Understand Kubernetes architecture and terminology.
* Deploy automation workloads on Kubernetes.
* Configure Selenium Grid using Docker containers.
* Scale test execution using containerized infrastructure.
* Prepare for cloud-related Automation Engineer and SDET interviews.
* Understand modern enterprise test infrastructure.

---

# Part 33 — Cloud, Docker & Kubernetes for SDETs

## Introduction

Modern software systems rarely run on physical servers managed manually.

Most enterprise applications today run on cloud platforms such as:

* Amazon Web Services
* Microsoft Azure
* Google Cloud Platform

Similarly, modern test automation execution is moving from:

```text
Local Machine
      ↓
Dedicated Servers
      ↓
Virtual Machines
      ↓
Containers
      ↓
Kubernetes Clusters
```

A modern SDET is expected to understand:

* Cloud Basics
* Docker
* Kubernetes
* CI/CD Pipelines
* Containerized Test Execution

These skills are increasingly appearing in Automation Engineer, QA Automation Engineer, and SDET interviews.

---

## Core Concepts

# Cloud Computing Fundamentals

## What is Cloud Computing?

Cloud Computing is the delivery of computing resources over the internet.

Instead of purchasing:

* Servers
* Storage
* Databases
* Networking Equipment

organizations rent resources from cloud providers.

---

## Traditional Infrastructure

```text
Company
   ↓
Purchase Servers
   ↓
Maintain Hardware
   ↓
Manage Upgrades
```

---

## Cloud Infrastructure

```text
Cloud Provider
      ↓
Infrastructure Managed
      ↓
Company Uses Resources
```

---

## Benefits of Cloud Computing

| Benefit         | Description                |
| --------------- | -------------------------- |
| Scalability     | Scale Resources On Demand  |
| Availability    | High Uptime                |
| Cost Efficiency | Pay As You Use             |
| Reliability     | Distributed Infrastructure |
| Automation      | Infrastructure as Code     |
| Flexibility     | Rapid Provisioning         |

---

## Cloud Service Models

### IaaS

Infrastructure as a Service

Examples:

* Virtual Machines
* Storage
* Networking

---

### PaaS

Platform as a Service

Examples:

* Managed Databases
* Application Platforms

---

### SaaS

Software as a Service

Examples:

* Gmail
* Salesforce
* Office 365

---

## Service Model Comparison

| Model | User Manages | Provider Manages |
| ----- | ------------ | ---------------- |
| IaaS  | OS + App     | Hardware         |
| PaaS  | Application  | Platform         |
| SaaS  | Usage        | Everything       |

---

# AWS Basics

## What is AWS?

Amazon Web Services is the world's largest cloud platform.

---

## AWS Global Infrastructure

```text
Region
   ↓
Availability Zone
   ↓
Data Center
```

---

## Common AWS Services for SDETs

| Service    | Purpose              |
| ---------- | -------------------- |
| EC2        | Virtual Servers      |
| S3         | Object Storage       |
| RDS        | Managed Database     |
| Lambda     | Serverless Functions |
| EKS        | Kubernetes Service   |
| ECS        | Container Service    |
| CloudWatch | Monitoring           |
| IAM        | Security & Access    |

---

## EC2

Elastic Compute Cloud

Provides:

```text
Virtual Machine
```

Use Cases:

* Automation Execution Server
* Jenkins Server
* Selenium Grid

---

## S3

Simple Storage Service

Used For:

* Reports
* Logs
* Screenshots
* Test Artifacts

---

## RDS

Relational Database Service

Supported Databases:

* MySQL
* PostgreSQL
* SQL Server
* Oracle

---

## IAM

Identity and Access Management

Controls:

* Users
* Roles
* Permissions

---

## EKS

Elastic Kubernetes Service

Managed Kubernetes platform on AWS.

---

## Typical Automation Architecture on AWS

```text
GitHub
   ↓
Jenkins
   ↓
EC2
   ↓
Docker
   ↓
Selenium Grid
   ↓
Reports → S3
```

---

# Azure Basics

## What is Azure?

Microsoft Azure is Microsoft's cloud platform.

---

## Common Azure Services

| Service          | Purpose    |
| ---------------- | ---------- |
| Virtual Machines | Compute    |
| Azure Storage    | Storage    |
| Azure SQL        | Database   |
| Azure DevOps     | CI/CD      |
| AKS              | Kubernetes |
| Functions        | Serverless |
| Monitor          | Monitoring |

---

## Azure DevOps

Provides:

* Repositories
* Boards
* Pipelines
* Test Plans

---

## AKS

Azure Kubernetes Service

Managed Kubernetes platform.

---

## Azure Architecture

```text
Azure DevOps
      ↓
Build Pipeline
      ↓
Docker Image
      ↓
AKS Cluster
      ↓
Execution
```

---

## AWS vs Azure

| Feature               | AWS      | Azure     |
| --------------------- | -------- | --------- |
| Market Share          | Higher   | Lower     |
| Enterprise Adoption   | High     | Very High |
| Microsoft Integration | Moderate | Excellent |
| Kubernetes Support    | EKS      | AKS       |
| Learning Curve        | Moderate | Moderate  |

---

# Docker Fundamentals

## What is Docker?

Docker is a containerization platform.

Containers package:

* Code
* Dependencies
* Runtime
* Configuration

into a portable unit.

---

## Problem Before Docker

```text
Works On My Machine
        ↓
Fails On Server
```

---

## Docker Solution

```text
Application
     +
Dependencies
     +
Runtime
     ↓
Container
```

---

## Virtual Machine vs Docker

| Virtual Machine       | Docker               |
| --------------------- | -------------------- |
| Heavy                 | Lightweight          |
| Full OS               | Shared OS            |
| Slower Startup        | Fast Startup         |
| Higher Resource Usage | Lower Resource Usage |

---

## Docker Architecture

```text
Docker Client
       ↓
Docker Engine
       ↓
Containers
```

---

## Key Components

| Component  | Purpose            |
| ---------- | ------------------ |
| Image      | Blueprint          |
| Container  | Running Instance   |
| Dockerfile | Build Instructions |
| Registry   | Image Repository   |
| Volume     | Persistent Storage |

---

## Docker Commands

### Check Version

```bash
docker --version
```

---

### Pull Image

```bash
docker pull selenium/standalone-chrome
```

---

### List Images

```bash
docker images
```

---

### Run Container

```bash
docker run -d nginx
```

---

### Running Containers

```bash
docker ps
```

---

### Stop Container

```bash
docker stop container_id
```

---

### Remove Container

```bash
docker rm container_id
```

---

### Remove Image

```bash
docker rmi image_name
```

---

# Dockerizing Automation Frameworks

## Why Dockerize Frameworks?

Benefits:

* Consistent Environment
* Easy CI/CD Integration
* Easy Scalability
* Faster Setup

---

## Automation Framework Structure

```text
Framework
│
├── src
├── pom.xml
├── testng.xml
└── Dockerfile
```

---

## Sample Dockerfile

```dockerfile
FROM maven:3.9-eclipse-temurin-17

WORKDIR /app

COPY . .

RUN mvn clean install

CMD ["mvn","test"]
```

---

## Build Image

```bash
docker build -t automation-framework .
```

---

## Run Framework

```bash
docker run automation-framework
```

---

## Dockerized Execution Flow

```text
Source Code
      ↓
Docker Image
      ↓
Container
      ↓
Test Execution
```

---

## Benefits for Automation Teams

| Benefit              | Impact             |
| -------------------- | ------------------ |
| Standard Environment | Consistency        |
| Easy Scaling         | Parallel Execution |
| Faster Setup         | Reduced Onboarding |
| CI/CD Friendly       | Better Automation  |

---

# Kubernetes Fundamentals

## What is Kubernetes?

Kubernetes is a container orchestration platform.

Manages:

* Containers
* Scaling
* Networking
* Availability

---

## Why Kubernetes?

Managing:

```text
1 Container
```

Easy.

Managing:

```text
1000 Containers
```

Difficult.

Kubernetes solves this problem.

---

## Kubernetes Architecture

```text
Control Plane
       ↓
Worker Nodes
       ↓
Pods
       ↓
Containers
```

---

## Core Components

### Cluster

Collection of nodes.

---

### Node

Machine running containers.

---

### Pod

Smallest deployable unit.

Contains:

```text
One or More Containers
```

---

### Deployment

Manages Pods.

---

### Service

Exposes Applications.

---

## Kubernetes Workflow

```text
Deployment
     ↓
Pod
     ↓
Container
```

---

## Common Kubernetes Commands

### Cluster Information

```bash
kubectl cluster-info
```

---

### Get Pods

```bash
kubectl get pods
```

---

### Get Deployments

```bash
kubectl get deployments
```

---

### Create Deployment

```bash
kubectl apply -f deployment.yaml
```

---

### Delete Deployment

```bash
kubectl delete deployment deployment-name
```

---

## Sample Deployment YAML

```yaml
apiVersion: apps/v1
kind: Deployment

metadata:
  name: automation-tests

spec:
  replicas: 3

  selector:
    matchLabels:
      app: automation

  template:
    metadata:
      labels:
        app: automation

    spec:
      containers:
      - name: automation
        image: automation-framework
```

---

# Selenium Grid on Docker

## Why Selenium Grid?

Without Grid:

```text
1 Machine
    ↓
1 Browser
```

---

With Grid:

```text
Hub
 ↓
Chrome Node
 ↓
Firefox Node
 ↓
Edge Node
```

Parallel Execution.

---

## Selenium Grid Architecture

```text
Tests
  ↓
Hub
  ↓
Nodes
  ↓
Browsers
```

---

## Docker-Based Selenium Grid

Advantages:

* Easy Setup
* Scalable
* Portable

---

## Pull Hub Image

```bash
docker pull selenium/hub
```

---

## Start Hub

```bash
docker run -d \
-p 4444:4444 \
--name selenium-hub \
selenium/hub
```

---

## Start Chrome Node

```bash
docker run -d \
--link selenium-hub:hub \
selenium/node-chrome
```

---

## Start Firefox Node

```bash
docker run -d \
--link selenium-hub:hub \
selenium/node-firefox
```

---

## Execution Flow

```text
TestNG
   ↓
RemoteWebDriver
   ↓
Hub
   ↓
Browser Node
```

---

## RemoteWebDriver Example

```java
WebDriver driver =
new RemoteWebDriver(
new URL(
"http://localhost:4444/wd/hub"),
new ChromeOptions()
);
```

---

## Selenium Grid with Docker Compose

### docker-compose.yml

```yaml
version: "3"

services:

  hub:
    image: selenium/hub

    ports:
      - "4444:4444"

  chrome:
    image: selenium/node-chrome

    depends_on:
      - hub

  firefox:
    image: selenium/node-firefox

    depends_on:
      - hub
```

---

## Benefits

| Feature               | Benefit          |
| --------------------- | ---------------- |
| Parallel Execution    | Faster Tests     |
| Cross Browser Testing | Better Coverage  |
| Scalability           | Enterprise Ready |
| Containerization      | Portability      |

---

# Cloud-Based Test Execution Strategy

## Enterprise Workflow

```text
GitHub
   ↓
Jenkins
   ↓
Docker Build
   ↓
Kubernetes
   ↓
Selenium Grid
   ↓
Execution
   ↓
Reports
```

---

## Modern SDET Responsibilities

A modern SDET should understand:

* Cloud Basics
* Containerization
* CI/CD Pipelines
* Selenium Grid
* Infrastructure Concepts
* Kubernetes Fundamentals

---

## Real World Industry Examples

### E-Commerce Platform

Infrastructure:

```text
AWS
 ↓
EKS
 ↓
Docker
 ↓
Selenium Grid
```

Benefits:

* Scalable Regression Testing
* Parallel Execution

---

### Banking Application

Infrastructure:

```text
Azure
 ↓
AKS
 ↓
Automation Framework
```

Benefits:

* Secure Execution
* Enterprise Governance

---

### SaaS Product

Infrastructure:

```text
GitHub
 ↓
Jenkins
 ↓
Docker
 ↓
Kubernetes
```

Benefits:

* Continuous Testing
* Rapid Releases

---

### Enterprise QA Platform

Infrastructure:

```text
Cloud
 ↓
Docker
 ↓
Grid
 ↓
Reports
```

Benefits:

* Reduced Infrastructure Costs
* Improved Execution Speed

---

## Diagrams (Markdown Compatible)

### Cloud Infrastructure

```text
Users
  ↓
Cloud Platform
  ↓
Applications
```

---

### Docker Architecture

```text
Docker Client
      ↓
Docker Engine
      ↓
Container
```

---

### Kubernetes Architecture

```text
Cluster
   ↓
Nodes
   ↓
Pods
   ↓
Containers
```

---

### Selenium Grid

```text
Tests
 ↓
Hub
 ↓
Nodes
 ↓
Browsers
```

---

### Enterprise Automation Pipeline

```text
GitHub
 ↓
Jenkins
 ↓
Docker
 ↓
Kubernetes
 ↓
Grid
 ↓
Reports
```

---

## Best Practices

* Learn cloud fundamentals before advanced services.
* Dockerize automation frameworks.
* Store reports in cloud storage.
* Use Kubernetes for scalable execution.
* Use Selenium Grid for parallel testing.
* Keep Docker images lightweight.
* Version Docker images properly.
* Automate infrastructure deployment.
* Integrate cloud execution with CI/CD.
* Monitor execution environments.

---

## Common Mistakes

| Mistake                     | Impact              |
| --------------------------- | ------------------- |
| Ignoring Cloud Concepts     | Career Limitation   |
| Large Docker Images         | Slow Builds         |
| Hardcoded Configurations    | Poor Portability    |
| No Containerization         | Environment Issues  |
| No Parallel Execution       | Slow Regression     |
| Weak Kubernetes Knowledge   | Limited Scalability |
| Manual Infrastructure Setup | High Maintenance    |

---

## Interview Questions

### Beginner Level

1. What is Cloud Computing?
2. What is AWS?
3. What is Azure?
4. What is Docker?
5. What is a Container?
6. Docker vs Virtual Machine?
7. What is Kubernetes?
8. What is a Pod?
9. What is Selenium Grid?
10. Why use Docker in Automation?

---

### Intermediate Level

1. Explain Docker architecture.
2. Explain Kubernetes architecture.
3. What is EC2?
4. What is S3?
5. What is EKS?
6. What is AKS?
7. How do you Dockerize an automation framework?
8. How does Selenium Grid work?
9. Explain RemoteWebDriver.
10. What is Docker Compose?

---

### Advanced Level

1. Design a cloud-based automation infrastructure.
2. How would you scale Selenium execution using Kubernetes?
3. Explain Selenium Grid on Docker architecture.
4. How would you run 5000 tests in parallel?
5. Design a CI/CD pipeline using Docker and Kubernetes.
6. How would you optimize Docker image size?
7. Explain container orchestration.
8. How would you manage test execution in EKS?
9. How would you store automation reports in the cloud?
10. Explain a cloud-based automation architecture from your experience.

---

## Practical Assignments

### Assignment 1

Install Docker and run:

* Nginx Container
* Selenium Container

---

### Assignment 2

Create a Dockerfile for a Selenium framework.

---

### Assignment 3

Build and run a Dockerized automation framework.

---

### Assignment 4

Create a Kubernetes deployment YAML.

---

### Assignment 5

Configure Selenium Grid using Docker Compose.

---

## Mini Project

### Project: Cloud-Based Automation Execution Platform

### Objective

Build a scalable automation execution environment.

### Components

* Selenium Framework
* Docker
* Selenium Grid
* Jenkins
* Kubernetes
* Cloud Storage

### Deliverables

* Dockerized Framework
* Selenium Grid Setup
* Kubernetes Deployment
* CI/CD Integration
* Execution Documentation

---

## Cheat Sheet

| Technology      | Purpose            |
| --------------- | ------------------ |
| AWS EC2         | Virtual Server     |
| AWS S3          | Storage            |
| AWS RDS         | Database           |
| AWS EKS         | Kubernetes         |
| Azure VM        | Virtual Server     |
| Azure DevOps    | CI/CD              |
| AKS             | Kubernetes         |
| Docker Image    | Blueprint          |
| Container       | Running Instance   |
| Pod             | Kubernetes Unit    |
| Deployment      | Pod Management     |
| Selenium Grid   | Parallel Execution |
| Hub             | Request Router     |
| Node            | Browser Executor   |
| RemoteWebDriver | Remote Execution   |

---

## Key Takeaways

* Cloud skills are increasingly important for SDETs.
* AWS and Azure dominate enterprise cloud environments.
* Docker solves environment consistency problems.
* Containers are lightweight alternatives to virtual machines.
* Docker enables portable automation execution.
* Kubernetes manages containerized workloads at scale.
* Pods are the smallest deployable Kubernetes units.
* EKS and AKS provide managed Kubernetes services.
* Selenium Grid enables parallel execution.
* Docker simplifies Selenium Grid deployment.
* RemoteWebDriver supports distributed execution.
* Containerized automation improves scalability.
* Cloud storage is useful for reports and artifacts.
* CI/CD pipelines often leverage Docker and Kubernetes.
* Modern SDETs should understand infrastructure fundamentals.
* Cloud-native testing is becoming the industry standard.
* Docker and Kubernetes knowledge increases employability.
* Selenium Grid remains highly relevant for large-scale automation.
* Understanding cloud architecture helps in framework design decisions.
* These technologies bridge the gap between Automation Engineer and modern DevOps-aware SDET roles.
