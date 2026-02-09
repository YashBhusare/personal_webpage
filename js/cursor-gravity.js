// Cursor system disabled - using normal cursor
class GravityCursor {
    constructor() {
        // Do nothing - keep normal cursor
        console.log('Cursor system disabled - using default browser cursor');
    }
}

// Initialize when DOM is loaded (but don't create any custom cursor)
document.addEventListener('DOMContentLoaded', () => {
    // Ensure normal cursor is used
    document.body.style.cursor = 'default';
    
    // Hide custom cursor element if it exists
    const customCursor = document.querySelector('.cursor-star');
    if (customCursor) {
        customCursor.style.display = 'none';
    }
    
    // Remove particles container if it exists
    const particlesContainer = document.querySelector('.particles-container');
    if (particlesContainer) {
        particlesContainer.style.display = 'none';
    }
    
    console.log('Using normal cursor mode - custom cursor disabled');
});