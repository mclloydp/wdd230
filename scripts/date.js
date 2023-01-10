const options = {
    month: "short",
    day: "numeric",
    year: "numeric"
};       document.getElementById('lastupdated').textContent = new Date(document.lastModified).toLocaleDateString("en-US", options); 