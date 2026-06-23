---

title: Core Java for Automation Testers
part: 9
slug: core-java-for-automation-testers
description: Master Core Java from an Automation Testing and SDET perspective, including OOP, Collections, Exception Handling, File Handling, Selenium-oriented programming concepts, and 100 coding exercises.
---

# Part 9 — Core Java for Automation Testers

## Learning Objectives

By the end of this chapter, you will be able to:

* Understand Java fundamentals required for automation testing.
* Write Java programs confidently.
* Apply Object-Oriented Programming concepts.
* Work with Strings, Arrays, and Collections.
* Handle Exceptions effectively.
* Read and write files.
* Understand Java concepts used in Selenium frameworks.
* Solve common coding problems.
* Prepare for Java interview rounds.
* Build reusable automation framework components.
* Write clean, maintainable Java code.

---

## Introduction

Java is one of the most widely used programming languages in automation testing.

Popular automation tools built using Java include:

* Selenium
* Appium
* Rest Assured
* TestNG
* Cucumber
* Selenide

For an Automation Tester or SDET, Java is not learned to become a Software Developer.

Instead, it is learned to:

* Build automation frameworks
* Create reusable utilities
* Handle test data
* Integrate APIs
* Process reports
* Manage automation workflows

A strong understanding of Core Java significantly improves:

* Automation design
* Framework development
* Coding interview performance
* Debugging capability

---

# Part 9 — Core Java for Automation Testers

## Core Concepts

### Java Fundamentals

Java is:

* Object-Oriented
* Platform Independent
* Class-Based
* Secure
* Robust

### Why Java for Automation?

| Advantage        | Benefit            |
| ---------------- | ------------------ |
| Huge Community   | Easy Learning      |
| Selenium Support | Industry Standard  |
| Strong Libraries | Faster Development |
| OOP-Based        | Framework Friendly |
| Cross Platform   | Run Anywhere       |

---

### Java Program Structure

```java
public class HelloWorld {

    public static void main(String[] args) {

        System.out.println("Hello Automation");
    }
}
```

### Components

| Component   | Purpose         |
| ----------- | --------------- |
| Class       | Blueprint       |
| Main Method | Entry Point     |
| Statement   | Executable Code |
| Object      | Class Instance  |

---

## Variables & Data Types

Variables store values.

### Syntax

```java
int age = 25;
```

### Primitive Data Types

| Type    | Example |
| ------- | ------- |
| byte    | 10      |
| short   | 100     |
| int     | 1000    |
| long    | 100000L |
| float   | 10.5f   |
| double  | 10.55   |
| char    | 'A'     |
| boolean | true    |

### Example

```java
int id = 101;
double salary = 50000.50;
char grade = 'A';
boolean active = true;
```

---

## Operators

Operators perform operations on values.

### Arithmetic Operators

```java
+
-
*
/
%
```

Example:

```java
int a = 10;
int b = 5;

System.out.println(a + b);
```

### Relational Operators

```java
==
!=
>
<
>=
<=
```

### Logical Operators

```java
&&
||
!
```

---

## Conditional Statements

Control program flow.

### If Statement

```java
int age = 20;

if(age >= 18){
    System.out.println("Eligible");
}
```

### If Else

```java
if(age >= 18){
    System.out.println("Eligible");
}
else{
    System.out.println("Not Eligible");
}
```

### Switch Statement

```java
switch(day){
case 1:
System.out.println("Monday");
break;
}
```

---

## Loops

Loops repeat execution.

### For Loop

```java
for(int i=1;i<=5;i++){
    System.out.println(i);
}
```

### While Loop

```java
int i=1;

while(i<=5){
    System.out.println(i);
    i++;
}
```

### Do While

```java
do{
   System.out.println("Run");
}
while(false);
```

---

## Arrays

Arrays store multiple values.

### Example

```java
int[] numbers = {10,20,30,40};
```

### Access Elements

```java
System.out.println(numbers[0]);
```

### Loop Through Array

```java
for(int num : numbers){
   System.out.println(num);
}
```

---

## Methods

Methods improve reusability.

### Example

```java
public static void greet(){
   System.out.println("Hello");
}
```

