const notesBoard = document.querySelector(".notes-board");
const folderSystem = document.querySelector(".folder-system");
const folderTabs = document.querySelectorAll(".folder-tab");
const noteColors = ["note-rose", "note-blush", "note-periwinkle", "note-cream"];

function renderNotes(category = "all") {
  const filteredNotes =
    category === "all"
      ? notes
      : notes.filter((note) => note.category === category);

      if (filteredNotes.length === 0) {
    notesBoard.innerHTML = `
      <article class="empty-note">
        <p class="case-number">No notes yet</p>
        <h3>This folder is waiting for its first little lesson.</h3>
        <p>
          Add a new note in <code>notes.js</code> when you solve something related to this category.
        </p>
      </article>
    `;

    return;
  }

  notesBoard.innerHTML = filteredNotes
    .map((note, index) => {
      return `
        <article class="dev-note ${note.colorClass || noteColors[index % noteColors.length]}">
          <div class="note-pin"></div>

          <header class="note-header">
            <p class="case-number">Caso ${note.id}</p>
            <span class="note-category">${note.categoryLabel}</span>
          </header>

          <h3>${note.title}</h3>

          <div class="note-lines">
            <p>
              <strong>Problema:</strong>
              ${note.problem}
            </p>

            <p>
              <strong>Fix:</strong>
              ${note.fix}
            </p>

            <p>
              <strong>Lección:</strong>
              ${note.lesson}
            </p>
          </div>

          <footer class="note-footer">
            ${note.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </footer>
        </article>
      `;
    })
    .join("");
}

folderTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedCategory = tab.dataset.category;

    folderTabs.forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");
    folderSystem.dataset.activeCategory = selectedCategory;

    renderNotes(selectedCategory);
    
  });
});


renderNotes();