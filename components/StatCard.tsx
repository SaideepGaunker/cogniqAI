import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius } from '../constants/theme';

interface StatCardProps {
  value: string;
  label: string;
  style?: ViewStyle;
}

export default function StatCard({ value, label, style }: StatCardProps) {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: Spacing.xl,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.border,
    minWidth: 140,
  },
  value: {
    color: Colors.accent,
    fontSize: FontSizes['4xl'],
    fontWeight: FontWeights.extrabold,
    marginBottom: Spacing.xs,
    letterSpacing: -1,
  },
  label: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.medium,
    textAlign: 'center',
  },
});
