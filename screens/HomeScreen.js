import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import CustomListItem from '../components/CustomListItem';

const HomeScreen = () => {
  return (
    <View>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
