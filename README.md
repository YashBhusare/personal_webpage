# 🌌 Yash Bhusare - Personal Astrophysics Website

A modern, interactive personal website with cosmic theme and advanced cursor gravity effects.

## ✨ Features

### 🎯 Interactive Elements
- **Star Cursor with Real Gravity Physics**: Custom star-shaped cursor that continuously attracts particles
- **Enhanced Particle System**: 40 interactive particles that respond to cursor with realistic gravitational forces
- **Smooth Animations**: Intersection Observer API for smooth scroll animations
- **Parallax Effects**: Subtle parallax scrolling for enhanced depth

### 🗂️ Multi-Page Structure
- **index.html**: Main homepage with hero, about, research, skills, and photo preview
- **publications.html**: Dedicated publications page with NASA ADS integration guide
- **personal.html**: Personal interests, hobbies, and the human side beyond science

### 🌟 Homepage Sections
- **Hero**: Animated introduction with cosmic effects
- **About**: Professional bio with photo placeholder  
- **Research**: Dynamic research cards loaded from data files
- **Technical Skills**: Programming, radio astronomy, and ML expertise
- **Astrophotography Preview**: Small gallery preview (3 photos)
- **Contact**: Professional links and social media

### 🎨 Design Features
- **Responsive Design**: Works perfectly on all screen sizes
- **Dark Cosmic Theme**: Deep space colors with gold and green accents
- **Modern Typography**: Inter and JetBrains Mono fonts
- **Glass Morphism**: Blurred backgrounds and modern UI elements
- **Animated Stars**: Twinkling background stars for atmosphere

## 📁 Project Structure

```
personal-website/
├── index.html              # Main homepage
├── publications.html       # Publications & research papers
├── personal.html          # Personal interests & hobbies
├── css/
│   └── style.css          # All styles and animations
├── js/
│   ├── cursor-gravity.js  # Enhanced cursor gravity system
│   └── main.js           # Main website functionality
├── data/
│   ├── publications.js    # Publication data (update with real papers!)
│   └── research.js       # Research projects and collaborations
├── images/
│   ├── profile.jpg       # Your profile photo (add this!)
│   └── astrophotography/ # Your astrophotography images
└── README.md             # This file
```

## 🚀 Quick Setup Instructions

### 1. Update Publications (IMPORTANT!)

**Get Your Real Publications from NASA ADS:**
1. Visit: https://ui.adsabs.harvard.edu/search/q=author%3A%22Bhusare%2C%20Yash%22&sort=date%20desc%2C%20bibcode%20desc&p_=0
2. Copy your real publications into `data/publications.js`
3. Update the metrics (citations, h-index, etc.)
4. **Remove all placeholder/fake publications** - only use your real work!

Format for each publication:
```javascript
{
    title: "Your actual paper title from NASA ADS",
    authors: "Complete author list from ADS",
    journal: "Journal name and year",
    link: "https://ui.adsabs.harvard.edu/abs/your-paper-link" // Optional
}
```

### 2. Add Your Photos
**Profile Photo**: Add your photo as `images/profile.jpeg`
- Recommended size: 400x500px or similar ratio
- Format: JPG, PNG, or WebP

**Astrophotography Gallery**: Add images to `images/astrophotography/`
- Supported formats: .jpg, .jpeg, .png, .gif
- Recommended size: At least 800x800px for quality display

### 3. Update Contact Information
**In index.html and publications.html**:
- LinkedIn profile URL
- GitHub username
- ResearchGate profile
- ORCID ID
- Any other professional profiles

## 🎮 Enhanced Cursor Physics

### Gravity System
- **Continuous Attraction**: Particles are always attracted to cursor (no need to keep still)
- **Distance-Based Force**: Closer particles experience stronger gravitational pull
- **Smooth Interactions**: Particles orbit and follow cursor naturally
- **Visual Feedback**: Particles change size and color based on proximity
- **Boundary Physics**: Soft collisions with screen edges

### Interactive Features
- **Hover Effects**: Cursor transforms on interactive elements (buttons, cards)
- **Trail Effects**: Subtle particle trail follows cursor movement
- **Repulsion Zone**: Particles avoid clustering directly under cursor
- **Damping System**: Prevents runaway velocities for stable animation

## 🌐 Navigation Structure

### Main Navigation
- **Home** → index.html (Hero, About, Research, Skills, Photo Preview)
- **About** → index.html#about (Scroll to about section)  
- **Research** → index.html#research (Scroll to research section)
- **Publications** → publications.html (Dedicated publications page)
- **Gallery** → index.html#astrophotography (Photo preview + instructions)
- **Personal** → personal.html (Hobbies, interests, SRK, chess, blog, YouTube)
- **Contact** → index.html#contact (Professional links)

### Personal Page Highlights
- 🎬 **Cinema & SRK Passion**: Detailed discussion of Bollywood interests
- ♟️ **Chess & Strategy**: Connection between chess and astronomy
- 📺 **YouTube Channel**: https://www.youtube.com/@yashbhusare48
- ✍️ **Blog**: https://yashbhusare.blogspot.com/
- 🎯 **Life Philosophy**: Personal insights and worldview
- 🎲 **Fun Facts**: Random interests and quirks

## 🛠️ Important Notes

### ❌ What Was Removed/Changed
- **Fake Publications**: No more placeholder papers - add only your real work
- **Single-Page Overload**: Split content across multiple focused pages
- **Sidebar Navigation**: Personal content moved to dedicated page
- **Large Photo Grid**: Reduced to 3 preview photos on homepage

### ✅ What Was Enhanced  
- **Better Cursor Physics**: Continuous gravity effect, no stopping
- **Cleaner Homepage**: Focused on essential professional content
- **Dedicated Pages**: Publications and personal interests have their own space
- **NASA ADS Integration**: Direct link and instructions for real publications
- **Improved Navigation**: Clear separation between professional and personal

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Create repository named `yourusername.github.io`
2. Upload all files maintaining folder structure
3. Enable GitHub Pages in repository settings
4. Live at `https://yourusername.github.io`

### Before Going Live
1. ✅ Add real publications from NASA ADS
2. ✅ Add your profile photo
3. ✅ Update all contact links
4. ✅ Add some astrophotography images
5. ✅ Test all navigation links work correctly

## 🐛 Troubleshooting

**Particles not moving**: Check browser console for JavaScript errors  
**Publications page empty**: Update `data/publications.js` with real papers  
**Navigation broken**: Ensure all HTML files are in root directory  
**Images not loading**: Check file paths and formats

## 📝 Next Steps

1. **Get Real Publications**: Visit NASA ADS link and update data/publications.js
2. **Add Photos**: Profile image and astrophotography collection
3. **Test Everything**: Check all pages and links work
4. **Deploy**: Upload to GitHub Pages or your preferred hosting
5. **Share**: Your professional cosmic presence is ready! 🚀

---

**Built with ❤️ and cosmic curiosity**  
*"In the vast cosmos, we are all made of star stuff, connected by gravity and curiosity."*

## 🔗 Your Links (Update These!)
- 📺 YouTube: https://www.youtube.com/@yashbhusare48
- ✍️ Blog: https://yashbhusare.blogspot.com/
- 📡 NASA ADS Profile: [Get your publications here](https://ui.adsabs.harvard.edu/search/q=author%3A%22Bhusare%2C%20Yash%22&sort=date%20desc%2C%20bibcode%20desc&p_=0)