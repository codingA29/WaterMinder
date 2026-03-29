import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

/*
  Komponen Category
  Fungsi: menampilkan kategori makanan
*/

const Category = () => {

  const categories = ["🍕 Pizza", "🍔 Burger", "🍜 Mie", "🍣 Sushi", "🥗 Salad"];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

      {categories.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}

    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 20,
    margin: 10
  },

  text: {
    fontWeight: "bold"
  }

});