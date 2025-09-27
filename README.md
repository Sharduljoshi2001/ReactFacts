# ReactFacts 🚀

A modern, interactive React application that displays fun facts about React with a beautiful dark/light theme toggle feature.

## 📖 About

ReactFacts is a sleek, responsive web app built with React 19 and Vite that showcases interesting facts about the React library. Originally created as part of the Scrimba Learn React course, this project has been enhanced with modern features including theme switching and improved user experience.

## ✨ Features

- 🎨 **Dark/Light Theme Toggle** - Seamlessly switch between themes with smooth transitions
- 💾 **Theme Persistence** - Your theme preference is saved and restored on page reload
- 📱 **Responsive Design** - Looks great on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **Modern React** - Uses React 19 with functional components and hooks
- ♿ **Accessible** - Includes proper ARIA labels and semantic HTML

## 🛠️ Technologies Used

- **React 19.0.0-rc** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **CSS Variables** - For dynamic theming system
- **Local Storage API** - For theme preference persistence
- **Modern JavaScript** - ES6+ features and best practices

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/reactfacts.git
cd reactfacts
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
# or
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## 🎯 Key Learning Concepts

This project demonstrates several important React and web development concepts:

- **State Management** - Using `useState` for theme state
- **Side Effects** - Using `useEffect` for DOM manipulation and localStorage
- **Component Props** - Passing data and functions between components
- **CSS Variables** - Modern approach to theming
- **Local Storage** - Persisting user preferences
- **Accessibility** - Making apps usable for everyone

## 📂 Project Structure

```
reactfacts/
├── components/
│   ├── Main.jsx          # Main content with React facts
│   └── Navbar.jsx        # Navigation with theme toggle
├── images/
│   ├── react-logo.png    # React logo assets
│   └── react-logo-half.png
├── App.jsx               # Root component with theme logic
├── index.jsx             # Application entry point
├── index.css             # Global styles with CSS variables
├── index.html            # HTML template
└── package.json          # Dependencies and scripts
```

## 🎨 Theme System

The app features a sophisticated theming system using CSS custom properties:

- **Dark Theme** (default): Dark backgrounds with React blue accents
- **Light Theme**: Clean light backgrounds with blue accents
- **Smooth Transitions**: 0.3s ease transitions between themes
- **System Integration**: Respects user preferences and saves choices

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## � License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Scrimba** - For the original course and inspiration
- **React Team** - For creating an amazing library
- **Vite Team** - For the excellent build tool

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Scrimba React Course](https://scrimba.com/learn-react-c0e)

---

**Happy Coding!** 🎉