import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import JobCard from '../components/JobCard';
import Footer from '../components/Footer';
import { Colors, FontSizes, FontWeights, Spacing, Layout } from '../constants/theme';

const JOBS = [
  { title: 'AI Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { title: 'AI Developer Intern', department: 'Engineering', type: 'Internship', location: 'Remote' },
  { title: 'Full Stack Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { title: 'Full Stack Developer Intern', department: 'Engineering', type: 'Internship', location: 'Remote' },
  { title: 'Business Development Intern', department: 'Business', type: 'Internship', location: 'Remote' },
  { title: 'Digital Marketing Intern', department: 'Marketing', type: 'Internship', location: 'Remote' },
];

export default function CareersScreen() {
  const { width } = Dimensions.get('window');
  const isMobile = width < 768;
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <View style={s.hero}>
        <View style={s.heroGlow} />
        <Text style={s.heroLabel}>ENGINEERING THE NEXT GENERATION</Text>
        <Text style={[s.heroTitle, isMobile && { fontSize: FontSizes['3xl'] }]}>Build the Future with Us</Text>
        <Text style={s.heroSub}>Join Cogniq AI and work on cutting-edge AI solutions that are transforming how businesses operate.</Text>
      </View>
      <View style={s.section}>
        <View style={s.inner}>
          <Text style={s.sectionTitle}>Open Positions</Text>
          <Text style={s.sectionSub}>Explore opportunities to grow your career at Cogniq AI.</Text>
          <View style={[s.grid, isMobile && s.gridMobile]}>
            {JOBS.map((job, i) => (
              <JobCard key={i} title={job.title} department={job.department} type={job.type} location={job.location} onPress={() => {}} style={{ flex: 1, minWidth: isMobile ? '100%' as any : 340 }} />
            ))}
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flexGrow: 1 },
  hero: { paddingTop: Layout.headerHeight + Spacing['5xl'], paddingBottom: Spacing['3xl'], paddingHorizontal: Spacing.xl, alignItems: 'center', position: 'relative', overflow: 'hidden' },
  heroGlow: { position: 'absolute', top: '20%', left: '50%', width: 500, height: 500, borderRadius: 250, backgroundColor: 'rgba(79,70,229,0.04)', transform: [{ translateX: -250 }] },
  heroLabel: { color: Colors.accent, fontSize: FontSizes.sm, fontWeight: FontWeights.semibold, letterSpacing: 3, marginBottom: Spacing.xl, textTransform: 'uppercase' },
  heroTitle: { color: Colors.text, fontSize: FontSizes['4xl'], fontWeight: FontWeights.extrabold, textAlign: 'center', marginBottom: Spacing.base },
  heroSub: { color: Colors.textSecondary, fontSize: FontSizes.lg, textAlign: 'center', maxWidth: 600, lineHeight: 28 },
  section: { paddingVertical: Spacing['3xl'], paddingHorizontal: Spacing.xl },
  inner: { maxWidth: Layout.maxContentWidth, width: '100%', alignSelf: 'center' },
  sectionTitle: { color: Colors.text, fontSize: FontSizes['2xl'], fontWeight: FontWeights.bold, marginBottom: Spacing.sm },
  sectionSub: { color: Colors.textSecondary, fontSize: FontSizes.base, marginBottom: Spacing.xl },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.lg },
  gridMobile: { flexDirection: 'column' },
});
