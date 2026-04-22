import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import FeatureCard from '../components/FeatureCard';
import ProcessStep from '../components/ProcessStep';
import GradientButton from '../components/GradientButton';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Colors, FontSizes, FontWeights, Spacing, Layout, BorderRadius } from '../constants/theme';

const PILLARS = [
  { icon: 'code-slash-outline' as const, title: 'Engineering Excellence', desc: "We don't use templates. Every solution is custom-engineered for your specific workflows, data, and goals." },
  { icon: 'analytics-outline' as const, title: 'Measurable Outcomes', desc: 'We focus on ROI from day one. Every project is designed to deliver quantifiable business impact.' },
  { icon: 'people-outline' as const, title: 'End-to-End Partnership', desc: 'From initial strategy to full-scale deployment and long-term optimization — we stay with you.' },
];

const SERVICES = [
  { icon: 'sparkles-outline' as const, title: 'Generative AI & LLMs', desc: 'Custom RAG pipelines, fine-tuned models, and intelligent agentic workflows.' },
  { icon: 'eye-outline' as const, title: 'Vision & Signal AI', desc: 'Object detection, recognition, and complex sensor data interpretation.' },
  { icon: 'trending-up-outline' as const, title: 'Predictive Intelligence', desc: 'Turn historic data into future-proof revenue and inventory models.' },
  { icon: 'mic-outline' as const, title: 'Voice & Audio Tech', desc: 'Natural language processing and real-time audio analysis.' },
  { icon: 'chatbubbles-outline' as const, title: 'AI Customer Service', desc: 'Automate 80%+ of support queries while improving satisfaction.' },
  { icon: 'settings-outline' as const, title: 'Process Automation', desc: 'Eliminate manual tasks and recover thousands in productivity.' },
  { icon: 'bar-chart-outline' as const, title: 'Predictive Analytics', desc: 'Make data-driven decisions with AI that forecasts and optimizes.' },
];

const SERVICE_LINKS = [
  { label: 'Customer Support AI', href: '/ai-customer-support' },
  { label: 'Voice AI', href: '/voice-ai-automation' },
  { label: 'Workflow Automation', href: '/ai-workflow-automation' },
  { label: 'No-Show Prevention', href: '/no-show-prevention' },
  { label: 'Custom AI Agents', href: '/custom-ai-agents' },
  { label: 'Predictive Analytics', href: '/predictive-analytics' },
  { label: 'Custom AI Development', href: '/custom-ai-development' },
  { label: 'AI Integrations', href: '/ai-integrations' },
];

