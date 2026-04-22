import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ServiceDetailScreen from '../components/ServiceDetailScreen';
import Footer from '../components/Footer';
import { Colors } from '../constants/theme';

export default function PredictiveAnalyticsPage() {
  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <ServiceDetailScreen data={{
        heroSubtitle: 'Turn your historical data into actionable forecasts. AI-powered predictive analytics for inventory, revenue, and demand planning.',
        heroButtonText: 'Get Predictive Insights',
        problems: [
          { icon: 'cube-outline', title: 'Stockouts & Overstock', description: 'Poor demand forecasting costs businesses millions annually.' },
          { icon: 'help-circle-outline', title: 'Guesswork Decisions', description: 'Without data-driven insights, planning is unreliable.' },
          { icon: 'trending-down-outline', title: 'Revenue Leakage', description: 'Missed trends and slow reactions lead to lost opportunities.' },
        ],
        solutions: [
          { icon: 'bar-chart-outline', title: 'Demand Forecasting', description: 'Predict future demand with machine learning models.', bullets: ['Historical analysis', 'Seasonal patterns', 'Market trends', 'Real-time adjustments'] },
          { icon: 'wallet-outline', title: 'Revenue Optimization', description: 'Maximize revenue with pricing and inventory insights.', bullets: ['Dynamic pricing', 'Margin analysis', 'Opportunity scoring', 'Growth modeling'] },
          { icon: 'layers-outline', title: 'Inventory Intelligence', description: 'Optimize stock levels across all locations.', bullets: ['Reorder automation', 'Safety stock calc', 'Supplier scoring', 'Waste reduction'] },
        ],
        stats: [
          { value: '35%', label: 'Better Forecast' },
          { value: '25%', label: 'Less Waste' },
          { value: '20%', label: 'Revenue Lift' },
          { value: '90%', label: 'Accuracy' },
        ],
        processSteps: [
          { title: 'Data Audit', description: 'Analyze your data sources and quality.' },
          { title: 'Model Design', description: 'Build custom predictive models for your use case.' },
          { title: 'Integration', description: 'Connect models to your dashboards and systems.' },
          { title: 'Optimize', description: 'Continuously improve model accuracy over time.' },
        ],
        faqs: [
          { question: 'What data do we need?', answer: 'Historical sales, inventory levels, and any contextual data you have.' },
          { question: 'How accurate are the predictions?', answer: 'Typically 85-95% accuracy, improving over time with more data.' },
          { question: 'Can it integrate with our ERP?', answer: 'Yes, we integrate with SAP, Oracle, NetSuite, and custom ERPs.' },
        ],
        ctaText: 'Start making data-driven decisions with AI.',
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
