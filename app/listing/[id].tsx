import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Listing = () => {
  const { id } = useLocalSearchParams();
  console.log('id::: ', id);
  return (
    <View>
      <Text>Listing</Text>
    </View>
  );
};

export default Listing;
