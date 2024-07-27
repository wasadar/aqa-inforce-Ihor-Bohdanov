# Playwright tests

Playwright tests Automated Tests for https://www.demoblaze.com/ with Playwright.

## Table of Contents
1. [Summary](#summary)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Usage](#usage)

## Summary
This repository contains automated tests for https://www.demoblaze.com/ using the Playwright framework.

## Requirements
- Node.js (v14.17.3 or higher)
- Playwright (v1.17.1 or higher)

All dependencies can be downloaded throught using this command after cloning repository:
    ```
    npm install
    ```
But some of them including: Node.js, Playwright browsers - can not.

Please make sure you have the necessary dependencies installed and the environment properly configured before running the tests. You can customize the tests in the [tests](tests) directory and configure the Playwright options in the [config](playwright.config.js) file as needed.

## Installation
### For Windows
1. Make sure Node.js is installed:
    - If you don't have Node.js installed, download and install it from the official [Node.js website](https://nodejs.org/en).
    - Choose next button after going throguht the link to download LTS version.
    - ![Node installation](node.jpg)
    - After download is finished run the installer.
    - After installation, verify that Node.js and npm (Node Package Manager) are correctly installed by running the following commands in your terminal:
     ```
     node -v
     npm -v
     ```
    - You should see version numbers displayed, indicating that Node.js and npm are installed.

2. Clone this repository to your local machine.
    ```
    git clone https://github.com/wasadar/aqa-inforce-Ihor-Bohdanov.git
    ```

3. Navigate to the project directory.
    ```
    cd aqa-inforce-Ihor-Bohdanov
    ```

4. Install the required dependencies.
    ```
    npm install
    ```

5. Install Playwright browsers
    - To install the Playwright browsers for Windows, you can use the following command in the project directory:
    ```
    npx playwright install --with-deps
    ```
    - This will install the necessary browsers (Chromium, Firefox, and WebKit) for your tests on Windows.
    
### For Linux
1. Make sure Node.js is installed:
    - If you don't have Node.js installed, you can use the following commands to install it on Linux:
    ```
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/nodesource-archive-keyring.gpg
    echo "deb [signed-by=/usr/share/keyrings/nodesource-archive-keyring.gpg] https://deb.nodesource.com/node_14.x focal main" | sudo tee /etc/apt/sources.list.d/nodesource.list
    sudo apt-get update
    sudo apt-get install -y nodejs
    ```
        - After installation, verify that Node.js and npm are correctly installed by running the following commands in your terminal:
    ```
    node -v
    npm -v
    ```
    - You should see version numbers displayed, indicating that Node.js and npm are installed.

2. Clone this repository to your local machine.
    ```
    git clone https://github.com/wasadar/aqa-inforce-Ihor-Bohdanov.git
    ```

3. Navigate to the project directory.
    ```
    cd aqa-inforce-Ihor-Bohdanov
    ```

4. Install the required dependencies.
    ```
    npm install
    ```

5. Install Playwright browsers:
    - To install the Playwright browsers for Linux, you can use the following command in the project directory:
    ```
    npx playwright install --with-deps
    ```
    - This will install the necessary browsers (Chromium, Firefox, and WebKit) for your tests on Linux.

## Usage
### Running Tests
To run the automated tests using Playwright, you can use the following npm script defined in the `package.json` file:

- Run the automated tests using Playwright (headless mode):
    ```
    npm test
    ```