import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ServiceDetailScreen from '../components/ServiceDetailScreen';
import Footer from '../components/Footer';
import { Colors } from '../constants/theme';

export default function AIIntegrationsPage() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <ServiceDetailScreen data={{
        heroSubtitle: 'Seamlessly integrate AI capabilities into your existing systems, tools, and workflows — without disrupting your operations.',
        heroButtonText: 'Integrate AI Today',
        problems: [
          { icon: 'git-pull-request-outline', title: 'Disconnected Systems', description: 'Your tools and platforms operate in silos, leading to data gaps and inefficiency.' },
          { icon: 'warning-outline', title: 'Integration Complexity', description: 'Connecting AI to legacy systems requires deep technical expertise.' },
          { icon: 'swap-horizontal-outline', title: 'Data Fragmentation', description: 'Critical business data scattered across multiple platforms.' },
        ],
        solutions: [
          { icon: 'link-outline', title: 'API Integrations', description: 'Connect AI models with your existing software through robust APIs.', bullets: ['REST & GraphQL APIs', 'Webhook automation', 'Real-time sync', 'Rate limiting & caching'] },
          { icon: 'cloud-outline', title: 'Cloud AI Services', description: 'Leverage cloud AI services integrated into your infrastructure.', bullets: ['AWS, Azure, GCP', 'Serverless deployment', 'Auto-scaling', 'Cost optimization'] },
          { icon: 'hardware-chip-outline', title: 'Embedded AI', description: 'Embed AI directly into your applications and products.', bullets: ['SDK development', 'Edge deployment', 'Low-latency inference', 'Offline capability'] },
        ],
        stats: [
          { value: '100+', label: 'Integrations' },
          { value: '<1hr', label: 'Setup Time' },
          { value: '99.9%', label: 'Reliability' },
          { value: '0', label: 'Downtime' },
        ],
        processSteps: [
          { title: 'Assessment', description: 'Map your current tech stack and integration points.' },
          { title: 'Architecture', description: 'Design the integration architecture.' },
          { title: 'Implement', description: 'Build and test all integration points.' },
          { title: 'Monitor', description: 'Ongoing monitoring and optimization.' },
        ],
        faqs: [
          { question: 'What systems can you integrate with?', answer: 'We work with CRMs, ERPs, databases, APIs, and custom software.' },
          { question: 'Will integration disrupt our operations?', answer: 'No, we use phased rollouts and parallel systems to ensure zero downtime.' },
          { question: 'How do you handle data security?', answer: 'All integrations use encrypted connections, access controls, and audit logging.' },
        ],
        ctaText: 'Connect AI to your existing systems seamlessly.',
        ctaButtonText: 'Start Integration',
      }} />
      <Footer />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flexGrow: 1 },
});
