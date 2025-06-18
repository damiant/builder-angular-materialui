import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  template: `
    <div class="header">
      <div class="main-header">
        <div class="logo-menu-section">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/923540ce194c403ba6d59d22b451f70a/53422e31a1fbe82ce02aa8b62abe12ea6d0cdacf?placeholderIfAbsent=true"
            class="menu-icon"
            alt="Menu"
          />
          <div class="logo-content">
            <div class="logo">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/923540ce194c403ba6d59d22b451f70a/1d009d1ec487016a49d7367b9b6ab75a99da261a?placeholderIfAbsent=true"
                class="logo-image"
                alt="Company Logo"
              />
              <div class="company-title">Company Management</div>
            </div>
            <div class="breadcrumbs">
              <div class="breadcrumb-item">
                <div class="breadcrumb-text">Empower</div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/923540ce194c403ba6d59d22b451f70a/37db57c98943a0e00693f34cc9fb1bf4cac04ff5?placeholderIfAbsent=true"
                class="breadcrumb-separator"
                alt="separator"
              />
              <div class="breadcrumb-item">
                <div class="breadcrumb-content">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/923540ce194c403ba6d59d22b451f70a/84699cd3d8955d291561c88e0afc5ceecfb244e3?placeholderIfAbsent=true"
                    class="breadcrumb-icon"
                    alt="Activation"
                  />
                  <div class="breadcrumb-text">Activation</div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/923540ce194c403ba6d59d22b451f70a/37db57c98943a0e00693f34cc9fb1bf4cac04ff5?placeholderIfAbsent=true"
                class="breadcrumb-separator"
                alt="separator"
              />
              <div class="breadcrumb-item">
                <div class="breadcrumb-text active">Company Management</div>
              </div>
            </div>
          </div>
        </div>
        <div class="user-section">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/923540ce194c403ba6d59d22b451f70a/3380a2c7e9dc1c12d016de0351f25b636701f94d?placeholderIfAbsent=true"
            class="notification-icon"
            alt="Notifications"
          />
          <div class="user-avatar">
            <div class="user-name">John Smith</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/923540ce194c403ba6d59d22b451f70a/8102c37a7d74daf5f1bcc17091d25a10b772c7d1?placeholderIfAbsent=true"
              class="avatar-image"
              alt="User Avatar"
            />
          </div>
        </div>
      </div>
      <div class="secondary-header">
        <div class="header-content">
          <div class="content-wrapper">
            <div class="title-section">
              <div class="page-title">
                <div class="title-text">aDDING New Company</div>
              </div>
            </div>
            <div class="action-buttons">
              <div class="cancel-button">Cancel</div>
              <div class="submit-button">Submit for Approval</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
      .header {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        font-family:
          Kentledge,
          -apple-system,
          Roboto,
          Helvetica,
          sans-serif;
        justify-content: center;
      }
      .main-header {
        justify-content: space-between;
        align-items: center;
        display: flex;
        width: 100%;
        padding: 8px 24px;
        gap: 40px 100px;
        flex-wrap: wrap;
        background-color: #fff;
      }
      @media (max-width: 991px) {
        .main-header {
          max-width: 100%;
          padding: 8px 20px;
        }
      }
      .logo-menu-section {
        align-self: stretch;
        display: flex;
        min-width: 240px;
        margin: auto 0;
        align-items: center;
        gap: 24px;
        justify-content: start;
      }
      @media (max-width: 991px) {
        .logo-menu-section {
          max-width: 100%;
        }
      }
      .menu-icon {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 32px;
        align-self: stretch;
        margin: auto 0;
        flex-shrink: 0;
      }
      .logo-content {
        align-self: stretch;
        display: flex;
        min-width: 240px;
        margin: auto 0;
        flex-direction: column;
        align-items: stretch;
        justify-content: start;
      }
      .logo {
        align-self: start;
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 16px;
        color: #232951;
        font-weight: 900;
        justify-content: start;
      }
      .logo-image {
        aspect-ratio: 4.93;
        object-fit: contain;
        object-position: center;
        width: 148px;
        align-self: stretch;
        margin: auto 0;
        flex-shrink: 0;
      }
      .company-title {
        color: #232951;
        align-self: stretch;
        margin: auto 0;
        padding-top: 4px;
        gap: 4px;
      }
      .breadcrumbs {
        border-radius: 50px;
        display: flex;
        margin-top: 4px;
        padding: 0 4px;
        align-items: center;
        gap: 16px;
        font-size: 12px;
        color: #4f5474;
        font-weight: 400;
        line-height: 1.4;
        justify-content: start;
      }
      .breadcrumb-item {
        align-self: stretch;
        display: flex;
        margin: auto 0;
        align-items: start;
        white-space: nowrap;
        justify-content: start;
      }
      @media (max-width: 991px) {
        .breadcrumb-item {
          white-space: initial;
        }
      }
      .breadcrumb-text {
        color: #4f5474;
        gap: 8px;
      }
      @media (max-width: 991px) {
        .breadcrumb-text {
          white-space: initial;
        }
      }
      .breadcrumb-separator {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 16px;
        border-radius: 100px;
        align-self: stretch;
        margin: auto 0;
        flex-shrink: 0;
      }
      .breadcrumb-content {
        display: flex;
        align-items: start;
        gap: 8px;
        justify-content: start;
      }
      @media (max-width: 991px) {
        .breadcrumb-content {
          white-space: initial;
        }
      }
      .breadcrumb-icon {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 16px;
        border-radius: 100px;
        flex-shrink: 0;
      }
      .user-section {
        align-self: stretch;
        display: flex;
        margin: auto 0;
        align-items: center;
        gap: 24px;
        font-size: 16px;
        color: rgba(120, 88, 145, 1);
        font-weight: 700;
        text-align: center;
        justify-content: start;
      }
      .notification-icon {
        aspect-ratio: 1.58;
        object-fit: contain;
        object-position: center;
        width: 41px;
        align-self: stretch;
        margin: auto 0;
        flex-shrink: 0;
      }
      .user-avatar {
        align-self: stretch;
        display: flex;
        margin: auto 0;
        align-items: center;
        gap: 8px;
        justify-content: start;
      }
      .user-name {
        align-self: stretch;
        margin: auto 0;
      }
      .avatar-image {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 40px;
        align-self: stretch;
        margin: auto 0;
        flex-shrink: 0;
      }
      .secondary-header {
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        width: 100%;
        padding: 12px 24px;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
      }
      @media (max-width: 991px) {
        .secondary-header {
          max-width: 100%;
          padding: 12px 20px;
        }
      }
      .header-content {
        width: 100%;
      }
      @media (max-width: 991px) {
        .header-content {
          max-width: 100%;
        }
      }
      .content-wrapper {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 40px 100px;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      @media (max-width: 991px) {
        .content-wrapper {
          max-width: 100%;
        }
      }
      .title-section {
        align-self: stretch;
        display: flex;
        margin: auto 0;
        flex-direction: column;
        align-items: stretch;
        font-size: 16px;
        color: #000;
        font-weight: 900;
        text-align: center;
        text-transform: uppercase;
        line-height: 1.2;
        justify-content: center;
        width: 142px;
      }
      .page-title {
        display: flex;
        width: 100%;
        max-width: 142px;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
      }
      .title-text {
        color: #000;
        min-height: 19px;
        width: 100%;
        gap: 10px;
      }
      .action-buttons {
        align-self: stretch;
        display: flex;
        margin: auto 0;
        align-items: start;
        gap: 16px;
        font-size: 12px;
        font-weight: 700;
        line-height: 1;
        justify-content: start;
      }
      .cancel-button {
        color: #562e76;
        leading-trim: both;
        text-edge: cap;
        align-self: stretch;
        border-radius: 10px;
        min-height: 32px;
        padding: 12px 16px;
        gap: 8px;
        white-space: nowrap;
      }
      @media (max-width: 991px) {
        .cancel-button {
          white-space: initial;
        }
      }
      .submit-button {
        align-self: stretch;
        border-radius: 10px;
        min-height: 32px;
        padding: 12px 16px;
        gap: 8px;
        color: rgba(255, 255, 255, 1);
        background-color: #785891;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule],
})
export default class HeaderComponent {}
