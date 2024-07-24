
# Random Color Generator React Component

This React component generates random colors in either HEX or RGB format. Users can switch between color types and generate new random colors with button clicks.

## Component Structure

The `RandomColor` component uses React's `useState` and `useEffect` hooks for state management and side effects.

### State Variables

- `typeOfColor`: Stores the current color type ("hex" or "rgb")
- `color`: Stores the current color value

### Helper Functions

1. `randomCodeGenerator(length)`: Generates a random number between 0 and the given length.

2. `generateHexColor()`: Creates a random HEX color code and updates the `color` state.

3. `generateRgbColor()`: Creates a random RGB color code and updates the `color` state.

### useEffect Hook

The `useEffect` hook is used to generate a new color whenever the `typeOfColor` state changes.

### Render Method

The component renders:
- A main container div with the background color set to the current `color` state.
- Three buttons:
  1. To switch to HEX color type
  2. To switch to RGB color type
  3. To generate a new random color of the current type
- Two display sections showing the current color type and value

## Styling

The component uses inline styles for layout and presentation:
- The main container is set to full viewport width and height
- Flex layout is used for centering content
- The color display sections use column layout with centered content

## User Interaction

- Clicking "Random Hex color" sets the color type to HEX and generates a new color
- Clicking "Random RGB color" sets the color type to RGB and generates a new color
- Clicking "Generate Random color" creates a new color of the current type

## Color type and display


1. As the background color of the main container
2. As text in the display sections, showing both the color type and value

This component provides an interactive way for users to generate and view random colors in both HEX and RGB formats.

