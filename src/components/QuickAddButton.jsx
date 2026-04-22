import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const QuickAddButton = ({ amount, onPress, icon = "🥤" }) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.7} 
      style={styles.button} 
      onPress={() => onPress(amount)}
    >
      <View style={styles.content}>
        <Text style={styles.iconText}>{icon}</Text>
        <Text style={styles.amountLabel}>{amount}ml</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '30%', // Biar muat 3 tombol berjajar
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#E3F2FD',
    // Shadow efek
    shadowColor: '#2196F3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  content: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 24,
    marginBottom: 8,
  },
  amountLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1565C0',
  },
});

export default QuickAddButton;