// Theme management
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    document.getElementById('sun-icon').style.display = newTheme === 'dark' ? 'none' : 'block';
    document.getElementById('moon-icon').style.display = newTheme === 'dark' ? 'block' : 'none';
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    // Default to dark mode if no preference is saved
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme !== null ? savedTheme : 'dark';
    
    document.documentElement.setAttribute('data-theme', theme);
    
    // If no saved preference, save dark as default
    if (savedTheme === null) {
        localStorage.setItem('theme', 'dark');
    }
    
    document.getElementById('sun-icon').style.display = theme === 'dark' ? 'none' : 'block';
    document.getElementById('moon-icon').style.display = theme === 'dark' ? 'block' : 'none';

    // Navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSection = btn.getAttribute('data-section');
            
            navButtons.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
        });
    });
});

var encEmail = "Z2xvcmlhYnl0ZXNAZ21haWwuY29t";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));