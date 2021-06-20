import './main.css'; // Import all css
// Import all 3rd-party Libraries
import './lib/alpine.min.js';
import '@fortawesome/fontawesome-free/js/all';
import { themeChange } from 'theme-change';
import './lib/overlayscrollbars/OverlayScrollbars.min.css';
import './lib/overlayscrollbars/OverlayScrollbars.min.js';
// Import my code
import './js/globalData'; // Data must go first
import './js/scrollBar';
// Import CSS
// import './js/notification';

themeChange();