Call:

```java
greet();
```

### Method With Return

```java
public static int add(int a,int b){
   return a+b;
}
```

---

## Strings

Strings are heavily used in automation.

### Declaration

```java
String name = "Automation";
```

### Common Methods

| Method      | Purpose       |
| ----------- | ------------- |
| length()    | Length        |
| equals()    | Compare       |
| contains()  | Search        |
| substring() | Extract       |
| replace()   | Replace       |
| trim()      | Remove Spaces |

### Example

```java
String text="Selenium";

System.out.println(text.length());
```

---

## OOP Basics

Object-Oriented Programming is fundamental for framework development.

### Four Pillars

| Concept       | Purpose         |
| ------------- | --------------- |
| Encapsulation | Data Protection |
| Inheritance   | Code Reuse      |
| Polymorphism  | Flexibility     |
| Abstraction   | Hide Complexity |

---

### Class & Object

Class:

```java
class Employee{

String name;
}
```

Object:

```java
Employee emp = new Employee();
```

---

### Encapsulation

```java
class Employee{

private String name;

public void setName(String name){
   this.name=name;
}

public String getName(){
   return name;
}
}
```

---

### Inheritance

```java
class Animal{

void eat(){
System.out.println("Eating");
}
}

class Dog extends Animal{
}
```

---

### Polymorphism

```java
class Parent{

void display(){
System.out.println("Parent");
}
}

class Child extends Parent{

void display(){
System.out.println("Child");
}
}
```

---

### Abstraction

```java
abstract class Vehicle{

abstract void start();
}
```

---

## Constructors

Constructors initialize objects.

### Default Constructor

```java
class Employee{

Employee(){

System.out.println("Created");
}
}
```

### Parameterized Constructor

```java
Employee(String name){
this.name=name;
}
```

---

## Access Modifiers

| Modifier  | Scope           |
| --------- | --------------- |
| private   | Class           |
| default   | Package         |
| protected | Package + Child |
| public    | Everywhere      |

### Example

```java
private int id;
public String name;
```

---

## Static Keyword

Static members belong to class.

### Example

```java
class Company{

static String companyName="ABC";
}
```

Access:

```java
Company.companyName;
```

### Static Method

```java
public static void display(){
}
```

---

## Collections Introduction

Collections store groups of objects.

### Why Collections?

Arrays are fixed size.

Collections are dynamic.

---

### List

```java
List<String> names = new ArrayList<>();
```

Add:

```java
names.add("John");
```

---

### Set

```java
Set<String> cities = new HashSet<>();
```

Characteristics:

* No duplicates

---

### Map

```java
Map<Integer,String> users = new HashMap<>();
```

Example:

```java
users.put(1,"Admin");
```

---

### Collection Comparison

| Collection | Ordered   | Duplicate   |
| ---------- | --------- | ----------- |
| ArrayList  | Yes       | Yes         |
| LinkedList | Yes       | Yes         |
| HashSet    | No        | No          |
| TreeSet    | Sorted    | No          |
| HashMap    | Key-Value | Keys Unique |

---

## Exception Handling

Exceptions prevent abrupt termination.

### Try Catch

```java
try{

int a = 10/0;

}
catch(Exception e){

System.out.println(e.getMessage());

}
```

### Finally

```java
finally{

System.out.println("Cleanup");

}
```

---

### Common Exceptions

| Exception                      | Example            |
| ------------------------------ | ------------------ |
| NullPointerException           | Null Object        |
| ArithmeticException            | Divide By Zero     |
| ArrayIndexOutOfBoundsException | Invalid Index      |
| NumberFormatException          | Invalid Conversion |

---

## File Handling

Frequently used in automation frameworks.

### Read File

```java
File file = new File("data.txt");
```

### BufferedReader

```java
BufferedReader br =
new BufferedReader(
new FileReader("data.txt"));
```

### Write File

```java
FileWriter writer =
new FileWriter("output.txt");

writer.write("Automation");
```

---

## Java for Selenium

### Concepts Frequently Used

