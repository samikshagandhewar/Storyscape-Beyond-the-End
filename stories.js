document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    document.getElementById("category-title").textContent = `Stories for ${category.replace("-", " ").toUpperCase()}`;

    fetch(`/stories?category=${category}`)
        .then(response => response.json())
        .then(data => {
            const storyList = document.getElementById("story-list");
            if (data.error) {
                storyList.innerHTML = `<li>${data.error}</li>`;
            } else {
                data.forEach(story => {
                    const li = document.createElement("li");
                    li.textContent = story;
                    storyList.appendChild(li);
                });
            }
        })
        .catch(err => console.error("Error fetching stories:", err));
});
