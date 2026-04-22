import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Footer from '../components/Footer';
import { Colors, FontSizes, FontWeights, Spacing, Layout, BorderRadius } from '../constants/theme';

const SECTIONS = [
  { title: '1. Acceptance of Terms', text: 'By accessing and using Cogniq AI services, you accept and agree to be bound by the terms and provision of this agreement.' },
  { title: '2. Use License', text: 'Permission is granted to temporarily download one copy of Cogniq AI materials for personal, non-commercial transitory viewing only.' },
  { title: '3. Service Description', text: 'Cogniq AI provides AI-powered applications, web development services, and Chrome extensions. We reserve the right to modify or discontinue the service at any time.' },
  { title: '4. User Responsibilities', text: 'Users are responsible for providing accurate and complete information, maintaining the confidentiality of their account, and using the service in compliance with applicable laws.' },
  { title: '5. Limitation of Liability', text: 'In no event shall Cogniq AI or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.' },
  { title: '6. Contact Information', text: 'If you have any questions about these Terms of Service, please contact us at hello@cogniqai.com' },
];

export default function TermsScreen() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <View style={s.hero}>
        <Text style={s.heroLabel}>ENGINEERING THE NEXT GENERATION</Text>
        <Text style={s.heroTitle}>Terms of Service</Text>
        <Text style={s.heroSub}>Last updated: December 2025</Text>
      </View>
      <View style={s.section}>
        <View style={s.inner}>
          {SECTIONS.map((sec, i) => (
            <View key={i} style={s.block}>
              <Text style={s.blockTitle}>{sec.title}</Text>
              <Text style={s.blockText}>{sec.text}</Text>
            </View>
          ))}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flexGrow: 1 },
  hero: { paddingTop: Layout.headerHeight + Spacing['5xl'], paddingBottom: Spacing['3xl'], paddingHorizontal: Spacing.xl, alignItems: 'center' },
  heroLabel: { color: Colors.accent, fontSize: FontSizes.sm, fontWeight: FontWeights.semibold, letterSpacing: 3, marginBottom: Spacing.xl, textTransform: 'uppercase' },
  heroTitle: { color: Colors.text, fontSize: FontSizes['4xl'], fontWeight: FontWeights.extrabold, marginBottom: Spacing.md },
  heroSub: { color: Colors.textMuted, fontSize: FontSizes.base },
  section: { paddingVertical: Spacing['3xl'], paddingHorizontal: Spacing.xl },
  inner: { maxWidth: 800, width: '100%', alignSelf: 'center' },
  block: { marginBottom: Spacing['2xl'] },
  blockTitle: { color: Colors.text, fontSize: FontSizes.xl, fontWeight: FontWeights.semibold, marginBottom: Spacing.md },
  blockText: { color: Colors.textSecondary, fontSize: FontSizes.base, lineHeight: 28 },
});
