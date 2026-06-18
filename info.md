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

**COMO AGREGAR LAS NOTAS EN JS**

{
  id: "005",
  category: "wordpress",
  categoryLabel: "WordPress",
  colorClass: "note-blush",
  title: "Título de la nota",
  problem: "Describe qué pasó.",
  fix: "Describe cómo lo solucionaste.",
  lesson: "Qué aprendiste para la próxima vez.",
  tags: ["tag1", "tag2"]
}

DEJAR UNA COMA ENTRE NOTAS
{
  id: "004",
  ...
},
{
  id: "005",
  ...
}


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


**BOARD DE NOTAS ANTERIOR**
<!--
            =========================================================
              NOTA 001
              Primer caso real documentado.

              Para agregar nuevas notas:
              copia un article completo, cambia el número, categoría,
              título, problema, fix, lección y tags.
            =========================================================
            -->
            <article class="dev-note note-rose">
              <div class="note-pin"></div>

              <header class="note-header">
                <p class="case-number">Caso 001</p>
                <span class="note-category">WordPress</span>
              </header>

              <h3>Comillas en WordPress</h3>

              <div class="note-lines">
                <p>
                  <strong>Problema:</strong>
                  Un fragmento no funcionaba por el tipo de comillas usado,
                  WordPress o el texto pegado podía tener comillas curvas en
                  lugar de comillas normales.
                </p>

                <p>
                  <strong>Fix:</strong>
                  En código revisar si estoy usando <code>" "</code> o
                  <code>' '</code> normales, no <code>“ ”</code> o
                  <code>’</code>.
                </p>

                <p>
                  <strong>Lección:</strong>
                  Pegar primero en VS Code. Buscar comillas raras. Reemplazar
                  manualmente. Probar de nuevo en WordPress.
                </p>
              </div>

              <footer class="note-footer">
                <span>debug</span>
                <span>strings</span>
              </footer>
            </article>

            <!--
            =========================================================
              NOTA 002
              Ejemplo de caso para Gravity Forms.

              Puedes reemplazar este contenido con un caso real
              cuando tengas otro aprendizaje documentado.
            =========================================================
            -->
            <article class="dev-note note-blush">
              <div class="note-pin"></div>

              <header class="note-header">
                <p class="case-number">Case 002</p>
                <span class="note-category">Gravity Forms</span>
              </header>

              <h3>Hidden field not updating</h3>

              <div class="note-lines">
                <p>
                  <strong>Problem:</strong>
                  A hidden field value was not changing on the form.
                </p>

                <p>
                  <strong>Fix:</strong>
                  Used jQuery after the Gravity Form finished rendering.
                </p>

                <p>
                  <strong>Lesson:</strong>
                  Some scripts need to wait for the correct form event.
                </p>
              </div>

              <footer class="note-footer">
                <span>forms</span>
                <span>jQuery</span>
              </footer>
            </article>

            <!--
            =========================================================
              NOTA 003
              Ejemplo de caso para CSS responsive.

              Sirve para documentar problemas visuales,
              layouts rotos o errores en mobile.
            =========================================================
            -->
            <article class="dev-note note-periwinkle">
              <div class="note-pin"></div>

              <header class="note-header">
                <p class="case-number">Case 003</p>
                <span class="note-category">CSS</span>
              </header>

              <h3>Cards breaking on mobile</h3>

              <div class="note-lines">
                <p>
                  <strong>Problem:</strong>
                  Cards were overflowing outside the container on small screens.
                </p>

                <p>
                  <strong>Fix:</strong>
                  Replaced fixed widths with max-width and flex-wrap.
                </p>

                <p>
                  <strong>Lesson:</strong>
                  Avoid rigid layouts when building responsive sections.
                </p>
              </div>

              <footer class="note-footer">
                <span>responsive</span>
                <span>layout</span>
              </footer>
            </article>

            <!--
            =========================================================
              NOTA 004
              Ejemplo de caso para JavaScript.

              Puede usarse para documentar lógica de horarios,
              hidden fields, validaciones o interacción con forms.
            =========================================================
            -->
            <article class="dev-note note-cream">
              <div class="note-pin"></div>

              <header class="note-header">
                <p class="case-number">Case 004</p>
                <span class="note-category">JavaScript</span>
              </header>

              <h3>Emergency field logic</h3>

              <div class="note-lines">
                <p>
                  <strong>Problem:</strong>
                  A field needed to show only during a specific schedule.
                </p>

                <p>
                  <strong>Fix:</strong>
                  Checked current time and updated the hidden field value.
                </p>

                <p>
                  <strong>Lesson:</strong>
                  Time-based logic needs clear timezone handling.
                </p>
              </div>

              <footer class="note-footer">
                <span>time logic</span>
                <span>forms</span>
              </footer>
            </article>
          </section>
        </div>