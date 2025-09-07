/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function UseEffectUpdatingPhase() {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);

  // useEffect(() => {
  //   console.log("I'm a useEffect Hook");
  // }, [counter]);
  // useEffect(() => {
  //   console.log("I'm a useEffect Hook");
  // }, [score]);

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 10,
        }}>
        UseEffect Hook
      </Text>
      {/* ============================== */}
      <Text
        style={{
          fontSize: 30,
          marginBottom: 10,
        }}>
        {counter}
      </Text>

      {/* ============================== */}
      <Text
        style={{
          fontSize: 30,
          marginBottom: 10,
        }}>
        {score}
      </Text>

      {/* ============================== */}

      <Button title="Counter" onPress={() => setCounter(counter + 1)} />
      <Button title="Score" onPress={() => setScore(score + 1)} />
      <InfoDetails count={counter} points={score} />
    </View>
  );
}

function InfoDetails({ count, points }) {
  useEffect(() => {
    console.log("I'm a child component");
  }, [count]);
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 10,
        }}>
        Info Details
      </Text>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 10,
        }}>
        {count}
      </Text>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 10,
        }}>
        {points}
      </Text>
    </View>
  );
}
