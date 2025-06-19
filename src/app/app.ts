import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header.component";
import { CompanyDetailsComponent } from "./company-details/company-details.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, CompanyDetailsComponent],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected title = "builder-angular-materialui";
}
