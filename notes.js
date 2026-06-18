const notes = [
  {
    id: "001",
    category: "wordpress",
    categoryLabel: "WordPress",
    colorClass: "note-rose",
    title: "Comillas en WordPress",
    problem:
      "Un fragmento no funcionaba por el tipo de comillas usado, WordPress o el texto pegado podía tener comillas curvas en lugar de comillas normales.",
    fix:
      'En código revisar si estoy usando <code>" "</code> o <code>\' \'</code> normales, no <code>“ ”</code> o <code>’</code>.',
    lesson:
      "Pegar primero en VS Code. Buscar comillas raras. Reemplazar manualmente. Probar de nuevo en WordPress.",
    tags: ["debug", "strings"]
  },
  {
    id: "002",
    category: "forms",
    categoryLabel: "Gravity Forms",
    colorClass: "note-blush",
    title: "Hidden field not updating",
    problem: "A hidden field value was not changing on the form.",
    fix: "Used jQuery after the Gravity Form finished rendering.",
    lesson: "Some scripts need to wait for the correct form event.",
    tags: ["forms", "jQuery"]
  },
  {
    id: "003",
    category: "css",
    categoryLabel: "CSS",
    colorClass: "note-periwinkle",
    title: "Cards breaking on mobile",
    problem: "Cards were overflowing outside the container on small screens.",
    fix: "Replaced fixed widths with max-width and flex-wrap.",
    lesson: "Avoid rigid layouts when building responsive sections.",
    tags: ["responsive", "layout"]
  },
  {
    id: "004",
    category: "javascript",
    categoryLabel: "JavaScript",
    colorClass: "note-cream",
    title: "Emergency field logic",
    problem: "A field needed to show only during a specific schedule.",
    fix: "Checked current time and updated the hidden field value.",
    lesson: "Time-based logic needs clear timezone handling.",
    tags: ["time logic", "forms"]
  }

  
];