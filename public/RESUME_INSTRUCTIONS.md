# Resume PDF Instructions

## How to Add Your Resume

1. **Place your resume PDF file in this folder (`/public/`)** 
   - Name it `resume.pdf` (or update the filename in `/src/Pages/Resume/Resume.jsx` if you prefer a different name)

2. **Update the download filename** (optional)
   - Open `/src/Pages/Resume/Resume.jsx`
   - Find the line: `link.download = 'Jonathan_Tang_Resume.pdf'`
   - Change `'Jonathan_Tang_Resume.pdf'` to your preferred filename (e.g., `'YourName_Resume.pdf'`)

3. **The resume page will:**
   - Display your PDF in an embedded viewer
   - Allow employers to download it with one click
   - Work on all devices (desktop, tablet, mobile)

## File Location
Your resume should be at: `/public/resume.pdf`

## Need Help?
If you have issues with the PDF viewer, ensure your PDF:
- Is not password protected
- Is a standard PDF format (not a scanned image)
- Is under 10MB in size for best performance
