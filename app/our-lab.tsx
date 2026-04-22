import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import SectionHeader from '../components/SectionHeader';
import GradientButton from '../components/GradientButton';
import OutlineButton from '../components/OutlineButton';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Colors, FontSizes, FontWeights, Spacing, Layout, BorderRadius, Shadows } from '../constants/theme';

const POSTGENIUS_FEATURES = ['AI-Personalized Outreach', 'Seamless Extension Integration', 'Context-Aware Generation'];
const JOBMAIL_FEATURES = ['AI-Personalized Email Generation', 'Seamless LinkedIn Integration', 'Accelerated Interview And Outreach Success'];

const NEXT_GEN = [
  {
    title: 'AI Sales Agent',
    desc: 'Empower your sales team with an AI assistant that automates lead research, crafts targeted outreach, and provides real-time sales intelligence.',
    features: [
      { title: 'Automated Prospect Profiling & Research', desc: 'Instantly gather detailed prospect data, interests, and behavior across web platforms.' },
      { title: 'AI-Drafted Personalized Sales Communication', desc: 'Craft highly targeted emails and messages that resonate with unique lead pain points.' },
      { title: 'Sales Workflow Automation Boosters', desc: 'Streamline your sales funnel by automating repetitive follow-ups and CRM updates.' },
      { title: 'Intelligent Lead Prioritization (Future)', desc: 'Leverage machine learning to identify and rank leads with the highest conversion potential.' },
    ],
  },
  {
    title: 'AI Workflow Engine',
    desc: 'Automate complex business processes with intelligent workflows that adapt and optimize themselves based on your patterns and preferences.',
    features: [
      { title: 'Smart Process Automation', desc: 'Identify and eliminate redundant tasks with workflows that adapt to your business needs.' },
      { title: 'Adaptive Workflow Learning', desc: 'The engine continuously learns from user feedback to improve accuracy and speed over time.' },
      { title: 'Multi-App Integration Hub', desc: 'Seamlessly orchestrate data and tasks across your entire software ecosystem.' },
      { title: 'Performance Optimization', desc: 'Gain deep insights with real-time tracking of efficiency gains and process improvements.' },
    ],
  },
];

