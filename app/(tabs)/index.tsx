import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/(modals)/login"}> Login</Link>
      <Link href={"/(modals)/booking"}> booking</Link>
      <Link href={"/listing/2342"}> Listing</Link>
    </View>
  );
};

export default Home;
