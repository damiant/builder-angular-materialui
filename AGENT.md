# Design System Component Reference

This document provides a comprehensive overview of the design system's component architecture and available components for code generation and development reference.

## System Architecture

The design system follows a modular component-based architecture where each component group provides specific functionality. Components are organized into logical groups that can work independently or in combination with other components.

### Component Organization Principles

- **Single Responsibility**: Each component group serves a specific purpose
- **Composability**: Components can be combined to create complex interfaces
- **Consistency**: All components follow the same design patterns and API conventions
- **Accessibility**: Components are built with accessibility standards in mind

## Documentation Structure

For detailed documentation on any component group, refer to the corresponding MDX file in the `design-system-docs` folder. The documentation files follow the naming convention:

```
design-system-docs/[componentgroupname].mdx
```

For example:

- `design-system-docs/button.mdx` - Detailed documentation for Button component
- `design-system-docs/table.mdx` - Detailed documentation for Table component
- `design-system-docs/annotationcontext.mdx` - Detailed documentation for the AnnotationContext group
- `design-system-docs/applayout.mdx` - Detailed documentation for AppLayout component

These MDX files contain comprehensive information including:

- Component API documentation
- Usage examples
- Props and configuration options
- Best practices and implementation guidelines
- Accessibility requirements
- Integration patterns with other components

## Component Categories

The components are organized into logical groups based on their primary functionality:

### Layout & Structure

Components that provide foundational layout and structural elements for applications.

**Note**: This section will be populated with actual component data from `component-groups.json` when available.

### Navigation

Components for user navigation and wayfinding within applications.

**Note**: This section will be populated with actual component data from `component-groups.json` when available.

### Form Controls

Interactive components for user input and data collection.

**Note**: This section will be populated with actual component data from `component-groups.json` when available.

### Data Display

Components for presenting and organizing data and content.

**Note**: This section will be populated with actual component data from `component-groups.json` when available.

### Charts & Visualization

Components for data visualization and graphical representation.

**Note**: This section will be populated with actual component data from `component-groups.json` when available.

### Interactive Elements

Components for user interaction and actions.

**Note**: This section will be populated with actual component data from `component-groups.json` when available.

### Feedback & Communication

Components for providing feedback and communicating with users.

**Note**: This section will be populated with actual component data from `component-groups.json` when available.

### Form Organization

Components for structuring and organizing forms.

**Note**: This section will be populated with actual component data from `component-groups.json` when available.

### Content Organization

Components for organizing and structuring content.

**Note**: This section will be populated with actual component data from `component-groups.json` when available.

### Advanced Controls

Specialized components for complex interactions and data management.

**Note**: This section will be populated with actual component data from `component-groups.json` when available.

### Selection & Control

Components for user selections and interface controls.

**Note**: This section will be populated with actual component data from `component-groups.json` when available.

### Specialized Components

Components for specific use cases and advanced functionality.

**Note**: This section will be populated with actual component data from `component-groups.json` when available.

### Tutorial & Annotation System

A specialized component group for creating interactive tutorials and annotations.

**Note**: This section will be populated with actual component data from `component-groups.json` when available.

### System Components

Components for system-level functionality and configuration.

**Note**: This section will be populated with actual component data from `component-groups.json` when available.

## Available Angular Material Components

Since this project uses Angular Material UI (version 20.0.3), the following Material Design components are available:

### Layout & Structure

- **mat-toolbar** - Application toolbar for branding and actions
- **mat-sidenav** - Navigation drawer for mobile and desktop
- **mat-card** - Content container with Material Design styling
- **mat-grid-list** - Grid-based layout with responsive tiles
- **mat-divider** - Visual separator for content sections

### Navigation

- **mat-menu** - Contextual menu overlay
- **mat-tab-group** - Tabbed navigation interface
- **mat-stepper** - Step-by-step navigation component
- **mat-tree** - Hierarchical data navigation

### Form Controls

- **mat-form-field** - Container for form controls with labeling
- **mat-input** - Text input with Material Design styling
- **mat-select** - Dropdown selection component
- **mat-checkbox** - Boolean selection control
- **mat-radio-group** - Single selection from multiple options
- **mat-slider** - Continuous value selection control
- **mat-datepicker** - Date selection component
- **mat-autocomplete** - Text input with auto-completion

