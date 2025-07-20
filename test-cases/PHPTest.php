<?php
// PHP Test Fixture – כל הבעיות יחד
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>PHP Test – כל הבעיות</title>
</head>
<body>
  <?php // 1. Keyboard Trap ?>
  <iframe src="page.html"></iframe>
  <div tabindex="0" onkeydown="if(event.key=='Tab'){event.preventDefault();}">
    Trap Tab (PHP)
  </div>

  <?php // 2. Modal Focus Management ?>
  <div role="dialog" aria-modal="true" id="pModal1">
    <p>No focusable (PHP)</p>
  </div>
  <div role="dialog" aria-modal="true" id="pModal2">
    <input type="text"/>
    <button>Close</button>
  </div>
  <div role="dialog" aria-modal="true" id="pModal3">
    <input type="text"/>
    <a href="#">LinkOnly</a>
  </div>

  <?php // 3. Negative tabindex ?>
  <button tabindex="-1">NegTab PHP</button>
  <a href="#" tabindex="-1">LinkNeg PHP</a>

  <?php // 4. Focusable but aria-hidden ?>
  <button aria-hidden="true">HiddenBtn PHP</button>

  <hr>

  <?php // 5. form_validation_aria_live ?>
  <form id="phpForm">
    <label for="phpName">Name:</label>
    <input type="text" id="phpName"/>
  </form>

  <?php // 6. autocomplete_accessibility ?>
  <input type="text" id="phpAuto" autocomplete="invalid" />

  <?php // 7. dynamic_form_fields ?>
  <input type="tel" id="phpDyn" data-dynamic-field="true"/>

  <?php // 8. form_error_announcements ?>
  <input type="email" id="phpEmail" aria-invalid="true"/>
  <div class="error-message">Invalid Email (PHP)</div>

  <hr>

  <?php // 9. tab_navigation_advanced ?>
  <div role="tablist">
    <button role="tab" aria-selected="maybe" tabindex="2">OnlyOne</button>
  </div>
  <div role="tablist">
    <button role="tab" aria-selected="true" tabindex="1">TabA</button>
    <button role="tab" aria-selected="false" tabindex="0">TabB</button>
  </div>

  <?php // 10. dropdown_accessibility ?>
  <ul role="menu">
    <li>Item1</li>
    <li>Item2</li>
  </ul>
  <ul role="menubar">
    <li>Opt1</li>
    <li>Opt2</li>
  </ul>

  <?php // 11. carousel_aria_live ?>
  <div class="carouselPHP">
    <div class="slide">S1</div>
    <div class="slide">S2</div>
  </div>

  <?php // 12. expandable_content_management ?>
  <button aria-expanded="true">ToggleA</button>
  <button aria-expanded="false" aria-controls="noExist">ToggleB</button>
  <div id="phpExp">No aria-hidden</div>

  <hr>

  <?php // 13. complex_table_structure ?>
  <table id="pTable1">
    <tr>
      <td>Val1</td>
      <td>Val2</td>
    </tr>
  </table>
  <table id="pTable2">
    <thead>
      <tr>
        <th id="pH1">H1</th>
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
  <table id="pOuter">
    <tr>
      <td>
        <table id="pInner">
          <tr>
            <th>IH</th>
            <td>IV</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <?php // 14. nested_list_hierarchy ?>
  <ul>
    <ul>
      <li>SubPHP</li>
    </ul>
  </ul>
  <li>OrphanPHP</li>

  <?php // 15. dynamic_content_updates ?>
  <div data-dynamic-content="true">DynamicPHP</div>
  <div role="alert">AlertPHP</div>

  <?php // 16. hover_content_accessibility ?>
  <button>HoverNoDataPHP</button>
  <button data-hover-content="pHover">HoverInvalidPHP</button>
  <div id="pHover">TooltipPHP</div>
  <span data-hover-content="pHoverSpan">HoverSpanPHP</span>
  <div id="pHoverSpan" aria-hidden="false">TooltipZPHP</div>
</body>
</html>