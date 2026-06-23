---

title: OOP Masterclass
part: 10
slug: oop-masterclass
description: Master Object-Oriented Programming concepts including Classes, Objects, Encapsulation, Inheritance, Polymorphism, Abstraction, Interfaces, Association, Aggregation, Composition, and their practical usage in Automation Testing Frameworks.
---

# Part 10 — OOP Masterclass

## Learning Objectives

By the end of this chapter, you will be able to:

* Understand Object-Oriented Programming fundamentals.
* Create and use Classes and Objects effectively.
* Apply Encapsulation for data protection.
* Implement Inheritance for code reuse.
* Use Polymorphism for flexibility and maintainability.
* Apply Abstraction to hide implementation details.
* Design and implement Interfaces.
* Understand Association, Aggregation, and Composition relationships.
* Build scalable automation frameworks using OOP principles.
* Answer OOP interview questions confidently.
* Design maintainable Selenium and Test Automation architectures.

---

# Part 10 — OOP Masterclass

## Introduction

Object-Oriented Programming (OOP) is the foundation of modern software development and automation framework design.

Almost every enterprise-level automation framework is built using OOP principles.

Examples:

* Selenium Frameworks
* TestNG Frameworks
* API Automation Frameworks
* Playwright Frameworks
* Appium Frameworks

Without OOP, automation frameworks become:

* Difficult to maintain
* Hard to scale
* Highly repetitive
* Error-prone

Benefits of OOP:

* Reusability
* Maintainability
* Scalability
* Readability
* Extensibility

For Automation Engineers and SDETs, OOP is not optional—it is mandatory.

---

## Core Concepts

### What is Object-Oriented Programming?

Object-Oriented Programming is a programming paradigm based on objects that contain:

* Data (Attributes)
* Behavior (Methods)

### Real-World Example

Car

Attributes:

* Color
* Brand
* Speed

Behaviors:

* Start
* Stop
* Accelerate

### OOP Pillars

| Pillar        | Purpose         |
| ------------- | --------------- |
| Encapsulation | Data Protection |
| Inheritance   | Code Reuse      |
| Polymorphism  | Flexibility     |
| Abstraction   | Hide Complexity |

---

## Classes & Objects

### Class

A Class is a blueprint used to create objects.

### Example

```java
class Employee {

    String name;
    int id;

    void display() {
        System.out.println(name);
    }
}
```

### Object

An Object is an instance of a class.

```java
Employee emp = new Employee();

emp.name = "John";
emp.id = 101;

emp.display();
```

### Class vs Object

| Class               | Object              |
| ------------------- | ------------------- |
| Blueprint           | Instance            |
| Logical Entity      | Physical Entity     |
| No Memory Allocated | Memory Allocated    |
| Template            | Real Implementation |

### Real World Example

```text
Class  → Car
Object → BMW, Audi, Tesla
```

---

## Encapsulation

Encapsulation binds data and methods together while restricting direct access.

### Purpose

* Data Security
* Controlled Access
* Better Maintainability

### Example

```java
class Employee {

    private String name;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
```

### Usage

```java
Employee emp = new Employee();

emp.setName("John");

System.out.println(emp.getName());
```

### Benefits

* Prevents unauthorized access
* Improves security
* Easier maintenance

### Automation Example

```java
public class ConfigReader {

    private Properties properties;

    public String getBrowser() {
        return properties.getProperty("browser");
    }
}
```

---

## Inheritance

Inheritance allows one class to acquire properties and methods from another class.

### Purpose

Code Reuse

### Syntax

```java
class Parent {

    void display() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
}
```

### Usage

```java
Child c = new Child();

c.display();
```

### Types of Inheritance

| Type         | Supported in Java  |
| ------------ | ------------------ |
| Single       | Yes                |
| Multilevel   | Yes                |
| Hierarchical | Yes                |
| Multiple     | Through Interfaces |
| Hybrid       | Through Interfaces |

### Single Inheritance

```java
Animal
   ↓
 Dog
```

### Multilevel Inheritance

```java
Animal
   ↓
Dog
   ↓
Puppy
```

### Hierarchical Inheritance

```java
       Animal
      /      \
   Dog      Cat
```

### Automation Example

```java
BaseTest
   ↓
LoginTest
```

---

## Polymorphism

Polymorphism means:

> One interface, multiple implementations.

### Types

| Type         | Example            |
| ------------ | ------------------ |
| Compile Time | Method Overloading |
| Runtime      | Method Overriding  |

---

### Method Overloading

Same method name with different parameters.

