import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ServiceDetailScreen from '../components/ServiceDetailScreen';
import Footer from '../components/Footer';
import { Colors } from '../constants/theme';

export default function AICustomerSupportPage() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <ServiceDetailScreen data={{
        heroSubtitle: 'AI-powered chatbots and virtual assistants that handle 80%+ of customer queries automatically. Available on your website, WhatsApp, and phone — around the clock.',
        heroButtonText: 'Get Your AI Assistant',
        problems: [
          { icon: 'moon-outline', title: 'Lost After-Hours Leads', description: '67% of customers expect instant responses. Every minute of delay reduces conversion by 7%.' },
          { icon: 'people-outline', title: 'Overwhelmed Support Teams', description: 'Staff spend 70% of time on repetitive questions that could be automated.' },
          { icon: 'cash-outline', title: 'Rising Support Costs', description: 'Hiring 24/7 staff is expensive. Average cost per support ticket: $15-35.' },
        ],
        solutionIntro: 'Custom AI solutions tailored to your business, not generic chatbots.',
        solutions: [
          { icon: 'chatbubbles-outline', title: 'AI Chat Assistants', description: 'Intelligent chatbots that understand context, handle complex queries, and escalate when needed.', bullets: ['Website integration', 'Multi-language support', 'Smart escalation to humans', 'Brand voice customization'] },
          { icon: 'logo-whatsapp', title: 'WhatsApp & SMS Automation', description: 'Meet customers where they are. Automated responses on their preferred channels.', bullets: ['WhatsApp Business API', 'SMS automation', 'Quick replies & templates', 'Media file handling'] },
          { icon: 'calendar-outline', title: 'Appointment Booking AI', description: 'Let customers book, reschedule, and cancel appointments without human intervention.', bullets: ['Calendar integration', 'Automated reminders', 'Time zone handling', 'Conflict prevention'] },
          { icon: 'funnel-outline', title: 'Lead Capture & Qualification', description: 'Automatically collect leads, qualify them based on your criteria, and route to sales.', bullets: ['Smart lead scoring', 'CRM integration', 'Automated follow-ups', 'Lead nurturing flows'] },
        ],
        stats: [
          { value: '80%+', label: 'Queries Automated' },
          { value: '24/7', label: 'Availability' },
          { value: '<3s', label: 'Response Time' },
          { value: '40%', label: 'Cost Reduction' },
        ],
        processSteps: [
          { title: 'Discovery Call', description: 'We understand your support challenges and customer journey.' },
          { title: 'Custom Design', description: 'We design AI flows tailored to your specific use cases.' },
          { title: 'Build & Test', description: 'We build, train, and thoroughly test your AI assistant.' },
          { title: 'Launch & Optimize', description: 'We deploy and continuously improve based on real data.' },
        ],
        testimonial: { quote: '"Response time dropped from 4 hours to 3 seconds"', author: '— Service Business Owner' },
        whyDifferent: {
          text: "Our AI assistants don't feel robotic. They understand context, remember conversation history, and know when to escalate to humans.",
          bullets: ['Natural language understanding, not keyword matching', 'Trained on your products, services, and FAQs', 'Seamless handoff to human agents when needed', 'Continuous learning from every conversation'],
        },
        faqs: [
          { question: 'How long does it take to set up?', answer: 'Most implementations take 2-4 weeks from kickoff to launch.' },
          { question: 'Can the AI handle complex queries?', answer: 'Yes. Our AI uses advanced NLP to understand context and nuance.' },
          { question: 'Does it integrate with our CRM?', answer: 'We integrate with Salesforce, HubSpot, Zoho, and custom APIs.' },
          { question: 'What languages does the AI support?', answer: '50+ languages out of the box.' },
          { question: 'How much can I save?', answer: 'Most businesses see 40-60% reduction in support costs.' },
        ],
        ctaText: "Let's discuss how AI can handle your customer queries 24/7.",
        ctaButtonText: 'Book a Free Consultation',
      }} />
      <Footer />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flexGrow: 1 },
});