| Java Concept  | Selenium Usage   |
| ------------- | ---------------- |
| OOP           | Page Objects     |
| Collections   | Dynamic Data     |
| Exceptions    | Failure Handling |
| Strings       | XPath/CSS        |
| File Handling | Config Files     |
| Methods       | Reusable Actions |
| Static        | Driver Utilities |
| Arrays        | Data Processing  |

### Page Object Example

```java
public class LoginPage{

WebDriver driver;

By username =
By.id("username");

By password =
By.id("password");

By loginBtn =
By.id("login");

public LoginPage(WebDriver driver){

this.driver=driver;
}

public void login(String user,String pass){

driver.findElement(username)
.sendKeys(user);

driver.findElement(password)
.sendKeys(pass);

driver.findElement(loginBtn)
.click();
}
}
```

---

## 100 Java Coding Exercises

### Beginner Level (1–30)

1. Print Hello World.
2. Add two numbers.
3. Swap two variables.
4. Find largest number.
5. Find smallest number.
6. Check even or odd.
7. Check leap year.
8. Find factorial.
9. Print multiplication table.
10. Reverse a number.
11. Check palindrome number.
12. Count digits.
13. Sum digits.
14. Fibonacci series.
15. Prime number check.
16. Print prime numbers.
17. Find GCD.
18. Find LCM.
19. Calculate power.
20. Find square root.
21. Reverse string.
22. Count vowels.
23. Count words.
24. Remove spaces.
25. Convert uppercase.
26. Convert lowercase.
27. Check palindrome string.
28. Count characters.
29. Replace characters.
30. Sort numbers.

---

### Intermediate Level (31–70)

31. Find duplicate elements.
32. Remove duplicates.
33. Merge arrays.
34. Find missing number.
35. Rotate array.
36. Find second largest.
37. Find second smallest.
38. String compression.
39. Character frequency.
40. Anagram validation.
41. Matrix addition.
42. Matrix multiplication.
43. Matrix transpose.
44. Binary search.
45. Linear search.
46. Bubble sort.
47. Selection sort.
48. Insertion sort.
49. Merge sort.
50. Quick sort.
51. Count occurrences.
52. Longest word.
53. Remove special characters.
54. Generate random numbers.
55. Armstrong number.
56. Strong number.
57. Perfect number.
58. Decimal to binary.
59. Binary to decimal.
60. Reverse array.
61. Maximum element.
62. Minimum element.
63. Find pair sum.
64. Move zeros.
65. Count duplicates.
66. Sort strings.
67. Validate email.
68. Validate phone number.
69. Date comparison.
70. String tokenization.

---

### Advanced Level (71–100)

71. Employee Management System.
72. Student Management System.
73. Library System.
74. Banking Application.
75. Inventory System.
76. ATM Simulation.
77. Parking Lot System.
78. Shopping Cart.
79. Ticket Booking System.
80. Hotel Reservation System.
81. Singleton Pattern.
82. Factory Pattern.
83. Builder Pattern.
84. Observer Pattern.
85. Logger Utility.
86. CSV Reader.
87. Excel Reader.
88. JSON Parser.
89. XML Parser.
90. File Comparison Tool.
91. API Response Parser.
92. Data Validation Framework.
93. Retry Mechanism.
94. Custom Exception Framework.
95. Config Reader.
96. Report Generator.
97. Thread Synchronization.
98. Producer Consumer Problem.
99. Automation Utility Library.
100. Mini Selenium Framework.

---

## Real World Industry Examples

### Selenium Framework

Java Concepts Used:

* OOP
* Collections
* Exception Handling

---

### API Automation Framework

Java Concepts Used:

* Collections
* JSON Parsing
* File Handling

---

### Data-Driven Framework

Java Concepts Used:

* File Reading
* Excel Utilities
* Collections

---

### Reporting Framework

Java Concepts Used:

* Exception Handling
* File Writing
* Utility Classes

---

## Diagrams (Markdown Compatible)

### OOP Hierarchy

```text
Class
  ↓
Object
  ↓
Inheritance
  ↓
Polymorphism
```

### Exception Handling Flow

```text
Try
 ↓
Exception?
 ↓
Catch
 ↓
Finally
```

### Collection Hierarchy

```text
Collection
    ↓
 List
 Set
 Queue

Map
```

---

