import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatChipsModule } from "@angular/material/chips";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

export interface CompanyDetails {
  generalInfo: {
    companyType: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2?: string;
    country: string;
    state: string;
    city: string;
    zip: string;
    requestedBy: string;
    requestDate: Date;
    geographicLocation: string;
  };
  purchasingContact: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };
  termAndHistory: {
    startDate: Date;
    endDate: Date;
    agreementTerm: string;
    contractHistory: string;
    contractHistoryComments: string;
  };
  partnerships: {
    partneringWithAnotherAgency: boolean;
  };
  servicesAndExclusions: {
    services: string;
    audience: string;
    yearType: string;
    exclusions: boolean;
  };
  policies: {
    conflictPolicyInMSA: boolean;
  };
  other: {
    relationships: string;
    salesTaxId: string;
    leveragingGroup: string;
    otaClient: boolean;
  };
}

@Component({
  selector: "app-company-details",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: "./company-details.component.html",
  styleUrls: ["./company-details.component.scss"],
})
export class CompanyDetailsComponent implements OnInit {
  companyDetailsForm!: FormGroup;
  partneringWithAgency = false;

  countries = ["USA", "Canada", "Mexico"];
  states = ["California", "New York", "Texas", "Florida"];
  services = ["Service 1", "Service 2", "Service 3"];
  audiences = ["Audience 1", "Audience 2", "Audience 3"];
  yearTypes = ["Calendar Year", "Fiscal Year", "Academic Year"];
  relationships = ["Relationship 1", "Relationship 2", "Relationship 3"];
  leveragingGroups = ["Group 1", "Group 2", "Group 3"];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.companyDetailsForm = this.fb.group({
      generalInfo: this.fb.group({
        companyType: ["Pharmaceutical", Validators.required],
        companyName: ["Actelion Pharmaceuticals US, Inc.", Validators.required],
        streetAddress1: ["", Validators.required],
        streetAddress2: [""],
        country: ["USA", Validators.required],
        state: ["", Validators.required],
        city: ["", Validators.required],
        zip: ["", Validators.required],
        requestedBy: ["", Validators.required],
        requestDate: ["", Validators.required],
        geographicLocation: ["", Validators.required],
      }),
      purchasingContact: this.fb.group({
        firstName: ["Robert"],
        lastName: ["Fox"],
        phone: ["(684) 555-0102"],
        email: ["robertfox@gmail.com"],
      }),
      termAndHistory: this.fb.group({
        startDate: ["", Validators.required],
        endDate: ["", Validators.required],
        agreementTerm: ["Agreement Term"],
        contractHistory: ["Contract History"],
        contractHistoryComments: ["Contract History Comments"],
      }),
      partnerships: this.fb.group({
        partneringWithAnotherAgency: [false],
      }),
      servicesAndExclusions: this.fb.group({
        services: [""],
        audience: [""],
        yearType: [""],
        exclusions: [false],
      }),
      policies: this.fb.group({
        conflictPolicyInMSA: [false],
      }),
      other: this.fb.group({
        relationships: [""],
        salesTaxId: ["Sales Tax ID"],
        leveragingGroup: [""],
        otaClient: [false],
      }),
    });
  }

  onPartnershipChange(isPartnering: boolean): void {
    this.partneringWithAgency = isPartnering;
    this.companyDetailsForm
      .get("partnerships.partneringWithAnotherAgency")
      ?.setValue(isPartnering);
  }

  onFileSelected(event: Event, fileType: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log(`${fileType} file selected:`, file.name);
      // Handle file upload logic here
    }
  }

  onSubmit(): void {
    if (this.companyDetailsForm.valid) {
      const formData: CompanyDetails = this.companyDetailsForm.value;
      console.log("Company Details:", formData);
      // Handle form submission
    } else {
      console.log("Form is invalid");
    }
  }
}
