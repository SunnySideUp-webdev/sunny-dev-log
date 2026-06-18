const notesBoard = document.querySelector(".notes-board");
const folderSystem = document.querySelector(".folder-system");
const folderTabs = document.querySelectorAll(".folder-tab");

const prevPageButton = document.querySelector("#prevPage");
const nextPageButton = document.querySelector("#nextPage");
const paginationInfo = document.querySelector("#paginationInfo");

const noteColors = ["note-rose", "note-blush", "note-periwinkle", "note-cream"];

const notesPerPage = 4;
let currentPage = 1;
let currentCategory = "all";

function renderNotes(category = "all") {
  currentCategory = category;

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

    paginationInfo.textContent = "Page 0 of 0";
    prevPageButton.disabled = true;
    nextPageButton.disabled = true;

    return;
  }

  const totalPages = Math.ceil(filteredNotes.length / notesPerPage);

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const startIndex = (currentPage - 1) * notesPerPage;
  const endIndex = startIndex + notesPerPage;
  const notesToShow = filteredNotes.slice(startIndex, endIndex);

  notesBoard.innerHTML = notesToShow
    .map((note, index) => {
      const globalIndex = startIndex + index;
      const noteColor = note.colorClass || noteColors[globalIndex % noteColors.length];

      return `
        <article class="dev-note ${noteColor}">
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

  paginationInfo.textContent = `Page ${currentPage} of ${totalPages}`;

  prevPageButton.disabled = currentPage === 1;
  nextPageButton.disabled = currentPage === totalPages;
}

folderTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedCategory = tab.dataset.category;

    folderTabs.forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");
    folderSystem.dataset.activeCategory = selectedCategory;

    currentPage = 1;
    renderNotes(selectedCategory);
  });
});

prevPageButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderNotes(currentCategory);
  }
});

nextPageButton.addEventListener("click", () => {
  currentPage++;
  renderNotes(currentCategory);
});

renderNotes();