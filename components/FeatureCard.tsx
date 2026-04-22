import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius } from '../constants/theme';

interface FeatureCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  style?: ViewStyle;
}

export default function FeatureCard({ icon, title, description, style }: FeatureCardProps) {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={22} color={Colors.accent} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: Spacing.xl,
    flex: 1,
    minWidth: 220,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.accentGlow,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.base,
    borderWidth: 1,
    borderColor: Colors.borderAccent,
  },
  title: {
    color: Colors.text,
    fontSize: FontSizes.base,
    fontWeight: FontWeights.semibold,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  description: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
    textAlign: 'center',
    lineHeight: 20,
  },
});
