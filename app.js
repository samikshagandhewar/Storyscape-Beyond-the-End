document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".category");

    categories.forEach(category => {
        category.addEventListener("click", () => {
            const categoryId = category.id;
            alert(`You selected: ${categoryId.replace("-", " ").toUpperCase()}`);
            // Redirect users to the detailed story page
            window.location.href = `stories.html?category=${categoryId}`;
        });
    });
});
