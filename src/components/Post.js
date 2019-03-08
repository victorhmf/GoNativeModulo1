import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
  },

  author: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
  },

  description: {
    fontSize: 14,
    color: 'rgb(125, 129, 132)',
  },
});

const Post = ({ title, author, description }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

export default Post;
