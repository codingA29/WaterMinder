import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan</Text>
      
      <View style={styles.settingItem}>
        <Text>Target Harian (ml)</Text>
        <Text style={styles.valueText}>2000 ml</Text>
      </View>

      <View style={styles.settingItem}>
        <Text>Pengingat Cerdas</Text>
        <Switch value={true} trackColor={{ false: "#767577", true: "#bbdefb" }} thumbColor={"#2196F3"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8F9FA' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  settingItem: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  valueText: { fontWeight: 'bold', color: '#2196F3' }
});

export default Settings;