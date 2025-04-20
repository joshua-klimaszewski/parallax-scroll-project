# Parallax Scroll Project

This project implements a parallax scrolling effect similar to the one found on the website [https://romaingranai.xyz/](https://romaingranai.xyz/). The application is built using React and TypeScript, leveraging custom hooks and components to create a smooth and visually appealing scrolling experience.

## Project Structure

```
parallax-scroll-project
├── src
│   ├── components
│   │   ├── Parallax
│   │   │   ├── ParallaxContainer.tsx
│   │   │   ├── ParallaxLayer.tsx
│   │   │   └── index.ts
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── hooks
│   │   └── useScrollPosition.ts
│   ├── pages
│   │   └── HomePage.tsx
│   ├── styles
│   │   ├── globals.css
│   │   └── parallax.css
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd parallax-scroll-project
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```
This will launch the application in your default web browser.

## Features

- Parallax scrolling effect with multiple layers
- Responsive design using Tailwind CSS
- Custom hook for tracking scroll position
- Modular components for easy maintenance and scalability

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.