### Data Display

- **mat-table** - Data table with sorting and pagination
- **mat-list** - Vertical list of items
- **mat-chip** - Compact element for tags or filters
- **mat-badge** - Notification indicator
- **mat-tooltip** - Contextual information overlay

### Interactive Elements

- **mat-button** - Action buttons with various styles
- **mat-fab** - Floating action button
- **mat-icon-button** - Circular button with icon
- **mat-button-toggle** - Toggle button group

### Feedback & Communication

- **mat-snack-bar** - Brief message notifications
- **mat-dialog** - Modal dialog overlay
- **mat-bottom-sheet** - Bottom-anchored overlay panel
- **mat-progress-bar** - Linear progress indicator
- **mat-progress-spinner** - Circular progress indicator

### Advanced Controls

- **mat-expansion-panel** - Collapsible content container
- **mat-paginator** - Data pagination controls
- **mat-sort** - Table column sorting functionality

## Usage Guidelines

### Component Dependencies

- Most Angular Material components are self-contained and can be used independently
- Form controls should be wrapped in `mat-form-field` for proper labeling
- Navigation components can be used independently or as part of larger layout structures
- Data display components can be enhanced with interactive elements like buttons and menus

### Integration Patterns

- Layout components like `mat-toolbar` and `mat-sidenav` typically serve as containers for other components
- Form controls should be wrapped in `mat-form-field` components for proper Material Design styling
- Navigation components can be used independently or as part of larger layout structures
- Data display components can be enhanced with interactive elements like buttons and popovers

### Accessibility Considerations

- All Angular Material components are built with accessibility in mind
- Components use semantic HTML structures and proper ARIA attributes
- Keyboard navigation is supported across all interactive components
- Screen reader compatibility is built into all components

### Responsive Design

- Angular Material components provide responsive behavior through the Angular CDK
- Layout components adapt to different screen sizes automatically
- Mobile-friendly navigation patterns are built into components like `mat-sidenav`

### Theming and Customization

- Components support Angular Material's theming system
- Custom themes can be applied globally or per-component
- CSS custom properties enable runtime theme customization
- Component density can be adjusted for different use cases

## Integration with Angular

### Module Imports

Components must be imported from their respective Angular Material modules:

```typescript
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
// ... other imports
```

### Component Registration

Components are automatically available in templates after module import:

```html
<mat-card>
  <mat-card-header>
    <mat-card-title>Example Card</mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <p>Card content goes here</p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>Action</button>
  </mat-card-actions>
</mat-card>
```

### CDK Integration

Angular CDK provides additional functionality:

- **Layout** - Responsive breakpoints and layout utilities
- **A11y** - Accessibility utilities and focus management
- **Overlay** - Positioning and overlay services
- **Drag & Drop** - Drag and drop functionality
- **Virtual Scrolling** - Performance optimization for large lists

## Usage Reference

This reference should be used to understand the available components and their intended purposes when generating code or building applications with this design system.

### Implementation Resources

**For Angular Material Components**: Consult the [Angular Material documentation](https://material.angular.io/) for:

- Complete API references
- Interactive examples and demos
- Integration guides and best practices
- Theming and customization options
- Accessibility guidelines

**For Custom Components**: When custom components are added to `component-groups.json`, refer to:

- Individual component documentation files in the `design-system-docs` folder
- This reference document for component categorization and relationships
- Integration patterns with existing Angular Material components

### Getting Started

1. **Use Angular Material First**: Check if Angular Material provides the component you need
2. **Review Available Components**: Examine the categorized component lists above
3. **Follow Integration Patterns**: Use the recommended patterns for combining components
4. **Maintain Consistency**: Ensure all implementations follow Material Design principles
5. **Document Custom Work**: If creating custom components, add them to the design system following the documentation structure

---

**Note**: This documentation template is ready to be populated with actual component groups data. Once the `component-groups.json` file contains component data, this documentation should be updated to reflect the specific components available in the design system.

## Future Updates

When component groups data becomes available:

1. Replace the placeholder sections with actual component listings
2. Categorize components based on their functionality and description
3. Add specific usage examples for custom components
4. Include component dependencies and integration patterns
5. Update the documentation structure to reflect the actual component architecture

For questions about specific component implementation or usage, refer to the individual component documentation files in the `design-system-docs` folder when they become available.
