import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import {
  setAdjustNothing,
  setAdjustPan,
  setAdjustResize,
  setAdjustUnspecified,
} from 'react-native-windows-manager';

export default function App() {
  const [active, setActive] = useState(0);

  const handleSetAdjustNothing = () => {
    setActive(0);
    setAdjustNothing();
  };

  const handleSetAdjustPan = () => {
    setActive(1);
    setAdjustPan();
  };

  const handleSetAdjustResize = () => {
    setActive(2);
    setAdjustResize();
  };

  const handleSetAdjustUnspecified = () => {
    setActive(3);
    setAdjustUnspecified();
  };
  const handleActive = (title: string, index: number) => {
    return active === index ? title + ' ( active )' : title;
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type here to test the keyboard"
        style={{
          backgroundColor: 'white',
          width: '100%',
        }}
      />
      <View
        style={{
          gap: 10,
          paddingBottom: 20,
        }}
      >
        <Button
          title={handleActive('adjust nothing', 0)}
          onPress={handleSetAdjustNothing}
        />
        <Button
          title={handleActive('adjust pan', 1)}
          onPress={handleSetAdjustPan}
        />
        <Button
          title={handleActive('adjust resize', 2)}
          onPress={handleSetAdjustResize}
        />
        <Button
          title={handleActive('adjust unspecified', 3)}
          onPress={handleSetAdjustUnspecified}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
