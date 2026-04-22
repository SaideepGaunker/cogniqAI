import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import SectionHeader from '../components/SectionHeader';
import GradientButton from '../components/GradientButton';
import Footer from '../components/Footer';
import { Colors, FontSizes, FontWeights, Spacing, Layout, BorderRadius, Shadows } from '../constants/theme';

export default function AboutUsScreen() {
  const router = useRouter();
  const { width } = Dimensions.get('window');
  const isMobile = width < 768;

  const whatWeDo = [
    { icon: 'code-slash-outline' as const, title: 'Custom AI Systems & Integrations' },
    { icon: 'rocket-outline' as const, title: 'Rapid MVPs And Full SaaS Platforms' },
    { icon: 'settings-outline' as const, title: 'Automation & Operational Intelligence Tools' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Hero */}
      <View style={styles.hero}>
        <View style={styles.heroGlow} />
        <Text style={styles.heroLabel}>ENGINEERING THE NEXT GENERATION</Text>
        <Text style={[styles.heroTitle, isMobile && styles.heroTitleMobile]}>
          Cogniq <Text style={{ color: Colors.accent }}>AI</Text>
        </Text>
        <Text style={styles.heroSubtitle}>A Cogniq Labs Division</Text>
      </View>

      {/* Who We Are */}
      <View style={styles.section}>
        <View style={styles.sectionInner}>
          <SectionHeader label="WHO WE ARE" title="" align="left" />
          <Text style={styles.bodyText}>
            Cogniq AI is a premier AI and engineering partner that builds intelligent, scalable software for startups and enterprises. We combine deep technical expertise with real product-building experience.
          </Text>
        </View>
      </View>

      {/* Mission */}
      <View style={[styles.section, { backgroundColor: Colors.surface }]}>
        <View style={styles.sectionInner}>
          <SectionHeader title="Our Mission" align="center" />
          <View style={styles.missionCard}>
            <Ionicons name="flag-outline" size={32} color={Colors.accent} style={{ marginBottom: Spacing.lg }} />
            <Text style={styles.missionText}>
              To empower organizations by building intelligent technologies that drive clarity, efficiency, and long-term advantage. We believe modern businesses deserve more than "AI plugins" — they deserve custom-built, high-trust systems engineered for their vision, their workflows, and their scale.
            </Text>
          </View>
        </View>
      </View>

      {/* What We Do */}
      <View style={styles.section}>
        <View style={styles.sectionInner}>
          <SectionHeader label="WHAT WE DO" title="We Design and Build" subtitle="We also offer proven AI modules for support, scheduling, and inventory optimization." align="left" />
          <View style={[styles.whatWeDoGrid, isMobile && styles.whatWeDoGridMobile]}>
            {whatWeDo.map((item, i) => (
              <View key={i} style={styles.whatWeDoCard}>
                <View style={styles.whatWeDoIcon}>
                  <Ionicons name={item.icon} size={24} color={Colors.accent} />
                </View>
                <Text style={styles.whatWeDoTitle}>{item.title}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Approach */}
      <View style={[styles.section, { backgroundColor: Colors.surface }]}>
        <View style={styles.sectionInner}>
          <SectionHeader label="OUR APPROACH" title="" align="left" />
          <Text style={styles.bodyText}>
            Engineering-first, outcome-driven, and built for scale. We work in fast, collaborative cycles — turning complex ideas into clear, practical solutions.
          </Text>
        </View>
      </View>

      {/* Team */}
      <View style={styles.section}>
        <View style={styles.sectionInner}>
          <SectionHeader label="OUR TEAM" title="" align="left" />
          <Text style={styles.bodyText}>
            A focused group of engineers, designers, and AI builders from Cogniq Labs dedicated to delivering high-quality software and meaningful business impact.
          </Text>
        </View>
      </View>

      {/* CTA */}
      <View style={[styles.section, { backgroundColor: Colors.surface }]}>
        <View style={[styles.sectionInner, { alignItems: 'center' }]}>
          <Text style={styles.ctaTitle}>Cogniq AI</Text>
          <Text style={styles.ctaSubtitle}>Building intelligent AI apps that transform how you interact with technology.</Text>
          <GradientButton
            title="Book a Strategy Call"
            onPress={() => router.push('/contact')}
            size="lg"
            style={{ marginTop: Spacing.xl }}
          />
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flexGrow: 1 },
  hero: {
    paddingTop: Layout.headerHeight + Spacing['5xl'],
    paddingBottom: Spacing['5xl'],
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroGlow: {
    position: 'absolute', top: '20%', left: '50%',
    width: 500, height: 500, borderRadius: 250,
    backgroundColor: 'rgba(79, 70, 229, 0.04)',
    transform: [{ translateX: -250 }],
  },
  heroLabel: {
    color: Colors.accent, fontSize: FontSizes.sm,
    fontWeight: FontWeights.semibold, letterSpacing: 3,
    marginBottom: Spacing.xl, textTransform: 'uppercase',
  },
  heroTitle: {
    color: Colors.text, fontSize: FontSizes['5xl'],
    fontWeight: FontWeights.extrabold, textAlign: 'center',
    lineHeight: 60, marginBottom: Spacing.md,
  },
  heroTitleMobile: { fontSize: FontSizes['4xl'], lineHeight: 46 },
  heroSubtitle: {
    color: Colors.textSecondary, fontSize: FontSizes.lg, textAlign: 'center',
  },
  section: {
    paddingVertical: Spacing['5xl'], paddingHorizontal: Spacing.xl,
  },
  sectionInner: {
    maxWidth: Layout.maxContentWidth, width: '100%', alignSelf: 'center',
  },
  bodyText: {
    color: Colors.textSecondary, fontSize: FontSizes.base, lineHeight: 28, maxWidth: 700,
  },
  missionCard: {
    backgroundColor: Colors.surfaceLight, borderRadius: BorderRadius['2xl'],
    padding: Spacing['3xl'], alignItems: 'center',
    borderWidth: 1, borderColor: Colors.borderAccent,
    maxWidth: 700, alignSelf: 'center',
  },
  missionText: {
    color: Colors.textSecondary, fontSize: FontSizes.base,
    lineHeight: 28, textAlign: 'center',
  },
  whatWeDoGrid: {
    flexDirection: 'row', gap: Spacing.lg, marginTop: Spacing.xl,
  },
  whatWeDoGridMobile: { flexDirection: 'column' },
  whatWeDoCard: {
    flex: 1, backgroundColor: Colors.surface, borderRadius: BorderRadius.xl,
    padding: Spacing.xl, borderWidth: 1, borderColor: Colors.border,
    alignItems: 'center', gap: Spacing.md,
  },
  whatWeDoIcon: {
    width: 52, height: 52, borderRadius: BorderRadius.full,
    backgroundColor: Colors.accentGlow, alignItems: 'center',
    justifyContent: 'center', borderWidth: 1, borderColor: Colors.borderAccent,
  },
  whatWeDoTitle: {
    color: Colors.text, fontSize: FontSizes.base,
    fontWeight: FontWeights.semibold, textAlign: 'center',
  },
  ctaTitle: {
    color: Colors.text, fontSize: FontSizes['3xl'],
    fontWeight: FontWeights.bold, marginBottom: Spacing.md,
  },
  ctaSubtitle: {
    color: Colors.textSecondary, fontSize: FontSizes.base,
    textAlign: 'center', maxWidth: 500, lineHeight: 26,
  },
});
