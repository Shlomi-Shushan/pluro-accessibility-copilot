מפimport { Component } from "@angular/core";

@Component({
  selector: "app-angular-test",
  templateUrl: "./angular-test.component.html",
})
export class AngularTestComponent {
  ifTabTrap(event: KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
    }
  }
}