import './config/ReactotronConfig';
import './config/ReactDevTools';

import React, { Component } from 'react';

import {
  Platform, StyleSheet, Text, View, ScrollView,
} from 'react-native';

import Post from '~/components/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'rgb(245, 129, 103)',
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo Node Js',
        author: 'Victor Fernandes',
        description:
          'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        id: 3,
        title: 'Aprendendo React Js',
        author: 'Victor Fernandes',
        description:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Victor Fernandes',
        description:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
      },
      {
        id: 4,
        title: 'Aprendendo Formulários',
        author: 'Victor Fernandes',
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              description={post.description}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
