const notesBoard = document.querySelector(".notes-board");
const folderSystem = document.querySelector(".folder-system");
const folderTabs = document.querySelectorAll(".folder-tab");

const prevPageButton = document.querySelector("#prevPage");
const nextPageButton = document.querySelector("#nextPage");
const paginationInfo = document.querySelector("#paginationInfo");
const notesCounter = document.querySelector("#notesCounter");
const notesSearch = document.querySelector("#notesSearch");
const snippetsList = document.querySelector(".snippets-list");

const snippetSearchWrapper = document.querySelector(".snippet-search-wrapper");
const snippetSearchToggle = document.querySelector("#snippetSearchToggle");
const snippetSearch = document.querySelector("#snippetSearch");

const prevSnippetPageButton = document.querySelector("#prevSnippetPage");
const nextSnippetPageButton = document.querySelector("#nextSnippetPage");
const snippetPaginationInfo = document.querySelector("#snippetPaginationInfo");

const noteColors = ["note-rose", "note-blush", "note-periwinkle", "note-cream"];

const notesPerPage = 4;
let currentPage = 1;
let currentCategory = "all";
let currentSearch = "";

const snippetsPerPage = 3;
let currentSnippetPage = 1;
let currentSnippetSearch = "";

function updateNotesCounter(totalNotes) {
  const noteWord = totalNotes === 1 ? "note" : "notes";

  notesCounter.textContent = `${totalNotes} ${noteWord} saved in this folder`;
}

function renderSnippets() {
  const filteredSnippets = snippets.filter((snippet) => {
    const searchText = currentSnippetSearch.toLowerCase();

    const snippetContent = `
      ${snippet.title}
      ${snippet.language}
      ${snippet.code}
      ${snippet.description}
    `.toLowerCase();

    return snippetContent.includes(searchText);
  });

  if (filteredSnippets.length === 0) {
    snippetsList.innerHTML = `
      <article class="snippet-paper">
        <div class="snippet-paper-top">
          <div>
            <p>No snippets found</p>
            <small>Try another word, language or selector.</small>
          </div>

          <span>Empty</span>
        </div>

        <pre><code>No matching snippets yet.</code></pre>
      </article>
    `;

    snippetPaginationInfo.textContent = "Page 0 of 0";
    prevSnippetPageButton.disabled = true;
    nextSnippetPageButton.disabled = true;

    return;
  }

  const totalSnippetPages = Math.ceil(filteredSnippets.length / snippetsPerPage);

  if (currentSnippetPage > totalSnippetPages) {
    currentSnippetPage = totalSnippetPages;
  }

  const startIndex = (currentSnippetPage - 1) * snippetsPerPage;
  const endIndex = startIndex + snippetsPerPage;
  const snippetsToShow = filteredSnippets.slice(startIndex, endIndex);

  snippetsList.innerHTML = snippetsToShow
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

  snippetPaginationInfo.textContent = `Page ${currentSnippetPage} of ${totalSnippetPages}`;

  prevSnippetPageButton.disabled = currentSnippetPage === 1;
  nextSnippetPageButton.disabled = currentSnippetPage === totalSnippetPages;
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

snippetSearchToggle.addEventListener("click", () => {
  snippetSearchWrapper.classList.toggle("open");
  snippetSearch.focus();
});

snippetSearch.addEventListener("input", () => {
  currentSnippetSearch = snippetSearch.value;
  currentSnippetPage = 1;
  renderSnippets();
});

prevSnippetPageButton.addEventListener("click", () => {
  if (currentSnippetPage > 1) {
    currentSnippetPage--;
    renderSnippets();
  }
});

nextSnippetPageButton.addEventListener("click", () => {
  currentSnippetPage++;
  renderSnippets();
});

renderNotes();
renderSnippets();