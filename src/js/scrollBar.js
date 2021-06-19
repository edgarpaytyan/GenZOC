const listOfThemes = [
    { id: 'light', name: '🌝  Light' },
    { id: 'dark', name: '🌚  Dark' },
    { id: 'cupcake', name: '🧁  Cupcake' },
    { id: 'bumblebee', name: '🐝  Bumblebee' },
    { id: 'emerald', name: '✳️  Emerald' },
    { id: 'corporate', name: '🏢  Corporate' },
    { id: 'synthwave', name: '🌃  Synthwave' },
    { id: 'retro', name: '👴  Retro' },
    { id: 'cyberpunk', name: '🤖  Cyberpunk' },
    { id: 'valentine', name: '🌸  Valentine' },
    { id: 'halloween', name: '🎃  Halloween' },
    { id: 'garden', name: '🌷  Garden' },
    { id: 'forest', name: '🌲  Forest' },
    { id: 'aqua', name: '🐟  Aqua' },
    { id: 'lofi', name: '👓  Lofi' },
    { id: 'pastel', name: '🖍  Pastel' },
    { id: 'fantasy', name: '🧚‍♀️  Fantasy' },
    { id: 'wireframe', name: '📝  Wireframe' },
    { id: 'black', name: '🏴  Black' },
    { id: 'luxury', name: '💎  Luxury' },
    { id: 'dracula', name: '🧛‍♂️  Dracula' },
];
const listOfLightThemes = [
    'light',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'retro',
    'cyberpunk',
    'valentine',
    'garden',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    // Dark themes below:
    // { id: 'dark', name: '🌚  Dark' },
    // { id: 'synthwave', name: '🌃  Synthwave' },
    // { id: 'halloween', name: '🎃  Halloween' },
    // { id: 'forest', name: '🌲  Forest' },
    // { id: 'aqua', name: '🐟  Aqua' },
    // { id: 'black', name: '🏴  Black' },
    // { id: 'luxury', name: '💎  Luxury' },
    // { id: 'dracula', name: '🧛‍♂️  Dracula' },
];
const themeMode = document
    .getElementsByTagName('html')[0]
    .getAttribute('data-theme');
let scrollBarTheme;
listOfLightThemes.forEach((theme) => {
    scrollBarTheme = themeMode === theme ? 'os-theme-dark' : 'os-theme-light';
});
const instance = OverlayScrollbars(document.getElementsByTagName('body'), {
    className: scrollBarTheme,
});
// const destroy = instance.destroy();
// const instanceAgain = OverlayScrollbars(document.getElementsByTagName('body'), {
//     className: scrollBarTheme,
// });
// Alpine.store(
//     'initScrollBar',
//     (initScrollBar = {
//         instance,
//         destroy,
//     }),
// );
