import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { TextInput, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('./assets/Image.png')} // Adjust this to your actual image path
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>
          UNIVERSITY OF SCIENCE AND TECHNOLOGY OF SOUTHERN PHILIPPINES
        </Text>
        <View style={styles.headerRight}>
          <Text style={styles.userName}>Aldren</Text>
          <Icon name="chevron-down" size={24} color="white" />
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Sidebar Navigation */}
        <View style={styles.sidebar}>
          {sidebarItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.sidebarButton}>
              <Icon name={item.icon} size={24} color="black" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Main Content */}
        <ScrollView style={styles.mainContent}>
          {/* Welcome Text */}
          <Text style={styles.welcomeText}>Welcome Dean,</Text>

          {/* Action Buttons */}
          <View style={styles.actionsContainer}>
            <Card style={[styles.card, { backgroundColor: '#D6E9FF' }]}>
              <Icon name="line-scan" size={48} color="#0056A3" />
              <Text style={styles.cardText}>SCAN</Text>
            </Card>
            <Card style={[styles.card, { backgroundColor: '#FFCCCB' }]}>
              <Icon name="file-document-edit-outline" size={48} color="#A30000" />
              <Text style={styles.cardText}>MANUAL INPUT</Text>
            </Card>
            <Card style={[styles.card, { backgroundColor: '#FFF9C4' }]}>
              <Icon name="auto-upload" size={48} color="#A3A300" />
              <Text style={styles.cardText}>UPLOAD FILE</Text>
            </Card>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <TextInput
              mode="outlined"
              placeholder="Search"
              style={styles.searchInput}
              right={<TextInput.Icon name={() => <Icon name="magnify" size={24} />} />}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

// Sidebar items with icons
const sidebarItems = [
  { icon: 'menu' },
  { icon: 'home' },
  { icon: 'calendar' },
  { icon: 'file-document-edit-outline' },
  { icon: 'file-check' },
  { icon: 'file' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#2E1760',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 7,
    fontWeight: 'bold',
    fontStyle: 'arial bold',
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    color: 'white',
    fontSize: 10,
    marginRight: 5,
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    backgroundColor: 'darkgrey',
    width: 40,
    justifyContent: 'up',
    alignItems: 'center',
  },
  sidebarButton: {
    marginVertical: 12,
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  cardText: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  searchContainer: {
    marginTop: 16,
  },
  searchInput: {
    height: 50,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});

export default HomeScreen;