**BITACORA**

Caso 001: Comillas en WordPress

Problema:
Un fragmento no funcionaba por el tipo de comillas usado.

Qué pasó:
WordPress o el texto pegado podía tener comillas curvas en lugar de comillas normales.

Qué aprendí:
En código debo revisar si estoy usando " " o ' ' normales, no “ ” o ’.

Cómo lo reviso la próxima vez:
Pegar primero en VS Code.
Buscar comillas raras.
Reemplazar manualmente.
Probar de nuevo en WordPress.


**GIT**

Ahora cada vez que hagas cambios:

git status
git add .
git commit -m "Update dev log notes"
git push

**AGREGAR UNA NOTA NUEVA**

<article class="dev-note note-rose">
  <div class="note-pin"></div>

  <header class="note-header">
    <p class="case-number">Case 005</p>
    <span class="note-category">Category</span>
  </header>

  <h3>Title of the problem</h3>

  <div class="note-lines">
    <p>
      <strong>Problem:</strong>
      Describe what broke.
    </p>

    <p>
      <strong>Fix:</strong>
      Describe how you solved it.
    </p>

    <p>
      <strong>Lesson:</strong>
      Write what you want to remember next time.
    </p>
  </div>

  <footer class="note-footer">
    <span>tag</span>
    <span>tag</span>
  </footer>
</article>