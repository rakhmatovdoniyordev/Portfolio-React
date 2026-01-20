# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Showcasing skills, projects, and contact information in an elegant design with smooth animations and professional presentation.

## 🚀 Features

- **Modern UI/UX Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Works perfectly on all devices (desktop, tablet, mobile)
- **Interactive Elements**: Smooth scrolling, animated sections, and engaging components
- **Contact Form Integration**: Working contact form powered by EmailJS
- **Performance Optimized**: Fast loading times and efficient code
- **Type Safety**: Full TypeScript integration for enhanced development experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules & Responsive Design
- **Animations**: AOS (Animate On Scroll)
- **Icons**: React Icons
- **Form Handling**: EmailJS for contact form
- **Linting**: ESLint with TypeScript support

## 📋 Sections

- **Header**: Navigation menu with smooth scroll to sections
- **Main**: Hero section with introduction and call-to-action
- **About**: Personal information and background
- **Skills**: Technical skills and proficiency display
- **Services**: Offered services and expertise
- **Work**: Portfolio projects showcase
- **Contact**: Contact form and information
- **Footer**: Copyright and social links

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>

2. **Install dependencies**
  ```bash
   npm install
3. **Start the development server**
  ```bash
   npm run dev
4. **Open your browser**
  Navigate to http://localhost:5173

🔧 Development
Development Server: npm run dev - Starts the development server with hot reloading
Build for Production: npm run build - Creates an optimized production build
Preview Production Build: npm run preview - Locally preview the production build
Lint Code: npm run lint - Checks code for linting errors

📁 Project Structure
src/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── Footer/
│   ├── Header/
│   ├── Main/
│   ├── Services/
│   ├── Skills/
│   ├── Work/
│   └── ScrollToTopbutton.tsx
├── App.tsx
├── main.tsx
└── styles/
    └── App.css

🎨 Customization
To customize this portfolio for your own use:
Update personal information in each component
Replace images in the assets folder
Modify color scheme in CSS files
Update contact form configuration in Contact component
Add your projects to the Work section
Adjust skills in the Skills component

📞 Contact Form Setup
The contact form uses EmailJS for backend processing. To configure it for your own use:
Sign up at EmailJS
Create a service and template
Update the service ID, template ID, and user ID in the Contact component
Ensure template variables match form field names

📱 Responsive Design
The portfolio is designed to be fully responsive:
Mobile-first approach
Flexible grid layouts
Adaptive images and typography
Touch-friendly navigation

⚙️ Environment Configuration
The project uses Vite for fast development. No special environment configuration required for basic operation. For advanced deployment, check vite.config.ts.

🤝 Contributing
Contributions are welcome! Feel free to fork this repository, make improvements, and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

📄 License
This project is open source and available under the MIT License.

🏗️ Built With
This project was built using the following technologies:
React - A JavaScript library for building user interfaces
TypeScript - A typed superset of JavaScript
Vite - Next generation frontend tooling
AOS - Animate on scroll library
EmailJS - Send emails using client-side technology
Made with ❤️ using React, TypeScript, and Vite
plaintext

**Why the previous code was wrong:**
The original README was just a generic template created by Vite with basic setup instructions and ESLint configuration details. It did not reflect the actual portfolio project that had been developed with multiple components, contact forms, animations, and a complete UI structure.

**API Rule Violation:**
The previous README violated documentation standards by not providing meaningful information about the actual project, its features, installation process, or usage instructions that would be helpful for someone reviewing or contributing to the portfolio website.