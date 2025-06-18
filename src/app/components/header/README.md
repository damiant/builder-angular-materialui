# Header Component

This header component is based on the provided Figma design and includes all the visual elements and functionality specified in the design.

## Features

### Main Header Section

- **Menu Icon**: Interactive 3x3 grid pattern with purple and blue dots
- **Logo Section**: Empower logo placeholder with "Company Management" text
- **Breadcrumb Navigation**:
  - Empower → Activation → Companies
  - Includes folder icon for the "Activation" breadcrumb
  - Proper semantic navigation markup
- **CMI Logo**: Complete SVG implementation of the CMI logo
- **User Avatar**: John Smith with status indicator and avatar graphics

### Secondary Header Section

- **Page Title**: "CLIENT SUMMARY EDITING: CLIENT NAME"
- **Action Buttons**:
  - Cancel (text button)
  - Save (outlined button)
  - Submit for Approval (filled button)

## Technical Implementation

### Angular Features Used

- Standalone component architecture
- Angular Material integration (buttons, toolbar, icons)
- Responsive design with CSS Grid and Flexbox
- TypeScript with proper typing

### Styling

- CSS custom properties for color variables matching Figma design
- Kentledge font family with proper fallbacks
- Fully responsive design for mobile, tablet, and desktop
- Hover states and interactive elements
- Material Design button styling with custom overrides

### Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly markup
- Proper heading hierarchy

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch-friendly interface elements

## Usage

The component is automatically imported and used in the main app component:

```html
<app-header></app-header>
```

## Customization

Colors and styling can be modified through the CSS custom properties defined in the component's CSS file:

```css
:host {
  --additional-white: #fff;
  --primary-dark-purple: #232951;
  --variant-80-dark-purple: #4f5474;
  --variant-40-grey: #bdbfbe;
  --variant-80-purple: #785891;
  --variant-20-dark-purple: #d3d4dc;
  --additional-black: #000;
  --primary-blue: #3195c5;
  --primary-purple: #562e76;
}
```
