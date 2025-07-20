import React from "react";

export default function JSXTest() {
  return (
    <div>
      {/* 1. Keyboard Trap */}
      <iframe src="page.html"></iframe>
      <div
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Tab") {
            e.preventDefault();
          }
        }}
      >
        Trap Tab
      </div>

      {/* 2. Modal Focus Management */}
      <div role="dialog" aria-modal="true" id="modalJSX1">
        <p>No focusables</p>
      </div>
      <div role="dialog" aria-modal="true" id="modalJSX2">
        <input type="text" />
        <button>Close</button>
      </div>
      <div role="dialog" aria-modal="true" id="modalJSX3">
        <input type="text" />
        <a href="#">LinkOnly</a>
      </div>

      {/* 3. Negative tabindex */}
      <button tabIndex={-1}>NegTab</button>
      <a href="https://example.com" tabIndex={-1}>
        LinkNeg
      </a>

      {/* 4. Focusable but aria-hidden */}
      <button aria-hidden="true">HiddenBtn</button>

      <hr />

      {/* 5. form_validation_aria_live */}
      <form id="formJSX">
        <label htmlFor="jsName">Name:</label>
        <input type="text" id="jsName" />
      </form>

      {/* 6. autocomplete_accessibility */}
      <input type="text" id="jsAuto" autoComplete="bogus" />

      {/* 7. dynamic_form_fields */}
      <div>
        <input type="tel" id="dynJSX" data-dynamic-field />
      </div>

      {/* 8. form_error_announcements */}
      <input type="email" id="jsEmail" aria-invalid="true" />
      <div className="error-message">Invalid email</div>

      <hr />

      {/* 9. tab_navigation_advanced */}
      <div role="tablist">
        <button role="tab" aria-selected="maybe" tabIndex={2}>
          OnlyOne
        </button>
      </div>
      <div role="tablist">
        <button role="tab" aria-selected="true" tabIndex={1}>
          TabA
        </button>
        <button role="tab" aria-selected="false" tabIndex={0}>
          TabB
        </button>
      </div>

      {/* 10. dropdown_accessibility */}
      <ul role="menu">
        <li>Item1</li>
        <li>Item2</li>
      </ul>
      <ul role="menubar">
        <li>OptA</li>
        <li>OptB</li>
      </ul>

      {/* 11. carousel_aria_live */}
      <div className="carouselJSX">
        <div className="slide">S1</div>
        <div className="slide">S2</div>
      </div>

      {/* 12. expandable_content_management */}
      <button aria-expanded="true">ToggleA</button>
      <button aria-expanded="false" aria-controls="nonexist">ToggleB</button>
      <div id="expJSX">No aria-hidden</div>

      <hr />

      {/* 13. complex_table_structure */}
      <table id="tableJSX1">
        <tbody>
          <tr>
            <td>Val</td>
          </tr>
        </tbody>
      </table>
      <table id="tableJSX2">
        <thead>
          <tr>
            <th id="h1JSX">H1</th>
            <th>H2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td headers="hX">V1</td>
            <td>V2</td>
          </tr>
        </tbody>
      </table>
      <table id="outerJSX">
        <tbody>
          <tr>
            <td>
              <table id="innerJSX">
                <tbody>
                  <tr>
                    <th>IH1</th>
                    <td>IV1</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      {/* 14. nested_list_hierarchy */}
      <ul>
        <ul>
          <li>SubX</li>
        </ul>
      </ul>
      <li>OrphanJSX</li>

      {/* 15. dynamic_content_updates */}
      <div data-dynamic-content="true">DynamicJSX</div>
      <div role="alert">AlertJSX</div>

      {/* 16. hover_content_accessibility */}
      <button>HoverNoDataJSX</button>
      <button data-hover-content="hx">HoverInvalidJSX</button>
      <div id="hy">TooltipJSX</div>
      <span data-hover-content="hz">HoverSpanJSX</span>
      <div id="hz" aria-hidden="false">TooltipZJSX</div>
    </div>
  );
}