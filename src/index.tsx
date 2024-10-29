import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-windows-manager' doesn't seem to be linked. Make sure: \n\n` +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const WindowsManager = NativeModules.WindowsManager
  ? NativeModules.WindowsManager
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function setAdjustNothing() {
  if (Platform.OS === 'android') {
    WindowsManager.set(WindowsManager.ADJUST_NOTHING);
  }
}

export function setAdjustPan() {
  if (Platform.OS === 'android') {
    WindowsManager.set(WindowsManager.ADJUST_PAN);
  }
}

export function setAdjustResize() {
  if (Platform.OS === 'android') {
    WindowsManager.set(WindowsManager.ADJUST_RESIZE);
  }
}
export function setAdjustUnspecified() {
  if (Platform.OS === 'android') {
    WindowsManager.set(WindowsManager.ADJUST_UNSPECIFIED);
  }
}
