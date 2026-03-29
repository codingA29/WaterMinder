import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

/*
  Komponen FoodCard
  Fungsi: menampilkan daftar makanan dengan gambar
*/

const FoodCard = () => {

  const foods = [
    {
      id: 1,
      name: "Burger King",
      rating: "4.8 ⭐",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
      id: 2,
      name: "Pizza Hut",
      rating: "4.7 ⭐",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
    },
    {
      id: 3,
      name: "Sushi House",
      rating: "4.9 ⭐",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754"
    }
  ];

  return (
    <ScrollView>

      {foods.map((food) => (
        <View key={food.id} style={styles.card}>

          {/* gambar makanan */}
          <Image source={{ uri: food.image }} style={styles.image} />

          <View style={styles.info}>

            {/* nama restoran */}
            <Text style={styles.name}>{food.name}</Text>

            {/* rating */}
            <Text style={styles.rating}>{food.rating}</Text>

          </View>

        </View>
      ))}

    </ScrollView>
  );
};

export default FoodCard;

const styles = StyleSheet.create({

  card: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 15,
    elevation: 5
  },

  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },

  info: {
    padding: 10
  },

  name: {
    fontSize: 18,
    fontWeight: "bold"
  },

  rating: {
    color: "gray"
  }

});