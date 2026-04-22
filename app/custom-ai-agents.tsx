import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ServiceDetailScreen from '../components/ServiceDetailScreen';
import Footer from '../components/Footer';
import { Colors } from '../constants/theme';

export default function CustomAIAgentsPage() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <ServiceDetailScreen data={{
        heroSubtitle: 'Custom AI agents powered by large language models — trained on your data, integrated with your systems, and designed to understand your domain.',
        heroButtonText: 'Build Your AI Agent',
        problems: [
          { icon: 'alert-circle-outline', title: 'Generic Responses', description: "ChatGPT and off-the-shelf AI don't understand your products or industry jargon." },
          { icon: 'lock-closed-outline', title: 'Data Security Concerns', description: 'Public AI tools mean your sensitive data leaves your control.' },
          { icon: 'unlink-outline', title: 'No Integration', description: 'Disconnected from your systems, databases, and workflows.' },
        ],
        solutionIntro: 'Custom AI agents built on cutting-edge LLM technology.',
        solutions: [
          { icon: 'brain-outline', title: 'Domain-Specific AI Agents', description: 'AI trained on your documentation, products, and processes.', bullets: ['Custom knowledge base', 'Industry terminology', 'Company-specific training', 'Contextual understanding'] },
          { icon: 'search-outline', title: 'Autonomous Research Agents', description: 'AI that can browse, search, analyze, and compile information autonomously.', bullets: ['Web research capabilities', 'Data aggregation', 'Report generation', 'Continuous monitoring'] },
          { icon: 'git-network-outline', title: 'Multi-Agent Systems', description: 'Teams of specialized AI agents working together on complex problems.', bullets: ['Task orchestration', 'Agent collaboration', 'Specialized roles', 'Scalable architecture'] },
          { icon: 'shield-checkmark-outline', title: 'Enterprise GPT Solutions', description: 'Private, secure LLM deployments for enterprise use.', bullets: ['Private deployment', 'Data isolation', 'Enterprise security', 'Compliance ready'] },
        ],
        stats: [
          { value: '10x', label: 'Faster Research' },
          { value: '90%', label: 'Accuracy Rate' },
          { value: '60%', label: 'Time Savings' },
          { value: '100%', label: 'Data Security' },
        ],
        processSteps: [
          { title: 'Define Use Case', description: 'We identify the highest-impact tasks for AI automation.' },
          { title: 'Data & Training', description: 'We gather your knowledge and train the model on your domain.' },
          { title: 'Build & Integrate', description: 'We build the agent and connect it to your systems.' },
          { title: 'Deploy & Iterate', description: 'Launch with monitoring and continuously improve.' },
        ],
        testimonial: { quote: '"Our AI agent handles 80% of support questions"', author: '— SaaS Company CTO' },
        whyDifferent: {
          text: "Generic AI tools give generic answers. Our custom agents are trained on your documentation and speak your industry language.",
          bullets: ['Trained on your internal knowledge', 'Integrated with your databases, CRMs, and tools', 'Secure, private deployments', 'Continuously learning and improving'],
        },
        faqs: [
          { question: 'What is a custom AI agent?', answer: "It's an intelligent system built specifically for your business, trained on your data." },
          { question: 'How is this different from ChatGPT?', answer: "Custom LLM solutions are tailored to your use case with guardrails for your industry." },
          { question: 'Is our data secure?', answer: 'We deploy private instances with encrypted connections on your infrastructure.' },
          { question: 'How long does it take?', answer: 'Simple agents: 2-4 weeks. Complex multi-agent systems: 6-12 weeks.' },
        ],
        ctaText: "Let's design an AI solution that understands your business.",
        ctaButtonText: 'Start Building',
      }} />
      <Footer />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flexGrow: 1 },
});