export default function OurLabScreen() {
  const router = useRouter();
  const { width } = Dimensions.get('window');
  const isMobile = width < 768;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Hero */}
      <View style={styles.hero}>
        <View style={styles.heroGlow} />
        <Text style={styles.heroLabel}>ENGINEERING THE NEXT GENERATION</Text>
        <Text style={[styles.heroDesc, { maxWidth: 700 }]}>
          We build advanced AI solutions alongside our consulting work. Our lab gives us the freedom to experiment, validate new ideas, and develop practical tools that show how our engineering translates into real-world impact.
        </Text>
        <Text style={styles.heroSubDesc}>
          This is where we build, test, and learn — turning innovation into usable products for our clients.
        </Text>
        <GradientButton title="Explore Our Projects" onPress={() => {}} size="lg" style={{ marginTop: Spacing.xl }} />
      </View>

      {/* Featured Projects Header */}
      <View style={styles.section}>
        <View style={styles.sectionInner}>
          <SectionHeader title="Featured Lab Projects" subtitle="Real products developed inside Cogniq Labs — proving our hands-on approach to AI engineering, automation, and applied machine intelligence." />
        </View>
      </View>

      {/* PostGenius */}
      <View style={[styles.section, { backgroundColor: Colors.surface }]}>
        <View style={styles.sectionInner}>
          <View style={[styles.projectCard, isMobile && styles.projectCardMobile]}>
            <View style={styles.projectInfo}>
              <View style={styles.projectBadge}><Text style={styles.projectBadgeText}>FEATURED</Text></View>
              <Text style={styles.projectTitle}>PostGenius</Text>
              <Text style={styles.projectDesc}>
                A sophisticated multi-modal AI content engine that automates entire content strategies. PostGenius demonstrates our ability to build complex AI systems that understand brand voice and generate contextually relevant content at scale.
              </Text>
              <View style={styles.featureList}>
                {POSTGENIUS_FEATURES.map((f, i) => (
                  <View key={i} style={styles.featureItem}>
                    <Ionicons name="checkmark-circle" size={16} color={Colors.accent} />
                    <Text style={styles.featureText}>{f}</Text>
                  </View>
                ))}
              </View>
              <GradientButton title="Try PostGenius for Free" onPress={() => Linking.openURL('https://postgenius.cogniqlabs.com')} style={{ alignSelf: 'flex-start', marginTop: Spacing.lg }} />
            </View>
            <View style={styles.projectVisual}>
              <View style={styles.mockScreen}>
                <View style={styles.mockDots}><View style={[styles.dot, { backgroundColor: '#EF4444' }]} /><View style={[styles.dot, { backgroundColor: '#F59E0B' }]} /><View style={[styles.dot, { backgroundColor: '#10B981' }]} /></View>
                <Text style={styles.mockTitle}>PostGenius AI</Text>
                <View style={styles.mockLines}><View style={styles.mockLine} /><View style={[styles.mockLine, { width: '70%' }]} /><View style={[styles.mockLine, { width: '85%' }]} /></View>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* JobMail */}
      <View style={styles.section}>
        <View style={styles.sectionInner}>
          <View style={[styles.projectCard, isMobile && styles.projectCardMobile]}>
            <View style={styles.projectInfo}>
              <View style={styles.projectBadge}><Text style={styles.projectBadgeText}>FEATURED</Text></View>
              <Text style={styles.projectTitle}>JobMail AI</Text>
              <Text style={styles.projectDesc}>
                An intelligent Chrome extension showcasing our expertise in browser automation and highly personalized AI generation. JobMail AI integrates seamlessly with platforms like LinkedIn to understand context and create tailored outreach for specific use cases.
              </Text>
              <View style={styles.featureList}>
                {JOBMAIL_FEATURES.map((f, i) => (
                  <View key={i} style={styles.featureItem}>
                    <Ionicons name="checkmark-circle" size={16} color={Colors.accent} />
                    <Text style={styles.featureText}>{f}</Text>
                  </View>
                ))}
              </View>
              <GradientButton title="Try JobMail for Free" onPress={() => Linking.openURL('https://jobmail.cogniqlabs.com')} style={{ alignSelf: 'flex-start', marginTop: Spacing.lg }} />
            </View>
            <View style={styles.projectVisual}>
              <View style={styles.mockScreen}>
                <View style={styles.mockDots}><View style={[styles.dot, { backgroundColor: '#EF4444' }]} /><View style={[styles.dot, { backgroundColor: '#F59E0B' }]} /><View style={[styles.dot, { backgroundColor: '#10B981' }]} /></View>
                <Text style={styles.mockTitle}>JobMail AI</Text>
                <View style={styles.mockLines}><View style={styles.mockLine} /><View style={[styles.mockLine, { width: '60%' }]} /><View style={[styles.mockLine, { width: '80%' }]} /></View>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Next-Gen */}
      <View style={[styles.section, { backgroundColor: Colors.surface }]}>
        <View style={styles.sectionInner}>
          <SectionHeader title="Next-Gen AI Solutions" subtitle="AI solutions currently in development — designed to transform how you work, scale, and grow." />
          {NEXT_GEN.map((project, idx) => (
            <View key={idx} style={[styles.nextGenCard, idx > 0 && { marginTop: Spacing['3xl'] }]}>
              <Text style={styles.nextGenTitle}>{project.title}</Text>
              <Text style={styles.nextGenDesc}>{project.desc}</Text>
              <Text style={styles.agentLabel}>What our Agents Do</Text>
              <View style={styles.agentFeatures}>
                {project.features.map((f, i) => (
                  <View key={i} style={styles.agentFeatureCard}>
                    <Ionicons name="flash-outline" size={18} color={Colors.accent} />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.agentFeatureTitle}>{f.title}</Text>
                      <Text style={styles.agentFeatureDesc}>{f.desc}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>

      <CTASection
        title="The same innovation that powers our internal lab projects can be applied to your business."
        subtitle="If you have a unique challenge or want a custom AI solution, we're ready to build something remarkable together."
        buttonText="Start Your AI Journey"
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
    position: 'absolute', top: '15%', left: '50%', width: 500, height: 500,
    borderRadius: 250, backgroundColor: 'rgba(79, 70, 229, 0.04)', transform: [{ translateX: -250 }],
  },
  heroLabel: {
    color: Colors.accent, fontSize: FontSizes.sm, fontWeight: FontWeights.semibold,
    letterSpacing: 3, marginBottom: Spacing.xl, textTransform: 'uppercase',
  },
  heroDesc: {
    color: Colors.textSecondary, fontSize: FontSizes.lg, textAlign: 'center', lineHeight: 30,
  },
  heroSubDesc: {
    color: Colors.textMuted, fontSize: FontSizes.base, textAlign: 'center', marginTop: Spacing.md,
  },
  section: { paddingVertical: Spacing['5xl'], paddingHorizontal: Spacing.xl },
  sectionInner: { maxWidth: Layout.maxContentWidth, width: '100%', alignSelf: 'center' },
  projectCard: { flexDirection: 'row', gap: Spacing['3xl'], alignItems: 'center' },
  projectCardMobile: { flexDirection: 'column' },
  projectInfo: { flex: 1 },
  projectBadge: {
    backgroundColor: Colors.accentGlow, paddingHorizontal: Spacing.md, paddingVertical: 4,
    borderRadius: BorderRadius.full, alignSelf: 'flex-start', marginBottom: Spacing.md,
    borderWidth: 1, borderColor: Colors.borderAccent,
  },
  projectBadgeText: { color: Colors.accent, fontSize: 10, fontWeight: FontWeights.bold, letterSpacing: 1 },
  projectTitle: { color: Colors.text, fontSize: FontSizes['3xl'], fontWeight: FontWeights.bold, marginBottom: Spacing.md },
  projectDesc: { color: Colors.textSecondary, fontSize: FontSizes.base, lineHeight: 26, marginBottom: Spacing.lg },
  featureList: { gap: Spacing.sm },
  featureItem: { flexDirection: 'row', alignItems: 'center', gap: Spacing.sm },
  featureText: { color: Colors.textSecondary, fontSize: FontSizes.sm },
  projectVisual: { flex: 1, alignItems: 'center' },
  mockScreen: {
    backgroundColor: Colors.surfaceLight, borderRadius: BorderRadius.xl, padding: Spacing.xl,
    width: '100%', maxWidth: 350, minHeight: 200, borderWidth: 1, borderColor: Colors.border,
  },
  mockDots: { flexDirection: 'row', gap: 6, marginBottom: Spacing.lg },
  dot: { width: 10, height: 10, borderRadius: 5 },
  mockTitle: { color: Colors.text, fontSize: FontSizes.lg, fontWeight: FontWeights.bold, marginBottom: Spacing.lg },
  mockLines: { gap: Spacing.sm },
  mockLine: { height: 8, backgroundColor: Colors.surfaceHover, borderRadius: 4, width: '100%' },
  nextGenCard: {
    backgroundColor: Colors.surfaceLight, borderRadius: BorderRadius['2xl'],
    padding: Spacing['2xl'], borderWidth: 1, borderColor: Colors.border,
  },
  nextGenTitle: { color: Colors.text, fontSize: FontSizes['2xl'], fontWeight: FontWeights.bold, marginBottom: Spacing.md },
  nextGenDesc: { color: Colors.textSecondary, fontSize: FontSizes.base, lineHeight: 26, marginBottom: Spacing.xl },
  agentLabel: { color: Colors.accent, fontSize: FontSizes.sm, fontWeight: FontWeights.semibold, marginBottom: Spacing.base, letterSpacing: 1 },
  agentFeatures: { gap: Spacing.md },
  agentFeatureCard: {
    flexDirection: 'row', gap: Spacing.md, backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg, padding: Spacing.base, borderWidth: 1, borderColor: Colors.border,
  },
  agentFeatureTitle: { color: Colors.text, fontSize: FontSizes.sm, fontWeight: FontWeights.semibold, marginBottom: 4 },
  agentFeatureDesc: { color: Colors.textSecondary, fontSize: FontSizes.xs, lineHeight: 20 },
});
