import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius } from '../constants/theme';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
  style?: ViewStyle;
}

export default function ProcessStep({ number, title, description, isLast, style }: ProcessStepProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.stepIndicator}>
        <View style={styles.numberCircle}>
          <Text style={styles.number}>{number}</Text>
        </View>
        {!isLast && <View style={styles.connector} />}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: Spacing.lg,
    minHeight: 100,
  },
  stepIndicator: {
    alignItems: 'center',
    width: 48,
  },
  numberCircle: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.full,
    borderWidth: 2,
    borderColor: Colors.accent,
    backgroundColor: Colors.accentGlow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.accent,
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.bold,
  },
  connector: {
    width: 2,
    flex: 1,
    backgroundColor: Colors.borderLight,
    marginVertical: Spacing.xs,
  },
  content: {
    flex: 1,
    paddingBottom: Spacing.xl,
  },
  title: {
    color: Colors.text,
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.semibold,
    marginBottom: Spacing.sm,
  },
  description: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
    lineHeight: 22,
  },
});
