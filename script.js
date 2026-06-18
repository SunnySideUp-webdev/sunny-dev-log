const folderSystem = document.querySelector(".folder-system");
const folderTabs = document.querySelectorAll(".folder-tab");

folderTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedCategory = tab.dataset.category;

    folderTabs.forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");
    folderSystem.dataset.activeCategory = selectedCategory;
  });
});