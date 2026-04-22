import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius } from '../constants/theme';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={[styles.container, expanded && styles.containerExpanded]}>
      <TouchableOpacity onPress={toggle} style={styles.header} activeOpacity={0.7}>
        <Text style={[styles.question, expanded && styles.questionExpanded]}>{question}</Text>
        <View style={[styles.iconWrapper, expanded && styles.iconWrapperExpanded]}>
          <Ionicons
            name={expanded ? 'chevron-up' : 'chevron-down'}
            size={18}
            color={expanded ? Colors.accent : Colors.textSecondary}
          />
        </View>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{answer}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  containerExpanded: {
    borderColor: Colors.borderAccent,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Spacing.lg,
    gap: Spacing.base,
  },
  question: {
    color: Colors.text,
    fontSize: FontSizes.base,
    fontWeight: FontWeights.medium,
    flex: 1,
    lineHeight: 24,
  },
  questionExpanded: {
    color: Colors.accent,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapperExpanded: {
    backgroundColor: Colors.accentGlow,
  },
  answerContainer: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.lg,
  },
  answer: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
    lineHeight: 24,
  },
});
