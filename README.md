# React Native Starter Template

This React Native Starter Template is your gateway to efficient and streamlined mobile app development. Crafted with the needs of developers in mind, it serves as a flexible and feature-rich platform that simplifies the process of transforming your innovative ideas into fully functional mobile applications. Equipped with a wide range of features and customizable components, it`s an ideal starting point for creating high-quality React Native apps with ease.


## Key Features

- **Navigation**: Integrated with the latest navigation systems, ensuring a smooth and intuitive user experience across your app.
- **Multi-Language Support**: Ready for global audiences with built-in multi-language capabilities, allowing for easy localization and internationalization.
- **Dark/Light Theme**: Includes both dark and light themes, giving users the freedom to choose their preference and enhancing accessibility.
- **Redux Toolkit & Redux API Middleware**: State management is simplified with Redux Toolkit and Redux API middleware, offering efficient handling of app states and API calls.
- **Essential Hooks and Helper Functions**: A collection of custom hooks and helper functions are at your disposal, streamlining common tasks and operations in React Native.
- **UI Components**: A range of ready-to-use UI components designed for both functionality and aesthetic appeal, enabling you to build beautiful interfaces with ease.
- **Customization-Ready**: Tailor the template to your project's needs. Rename it effortlessly with the provided method and customize it further as required.


## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- npm (Node Package Manager)
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/okaybeydanol/react-native-ts-starter.git
   cd react-native-ts-starter
   ```

2. **Install Dependencies**

   ```bash
   npm install or yarn install
   ```
3. **Rename the Project**
    Update the name in package.json and the name and displayName in app.json. Then, run:
   ```bash
   npm run rename
   ```
   This command will execute: rm -rf ios android && react-native eject && npx react-native-asset

4. **iOS Specific Setup**
    Modify info.plist and set UIViewControllerBasedStatusBarAppearance to true.
   ```bash
   npx pod-install
   ```
5. **Start Project**
    Update the name in package.json and the name and displayName in app.json. Then, run:
   ```bash
   npm run start
   ```