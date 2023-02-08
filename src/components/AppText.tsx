import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

export default class AppText extends React.Component<TextProps> {
  render(): React.ReactNode {
    const { children, style, ...rest } = this.props;
    return (
      <Text style={[styles.text, style]} {...rest}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'purple',
  },
});
