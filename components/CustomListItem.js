import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ListItem, Avatar } from 'react-native-elements/dist/list/ListItem';

const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar
      rounded
      source={{
          url: 
          'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
      }}
      />
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
