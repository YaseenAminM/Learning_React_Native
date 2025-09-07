import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import ShowChild from './ShowChild';

export default function UseEffectUnmountingPhase() {
  const [showChild, setShowChild] = useState(true);
  return (
    <View>
      <Text>Prent Component</Text>

      {showChild && <ShowChild />}

      <Button title="Toggle" onPress={() => setShowChild(!showChild)} />
    </View>
  );
}
UseEffectUnmountingPhase;
