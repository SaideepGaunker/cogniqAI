import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useRouter } from 'expo-router';
import GradientButton from './GradientButton';
import { Colors, FontSizes, FontWeights, Spacing, Layout, BorderRadius } from '../constants/theme';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  href: string;
  style?: ViewStyle;
}

export default function CTASection({ title, subtitle, buttonText, href, style }: CTASectionProps) {
  const router = useRouter();

  return (
    <View style={[styles.section, style]}>
      <View style={styles.inner}>
        <View style={styles.glowOrb1} />
        <View style={styles.glowOrb2} />
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        <GradientButton
          title={buttonText}
          onPress={() => router.push(href as any)}
          size="lg"
          style={{ marginTop: Spacing.xl }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: Spacing['6xl'],
    paddingHorizontal: Spacing.xl,
  },
  inner: {
    maxWidth: 700,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius['2xl'],
    padding: Spacing['4xl'],
    borderWidth: 1,
    borderColor: Colors.borderAccent,
    overflow: 'hidden',
    position: 'relative',
  },
  glowOrb1: {
    position: 'absolute',
    top: -60,
    right: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(79,70,229,0.04)',
  },
  glowOrb2: {
    position: 'absolute',
    bottom: -40,
    left: -40,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(79,70,229,0.04)',
  },
  title: {
    color: Colors.text,
    fontSize: FontSizes['3xl'],
    fontWeight: FontWeights.bold,
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: Spacing.base,
    zIndex: 1,
  },
  subtitle: {
    color: Colors.textSecondary,
    fontSize: FontSizes.base,
    textAlign: 'center',
    lineHeight: 26,
    maxWidth: 500,
    zIndex: 1,
  },
});
