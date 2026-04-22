import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import { Colors, FontSizes, FontWeights, Spacing, Layout, BorderRadius } from '../constants/theme';

const POSTS = [
  { date: 'April 22, 2026', tags: ['AI','Scheduling'], title: 'AI Appointment Scheduling: The Complete Guide for Service Businesses in 2026', excerpt: 'Discover how AI appointment scheduling transforms service businesses.' },
  { date: 'April 20, 2026', tags: ['AI','Calls'], title: 'AI Phone Receptionist: Stop Losing $50K+ Per Year to Missed Calls', excerpt: 'How AI phone receptionists are solving the missed calls problem permanently.' },
  { date: 'April 17, 2026', tags: ['AI','Automation'], title: 'AI Workflow Automation Mistakes: Why 85% of Projects Fail', excerpt: 'The complete guide to avoiding every major failure point in 2026.' },
  { date: 'April 15, 2026', tags: ['AI','Trends'], title: 'AI Customer Service Trends 2026: 10 Shifts Separating Leaders', excerpt: 'What separates the companies winning from those watching from the sidelines.' },
  { date: 'April 14, 2026', tags: ['AI','Agents'], title: 'Custom AI Agents vs. Templates: The $100K Decision', excerpt: 'The choice between generic templates and custom-engineered AI agents.' },
  { date: 'April 13, 2026', tags: ['AI','Pricing'], title: 'How Much Does AI Customer Service Cost in 2026?', excerpt: '$1-3 per ticket vs $15-25 for humans. Complete pricing breakdown.' },
  { date: 'April 10, 2026', tags: ['AI','Agentic'], title: 'Agentic Workflows: Beyond Simple Automation', excerpt: 'How agentic AI orchestration transforms complex operations in real-time.' },
  { date: 'April 9, 2026', tags: ['AI','Marketing'], title: 'Agentic Workflows for Digital Marketing Agencies', excerpt: 'Plan, execute, and optimize campaigns without increasing headcount.' },
  { date: 'March 23, 2026', tags: ['AI','Voice'], title: 'Zero Missed Calls: AI Voice Agents for Local Businesses', excerpt: 'How businesses use AI voice receptionists to eliminate missed calls.' },
];

export default function BlogScreen() {
  const { width } = Dimensions.get('window');
  const isMobile = width < 768;
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <View style={s.hero}>
        <View style={s.heroGlow} />
        <Text style={s.heroLabel}>ENGINEERING THE NEXT GENERATION</Text>
        <Text style={s.heroSub}>Insights, updates, and deep dives into how AI is transforming business operations.</Text>
      </View>
      <View style={s.section}>
        <View style={s.inner}>
          <View style={[s.grid, isMobile && s.gridMobile]}>
            {POSTS.map((p, i) => (
              <BlogCard key={i} date={p.date} tags={p.tags} title={p.title} excerpt={p.excerpt} featured={i===0} onPress={() => {}} style={{ flex:1, minWidth: isMobile ? '100%' as any : 340 }} />
            ))}
          </View>
          <View style={s.pagination}>
            <View style={[s.pageBtn, s.pageBtnActive]}><Text style={[s.pageTxt, s.pageTxtActive]}>1</Text></View>
            <TouchableOpacity style={s.pageBtn}><Text style={s.pageTxt}>2</Text></TouchableOpacity>
            <TouchableOpacity style={s.pageBtn}><Text style={s.pageTxt}>3</Text></TouchableOpacity>
            <TouchableOpacity style={s.pageBtn}><Text style={s.pageTxt}>Next</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex:1, backgroundColor: Colors.background },
  content: { flexGrow:1 },
  hero: { paddingTop: Layout.headerHeight+Spacing['5xl'], paddingBottom: Spacing['3xl'], paddingHorizontal: Spacing.xl, alignItems:'center', position:'relative', overflow:'hidden' },
  heroGlow: { position:'absolute', top:'20%', left:'50%', width:500, height:500, borderRadius:250, backgroundColor:'rgba(79,70,229,0.04)', transform:[{translateX:-250}] },
  heroLabel: { color: Colors.accent, fontSize: FontSizes.sm, fontWeight: FontWeights.semibold, letterSpacing:3, marginBottom: Spacing.xl, textTransform:'uppercase' },
  heroSub: { color: Colors.textSecondary, fontSize: FontSizes.lg, textAlign:'center', maxWidth:600 },
  section: { paddingVertical: Spacing['3xl'], paddingHorizontal: Spacing.xl },
  inner: { maxWidth: Layout.maxContentWidth, width:'100%', alignSelf:'center' },
  grid: { flexDirection:'row', flexWrap:'wrap', gap: Spacing.lg },
  gridMobile: { flexDirection:'column' },
  pagination: { flexDirection:'row', justifyContent:'center', gap: Spacing.sm, marginTop: Spacing['3xl'] },
  pageBtn: { width:40, height:40, borderRadius: BorderRadius.md, backgroundColor: Colors.surface, borderWidth:1, borderColor: Colors.border, alignItems:'center', justifyContent:'center' },
  pageBtnActive: { backgroundColor: Colors.accent, borderColor: Colors.accent },
  pageTxt: { color: Colors.textSecondary, fontSize: FontSizes.sm, fontWeight: FontWeights.medium },
  pageTxtActive: { color: Colors.background },
});
