import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSizes, FontWeights, Spacing, Layout, BorderRadius } from '../constants/theme';

const FOOTER_SECTIONS = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about-us' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blogs', href: '/blog' },
    ],
  },
  {
    title: 'AI Solutions',
    links: [
      { label: 'Custom AI Agents', href: '/custom-ai-agents' },
      { label: 'Voice AI', href: '/voice-ai-automation' },
      { label: 'Customer Support AI', href: '/ai-customer-support' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Workflow Automation', href: '/ai-workflow-automation' },
      { label: 'Predictive Analytics', href: '/predictive-analytics' },
      { label: 'All Services →', href: '/services' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'All Products', href: '/our-lab' },
      { label: 'JobMail AI', href: '/our-lab' },
      { label: 'PostGenius AI', href: '/our-lab' },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: 'logo-twitter' as const, url: '#' },
  { icon: 'logo-linkedin' as const, url: '#' },
  { icon: 'logo-github' as const, url: '#' },
];

export default function Footer() {
  const router = useRouter();
  const { width } = Dimensions.get('window');
  const isMobile = width < 768;

  const navigateTo = (href: string) => {
    router.push(href as any);
  };

  return (
    <View style={styles.footer}>
      <View style={styles.footerInner}>
        {/* Top Section */}
        <View style={[styles.footerTop, isMobile && styles.footerTopMobile]}>
          <View style={styles.footerBrand}>
            <View style={styles.logoContainer}>
              <View style={styles.logoIcon}>
                <Text style={styles.logoIconText}>C</Text>
              </View>
              <Text style={styles.logoText}>Cogniq AI</Text>
            </View>
            <Text style={styles.divisionText}>A Cogniq Labs Division</Text>
            <Text style={styles.taglineText}>
              Building intelligent AI apps that transform how you interact with technology.
            </Text>
            <View style={styles.socialLinks}>
              {SOCIAL_LINKS.map((social, idx) => (
                <TouchableOpacity key={idx} style={styles.socialIcon}>
                  <Ionicons name={social.icon} size={18} color={Colors.textSecondary} />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Link Columns */}
          <View style={[styles.footerColumns, isMobile && styles.footerColumnsMobile]}>
            {FOOTER_SECTIONS.map((section) => (
              <View key={section.title} style={[styles.footerColumn, isMobile && styles.footerColumnMobile]}>
                <Text style={styles.columnTitle}>{section.title}</Text>
                {section.links.map((link) => (
                  <TouchableOpacity
                    key={link.label}
                    onPress={() => navigateTo(link.href)}
                    style={styles.footerLink}
                  >
                    <Text style={styles.footerLinkText}>{link.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Bottom Section */}
        <View style={[styles.footerBottom, isMobile && styles.footerBottomMobile]}>
          <Text style={styles.copyright}>© 2026 Cogniq AI. All Rights Reserved.</Text>
          <View style={styles.legalLinks}>
            <TouchableOpacity onPress={() => navigateTo('/terms')}>
              <Text style={styles.legalLink}>Terms of service</Text>
            </TouchableOpacity>
            <Text style={styles.legalDivider}>·</Text>
            <TouchableOpacity onPress={() => navigateTo('/privacy')}>
              <Text style={styles.legalLink}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  footerInner: {
    maxWidth: Layout.maxContentWidth,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing['5xl'],
    paddingBottom: Spacing['2xl'],
  },
  footerTop: {
    flexDirection: 'row',
    gap: Spacing['5xl'],
  },
  footerTopMobile: {
    flexDirection: 'column',
    gap: Spacing['3xl'],
  },
  footerBrand: {
    flex: 1,
    maxWidth: 280,
    gap: Spacing.md,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  logoIcon: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.sm,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIconText: {
    color: Colors.background,
    fontSize: FontSizes.base,
    fontWeight: FontWeights.bold,
  },
  logoText: {
    color: Colors.text,
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.bold,
  },
  divisionText: {
    color: Colors.accent,
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.medium,
  },
  taglineText: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
    lineHeight: 22,
  },
  socialLinks: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.sm,
  },
  socialIcon: {
    width: 36,
    height: 36,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  footerColumns: {
    flex: 2,
    flexDirection: 'row',
    gap: Spacing['3xl'],
  },
  footerColumnsMobile: {
    flexWrap: 'wrap',
    gap: Spacing['2xl'],
  },
  footerColumn: {
    flex: 1,
    minWidth: 130,
  },
  footerColumnMobile: {
    minWidth: '45%' as any,
    flex: 0,
  },
  columnTitle: {
    color: Colors.text,
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.semibold,
    marginBottom: Spacing.base,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  footerLink: {
    paddingVertical: Spacing.xs + 2,
  },
  footerLinkText: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing['2xl'],
  },
  footerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerBottomMobile: {
    flexDirection: 'column',
    gap: Spacing.base,
    alignItems: 'center',
  },
  copyright: {
    color: Colors.textMuted,
    fontSize: FontSizes.sm,
  },
  legalLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  legalLink: {
    color: Colors.textMuted,
    fontSize: FontSizes.sm,
  },
  legalDivider: {
    color: Colors.textMuted,
    fontSize: FontSizes.sm,
  },
});
