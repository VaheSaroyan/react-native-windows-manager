# react-native-windows-manager

The react-native-android-windows-manager package provides an interface for managing and manipulating windows in React Native Android applications. This package is particularly useful for developers looking to handle multiple windows, floating windows, or overlays in Android, allowing for a more flexible and advanced user interface. Key features may include:

- Window Management: Create, remove, and control multiple windows within the Android environment from a React Native application.
- Floating Windows and Overlays: Supports floating windows and overlays, providing options to display content over other applications.
- Window Positioning: Allows setting the position and dimensions of windows dynamically.
- Interaction Handling: Manages interactions and gestures with multiple windows or overlays.
- Customization Options: Offers customizations for window styles, opacity, size, and other UI settings.

The package can be useful for scenarios like chat bubbles, tooltips, pop-ups, or apps requiring a multitasking experience on Android. This package would typically require permissions for managing overlays and may need configurations specific to Android development within the React Native setup.

For usage details, you can refer to its documentation or example implementation, as specific methods and options may vary depending on the version and your project's requirements.

## Installation

```sh
npm install react-native-windows-manager
```

## Usage


```js
import {
  setAdjustNothing,
  setAdjustPan,
  setAdjustResize,
  setAdjustUnspecified,
} from 'react-native-windows-manager';

// ...
setAdjustNothing()
// ...
setAdjustPan()
// ...
setAdjustResize()
// ...
setAdjustUnspecified()
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
