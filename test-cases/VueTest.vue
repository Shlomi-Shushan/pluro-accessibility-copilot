<template>
  <div>
    <!-- 1. Keyboard Trap -->
    <iframe src="page.html"></iframe>
    <div
      tabindex="0"
      @keydown="ifTabTrap"
    >
      Trap Tab (Vue)
    </div>

    <!-- 2. Modal Focus Management -->
    <div role="dialog" aria-modal="true" id="vueModal1">
      <p>No focusables (Vue)</p>
    </div>
    <div role="dialog" aria-modal="true" id="vueModal2">
      <input type="text" />
      <button>Close</button>
    </div>
    <div role="dialog" aria-modal="true" id="vueModal3">
      <input type="text" />
      <a href="#">LinkOnly</a>
    </div>

    <!-- 3. Negative tabindex -->
    <button tabindex="-1">NegTab Vue</button>
    <a href="#" tabindex="-1">LinkNeg Vue</a>

    <!-- 4. Focusable but aria-hidden -->
    <button aria-hidden="true">HiddenBtn Vue</button>

    <hr />

    <!-- 5. form_validation_aria_live -->
    <form id="vueForm">
      <label for="vueName">Name:</label>
      <input type="text" id="vueName" />
    </form>

    <!-- 6. autocomplete_accessibility -->
    <input type="text" id="vueAuto" autocomplete="bogus" />

    <!-- 7. dynamic_form_fields -->
    <input type="tel" id="vueDyn" data-dynamic-field />

    <!-- 8. form_error_announcements -->
    <input type="email" id="vueEmail" aria-invalid="true" />
    <div class="error-message">Invalid Email (Vue)</div>

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
    <div class="carouselVue">
      <div class="slide">S1</div>
      <div class="slide">S2</div>
    </div>

    <!-- 12. expandable_content_management -->
    <button aria-expanded="true">ToggleA</button>
    <button aria-expanded="false" aria-controls="noVue">ToggleB</button>
    <div id="vueSection">No aria-hidden</div>

    <hr />

    <!-- 13. complex_table_structure -->
    <table id="vTable1">
      <tr>
        <td>Val1</td>
        <td>Val2</td>
      </tr>
    </table>
    <table id="vTable2">
      <thead>
        <tr>
          <th id="vh1">H1</th>
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
    <table id="vOuter">
      <tr>
        <td>
          <table id="vInner">
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
        <li>SubVue</li>
      </ul>
    </ul>
    <li>OrphanVue</li>

    <!-- 15. dynamic_content_updates -->
    <div data-dynamic-content="true">DynamicVue</div>
    <div role="alert">AlertVue</div>

    <!-- 16. hover_content_accessibility -->
    <button>HoverNoDataVue</button>
    <button data-hover-content="vuex">HoverInvalidVue</button>
    <div id="vuetooltip">TooltipVue</div>
    <span data-hover-content="vuetooltip2">HoverSpanVue</span>
    <div id="vuetooltip2" aria-hidden="false">TooltipZVue</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "VueTest",
  methods: {
    ifTabTrap(e: KeyboardEvent) {
      if (e.key === "Tab") {
        e.preventDefault();
      }
    },
  },
});
</script>

<style scoped>
.carouselVue { display: flex; }
.slide { width: 100px; height: 50px; }
</style>