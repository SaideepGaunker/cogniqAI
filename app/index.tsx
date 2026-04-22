import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import GradientButton from '../components/GradientButton';
import OutlineButton from '../components/OutlineButton';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import FeatureCard from '../components/FeatureCard';
import ProcessStep from '../components/ProcessStep';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Colors, FontSizes, FontWeights, Spacing, Layout, BorderRadius, Shadows } from '../constants/theme';

export default function HomeScreen() {
  const router = useRouter();
  const { width } = Dimensions.get('window');
  const isMobile = width < 768;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.heroGlowOrb1} />
        <View style={styles.heroGlowOrb2} />
        <View style={styles.heroGlowOrb3} />
        <View style={styles.heroContent}>
          <Text style={styles.heroLabel}>ENGINEERING THE NEXT GENERATION</Text>
          <Text style={[styles.heroTitle, isMobile && styles.heroTitleMobile]}>
            Building Intelligent, Scalable{'\n'}AI Solutions for the{' '}
            <Text style={styles.heroTitleAccent}>Next Generation</Text>
          </Text>
          <Text style={styles.heroSubtitle}>
            Your premier AI & Software engineering partner — transforming ideas into reliable, high-performance products.
          </Text>
          <View style={[styles.heroButtons, isMobile && styles.heroButtonsMobile]}>
            <GradientButton
              title="Explore Our Services"
              onPress={() => router.push('/services')}
              size="lg"
            />
            <OutlineButton
              title="Book a Strategy Call"
              onPress={() => router.push('/contact')}
              size="lg"
            />
          </View>
        </View>
      </View>

      {/* About Preview Section */}
      <View style={styles.section}>
        <View style={styles.sectionInner}>
          <View style={styles.aboutPreview}>
            <Text style={styles.aboutLabel}>Engineering Trust. Delivering Intelligence.</Text>
            <Text style={[styles.aboutTitle]}>
              At <Text style={styles.heroTitleAccent}>Cogniq AI</Text>
            </Text>
            <Text style={styles.aboutText}>
              we don't just develop features, we build full-scale AI systems designed for clarity, transparency, and long-term growth. From startups to enterprises, we partner with teams that want to innovate without compromising on quality.
            </Text>
            <GradientButton
              title="Know More About Us"
              onPress={() => router.push('/about-us')}
              size="md"
              style={{ alignSelf: 'flex-start', marginTop: Spacing.xl }}
            />
          </View>
        </View>
      </View>

      {/* Services Section */}
      <View style={[styles.section, { backgroundColor: Colors.surface }]}>
        <View style={styles.sectionInner}>
          <SectionHeader
            title="Our Services"
            subtitle="Solve your biggest challenges with end-to-end AI solutions."
          />
          <View style={[styles.serviceGrid, isMobile && styles.serviceGridMobile]}>
            <ServiceCard
              icon="chatbubbles-outline"
              title="AI-Powered Customer Service"
              description="Automate 80% of routine queries and turn your support center into a revenue driver."
              onPress={() => router.push('/ai-customer-support')}
            />
            <ServiceCard
              icon="calendar-outline"
              title="Automated Scheduling & Operations"
              description="Eliminate no-shows and recover thousands in lost revenue with intelligent automation."
              onPress={() => router.push('/no-show-prevention')}
            />
            <ServiceCard
              icon="cube-outline"
              title="Intelligent Inventory Management"
              description="Prevent stockouts and make data-driven decisions with predictive forecasting."
              onPress={() => router.push('/predictive-analytics')}
            />
            <ServiceCard
              icon="construct-outline"
              title="Micro Tools & Extensions"
              description="Lightweight tools powered by AI to boost productivity."
              onPress={() => router.push('/services')}
            />
          </View>
          <View style={{ alignItems: 'center', marginTop: Spacing['2xl'] }}>
            <OutlineButton
              title="View All Services"
              onPress={() => router.push('/services')}
            />
          </View>
        </View>
      </View>

      {/* Why Choose Us */}
      <View style={styles.section}>
        <View style={styles.sectionInner}>
          <SectionHeader
            title="Why Choose Us"
            subtitle="Passion for precision, commitment to quality."
          />
          <View style={[styles.featureGrid, isMobile && styles.featureGridMobile]}>
            <FeatureCard
              icon="shield-checkmark-outline"
              title="High-Trust Engineering"
              description="Research-backed methods with transparent communication."
            />
            <FeatureCard
              icon="trending-up-outline"
              title="Built for Scale"
              description="Your product grows without breaking."
            />
            <FeatureCard
              icon="sparkles-outline"
              title="Gen AI Expertise"
              description="Deep experience with LLMs and custom AI."
            />
            <FeatureCard
              icon="people-outline"
              title="User-Centered Design"
              description="Every feature is intuitive and purposeful."
            />
          </View>
        </View>
      </View>

      {/* Our Process */}
      <View style={[styles.section, { backgroundColor: Colors.surface }]}>
        <View style={styles.sectionInner}>
          <SectionHeader
            title="Our Process"
            subtitle="From concept to creation, seamlessly."
          />
          <View style={styles.processContainer}>
            <ProcessStep
              number="1"
              title="Discovery & Strategy"
              description="Understand challenges and design a strategic AI roadmap."
            />
            <ProcessStep
              number="2"
              title="Design & Prototype"
              description="Detailed wireframes and interactive prototypes."
            />
            <ProcessStep
              number="3"
              title="Development & Testing"
              description="Rigorous testing and continuous collaboration."
            />
            <ProcessStep
              number="4"
              title="Launch & Growth"
              description="Deploy and optimize for continued success."
              isLast
            />
          </View>
        </View>
      </View>

      {/* Unlock AI Banner */}
      <View style={styles.section}>
        <View style={styles.sectionInner}>
          <View style={styles.unlockBanner}>
            <View style={styles.bannerGlow} />
            <Text style={styles.unlockTitle}>Unlock AI Potential</Text>
            <Text style={styles.unlockSubtitle}>Discover how we can transform your operations</Text>
            <GradientButton
              title="Explore Solutions →"
              onPress={() => router.push('/services')}
              style={{ marginTop: Spacing.xl }}
            />
          </View>
        </View>
      </View>

      {/* Final CTA */}
      <CTASection
        title="Ready to Transform Your Workflow?"
        subtitle="Let's build a clear, actionable roadmap to solve your biggest operational challenges with AI."
        buttonText="Book a Strategy Call"
        href="/contact"
      />

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flexGrow: 1,
  },
  hero: {
    paddingTop: Layout.headerHeight + Spacing['6xl'],
    paddingBottom: Spacing['6xl'],
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    minHeight: 600,
    justifyContent: 'center',
  },
  heroGlowOrb1: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: 'rgba(79, 70, 229, 0.04)',
  },
  heroGlowOrb2: {
    position: 'absolute',
    top: '30%',
    right: '5%',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(79, 70, 229, 0.04)',
  },
  heroGlowOrb3: {
    position: 'absolute',
    bottom: '5%',
    left: '40%',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(124, 58, 237, 0.03)',
  },
  heroContent: {
    maxWidth: 800,
    alignItems: 'center',
    zIndex: 1,
  },
  heroLabel: {
    color: Colors.accent,
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.semibold,
    letterSpacing: 3,
    marginBottom: Spacing.xl,
    textTransform: 'uppercase',
  },
  heroTitle: {
    color: Colors.text,
    fontSize: FontSizes['5xl'],
    fontWeight: FontWeights.extrabold,
    textAlign: 'center',
    lineHeight: 60,
    letterSpacing: -1,
    marginBottom: Spacing.xl,
  },
  heroTitleMobile: {
    fontSize: FontSizes['3xl'],
    lineHeight: 40,
  },
  heroTitleAccent: {
    color: Colors.accent,
  },
  heroSubtitle: {
    color: Colors.textSecondary,
    fontSize: FontSizes.lg,
    textAlign: 'center',
    lineHeight: 30,
    maxWidth: 600,
    marginBottom: Spacing['2xl'],
  },
  heroButtons: {
    flexDirection: 'row',
    gap: Spacing.base,
    alignItems: 'center',
  },
  heroButtonsMobile: {
    flexDirection: 'column',
    width: '100%',
    gap: Spacing.md,
  },
  section: {
    paddingVertical: Spacing['6xl'],
    paddingHorizontal: Spacing.xl,
  },
  sectionInner: {
    maxWidth: Layout.maxContentWidth,
    width: '100%',
    alignSelf: 'center',
  },
  aboutPreview: {
    maxWidth: 700,
  },
  aboutLabel: {
    color: Colors.accent,
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.semibold,
    marginBottom: Spacing.base,
  },
  aboutTitle: {
    color: Colors.text,
    fontSize: FontSizes['4xl'],
    fontWeight: FontWeights.bold,
    marginBottom: Spacing.lg,
    lineHeight: 46,
  },
  aboutText: {
    color: Colors.textSecondary,
    fontSize: FontSizes.base,
    lineHeight: 28,
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.lg,
  },
  serviceGridMobile: {
    flexDirection: 'column',
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.base,
  },
  featureGridMobile: {
    flexDirection: 'column',
  },
  processContainer: {
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  unlockBanner: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius['2xl'],
    padding: Spacing['4xl'],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderAccent,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerGlow: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(79, 70, 229, 0.04)',
  },
  unlockTitle: {
    color: Colors.text,
    fontSize: FontSizes['3xl'],
    fontWeight: FontWeights.bold,
    textAlign: 'center',
    marginBottom: Spacing.md,
    zIndex: 1,
  },
  unlockSubtitle: {
    color: Colors.textSecondary,
    fontSize: FontSizes.base,
    textAlign: 'center',
    zIndex: 1,
  },
});
