import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ServiceDetailScreen from '../components/ServiceDetailScreen';
import Footer from '../components/Footer';
import { Colors } from '../constants/theme';

export default function WorkflowAutomationPage() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <ServiceDetailScreen data={{
        heroSubtitle: 'Eliminate manual tasks and streamline operations with intelligent AI workflow automation tailored to your business processes.',
        heroButtonText: 'Automate Your Workflows',
        problems: [
          { icon: 'repeat-outline', title: 'Repetitive Tasks', description: 'Teams waste hours on manual data entry, reporting, and routine processes.' },
          { icon: 'alert-circle-outline', title: 'Human Errors', description: 'Manual processes lead to costly mistakes and inconsistencies.' },
          { icon: 'hourglass-outline', title: 'Scaling Bottlenecks', description: 'Growth is limited by how fast your team can handle manual workflows.' },
        ],
        solutions: [
          { icon: 'git-branch-outline', title: 'Process Automation', description: 'Automate end-to-end business processes with intelligent workflows.', bullets: ['Document processing', 'Data synchronization', 'Approval workflows', 'Report generation'] },
          { icon: 'sync-outline', title: 'System Integration', description: 'Connect all your tools and platforms into a unified workflow.', bullets: ['API integrations', 'Database sync', 'Cross-platform workflows', 'Real-time triggers'] },
          { icon: 'notifications-outline', title: 'Smart Notifications', description: 'AI-driven alerts and escalations based on business rules.', bullets: ['Priority routing', 'Escalation logic', 'Custom triggers', 'Multi-channel alerts'] },
        ],
        stats: [
          { value: '70%', label: 'Time Saved' },
          { value: '95%', label: 'Error Reduction' },
          { value: '3x', label: 'Throughput' },
          { value: '50%', label: 'Cost Savings' },
        ],
        processSteps: [
          { title: 'Audit', description: 'Map your current workflows and identify automation opportunities.' },
          { title: 'Design', description: 'Architect intelligent workflow solutions.' },
          { title: 'Build', description: 'Develop and test automated workflows.' },
          { title: 'Optimize', description: 'Monitor, measure, and continuously improve.' },
        ],
        faqs: [
          { question: 'What processes can be automated?', answer: 'Almost any repetitive process — data entry, approvals, reporting, notifications, and more.' },
          { question: 'How long does implementation take?', answer: 'Simple automations in days, complex workflows in 2-6 weeks.' },
          { question: 'Will it work with our existing tools?', answer: 'Yes, we integrate with 100+ popular business tools and custom APIs.' },
        ],
        ctaText: 'Ready to eliminate manual tasks and scale efficiently?',
        ctaButtonText: 'Start Automating',
      }} />
      <Footer />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flexGrow: 1 },
});
