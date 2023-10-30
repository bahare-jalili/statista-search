# Statista Search

A basic search page user interface, based on the Statista Search API data.

## 💡 Features

- Fully Developed using ReactJS
- Reusable Reactive UI Components
- Fully Responsive Layout
- Well Tested (Unit Tests)
- Clean Code
- Organized Folder Structure

## 📋 Getting Started

```bash
# install dependencies
npm install # or yarn

# serve in dev mode, with hot reload at localhost:3000
npm start
```

## 💻 Build

```bash
# build for production environment
npm run build
```

## 🧐 Advanced

```bash
# run unit tests
npm test
```

## 🚀 Next Steps

- To enhance reusability, consider creating separate components for inputs, buttons, and other small elements.
- As the project grows, it will be essential to incorporate a state management system to effectively handle the increased complexity and evolving needs of the application.
- Enhancements are needed in the search input functionality to enable searching in real-time, as the current implementation is limited by the provided JSON file for API calls.
- To ensure comprehensive test coverage, we should consider implementing end-to-end (E2E) tests.
- In order to improve the management of meta tags across multiple pages, we can utilize the "react-helmet" library to dynamically add meta tags. This allows us to avoid manually adding meta tags in the index.html file.
- Additional features like Pagination, Sorting, Filters, and more could be implemented provided there was sufficient time.
- Creating individual files to store constant strings such as "TOTAL RESULTS:" and others, allows for the reusability of strings and their use in multilingual applications.
