import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ServiceDetailScreen from '../components/ServiceDetailScreen';
import Footer from '../components/Footer';
import { Colors } from '../constants/theme';

export default function CustomAIDevelopmentPage() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <ServiceDetailScreen data={{
        heroSubtitle: 'End-to-end custom AI development — from concept to production. We build AI solutions engineered specifically for your business challenges.',
        heroButtonText: 'Start Your AI Project',
        problems: [
          { icon: 'construct-outline', title: 'Off-the-Shelf Limitations', description: 'Generic AI tools cannot handle your unique business logic and edge cases.' },
          { icon: 'code-slash-outline', title: 'Talent Shortage', description: 'Hiring and retaining AI engineers is expensive and time-consuming.' },
          { icon: 'timer-outline', title: 'Long Development Cycles', description: 'Internal teams take months to ship AI features without specialized expertise.' },
        ],
        solutions: [
          { icon: 'bulb-outline', title: 'AI Strategy & Consulting', description: 'Expert guidance on where and how AI can deliver the most impact.', bullets: ['Opportunity assessment', 'Technology selection', 'ROI modeling', 'Roadmap planning'] },
          { icon: 'rocket-outline', title: 'Rapid MVP Development', description: 'Go from idea to working prototype in weeks, not months.', bullets: ['Fast iteration', 'User testing', 'Market validation', 'Scalable architecture'] },
          { icon: 'server-outline', title: 'Production AI Systems', description: 'Enterprise-grade AI built for reliability, security, and scale.', bullets: ['Microservice architecture', 'CI/CD pipelines', 'Monitoring & alerts', 'Auto-scaling'] },
        ],
        stats: [
          { value: '50+', label: 'Projects Delivered' },
          { value: '2-4wk', label: 'MVP Timeline' },
          { value: '99.9%', label: 'Uptime SLA' },
          { value: '100%', label: 'Custom Built' },
        ],
        processSteps: [
          { title: 'Discover', description: 'Deep dive into your requirements and constraints.' },
          { title: 'Architect', description: 'Design a solution that fits your tech stack.' },
          { title: 'Build', description: 'Agile development with weekly demos.' },
          { title: 'Ship', description: 'Deploy to production with full support.' },
        ],
        faqs: [
          { question: 'What technologies do you use?', answer: 'Python, TensorFlow, PyTorch, LangChain, OpenAI, and more based on your needs.' },
          { question: 'Do you provide ongoing support?', answer: 'Yes, we offer maintenance, monitoring, and continuous improvement packages.' },
          { question: 'Can you work with our existing team?', answer: 'Absolutely. We can augment your team or work as a standalone unit.' },
        ],
        ctaText: "Let's build AI that gives you a competitive edge.",
        ctaButtonText: 'Discuss Your Project',
      }} />
      <Footer />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flexGrow: 1 },
});
