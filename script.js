const notesBoard = document.querySelector(".notes-board");
const folderSystem = document.querySelector(".folder-system");
const folderTabs = document.querySelectorAll(".folder-tab");

const prevPageButton = document.querySelector("#prevPage");
const nextPageButton = document.querySelector("#nextPage");
const paginationInfo = document.querySelector("#paginationInfo");
const notesCounter = document.querySelector("#notesCounter");
const notesSearch = document.querySelector("#notesSearch");
const snippetsList = document.querySelector(".snippets-list");

const noteColors = ["note-rose", "note-blush", "note-periwinkle", "note-cream"];

const notesPerPage = 4;
let currentPage = 1;
let currentCategory = "all";
let currentSearch = "";

function updateNotesCounter(totalNotes) {
  const noteWord = totalNotes === 1 ? "note" : "notes";

  notesCounter.textContent = `${totalNotes} ${noteWord} saved in this folder`;
}

function renderSnippets() {
  snippetsList.innerHTML = snippets
    .map((snippet) => {
      return `
        <article class="snippet-paper">
          <div class="snippet-paper-top">
            <div>
              <p>${snippet.title}</p>
              <small>${snippet.description}</small>
            </div>

            <span>${snippet.language}</span>
          </div>

          <pre><code>${snippet.code}</code></pre>
        </article>
      `;
    })
    .join("");
}

function renderNotes(category = "all") {
  currentCategory = category;

  const categoryNotes =
    category === "all"
      ? notes
      : notes.filter((note) => note.category === category);

  const filteredNotes = categoryNotes.filter((note) => {
    const searchText = currentSearch.toLowerCase();

    const noteContent = `
      ${note.title}
      ${note.problem}
      ${note.fix}
      ${note.lesson}
      ${note.categoryLabel}
      ${note.tags.join(" ")}
    `.toLowerCase();

    return noteContent.includes(searchText);
  });

  updateNotesCounter(filteredNotes.length);

  if (filteredNotes.length === 0) {
    notesBoard.innerHTML = `
      <article class="empty-note">
        <p class="case-number">No notes found</p>
        <h3>This folder has no notes matching your search.</h3>
        <p>
          Try another word, tag or category.
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

notesSearch.addEventListener("input", () => {
  currentSearch = notesSearch.value;
  currentPage = 1;
  renderNotes(currentCategory);
});

renderNotes();
renderSnippets();