export default function ServicesScreen() {
  const router = useRouter();
  const { width } = Dimensions.get('window');
  const isMobile = width < 768;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Hero */}
      <View style={styles.hero}>
        <View style={styles.heroGlow} />
        <Text style={styles.heroLabel}>ENGINEERING THE NEXT GENERATION</Text>
        <Text style={[styles.heroSubtitle, { maxWidth: 700 }]}>
          From customer service automation to predictive analytics — we don't just implement AI, we engineer measurable business outcomes tailored to your needs.
        </Text>
        <GradientButton title="Discuss Your Vision" onPress={() => router.push('/contact')} size="lg" style={{ marginTop: Spacing.xl }} />
      </View>

      {/* Pillars */}
      <View style={[styles.section, { backgroundColor: Colors.surface }]}>
        <View style={styles.sectionInner}>
          <View style={[styles.pillarGrid, isMobile && styles.colGrid]}>
            {PILLARS.map((p, i) => (
              <FeatureCard key={i} icon={p.icon} title={p.title} description={p.desc} />
            ))}
          </View>
        </View>
      </View>

      {/* Services Grid */}
      <View style={styles.section}>
        <View style={styles.sectionInner}>
          <SectionHeader
            subtitle="These are examples of what we deliver. Your challenge might be different — and that's exactly what we specialize in."
            title=""
          />
          <View style={[styles.servicesGrid, isMobile && styles.colGrid]}>
            {SERVICES.map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} description={s.desc} style={{ flex: 1, minWidth: isMobile ? '100%' as any : 300 }} />
            ))}
          </View>
          <View style={styles.customNote}>
            <Ionicons name="bulb-outline" size={20} color={Colors.accent} />
            <Text style={styles.customNoteText}>
              Every business is unique. Whether you need a custom AI agent, workflow automation, data intelligence, or something entirely new — we build it from scratch.
            </Text>
          </View>
        </View>
      </View>

      {/* Process */}
      <View style={[styles.section, { backgroundColor: Colors.surface }]}>
        <View style={styles.sectionInner}>
          <SectionHeader title="Our Process" align="center" />
          <View style={styles.processContainer}>
            <ProcessStep number="1" title="Discovery" description="We understand your challenges and map out opportunities." />
            <ProcessStep number="2" title="Strategy" description="We design a custom AI roadmap with clear milestones." />
            <ProcessStep number="3" title="Build" description="We engineer, test, and iterate until it's production-ready." />
            <ProcessStep number="4" title="Scale" description="We deploy, monitor, and optimize for continued growth." isLast />
          </View>
        </View>
      </View>

      {/* Explore Services Links */}
      <View style={styles.section}>
        <View style={styles.sectionInner}>
          <SectionHeader title="Explore Our Services" align="center" />
          <View style={[styles.linksGrid, isMobile && styles.linksGridMobile]}>
            {SERVICE_LINKS.map((link, i) => (
              <TouchableOpacity key={i} onPress={() => router.push(link.href as any)} style={styles.serviceLink}>
                <Ionicons name="arrow-forward-circle-outline" size={18} color={Colors.accent} />
                <Text style={styles.serviceLinkText}>{link.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <CTASection
        title="Ready to Build AI That Actually Works?"
        subtitle="Stop settling for generic solutions. Let's discuss your unique challenges and build something remarkable together."
        buttonText="Book Your Strategy Call"
        href="/contact"
      />

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flexGrow: 1 },
  hero: {
    paddingTop: Layout.headerHeight + Spacing['5xl'], paddingBottom: Spacing['5xl'],
    paddingHorizontal: Spacing.xl, alignItems: 'center', position: 'relative', overflow: 'hidden',
  },
  heroGlow: {
    position: 'absolute', top: '20%', left: '50%', width: 500, height: 500, borderRadius: 250,
    backgroundColor: 'rgba(79, 70, 229, 0.04)', transform: [{ translateX: -250 }],
  },
  heroLabel: {
    color: Colors.accent, fontSize: FontSizes.sm, fontWeight: FontWeights.semibold,
    letterSpacing: 3, marginBottom: Spacing.xl, textTransform: 'uppercase',
  },
  heroSubtitle: {
    color: Colors.textSecondary, fontSize: FontSizes.lg, textAlign: 'center', lineHeight: 30,
  },
  section: { paddingVertical: Spacing['5xl'], paddingHorizontal: Spacing.xl },
  sectionInner: { maxWidth: Layout.maxContentWidth, width: '100%', alignSelf: 'center' },
  pillarGrid: { flexDirection: 'row', gap: Spacing.lg },
  colGrid: { flexDirection: 'column' },
  servicesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.lg },
  customNote: {
    flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.md,
    backgroundColor: Colors.surface, borderRadius: BorderRadius.lg,
    padding: Spacing.xl, marginTop: Spacing['2xl'],
    borderWidth: 1, borderColor: Colors.borderAccent,
  },
  customNoteText: { color: Colors.textSecondary, fontSize: FontSizes.sm, lineHeight: 22, flex: 1 },
  processContainer: { maxWidth: 600, alignSelf: 'center', width: '100%' },
  linksGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.md, justifyContent: 'center' },
  linksGridMobile: { flexDirection: 'column' },
  serviceLink: {
    flexDirection: 'row', alignItems: 'center', gap: Spacing.sm,
    backgroundColor: Colors.surface, borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.md, paddingHorizontal: Spacing.lg,
    borderWidth: 1, borderColor: Colors.border, minWidth: 220,
  },
  serviceLinkText: { color: Colors.text, fontSize: FontSizes.sm, fontWeight: FontWeights.medium },
});