```java
class Calculator {

    int add(int a,int b){
        return a+b;
    }

    int add(int a,int b,int c){
        return a+b+c;
    }
}
```

---

### Method Overriding

```java
class Animal {

    void sound() {
        System.out.println("Animal Sound");
    }
}

class Dog extends Animal {

    void sound() {
        System.out.println("Bark");
    }
}
```

### Runtime Example

```java
Animal a = new Dog();

a.sound();
```

Output:

```text
Bark
```

### Automation Example

```java
WebDriver driver;

driver = new ChromeDriver();

driver = new FirefoxDriver();
```

Same interface.

Different implementations.

---

## Abstraction

Abstraction hides implementation details and exposes only essential behavior.

### Why?

Users should focus on:

* What system does
* Not how it does it

### Abstract Class

```java
abstract class Vehicle {

    abstract void start();
}
```

### Implementation

```java
class Car extends Vehicle {

    void start() {
        System.out.println("Car Started");
    }
}
```

### Benefits

* Reduced complexity
* Better maintainability
* Improved flexibility

### Automation Example

```java
BasePage
```

Contains generic methods.

Child pages implement specifics.

---

## Interfaces

Interfaces define contracts.

### Syntax

```java
interface Payment {

    void pay();
}
```

### Implementation

```java
class CreditCard implements Payment {

    public void pay() {
        System.out.println("Paid");
    }
}
```

### Benefits

* Loose coupling
* Multiple inheritance support
* Better architecture

### Multiple Interface Example

```java
interface A {}
interface B {}

class C implements A,B {}
```

### Automation Example

```java
WebDriver driver;
```

Implemented by:

* ChromeDriver
* FirefoxDriver
* EdgeDriver

---

## Association

Association represents a relationship between two independent objects.

### Example

```java
class Teacher {}
class Student {}
```

Teacher and Student are associated.

Neither owns the other.

### Diagram

```text
Teacher ↔ Student
```

### Characteristics

* Weak relationship
* Independent lifecycle

---

## Aggregation

Aggregation is a special type of Association.

One object contains another object.

Contained object can exist independently.

### Example

```java
Department
      ↓
Employees
```

Employees exist even if department is deleted.

### Example Code

```java
class Employee {
}

class Department {

    Employee emp;
}
```

### Characteristics

* Has-A relationship
* Weak ownership

---

## Composition

Composition is stronger than Aggregation.

Contained object cannot exist independently.

### Example

```text
House
  ↓
Rooms
```

Without House, Rooms do not exist.

### Example Code

```java
class Room {
}

class House {

    private Room room =
        new Room();
}
```

### Characteristics

* Strong ownership
* Lifecycle dependency

---

## Association vs Aggregation vs Composition

| Feature              | Association | Aggregation | Composition |
| -------------------- | ----------- | ----------- | ----------- |
| Relationship         | Uses        | Has-A       | Owns        |
| Ownership            | No          | Weak        | Strong      |
| Lifecycle Dependency | No          | No          | Yes         |
| Coupling             | Low         | Medium      | High        |

---

## OOP in Automation Frameworks

Modern automation frameworks rely heavily on OOP.

### Framework Structure

```text
Framework
     ↓
Base Classes
     ↓
Page Objects
     ↓
Test Classes
     ↓
Utilities
```

---

### Encapsulation Usage

```java
ConfigReader
```

Hide configuration implementation.

---

### Inheritance Usage

```java
BaseTest
     ↓
LoginTest
```

Reuse setup and teardown methods.

---

### Abstraction Usage

```java
BasePage
```

Common page actions.

---

### Polymorphism Usage

```java
WebDriver driver;
```

Different browser implementations.

---

### Interface Usage

```java
WebDriver
```

Contract implemented by browser drivers.

---

### Page Object Model Example

```java
public class LoginPage {

    private WebDriver driver;

    private By username =
        By.id("user");

    private By password =
        By.id("pass");

    public LoginPage(WebDriver driver){
        this.driver = driver;
    }

    public void login(String user,String pwd){

        driver.findElement(username)
              .sendKeys(user);

        driver.findElement(password)
              .sendKeys(pwd);
    }
}
```

---

## Real World Industry Examples

### Selenium Framework

OOP Concepts Used:

* Encapsulation
* Inheritance
* Polymorphism
* Abstraction

---

### API Automation Framework

Uses:

* Interfaces
* Composition
* Utility Classes

---

### Reporting Framework

Uses:

* Encapsulation
* Composition

---

### Driver Factory Framework

Uses:

