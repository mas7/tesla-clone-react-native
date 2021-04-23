import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles.js";
import StyledButton from "../StyledButton";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,000</Text>
      </View>

      <View>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("custom order was pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
