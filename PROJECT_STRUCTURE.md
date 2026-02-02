# Portfolio Website Structure

## 📁 Project Overview
This is a multipage React portfolio website built with Vite, React Router, and TailwindCSS.

## 🗂️ File Structure

```
src/
├── Pages/
│   ├── Home/
│   │   ├── home.jsx                 # Home page
│   │   └── h-components/            # Home page components
│   │       ├── Banner.jsx
│   │       ├── Article.jsx
│   │       └── Buttons.jsx
│   │
│   ├── Projects/
│   │   ├── Projects.jsx             # Projects page
│   │   └── p-components/            # Projects page components
│   │       ├── ProjectsHero.jsx
│   │       └── ProjectsGrid.jsx
│   │
│   ├── About/
│   │   ├── About.jsx                # About page
│   │   └── a-components/            # About page components
│   │       ├── AboutHero.jsx
│   │       ├── AboutContent.jsx
│   │       └── Skills.jsx
│   │
│   └── Contact/
│       ├── Contact.jsx              # Contact page
│       └── c-components/            # Contact page components
│           ├── ContactHero.jsx
│           ├── ContactForm.jsx
│           └── ContactInfo.jsx
│
├── components/
│   ├── Navbar.jsx                   # Navigation bar (shared)
│   ├── Footer.jsx                   # Footer (shared)
│   └── BackToTopButton.jsx          # Back to top button (shared)
│
├── App.jsx                          # Main app with routing
└── main.jsx                         # Entry point
```

## 🚀 Pages

### 1. Home (`/`)
- Banner section
- Article section
- Call-to-action buttons

### 2. Projects (`/projects`)
- Hero section with gradient background
- Project grid showcasing your work
- Each project card has:
  - Image placeholder
  - Title and description
  - Technology tags
  - "View Details" button

### 3. About (`/about`)
- Hero section
- Personal introduction with profile image
- Skills section organized by category:
  - Frontend
  - Backend
  - Tools & Others

### 4. Contact (`/contact`)
- Hero section
- Contact form with:
  - Name field
  - Email field
  - Message textarea
- Contact information panel with:
  - Email
  - Phone
  - Location
  - Social media links

## 🔧 Customization Guide

### Update Personal Information

1. **About Page** (`src/Pages/About/a-components/AboutContent.jsx`):
   - Replace `[Your Name]` with your name
   - Update the bio text
   - Replace placeholder image URL

2. **Contact Page** (`src/Pages/Contact/c-components/ContactInfo.jsx`):
   - Update email, phone, and location
   - Add your social media URLs

3. **Skills** (`src/Pages/About/a-components/Skills.jsx`):
   - Modify the skills array to match your skillset

4. **Projects** (`src/Pages/Projects/p-components/ProjectsGrid.jsx`):
   - Update the projects array with your actual projects
   - Replace placeholder images
   - Add real project descriptions and tags

### Add More Pages

To add a new page:

1. Create a new folder in `src/Pages/` (e.g., `Blog/`)
2. Create the main page component (e.g., `Blog.jsx`)
3. Create sub-components folder (e.g., `b-components/`)
4. Add the route in `App.jsx`:
   ```jsx
   <Route path="/blog" element={<Blog />} />
   ```
5. Update the navbar links in `src/components/Navbar.jsx`

## 🎨 Styling

- Uses **TailwindCSS** for styling
- Responsive design (mobile-first)
- Color scheme:
  - Primary: Blue shades
  - Secondary: Purple/Pink gradients
  - Accent: Red

## 📦 Dependencies

- **react-router-dom**: For page navigation
- **react**: UI library
- **tailwindcss**: Utility-first CSS framework
- **vite**: Build tool

## 🏃 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 💡 Next Steps

1. Replace placeholder images with your actual photos/screenshots
2. Update all personal information
3. Add your real projects
4. Customize colors to match your brand
5. Add animations or transitions as desired
6. Connect the contact form to a backend or email service
7. Add a blog section if needed
8. Implement project detail pages

## 📝 Notes

- All pages follow the same structure: Navbar → Content → BackToTop → Footer
- The navbar is responsive with a mobile menu
- Images use placeholder URLs from `via.placeholder.com` - replace these!
- The contact form currently only logs to console - implement backend integration

Enjoy building your portfolio! 🎉
