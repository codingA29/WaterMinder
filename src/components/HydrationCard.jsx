import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Jika sudah install vector-icons, bisa pakai Ionicons/MaterialIcons
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HydrationCard = ({ time, amount, type = "Air Mineral" }) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <View style={styles.iconBackground}>
           {/* Placeholder Ikon Gelas */}
           <Text style={{fontSize: 20}}>💧</Text> 
        </View>
        <View style={styles.infoText}>
          <Text style={styles.typeText}>{type}</Text>
          <Text style={styles.timeText}>{time}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.amountText}>+{amount} ml</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    // Shadow untuk iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    // Elevation untuk Android
    elevation: 3,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBackground: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  typeText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
  },
  timeText: {
    fontSize: 13,
    color: '#95A5A6',
    marginTop: 2,
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
  },
});

export default HydrationCard;