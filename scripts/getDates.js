document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentYear');
    currentYearSpan.textContent = new Date().getFullYear();

    const lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;
});