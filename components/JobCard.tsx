import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSizes, FontWeights, Spacing, BorderRadius, Shadows } from '../constants/theme';

interface JobCardProps {
  title: string;
  department: string;
  type: string;
  location: string;
  onPress: () => void;
  style?: ViewStyle;
}

export default function JobCard({ title, department, type, location, onPress, style }: JobCardProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={[styles.card, style]}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name="arrow-forward" size={18} color={Colors.accent} />
      </View>
      <View style={styles.tags}>
        <View style={styles.tag}>
          <Ionicons name="briefcase-outline" size={12} color={Colors.textSecondary} />
          <Text style={styles.tagText}>{department}</Text>
        </View>
        <View style={styles.tag}>
          <Ionicons name="time-outline" size={12} color={Colors.textSecondary} />
          <Text style={styles.tagText}>{type}</Text>
        </View>
        <View style={styles.tag}>
          <Ionicons name="location-outline" size={12} color={Colors.textSecondary} />
          <Text style={styles.tagText}>{location}</Text>
        </View>
      </View>
      <View style={styles.viewRole}>
        <Text style={styles.viewRoleText}>View Role</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.base,
  },
  title: {
    color: Colors.text,
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.semibold,
    flex: 1,
    marginRight: Spacing.base,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    marginBottom: Spacing.base,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: Colors.surfaceLight,
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
  },
  tagText: {
    color: Colors.textSecondary,
    fontSize: FontSizes.xs,
    fontWeight: FontWeights.medium,
  },
  viewRole: {
    alignSelf: 'flex-start',
  },
  viewRoleText: {
    color: Colors.accent,
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.semibold,
  },
});
