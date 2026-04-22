import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, FontSizes, FontWeights, Spacing } from '../constants/theme';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  style?: ViewStyle;
  light?: boolean;
}

export default function SectionHeader({ label, title, subtitle, align = 'center', style, light }: SectionHeaderProps) {
  return (
    <View style={[styles.container, align === 'center' && styles.center, style]}>
      {label && (
        <Text style={styles.label}>{label}</Text>
      )}
      <Text style={[styles.title, align === 'center' && styles.titleCenter]}>
        {title}
      </Text>
      {subtitle && (
        <Text style={[styles.subtitle, align === 'center' && styles.subtitleCenter, light && styles.subtitleLight]}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing['3xl'],
    maxWidth: 700,
  },
  center: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  label: {
    color: Colors.accent,
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.semibold,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: Spacing.md,
  },
  title: {
    color: Colors.text,
    fontSize: FontSizes['4xl'],
    fontWeight: FontWeights.bold,
    lineHeight: 44,
    letterSpacing: -0.5,
    marginBottom: Spacing.base,
  },
  titleCenter: {
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.textSecondary,
    fontSize: FontSizes.lg,
    lineHeight: 28,
  },
  subtitleCenter: {
    textAlign: 'center',
  },
  subtitleLight: {
    color: Colors.textMuted,
  },
});
