# Deployment Steps for Nandal Academy

## Option 1: Vercel (Recommended)

### Step 1: Create GitHub Repository
1. Go to https://github.com and create new repository "nandal-academy"
2. Don't initialize with README

### Step 2: Push Code to GitHub
```bash
# Open Command Prompt in your project folder
cd d:/backup/nandal-academy

# Initialize git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Nandal Academy Website"

# Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/nandal-academy.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a React/Vite project
5. Click "Deploy"
6. Your site will be live in seconds!

## Option 2: Netlify

### Step 1: Build your project
```bash
cd d:/backup/nandal-academy
npm run build
```

### Step 2: Deploy to Netlify
1. Go to https://netlify.com
2. Drag and drop the "dist" folder to Netlify
3. Your site will be live instantly!

## Option 3: GitHub Pages

### Step 1: Update package.json
Add to package.json:
```json
"homepage": "https://YOUR_USERNAME.github.io/nandal-academy"
```

### Step 2: Build and Deploy
```bash
npm run build
npm install -g gh-pages
gh-pages -d dist
```

## After Deployment
1. Test all features on your live site
2. Update WhatsApp number if needed
3. Test mobile responsiveness
4. Share your live website URL!

## Your Website Features
- ✅ 3D Abacus Demo
- ✅ WhatsApp Integration
- ✅ Responsive Design
- ✅ Interactive Learning
- ✅ Real-time Forms