## Best Practices

* Follow OOP principles.
* Write reusable methods.
* Use Collections wisely.
* Handle exceptions properly.
* Avoid code duplication.
* Use meaningful variable names.
* Keep methods small.
* Follow coding standards.
* Practice coding daily.
* Focus on automation-related problems.

---

## Common Mistakes

| Mistake                    | Impact                |
| -------------------------- | --------------------- |
| Ignoring OOP               | Poor Framework Design |
| Large Methods              | Difficult Maintenance |
| Hardcoded Values           | Reduced Reusability   |
| Weak Exception Handling    | Automation Failures   |
| Improper Collections Usage | Performance Issues    |
| Poor Naming Conventions    | Reduced Readability   |

---

## Interview Questions

### Beginner Level

1. What is Java?
2. What are primitive data types?
3. Difference between == and equals()?
4. What is a loop?
5. What is an array?
6. What is a method?
7. What is a constructor?
8. What is OOP?
9. What is encapsulation?
10. What is inheritance?

### Intermediate Level

1. Explain polymorphism.
2. Explain abstraction.
3. Difference between Array and ArrayList.
4. Difference between List and Set.
5. What is HashMap?
6. Explain Exception Handling.
7. What is static keyword?
8. Explain Access Modifiers.
9. How are Collections used in Selenium?
10. Explain Page Object Model using Java.

### Advanced Level

1. Design a framework using OOP principles.
2. Explain SOLID principles in Java.
3. How would you handle large test data?
4. Explain custom exceptions.
5. Compare HashMap and ConcurrentHashMap.
6. Explain String Pool.
7. Explain memory management.
8. Explain multithreading basics.
9. Design reusable Selenium utilities.
10. Build a framework architecture using Java.

---

## Practical Assignments

1. Solve all 100 coding exercises.
2. Create a calculator application.
3. Create a student management system.
4. Build a file reader utility.
5. Build a config reader utility.
6. Create a String utility class.
7. Implement OOP examples.
8. Implement Collections examples.
9. Create custom exceptions.
10. Create Selenium helper methods.

---

## Mini Project

### Project: Automation Framework Utilities Library

#### Modules

* Config Reader
* File Reader
* Logger
* Screenshot Utility
* Wait Utility
* Driver Manager
* Data Provider

#### Deliverables

* Java Classes
* Utility Methods
* Exception Handling
* Unit Tests
* Documentation

---

## Cheat Sheet

| Topic       | Key Concept        |
| ----------- | ------------------ |
| Variables   | Data Storage       |
| Operators   | Computation        |
| Loops       | Repetition         |
| Arrays      | Fixed Collections  |
| Methods     | Reusability        |
| Strings     | Text Handling      |
| OOP         | Framework Design   |
| Collections | Dynamic Data       |
| Exceptions  | Error Handling     |
| Files       | Data Storage       |
| Static      | Class-Level Access |

---

## Key Takeaways

* Java is the foundation of Selenium automation.
* OOP is essential for framework development.
* Strings are heavily used in locators and validations.
* Collections manage dynamic data effectively.
* Exception Handling improves framework stability.
* File Handling enables data-driven testing.
* Constructors initialize objects efficiently.
* Access Modifiers control visibility.
* Static members support reusable utilities.
* Coding practice improves automation skills.
* Collections are used extensively in real frameworks.
* Java concepts directly map to Selenium architecture.
* Reusability is a core automation principle.
* Clean code improves maintainability.
* Framework design relies heavily on OOP.
* Coding interviews focus on Java fundamentals.
* Utility classes simplify automation development.
* Strong Java skills accelerate SDET growth.
* Core Java mastery is mandatory before Selenium mastery.
* Java remains one of the most valuable languages for automation engineers.

---


# 100 Java Coding Exercises

## Beginner Level (1–30)

### Variables, Operators, Conditions, Loops

