import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WaterCircle = ({ percentage, reached, goal }) => {
  return (
    <View style={styles.container}>
      <View style={styles.outerCircle}>
        <Text style={styles.percentageText}>{percentage}%</Text>
        <Text style={styles.subText}>{reached} / {goal} ml</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E3F2FD',
    borderWidth: 8,
    borderColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10, // Efek shadow Android
    shadowColor: '#2196F3',
  },
  percentageText: { fontSize: 32, fontWeight: 'bold', color: '#1565C0' },
  subText: { fontSize: 14, color: '#546E7A' }
});

export default WaterCircle;