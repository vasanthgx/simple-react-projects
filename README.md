# React Projects Practice Repository

### Welcome to my React Projects Practice Repository! This repository is dedicated to housing various React projects that I will be working on to enhance my skills and understanding of React.js.

**About**

This repository will serve as a collection of different React projects, ranging from beginner to advanced levels. Each project will be a standalone application focusing on different aspects of React development, including state management, hooks, context API, routing, and more.

**Projects**

Project 1: [Jokes Generator](projects/jokes-generator/jokegenerator)

Description: we will create a website that retrieves jokes from an external API and displays them on the screen.


Project 2: [Rolling dice](projects/rolling-dice)

Description: This rolling dice project is a React application that simulates rolling two dice. Users click a button to "roll" the dice, which triggers a visual change and displays random dice faces, enhancing the experience with a rolling animation. The project showcases basic React component structure and state management using hooks.

Project 3: [Accordian](projects/accordion)

 Description :This project is a React-based accordion component that allows users to interact with expandable and collapsible sections. Each section displays a question, and when clicked, it reveals the corresponding answer. The component supports both single and multiple item selection modes. In single selection mode, only one section can be expanded at a time. In multiple selection mode, users can expand multiple sections simultaneously. A button toggles between these modes. The component uses state management to track the currently selected sections and applies conditional rendering to display the content dynamically.

Project 4: [Random Color](projects/random-color)

 Description :This React component generates random colors in either HEX or RGB format. Users can switch between color types and generate new random colors with button clicks.

 Project 5: [Star Rating](projects/star-rating)

 Description :The StarRating component renders a series of star icons based on the noOfStars prop. Users can click on stars to set the rating, and the component provides visual feedback by highlighting stars as the mouse hovers over them. The styling of the active and inactive stars is defined in the imported style.css file.

 Project 6: [Image Slider](projects/image-slider)

 Description :

This project involves implementing an image slider component in React without using any third-party libraries. The image slider dynamically fetches image data from an API and displays the images in a carousel format. The project includes features such as:

- **API Integration:** Fetches image data from a provided API URL.
- **State Management:** Utilizes React's `useState` and `useEffect` hooks for managing image data, loading state, current slide, and error handling.
- **Navigation Controls:** Includes left and right navigation arrows to cycle through the images.
- **Indicator Dots:** Displays indicator dots that highlight the current image in the slider.
- **Responsive Design:** Uses CSS for styling the slider, ensuring it is visually appealing and functional.

The project is designed to be reusable and modular, allowing the parent component to pass different API URLs and limits to customize the image slider's behavior.

 Project 7: [Load More Products](projects/load-more-data)

 Description :

This project is a React-based image gallery with a "Load More" feature. Here's a concise description:

"Dynamic Product Gallery with Lazy Loading"

This React application displays a gallery of product images fetched from the DummyJSON API. Key features include:

1. Initial load of 20 product thumbnails with titles
2. "Load More" button to fetch additional products in batches of 20
3. Loading state indicator during API calls
4. Automatic disabling of the "Load More" button after reaching 100 products
5. Responsive grid layout for displaying product thumbnails

The app demonstrates the use of React hooks (useState, useEffect) for state management and side effects, asynchronous data fetching, and dynamic content rendering. It's designed to efficiently load and display large sets of product data, improving user experience by loading content incrementally.

Getting Started
To get started with any of the projects in this repository, follow these steps:

1. Clone the repository:

```
git clone https://github.com/vasanthgx/simple-react-projects.git

```
2. Navigate to the project directory:

```
cd react-projects-practice/project-name
```
3. Install dependencies:

```
npm install

```
4. Start the development server:

```
npm start

```
Project 8: [ Interactive Nested Menu Component](https://github.com/vasanthgx/nested-navigation/tree/master)

Description: This project implements a reusable React component for creating an interactive, nested menu structure. The component allows for the creation of multi-level menus where each menu item can have its own set of child items. Users can dynamically expand or collapse these nested items, providing an intuitive navigation experience.


 Project 9: [QR Code Generator](projects/qr-code)

 Description : This is a React-based QR Code Generator application. It allows users to input text and generate a corresponding QR code. The application features a simple user interface with an input field, a generate button, and an area to display the generated QR code.

 Project 10: [Dark-Light Mode](projects/light-dark-mode)

 Description : This project is a React application that implements a simple light and dark mode toggle feature using a custom hook, `useLocalStorage`. The application stores the user's theme preference (light or dark) in the browser's `localStorage`, allowing the theme to persist across page reloads. The `LightDarkMode` component provides a user interface with a button to toggle between the themes. The selected theme is applied via dynamic CSS, utilizing a `data-theme` attribute, which updates based on the user's choice. This project demonstrates how to integrate local storage and state management for a seamless user experience.

 Project 11: [Scroll-Progress-bar-indicator](projects/scroll-indicator)

 Description : This project is a React component that integrates a scroll progress bar with data fetching. It tracks the user's scrolling behavior and displays the scroll progress as a visual indicator. Simultaneously, it fetches data from a provided API endpoint and displays the content on the page. The progress bar updates dynamically based on the user's scroll position, while the data loading process is handled in a user-friendly way with error handling and loading states.
