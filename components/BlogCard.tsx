import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius, Shadows } from '../constants/theme';

interface BlogCardProps {
  date: string;
  tags: string[];
  title: string;
  excerpt: string;
  onPress: () => void;
  style?: ViewStyle;
  featured?: boolean;
}

export default function BlogCard({ date, tags, title, excerpt, onPress, style, featured }: BlogCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[styles.card, featured && styles.featuredCard, style]}
    >
      <View style={styles.header}>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.tags}>
          {tags.slice(0, 2).map((tag, i) => (
            <View key={i} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
      <Text style={[styles.title, featured && styles.featuredTitle]} numberOfLines={3}>
        {title}
      </Text>
      <Text style={styles.excerpt} numberOfLines={featured ? 4 : 3}>
        {excerpt}
      </Text>
      <View style={styles.readMore}>
        <Text style={styles.readMoreText}>Read Article</Text>
        <Ionicons name="arrow-forward" size={14} color={Colors.accent} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Shadows.subtle,
  },
  featuredCard: {
    borderColor: Colors.borderAccent,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.base,
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  date: {
    color: Colors.textMuted,
    fontSize: FontSizes.xs,
    fontWeight: FontWeights.medium,
  },
  tags: {
    flexDirection: 'row',
    gap: Spacing.xs,
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: Colors.accentGlow,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: Colors.borderAccent,
  },
  tagText: {
    color: Colors.accent,
    fontSize: 10,
    fontWeight: FontWeights.medium,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    color: Colors.text,
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.semibold,
    lineHeight: 26,
    marginBottom: Spacing.sm,
  },
  featuredTitle: {
    fontSize: FontSizes.xl,
    lineHeight: 30,
  },
  excerpt: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
    lineHeight: 22,
    marginBottom: Spacing.base,
  },
  readMore: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  readMoreText: {
    color: Colors.accent,
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.semibold,
  },
});
