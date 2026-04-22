import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Statistics = () => {
  const history = [
    { id: '1', time: '08:00', amount: '200ml' },
    { id: '2', time: '10:30', amount: '400ml' },
    { id: '3', time: '13:00', amount: '300ml' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Riwayat Hari Ini</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.timeText}>{item.time}</Text>
            <Text style={styles.amountText}>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8F9FA' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 12, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginBottom: 10,
    elevation: 2
  },
  timeText: { color: '#666' },
  amountText: { fontWeight: 'bold', color: '#2196F3' }
});

export default Statistics;