import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

/*
  Komponen Header
  Fungsi: menampilkan judul aplikasi dan search makanan
*/

const Header = () => {
  return (
    <View style={styles.container}>

      {/* Judul aplikasi */}
      <Text style={styles.title}>🍔 AppFoodPicker</Text>

      {/* Search makanan */}
      <TextInput
        style={styles.search}
        placeholder="Cari makanan favorit..."
      />

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({

  container: {
    padding: 20,
    backgroundColor: "#ff6b3d"
  },

  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10
  },

  search: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10
  }

});