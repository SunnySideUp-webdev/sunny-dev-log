const snippets = [
  {
    id: "001",
    title: "Check selected value",
    language: "JavaScript",
    code: `const selectedValue = document.querySelector("#field-id").value;`,
    description: "Useful when I need to check the current value of a field."
  },
  {
    id: "002",
    title: "Wait for Gravity Forms render",
    language: "jQuery",
    code: `jQuery(document).on("gform_post_render", function () {
  // Code here runs after Gravity Forms finishes rendering
});`,
    description: "Useful when a script needs to wait until the form is fully loaded."
  },
  {
    id: "003",
    title: "Add active class",
    language: "JavaScript",
    code: `element.classList.add("active");`,
    description: "Useful when I need to visually mark a selected tab, button or card."
  }
];