import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ServiceDetailScreen from '../components/ServiceDetailScreen';
import Footer from '../components/Footer';
import { Colors } from '../constants/theme';

export default function VoiceAIPage() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <ServiceDetailScreen data={{
        heroSubtitle: 'AI voice agents that answer calls, book appointments, and capture leads 24/7 — so you never miss a business opportunity.',
        heroButtonText: 'Get Your Voice AI Agent',
        problems: [
          { icon: 'call-outline', title: 'Missed Calls', description: 'Every missed call is a missed revenue opportunity. Most businesses miss 30-40% of calls.' },
          { icon: 'time-outline', title: 'After-Hours Gap', description: 'Customers call outside business hours but no one is there to answer.' },
          { icon: 'cash-outline', title: 'Expensive Receptionists', description: 'Hiring 24/7 staff is costly. AI handles calls at a fraction of the cost.' },
        ],
        solutions: [
          { icon: 'mic-outline', title: 'AI Phone Receptionist', description: 'Natural-sounding AI that answers calls, routes inquiries, and takes messages.', bullets: ['Natural voice interaction', 'Call routing & transfer', 'Message transcription', 'CRM logging'] },
          { icon: 'calendar-outline', title: 'Voice Appointment Booking', description: 'Customers book appointments directly through voice conversations.', bullets: ['Calendar integration', 'Confirmation calls', 'Reminder automation', 'Rescheduling support'] },
          { icon: 'analytics-outline', title: 'Call Analytics & Insights', description: 'Understand call patterns, sentiment, and conversion opportunities.', bullets: ['Call transcription', 'Sentiment analysis', 'Conversion tracking', 'Performance dashboards'] },
        ],
        stats: [
          { value: '0', label: 'Missed Calls' },
          { value: '24/7', label: 'Availability' },
          { value: '85%', label: 'Cost Savings' },
          { value: '<1s', label: 'Answer Time' },
        ],
        processSteps: [
          { title: 'Discovery', description: 'Understand your call patterns and business needs.' },
          { title: 'Voice Design', description: 'Create custom voice scripts and conversation flows.' },
          { title: 'Integration', description: 'Connect with your phone system and tools.' },
          { title: 'Launch', description: 'Go live with monitoring and optimization.' },
        ],
        faqs: [
          { question: 'Does the AI sound natural?', answer: 'Yes, we use advanced text-to-speech that sounds like a real person.' },
          { question: 'Can it handle complex calls?', answer: 'For complex queries, the AI seamlessly transfers to a human agent.' },
          { question: 'What phone systems does it integrate with?', answer: 'We integrate with most VoIP systems, Twilio, and traditional phone lines.' },
        ],
        ctaText: 'Stop missing calls and start capturing every lead.',
        ctaButtonText: 'Get Your Voice AI',
      }} />
      <Footer />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flexGrow: 1 },
});
