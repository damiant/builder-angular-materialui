import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  template: `
    <div class="header">
      <div class="top-section">
        <div class="logo-menu">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/923540ce194c403ba6d59d22b451f70a/c4d771d27897aaaddb4e5cdad1e85d27120e76d3?placeholderIfAbsent=true"
            class="menu-icon"
          />
          <div class="logo-breadcrumb-section">
            <div class="logo">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/923540ce194c403ba6d59d22b451f70a/1d009d1ec487016a49d7367b9b6ab75a99da261a?placeholderIfAbsent=true"
                class="logo-image"
              />
              <div class="company-name">Company Management</div>
            </div>
            <div class="bread-crumbs">
              <div class="crumb">
                <div class="crumb-text">Empower</div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/923540ce194c403ba6d59d22b451f70a/706d864628531a4f5a232c1ce62c8d231fb90b0e?placeholderIfAbsent=true"
                class="chevron-icon"
              />
              <div class="crumb">
                <div class="crumb-with-icon">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/923540ce194c403ba6d59d22b451f70a/1d1b98ee06fd8e1c8f2e4b0658d30e22f9697dd0?placeholderIfAbsent=true"
                    class="crumb-icon"
                  />
                  <div class="crumb-text">Activation</div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/923540ce194c403ba6d59d22b451f70a/706d864628531a4f5a232c1ce62c8d231fb90b0e?placeholderIfAbsent=true"
                class="chevron-icon"
              />
              <div class="crumb">
                <div class="crumb-text">Companies</div>
              </div>
            </div>
          </div>
        </div>
        <div class="user-section">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/923540ce194c403ba6d59d22b451f70a/1f54ac53aa8e3a7fca8a000282a1829380619f8d?placeholderIfAbsent=true"
            class="notification-icon"
          />
          <div class="avatar">
            <div class="user-name">John Smith</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/923540ce194c403ba6d59d22b451f70a/4c863c655fd8d859487afd80775db7be84e34ccd?placeholderIfAbsent=true"
              class="user-avatar"
            />
          </div>
        </div>
      </div>
      <div class="header-secondary">
        <div class="main-content">
          <div class="content">
            <div class="left-part">
              <div class="title">
                <div class="page-title">Client Summary Editing:</div>
                <div class="campaign-scenario-name">Client name</div>
              </div>
            </div>
            <div class="right-btns">
              <div class="cancel-button">Cancel</div>
              <div class="save-button">Save</div>
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
      .top-section {
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
        .top-section {
          max-width: 100%;
          padding: 8px 20px;
        }
      }
      .logo-menu {
        align-self: stretch;
        display: flex;
        min-width: 240px;
        margin: auto 0;
        align-items: center;
        gap: 24px;
        justify-content: start;
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
      .logo-breadcrumb-section {
        align-self: stretch;
        display: flex;
        min-width: 240px;
        margin: auto 0;
        flex-direction: column;
        align-items: stretch;
        justify-content: start;
      }
      .logo {
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
      .company-name {
        color: #232951;
        align-self: stretch;
        margin: auto 0;
        padding-top: 4px;
        gap: 4px;
      }
      .bread-crumbs {
        border-radius: 50px;
        align-self: start;
        display: flex;
        margin-top: 4px;
        padding: 0 4px;
        align-items: center;
        gap: 16px;
        font-size: 12px;
        color: #4f5474;
        font-weight: 400;
        white-space: nowrap;
        line-height: 1.4;
        justify-content: start;
      }
      @media (max-width: 991px) {
        .bread-crumbs {
          white-space: initial;
        }
      }
      .crumb {
        align-self: stretch;
        display: flex;
        margin: auto 0;
        align-items: start;
        justify-content: start;
      }
      @media (max-width: 991px) {
        .crumb {
          white-space: initial;
        }
      }
      .crumb-text {
        color: #4f5474;
        gap: 8px;
      }
      @media (max-width: 991px) {
        .crumb-text {
          white-space: initial;
        }
      }
      .chevron-icon {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 16px;
        border-radius: 100px;
        align-self: stretch;
        margin: auto 0;
        flex-shrink: 0;
      }
      .crumb-with-icon {
        display: flex;
        align-items: start;
        gap: 8px;
        justify-content: start;
      }
      @media (max-width: 991px) {
        .crumb-with-icon {
          white-space: initial;
        }
      }
      .crumb-icon {
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
      .avatar {
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
      .user-avatar {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 40px;
        align-self: stretch;
        margin: auto 0;
        flex-shrink: 0;
      }
      .header-secondary {
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        width: 100%;
        padding: 12px 24px;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
      }
      @media (max-width: 991px) {
        .header-secondary {
          max-width: 100%;
          padding: 12px 20px;
        }
      }
      .main-content {
        width: 100%;
      }
      @media (max-width: 991px) {
        .main-content {
          max-width: 100%;
        }
      }
      .content {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 40px 100px;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      @media (max-width: 991px) {
        .content {
          max-width: 100%;
        }
      }
      .left-part {
        align-self: stretch;
        display: flex;
        min-width: 240px;
        margin: auto 0;
        align-items: center;
        gap: 24px;
        font-size: 16px;
        font-weight: 900;
        text-align: center;
        text-transform: uppercase;
        line-height: 1.2;
        justify-content: start;
      }
      .title {
        align-self: stretch;
        display: flex;
        min-width: 240px;
        margin: auto 0;
        align-items: center;
        gap: 8px;
        justify-content: start;
      }
      .page-title {
        color: #000;
        align-self: stretch;
        margin: auto 0;
      }
      .campaign-scenario-name {
        color: #3195c5;
        align-self: stretch;
        margin: auto 0;
      }
      .right-btns {
        align-self: stretch;
        display: flex;
        min-width: 240px;
        margin: auto 0;
        align-items: start;
        gap: 16px;
        font-size: 12px;
        color: #562e76;
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
      .save-button {
        color: #562e76;
        leading-trim: both;
        text-edge: cap;
        align-self: stretch;
        border-radius: 10px;
        border: 1px solid var(--Primary-Purple, #562e76);
        min-height: 32px;
        padding: 12px 16px;
        gap: 8px;
        white-space: nowrap;
      }
      @media (max-width: 991px) {
        .save-button {
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
export class HeaderComponent {}
