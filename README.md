# UI Automation

This is the sample test automation task in which below test scenarios are included:
    
    
Scenario 1: Perform addition and verify the addition result on calculator <br />
Scenario 2: Perform substraction and verify the addition result on calculator <br />
Scenario 3: Perform multiply and verify the addition result on calculator <br />
Scenario 4: Perform division and verify the addition result on calculator <br />
        
In ideal case. We should add IDs in dev project so that it is easy to handle dynamic locators. Current project has less unique IDs to handle.

We can add 100 test cases in this project like verifying BODMAS and other edge cases but the focus is on framework and design.

# Getting Started

Please follow below instruction to copy the project and running on your local machine for testing purpose

#### Prerequisites

Node: v12.20.0

npm: 6.14.8

Git Bash

This test was done on MAC.

# Running the tests

Given scenario is automated using Cypress.

#### POM is used for this framework

# Installation

### Linux Machine

If you’re on Fedora for example (or any closely-related RPM-based distro such as RHEL or CentOS), you can use below command to install Git:
##### $ npm install cypress


1. Clone the project from below location:

git@github.com:vishalverma21/Cypress.git

2. Go to source folder in local machine

WorkMotion

3. Run below command to take a pull of docker image
docker pull cypress/included:9.1.1

4. Run below command to run the test cases in headless mode
docker run -it -v $PWD:/e2e -w /e2e --entrypoint=cypress cypress/included:9.1.1 run --browser chrome

5. After execution video folder is generated and you can see video of the execution.

6. Further we can add mochasome report as well.