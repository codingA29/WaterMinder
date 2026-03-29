import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Header from "./src/components/Header";
import Category from "./src/components/Category";
import FoodCard from "./src/components/FoodCard";

/*
  Komponen utama aplikasi
  Fungsi: menampilkan halaman utama AppFoodPicker
*/

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      {/* Header aplikasi */}
      <Header />

      {/* Kategori makanan */}
      <Category />

      {/* Daftar makanan */}
      <FoodCard />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});