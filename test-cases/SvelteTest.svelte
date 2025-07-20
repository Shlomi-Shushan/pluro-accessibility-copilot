<script>
  // כל הקודים פה זה רק HTML/JS
  function handleKeydown(e) {
    if (e.key === "Tab") {
      e.preventDefault();
    }
  }
</script>

<div>
  <!-- 1. Keyboard Trap -->
  <iframe src="page.html"></iframe>
  <div tabindex="0" on:keydown={handleKeydown}>
    Trap Tab (Svelte)
  </div>

  <!-- 2. Modal Focus Management -->
  <div role="dialog" aria-modal="true" id="sModal1">
    <p>No focusables (Svelte)</p>
  </div>
  <div role="dialog" aria-modal="true" id="sModal2">
    <input type="text" />
    <button>Close</button>
  </div>
  <div role="dialog" aria-modal="true" id="sModal3">
    <input type="text" />
    <a href="#">LinkOnly</a>
  </div>

  <!-- 3. Negative tabindex -->
  <button tabindex="-1">NegTab Svelte</button>
  <a href="#" tabindex="-1">LinkNeg Svelte</a>

  <!-- 4. Focusable but aria-hidden -->
  <button aria-hidden="true">HiddenBtn Svelte</button>

  <hr />

  <!-- 5. form_validation_aria_live -->
  <form id="sForm">
    <label for="sName">Name:</label>
    <input type="text" id="sName" />
  </form>

  <!-- 6. autocomplete_accessibility -->
  <input type="text" id="sAuto" autocomplete="bogus" />

  <!-- 7. dynamic_form_fields -->
  <input type="tel" id="sDyn" data-dynamic-field />

  <!-- 8. form_error_announcements -->
  <input type="email" id="sEmail" aria-invalid="true" />
  <div class="error-message">Invalid Email (Svelte)</div>

  <hr />

  <!-- 9. tab_navigation_advanced -->
  <div role="tablist">
    <button role="tab" aria-selected="maybe" tabindex="2">OnlyOne</button>
  </div>
  <div role="tablist">
    <button role="tab" aria-selected="true" tabindex="1">TabA</button>
    <button role="tab" aria-selected="false" tabindex="0">TabB</button>
  </div>

  <!-- 10. dropdown_accessibility -->
  <ul role="menu">
    <li>Item1</li>
    <li>Item2</li>
  </ul>
  <ul role="menubar">
    <li>OptA</li>
    <li>OptB</li>
  </ul>

  <!-- 11. carousel_aria_live -->
  <div class="carouselSvelte">
    <div class="slide">S1</div>
    <div class="slide">S2</div>
  </div>

  <!-- 12. expandable_content_management -->
  <button aria-expanded="true">ToggleA</button>
  <button aria-expanded="false" aria-controls="noSvelte">ToggleB</button>
  <div id="svelSection">No aria-hidden</div>

  <hr />

  <!-- 13. complex_table_structure -->
  <table id="sTable1">
    <tr>
      <td>Val1</td>
      <td>Val2</td>
    </tr>
  </table>
  <table id="sTable2">
    <thead>
      <tr>
        <th id="sh1">H1</th>
        <th>H2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td headers="wrong">V1</td>
        <td>V2</td>
      </tr>
    </tbody>
  </table>
  <table id="sOuter">
    <tr>
      <td>
        <table id="sInner">
          <tr>
            <th>IH</th>
            <td>IV</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- 14. nested_list_hierarchy -->
  <ul>
    <ul>
      <li>SubSvelte</li>
    </ul>
  </ul>
  <li>OrphanSvelte</li>

  <!-- 15. dynamic_content_updates -->
  <div data-dynamic-content="true">DynamicSvelte</div>
  <div role="alert">AlertSvelte</div>

  <!-- 16. hover_content_accessibility -->
  <button>HoverNoDataSvelte</button>
  <button data-hover-content="shx">HoverInvalidSvelte</button>
  <div id="shY">TooltipSvelte</div>
  <span data-hover-content="shZ">HoverSpanSvelte</span>
  <div id="shZ" aria-hidden="false">TooltipZSvelte</div>
</div>

<style>
  .carouselSvelte { display: flex; }
  .slide { width: 80px; height: 40px; }
</style>