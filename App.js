import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {

  const menuMakanan = [
    { id: "1", nama: "Nasi Goreng", harga: "Rp 15.000" },
    { id: "2", nama: "Mie Ayam", harga: "Rp 12.000" },
    { id: "3", nama: "Bakso", harga: "Rp 13.000" },
    { id: "4", nama: "Sate Ayam", harga: "Rp 20.000" },
    { id: "5", nama: "Es Teh", harga: "Rp 5.000" },
  ];

  const renderMenu = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nama}>{item.nama}</Text>
      <Text style={styles.harga}>{item.harga}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Makanan Hari Ini</Text>

      <FlatList
        data={menuMakanan}
        renderItem={renderMenu}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
    marginTop: 40
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3
  },

  nama: {
    fontSize: 18,
    fontWeight: "bold"
  },

  harga: {
    fontSize: 16,
    color: "green"
  }
});