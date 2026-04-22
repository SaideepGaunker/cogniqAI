import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius, Shadows } from '../constants/theme';

interface ServiceCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export default function ServiceCard({ icon, title, description, onPress, style }: ServiceCardProps) {
  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper
      onPress={onPress}
      activeOpacity={0.85}
      style={[styles.card, style]}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={24} color={Colors.accent} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {onPress && (
        <View style={styles.arrow}>
          <Ionicons name="arrow-forward" size={16} color={Colors.accent} />
        </View>
      )}
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surfaceLight,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Shadows.subtle,
    minHeight: 180,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.accentGlow,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.base,
    borderWidth: 1,
    borderColor: Colors.borderAccent,
  },
  title: {
    color: Colors.text,
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.semibold,
    marginBottom: Spacing.sm,
    letterSpacing: 0.2,
  },
  description: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
    lineHeight: 22,
    flex: 1,
  },
  arrow: {
    marginTop: Spacing.base,
    alignSelf: 'flex-end',
  },
});