1. Print "Hello World".
2. Add two numbers.
3. Subtract two numbers.
4. Multiply two numbers.
5. Divide two numbers.
6. Calculate remainder using modulus operator.
7. Swap two numbers using third variable.
8. Swap two numbers without third variable.
9. Check whether a number is even or odd.
10. Check whether a number is positive, negative, or zero.
11. Find the largest of two numbers.
12. Find the largest of three numbers.
13. Find the smallest of three numbers.
14. Check whether a year is a leap year.
15. Calculate factorial of a number.
16. Print multiplication table of a number.
17. Print numbers from 1 to N.
18. Print numbers from N to 1.
19. Find sum of first N natural numbers.
20. Find sum of even numbers up to N.
21. Find sum of odd numbers up to N.
22. Reverse a number.
23. Count digits in a number.
24. Find sum of digits of a number.
25. Check whether a number is palindrome.
26. Check whether a number is Armstrong number.
27. Generate Fibonacci series.
28. Check whether a number is prime.
29. Print all prime numbers between 1 and N.
30. Find GCD and LCM of two numbers.

---

## String Programming (31–50)

31. Reverse a string.
32. Check whether a string is palindrome.
33. Count vowels in a string.
34. Count consonants in a string.
35. Count words in a sentence.
36. Count occurrences of a character.
37. Remove spaces from a string.
38. Convert string to uppercase.
39. Convert string to lowercase.
40. Find duplicate characters in a string.
41. Remove duplicate characters from a string.
42. Check whether two strings are anagrams.
43. Find first non-repeated character.
44. Find first repeated character.
45. Sort characters in a string.
46. Replace a character in a string.
47. Check whether a string contains only digits.
48. Extract digits from a string.
49. Find longest word in a sentence.
50. Compress a string using character frequency.

---

## Arrays (51–70)

51. Find largest element in an array.
52. Find smallest element in an array.
53. Find second largest element.
54. Find second smallest element.
55. Calculate sum of array elements.
56. Calculate average of array elements.
57. Reverse an array.
58. Sort array using Bubble Sort.
59. Sort array using Selection Sort.
60. Sort array using Insertion Sort.
61. Search element using Linear Search.
62. Search element using Binary Search.
63. Find duplicate elements in array.
64. Remove duplicate elements from array.
65. Merge two arrays.
66. Find missing number in array.
67. Move all zeros to end of array.
68. Count frequency of elements.
69. Find pair whose sum equals target value.
70. Rotate array left and right.

---

## OOP Programming (71–80)

71. Create a Student class with attributes and methods.
72. Create Employee class using constructors.
73. Demonstrate constructor overloading.
74. Demonstrate method overloading.
75. Demonstrate method overriding.
76. Implement single inheritance.
77. Implement multilevel inheritance.
78. Demonstrate encapsulation using getters/setters.
79. Implement abstraction using abstract classes.
80. Implement polymorphism using interfaces.

---

## Collections Framework (81–90)

81. Store and print elements using ArrayList.
82. Remove duplicate elements using HashSet.
83. Sort a List using Collections.sort().
84. Iterate through List using Iterator.
85. Count frequency of elements using HashMap.
86. Find duplicate elements using HashMap.
87. Sort a HashMap by keys.
88. Sort a HashMap by values.
89. Compare ArrayList and LinkedList performance.
90. Create custom object collection and sort using Comparator.

---

## Exception Handling & File Handling (91–95)

91. Handle ArithmeticException.
92. Handle NullPointerException.
93. Create custom exception class.
94. Read data from a text file.
95. Write data to a text file.

---

## Automation Tester & SDET Focused Problems (96–100)

96. Read test data from CSV file.
97. Read configuration from Properties file.
98. Build a reusable String Utility class.
99. Build a reusable Wait Utility class design.
100. Design a mini Page Object Model structure for Login Page.

---

## Bonus Advanced Problems (Recommended for SDETs)

* Implement Singleton Design Pattern.
* Implement Factory Design Pattern.
* Implement Builder Design Pattern.
* Design LRU Cache.
* Design Parking Lot System.
* Design ATM Machine.
* Design Library Management System.
* Design Hotel Reservation System.
* Design Inventory Management System.
* Design Mini Selenium Automation Framework.

These 100 questions provide enough Java practice for:

* Manual Tester → Automation Tester transition
* Selenium interviews
* TestNG framework development
* API Automation preparation
* SDET coding rounds
* Product-based company interviews
* Framework architecture discussions

