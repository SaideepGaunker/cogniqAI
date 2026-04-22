import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Footer from '../components/Footer';
import { Colors, FontSizes, FontWeights, Spacing, Layout } from '../constants/theme';

const SECTIONS = [
  { title: '1. Information We Collect', text: 'We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include name, email address, project requirements, and usage data.' },
  { title: '2. How We Use Your Information', text: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send related information, and respond to your comments and questions.' },
  { title: '3. Information Sharing', text: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.' },
  { title: '4. Data Security', text: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.' },
  { title: '5. Cookies and Tracking', text: 'We use cookies and similar tracking technologies to enhance your experience on our website and analyze usage patterns.' },
  { title: '6. Your Rights', text: 'You have the right to access your personal information, correct inaccurate information, request deletion, and opt-out of certain communications.' },
  { title: '7. Contact Us', text: 'If you have any questions about this Privacy Policy, please contact us at hello@cogniqai.com' },
];

export default function PrivacyScreen() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <View style={s.hero}>
        <Text style={s.heroLabel}>ENGINEERING THE NEXT GENERATION</Text>
        <Text style={s.heroTitle}>Privacy Policy</Text>
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
