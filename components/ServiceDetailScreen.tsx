import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import SectionHeader from './SectionHeader';
import ServiceCard from './ServiceCard';
import StatCard from './StatCard';
import ProcessStep from './ProcessStep';
import FAQItem from './FAQItem';
import GradientButton from './GradientButton';
import { Colors, FontSizes, FontWeights, Spacing, Layout, BorderRadius, Shadows } from '../constants/theme';

export interface ServicePageData {
  heroSubtitle: string;
  heroButtonText: string;
  problems: { icon: keyof typeof Ionicons.glyphMap; title: string; description: string }[];
  solutionIntro?: string;
  solutions: { icon: keyof typeof Ionicons.glyphMap; title: string; description: string; bullets: string[] }[];
  stats: { value: string; label: string }[];
  processSteps: { title: string; description: string }[];
  testimonial?: { quote: string; author: string };
  whyDifferent?: { text: string; bullets: string[] };
  faqs: { question: string; answer: string }[];
  ctaText: string;
  ctaButtonText: string;
}

interface ServiceDetailScreenProps {
  data: ServicePageData;
}

export default function ServiceDetailScreen({ data }: ServiceDetailScreenProps) {
  const router = useRouter();
  const { width } = Dimensions.get('window');
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const getColumns = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return data.solutions.length > 3 ? 2 : data.solutions.length;
  };

  return (
    <View style={styles.container}>
      {/* Hero */}
      <View style={styles.hero}>
        <View style={styles.heroGlow} />
        <View style={styles.heroContent}>
          <Text style={styles.heroText}>{data.heroSubtitle}</Text>
          <GradientButton
            title={data.heroButtonText}
            onPress={() => router.push('/contact')}
            size="lg"
            style={{ marginTop: Spacing.xl }}
          />
        </View>
      </View>

      {/* Problems */}
      <View style={styles.section}>
        <View style={[styles.gridRow, isMobile && styles.gridCol]}>
          {data.problems.map((p, i) => (
            <View key={i} style={[styles.problemCard]}>
              <View style={styles.problemIcon}>
                <Ionicons name={p.icon} size={22} color={Colors.error} />
              </View>
              <Text style={styles.problemTitle}>{p.title}</Text>
              <Text style={styles.problemDesc}>{p.description}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Solutions */}
      <View style={[styles.section, { backgroundColor: Colors.surface }]}>
        <View style={styles.sectionInner}>
          {data.solutionIntro && (
            <Text style={styles.solutionIntro}>{data.solutionIntro}</Text>
          )}
          <View style={[styles.gridRow, isMobile && styles.gridCol, { flexWrap: 'wrap' }]}>
            {data.solutions.map((s, i) => (
              <View key={i} style={[styles.solutionCard, { minWidth: isMobile ? '100%' : '45%' as any }]}>
                <View style={styles.solIconContainer}>
                  <Ionicons name={s.icon} size={22} color={Colors.accent} />
                </View>
                <Text style={styles.solTitle}>{s.title}</Text>
                <Text style={styles.solDesc}>{s.description}</Text>
                <View style={styles.bulletList}>
                  {s.bullets.map((b, j) => (
                    <View key={j} style={styles.bulletItem}>
                      <Ionicons name="checkmark-circle" size={14} color={Colors.accent} />
                      <Text style={styles.bulletText}>{b}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.section}>
        <View style={styles.sectionInner}>
          <View style={[styles.statsRow, isMobile && styles.statsRowMobile]}>
            {data.stats.map((s, i) => (
              <StatCard key={i} value={s.value} label={s.label} style={{ flex: 1 }} />
            ))}
          </View>
        </View>
      </View>

      {/* Process */}
      <View style={[styles.section, { backgroundColor: Colors.surface }]}>
        <View style={styles.sectionInner}>
          <SectionHeader title="Our Process" align="center" />
          <View style={styles.processContainer}>
            {data.processSteps.map((step, i) => (
              <ProcessStep
                key={i}
                number={String(i + 1)}
                title={step.title}
                description={step.description}
                isLast={i === data.processSteps.length - 1}
              />
            ))}
          </View>
        </View>
      </View>

      {/* Testimonial */}
      {data.testimonial && (
        <View style={styles.section}>
          <View style={styles.sectionInner}>
            <View style={styles.testimonialCard}>
              <Ionicons name="chatbubble-outline" size={28} color={Colors.accent} style={{ marginBottom: Spacing.base }} />
              <Text style={styles.quoteText}>{data.testimonial.quote}</Text>
              <Text style={styles.quoteAuthor}>{data.testimonial.author}</Text>
            </View>
          </View>
        </View>
      )}

      {/* Why Different */}
      {data.whyDifferent && (
        <View style={[styles.section, { backgroundColor: Colors.surface }]}>
          <View style={styles.sectionInner}>
            <SectionHeader title="Why We're Different" align="center" />
            <Text style={styles.whyText}>{data.whyDifferent.text}</Text>
            <View style={styles.bulletList}>
              {data.whyDifferent.bullets.map((b, i) => (
                <View key={i} style={styles.bulletItem}>
                  <Ionicons name="checkmark-circle" size={16} color={Colors.accent} />
                  <Text style={styles.bulletText}>{b}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}

      {/* FAQ */}
      <View style={styles.section}>
        <View style={styles.sectionInner}>
          <SectionHeader title="Frequently Asked Questions" align="center" />
          <View style={styles.faqList}>
            {data.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </View>
        </View>
      </View>

      {/* CTA */}
      <View style={[styles.section, { backgroundColor: Colors.surface }]}>
        <View style={[styles.sectionInner, { alignItems: 'center' }]}>
          <Text style={styles.ctaTitle}>{data.ctaText}</Text>
          <GradientButton
            title={data.ctaButtonText}
            onPress={() => router.push('/contact')}
            size="lg"
            style={{ marginTop: Spacing.xl }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    paddingTop: Layout.headerHeight + Spacing['5xl'],
    paddingBottom: Spacing['5xl'],
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroGlow: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: 'rgba(79, 70, 229, 0.05)',
    transform: [{ translateX: -250 }],
  },
  heroContent: {
    maxWidth: 700,
    alignItems: 'center',
    zIndex: 1,
  },
  heroText: {
    color: Colors.textSecondary,
    fontSize: FontSizes.xl,
    lineHeight: 32,
    textAlign: 'center',
  },
  section: {
    paddingVertical: Spacing['5xl'],
    paddingHorizontal: Spacing.xl,
  },
  sectionInner: {
    maxWidth: Layout.maxContentWidth,
    width: '100%',
    alignSelf: 'center',
  },
  gridRow: {
    flexDirection: 'row',
    gap: Spacing.lg,
    maxWidth: Layout.maxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  gridCol: {
    flexDirection: 'column',
  },
  problemCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  problemIcon: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.md,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.2)',
  },
  problemTitle: {
    color: Colors.text,
    fontSize: FontSizes.base,
    fontWeight: FontWeights.semibold,
    marginBottom: Spacing.sm,
  },
  problemDesc: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
    lineHeight: 22,
  },
  solutionIntro: {
    color: Colors.textSecondary,
    fontSize: FontSizes.base,
    textAlign: 'center',
    marginBottom: Spacing['2xl'],
    lineHeight: 26,
  },
  solutionCard: {
    flex: 1,
    backgroundColor: Colors.surfaceLight,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  solIconContainer: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.accentGlow,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.borderAccent,
  },
  solTitle: {
    color: Colors.text,
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.semibold,
    marginBottom: Spacing.sm,
  },
  solDesc: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
    lineHeight: 22,
    marginBottom: Spacing.md,
  },
  bulletList: {
    gap: Spacing.sm,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  bulletText: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
    flex: 1,
    lineHeight: 22,
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.lg,
    justifyContent: 'center',
  },
  statsRowMobile: {
    flexWrap: 'wrap',
  },
  processContainer: {
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  testimonialCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius['2xl'],
    padding: Spacing['3xl'],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderAccent,
    maxWidth: 600,
    alignSelf: 'center',
  },
  quoteText: {
    color: Colors.text,
    fontSize: FontSizes.xl,
    fontWeight: FontWeights.medium,
    textAlign: 'center',
    lineHeight: 32,
    fontStyle: 'italic',
    marginBottom: Spacing.base,
  },
  quoteAuthor: {
    color: Colors.textMuted,
    fontSize: FontSizes.sm,
  },
  whyText: {
    color: Colors.textSecondary,
    fontSize: FontSizes.base,
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: Spacing.xl,
    maxWidth: 700,
    alignSelf: 'center',
  },
  faqList: {
    gap: Spacing.md,
    maxWidth: 700,
    alignSelf: 'center',
    width: '100%',
  },
  ctaTitle: {
    color: Colors.text,
    fontSize: FontSizes['2xl'],
    fontWeight: FontWeights.bold,
    textAlign: 'center',
    lineHeight: 34,
    maxWidth: 500,
  },
});
