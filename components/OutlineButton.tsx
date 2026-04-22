import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius } from '../constants/theme';

interface OutlineButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  size?: 'sm' | 'md' | 'lg';
}

export default function OutlineButton({ title, onPress, style, textStyle, size = 'md' }: OutlineButtonProps) {
  const sizeStyles = {
    sm: { paddingVertical: Spacing.sm + 2, paddingHorizontal: Spacing.lg, fontSize: FontSizes.sm },
    md: { paddingVertical: Spacing.md + 2, paddingHorizontal: Spacing.xl + 4, fontSize: FontSizes.base },
    lg: { paddingVertical: Spacing.base, paddingHorizontal: Spacing['2xl'], fontSize: FontSizes.lg },
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.button,
        {
          paddingVertical: sizeStyles[size].paddingVertical,
          paddingHorizontal: sizeStyles[size].paddingHorizontal,
        },
        style,
      ]}
    >
      <Text style={[styles.text, { fontSize: sizeStyles[size].fontSize }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderRadius: BorderRadius.lg,
    borderWidth: 1.5,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.textSecondary,
    fontWeight: FontWeights.medium,
    letterSpacing: 0.3,
  },
});
