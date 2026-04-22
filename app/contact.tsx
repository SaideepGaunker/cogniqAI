import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GradientButton from '../components/GradientButton';
import Footer from '../components/Footer';
import { Colors, FontSizes, FontWeights, Spacing, Layout, BorderRadius } from '../constants/theme';

export default function ContactScreen() {
  const { width } = Dimensions.get('window');
  const isMobile = width < 768;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <View style={s.hero}>
        <View style={s.heroGlow} />
        <Text style={s.heroLabel}>ENGINEERING THE NEXT GENERATION</Text>
        <Text style={[s.heroTitle, isMobile && { fontSize: FontSizes['3xl'] }]}>Reach Out to Us</Text>
        <Text style={s.heroSub}>Ready to build something amazing? Share your vision and let's create the perfect AI solutions together. We'll get back to you within 24 hours.</Text>
      </View>

      <View style={s.section}>
        <View style={[s.inner, isMobile && { flexDirection: 'column' }]}>
          {/* Form */}
          <View style={s.formCard}>
            <Text style={s.formTitle}>Have a project in mind or need more info?</Text>
            <Text style={s.formSub}>Fill out the form below and our team will get back to you shortly</Text>
            <View style={s.field}>
              <Text style={s.label}>Full Name</Text>
              <TextInput style={s.input} placeholder="Your name" placeholderTextColor={Colors.textMuted} value={name} onChangeText={setName} />
            </View>
            <View style={s.field}>
              <Text style={s.label}>Email Address</Text>
              <TextInput style={s.input} placeholder="you@company.com" placeholderTextColor={Colors.textMuted} value={email} onChangeText={setEmail} keyboardType="email-address" />
            </View>
            <View style={s.field}>
              <Text style={s.label}>Company</Text>
              <TextInput style={s.input} placeholder="Your company" placeholderTextColor={Colors.textMuted} value={company} onChangeText={setCompany} />
            </View>
            <View style={s.field}>
              <Text style={s.label}>Message</Text>
              <TextInput style={[s.input, s.textarea]} placeholder="Tell us about your project..." placeholderTextColor={Colors.textMuted} value={message} onChangeText={setMessage} multiline numberOfLines={5} />
            </View>
            <GradientButton title="Send Message" onPress={() => {}} size="lg" style={{ marginTop: Spacing.lg }} />
          </View>

          {/* Info */}
          <View style={s.infoCol}>
            <View style={s.infoCard}>
              <Ionicons name="mail-outline" size={22} color={Colors.accent} />
              <Text style={s.infoLabel}>Email Us</Text>
              <Text style={s.infoText}>hello@cogniqai.com</Text>
            </View>
            <View style={s.infoCard}>
              <Ionicons name="time-outline" size={22} color={Colors.accent} />
              <Text style={s.infoLabel}>Response Time</Text>
              <Text style={s.infoText}>Within 24 hours</Text>
            </View>
            <View style={s.infoCard}>
              <Ionicons name="globe-outline" size={22} color={Colors.accent} />
              <Text style={s.infoLabel}>Location</Text>
              <Text style={s.infoText}>Remote-first, Global</Text>
            </View>
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
  inner: { maxWidth: Layout.maxContentWidth, width: '100%', alignSelf: 'center', flexDirection: 'row', gap: Spacing['3xl'] },
  formCard: { flex: 2, backgroundColor: Colors.surface, borderRadius: BorderRadius['2xl'], padding: Spacing['2xl'], borderWidth: 1, borderColor: Colors.border },
  formTitle: { color: Colors.text, fontSize: FontSizes.xl, fontWeight: FontWeights.semibold, marginBottom: Spacing.sm },
  formSub: { color: Colors.textSecondary, fontSize: FontSizes.sm, marginBottom: Spacing.xl },
  field: { marginBottom: Spacing.lg },
  label: { color: Colors.textSecondary, fontSize: FontSizes.sm, fontWeight: FontWeights.medium, marginBottom: Spacing.sm },
  input: { backgroundColor: Colors.surfaceLight, borderRadius: BorderRadius.md, borderWidth: 1, borderColor: Colors.border, paddingHorizontal: Spacing.base, paddingVertical: Spacing.md, color: Colors.text, fontSize: FontSizes.base },
  textarea: { minHeight: 120, textAlignVertical: 'top' },
  infoCol: { flex: 1, gap: Spacing.lg },
  infoCard: { backgroundColor: Colors.surface, borderRadius: BorderRadius.xl, padding: Spacing.xl, borderWidth: 1, borderColor: Colors.border, gap: Spacing.sm },
  infoLabel: { color: Colors.text, fontSize: FontSizes.base, fontWeight: FontWeights.semibold },
  infoText: { color: Colors.textSecondary, fontSize: FontSizes.sm },
});
