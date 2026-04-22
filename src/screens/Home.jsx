import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import WaterCircle from '../components/WaterCircle';
import QuickAddButton from '../components/QuickAddButton';
import HydrationCard from '../components/HydrationCard';

const Home = () => {
  // State untuk melacak jumlah air yang sudah diminum
  const [reached, setReached] = useState(1300);
  const goal = 2000;
  
  // Hitung persentase untuk WaterCircle
  const percentage = Math.floor((reached / goal) * 100);

  // Fungsi untuk menambah asupan air
  const handleDrink = (amount) => {
    setReached(prev => prev + amount);
    // Di sini kamu bisa menambahkan logic untuk menyimpan data ke database/storage nanti
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Halo, Selamat Siang!</Text>
          <Text style={styles.subGreeting}>Jangan lupa minum agar tetap fokus.</Text>
        </View>

        {/* Main Progress Chart */}
        <View style={styles.chartSection}>
          <WaterCircle 
            percentage={percentage > 100 ? 100 : percentage} 
            reached={reached} 
            goal={goal} 
          />
        </View>

        {/* Quick Add Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tambah Cepat</Text>
          <View style={styles.buttonGrid}>
            <QuickAddButton amount={200} icon="☕" onPress={handleDrink} />
            <QuickAddButton amount={400} icon="🥤" onPress={handleDrink} />
            <QuickAddButton amount={600} icon="🍼" onPress={handleDrink} />
          </View>
        </View>

        {/* Recent History Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Riwayat Terakhir</Text>
          {/* Contoh data statis, nanti bisa di-map dari array state history */}
          <HydrationCard time="12:30 PM" amount={400} type="Air Mineral" />
          <HydrationCard time="09:15 AM" amount={200} type="Kopi" />
          <HydrationCard time="07:00 AM" amount={300} type="Air Mineral" />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8F9FA' 
  },
  scrollContainer: { 
    paddingBottom: 30 
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20,
  },
  greeting: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#2C3E50' 
  },
  subGreeting: { 
    fontSize: 14, 
    color: '#7F8C8D',
    marginTop: 4
  },
  chartSection: { 
    alignItems: 'center', 
    marginVertical: 20 
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#34495E',
    marginBottom: 15,
  },
  buttonGrid: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%' 
  },
});

export default Home;