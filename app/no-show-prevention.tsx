import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ServiceDetailScreen from '../components/ServiceDetailScreen';
import Footer from '../components/Footer';
import { Colors } from '../constants/theme';

export default function NoShowPreventionPage() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <ServiceDetailScreen data={{
        heroSubtitle: 'Reduce no-shows by up to 40% with AI-powered scheduling, reminders, and intelligent rebooking automation.',
        heroButtonText: 'Prevent No-Shows Now',
        problems: [
          { icon: 'close-circle-outline', title: 'No-Show Revenue Loss', description: 'Each no-show costs $150-500 in lost revenue and wasted time.' },
          { icon: 'notifications-off-outline', title: 'Manual Reminders Fail', description: 'Staff forget to send reminders or send them at the wrong time.' },
          { icon: 'calendar-outline', title: 'Empty Slots', description: 'Cancelled appointments leave revenue-generating slots unfilled.' },
        ],
        solutions: [
          { icon: 'notifications-outline', title: 'Smart Reminders', description: 'AI-optimized reminders sent at the perfect time via the right channel.', bullets: ['SMS, email, and WhatsApp', 'Optimal timing', 'Personalized messages', 'Confirmation tracking'] },
          { icon: 'refresh-outline', title: 'Auto-Rebooking', description: 'Automatically fill cancelled slots from your waitlist.', bullets: ['Waitlist management', 'Instant rebooking', 'Priority scheduling', 'Revenue recovery'] },
          { icon: 'analytics-outline', title: 'No-Show Prediction', description: 'AI identifies high-risk appointments before they become no-shows.', bullets: ['Risk scoring', 'Proactive outreach', 'Pattern analysis', 'Custom interventions'] },
        ],
        stats: [
          { value: '40%', label: 'Fewer No-Shows' },
          { value: '$50K+', label: 'Revenue Recovered' },
          { value: '95%', label: 'Slots Filled' },
          { value: '2min', label: 'Setup Time' },
        ],
        processSteps: [
          { title: 'Analyze', description: 'Understand your no-show patterns and root causes.' },
          { title: 'Configure', description: 'Set up smart reminders and rebooking rules.' },
          { title: 'Integrate', description: 'Connect with your scheduling system.' },
          { title: 'Monitor', description: 'Track reduction in no-shows and optimize.' },
        ],
        faqs: [
          { question: 'How quickly will we see results?', answer: 'Most businesses see a 20-40% reduction in no-shows within the first month.' },
          { question: 'Does it work with our booking system?', answer: 'Yes, we integrate with most major scheduling platforms.' },
          { question: 'Can customers reschedule easily?', answer: 'Yes, the system provides easy one-click reschedule options.' },
        ],
        ctaText: 'Stop losing revenue to no-shows.',
        ctaButtonText: 'Get Started',
      }} />
      <Footer />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flexGrow: 1 },
});