* Polymorphism
* Factory Pattern
* Interfaces

---

## Diagrams (Markdown Compatible)

### OOP Pillars

```text
           OOP
            |
  ---------------------
  |    |      |      |
Encap Inherit Poly Abstr
```

---

### Inheritance Hierarchy

```text
BaseTest
    |
LoginTest
    |
CheckoutTest
```

---

### Composition Example

```text
Car
 |
Engine
```

---

### Aggregation Example

```text
Department
     |
Employees
```

---

## Best Practices

* Favor Composition over Inheritance when appropriate.
* Use Encapsulation for data security.
* Keep classes focused on one responsibility.
* Program to Interfaces.
* Avoid deep inheritance chains.
* Follow SOLID principles.
* Build reusable utility classes.
* Use meaningful class names.
* Keep methods small and focused.
* Design frameworks using OOP principles.

---

## Common Mistakes

| Mistake                     | Impact              |
| --------------------------- | ------------------- |
| Public variables everywhere | Poor security       |
| Deep inheritance hierarchy  | Hard maintenance    |
| Ignoring abstraction        | Tight coupling      |
| Excessive static usage      | Reduced flexibility |
| God Classes                 | Poor scalability    |
| Duplicate code              | Maintenance issues  |
| No interfaces               | Rigid design        |

---

## Interview Questions

### Beginner Level

1. What is OOP?
2. What is a Class?
3. What is an Object?
4. What is Encapsulation?
5. What is Inheritance?
6. What is Polymorphism?
7. What is Abstraction?
8. What is an Interface?
9. What is a Constructor?
10. Why is OOP important?

---

### Intermediate Level

1. Difference between Class and Object?
2. Difference between Abstract Class and Interface?
3. Explain Method Overloading.
4. Explain Method Overriding.
5. What is Runtime Polymorphism?
6. Explain Encapsulation using example.
7. What is Association?
8. What is Aggregation?
9. What is Composition?
10. Explain OOP usage in Selenium.

---

### Advanced Level

1. Why does Selenium use Interfaces?
2. Explain WebDriver using Polymorphism.
3. Why is Composition preferred over Inheritance?
4. Design a Page Object Framework using OOP.
5. Explain SOLID principles and OOP relationship.
6. How does OOP improve framework scalability?
7. What design patterns rely heavily on OOP?
8. Explain Dependency Injection in OOP.
9. How would you design a Driver Factory?
10. What OOP concepts are most important for SDETs?

---

## Practical Assignments

### Assignment 1

Create:

* Employee Class
* Department Class

Demonstrate Association.

---

### Assignment 2

Create:

* Vehicle
* Car
* Bike

Demonstrate Inheritance.

---

### Assignment 3

Implement:

* Abstract Class
* Interface

For payment processing.

---

### Assignment 4

Create a mini Selenium Page Object Model structure.

---

## Mini Project

### Project: Automation Framework OOP Design

#### Objective

Design a Selenium Framework using OOP principles.

### Components

* BaseTest
* BasePage
* LoginPage
* DashboardPage
* DriverFactory
* ConfigReader
* Utilities

### Deliverables

* Class Diagram
* Java Classes
* OOP Mapping Document
* Framework Structure

---

## Cheat Sheet

| Concept       | Purpose          |
| ------------- | ---------------- |
| Class         | Blueprint        |
| Object        | Instance         |
| Encapsulation | Protect Data     |
| Inheritance   | Reuse Code       |
| Polymorphism  | Flexibility      |
| Abstraction   | Hide Complexity  |
| Interface     | Define Contract  |
| Association   | Relationship     |
| Aggregation   | Weak Ownership   |
| Composition   | Strong Ownership |

---

## Key Takeaways

* OOP is the foundation of modern automation frameworks.
* Classes are blueprints and Objects are instances.
* Encapsulation protects internal data.
* Inheritance enables code reuse.
* Polymorphism improves flexibility.
* Abstraction reduces complexity.
* Interfaces enable loose coupling.
* Association models relationships.
* Aggregation represents weak ownership.
* Composition represents strong ownership.
* Selenium heavily relies on OOP principles.
* Page Object Model is an OOP-driven design pattern.
* OOP improves framework maintainability.
* OOP promotes reusable automation code.
* Interfaces are heavily used in Selenium architecture.
* Composition is often preferred over inheritance.
* Strong OOP knowledge is critical for SDET roles.
* OOP concepts are frequently asked in interviews.
* Framework scalability depends on proper OOP design.
* Mastering OOP is essential before learning advanced framework architecture and design patterns.
