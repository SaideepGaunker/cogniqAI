import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius } from '../constants/theme';

interface GradientButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  size?: 'sm' | 'md' | 'lg';
}

export default function GradientButton({ title, onPress, style, textStyle, size = 'md' }: GradientButtonProps) {
  const sizeStyles = {
    sm: { paddingVertical: Spacing.sm + 2, paddingHorizontal: Spacing.lg, fontSize: FontSizes.sm },
    md: { paddingVertical: Spacing.md + 2, paddingHorizontal: Spacing.xl + 4, fontSize: FontSizes.base },
    lg: { paddingVertical: Spacing.base, paddingHorizontal: Spacing['2xl'], fontSize: FontSizes.lg },
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
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
    backgroundColor: Colors.accent,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  text: {
    color: Colors.textOnAccent,
    fontWeight: FontWeights.semibold,
    letterSpacing: 0.3,
  },
});
