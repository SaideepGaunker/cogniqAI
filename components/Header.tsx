import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSizes, FontWeights, Spacing, Layout, BorderRadius } from '../constants/theme';
import GradientButton from './GradientButton';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Our Lab', href: '/our-lab' },
  { label: 'Blogs', href: '/blog' },
];

const CONTACT_LINK = { label: 'Contact Us', href: '/contact' };

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const slideAnim = useRef(new Animated.Value(-300)).current;

  const toggleMenu = () => {
    if (menuOpen) {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setMenuOpen(false));
    } else {
      setMenuOpen(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  useEffect(() => {
    if (Platform.OS === 'web') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const navigateTo = (href: string) => {
    router.push(href as any);
    if (menuOpen) toggleMenu();
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const { width } = Dimensions.get('window');
  const isMobile = width < 768;

  return (
    <>
      <View
        style={[
          styles.header,
          isScrolled && styles.headerScrolled,
        ]}
      >
        <View style={styles.headerInner}>
          <TouchableOpacity onPress={() => navigateTo('/')} style={styles.logoContainer}>
            <View style={styles.logoIcon}>
              <Text style={styles.logoIconText}>C</Text>
            </View>
            <Text style={styles.logoText}>Cogniq AI</Text>
          </TouchableOpacity>

          {!isMobile ? (
            <View style={styles.navLinks}>
              {NAV_LINKS.map((link) => (
                <TouchableOpacity
                  key={link.href}
                  onPress={() => navigateTo(link.href)}
                  style={styles.navLinkWrapper}
                >
                  <Text
                    style={[
                      styles.navLink,
                      isActive(link.href) && styles.navLinkActive,
                    ]}
                  >
                    {link.label}
                  </Text>
                  {isActive(link.href) && <View style={styles.activeIndicator} />}
                </TouchableOpacity>
              ))}
              <GradientButton
                title={CONTACT_LINK.label}
                onPress={() => navigateTo(CONTACT_LINK.href)}
                size="sm"
              />
            </View>
          ) : (
            <TouchableOpacity onPress={toggleMenu} style={styles.hamburger}>
              <Ionicons
                name={menuOpen ? 'close' : 'menu'}
                size={28}
                color={Colors.text}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={toggleMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <Animated.View
          style={[
            styles.mobileMenu,
            { transform: [{ translateX: slideAnim }] },
          ]}
        >
          <View style={styles.mobileMenuHeader}>
            <View style={styles.logoContainer}>
              <View style={styles.logoIcon}>
                <Text style={styles.logoIconText}>C</Text>
              </View>
              <Text style={styles.logoText}>Cogniq AI</Text>
            </View>
          </View>
          <ScrollView style={styles.mobileMenuLinks}>
            {NAV_LINKS.map((link) => (
              <TouchableOpacity
                key={link.href}
                onPress={() => navigateTo(link.href)}
                style={[
                  styles.mobileNavLink,
                  isActive(link.href) && styles.mobileNavLinkActive,
                ]}
              >
                <Text
                  style={[
                    styles.mobileNavLinkText,
                    isActive(link.href) && styles.mobileNavLinkTextActive,
                  ]}
                >
                  {link.label}
                </Text>
              </TouchableOpacity>
            ))}
            <View style={styles.mobileContactButton}>
              <GradientButton
                title={CONTACT_LINK.label}
                onPress={() => navigateTo(CONTACT_LINK.href)}
                size="md"
              />
            </View>
          </ScrollView>
          <View style={styles.mobileMenuFooter}>
            <Text style={styles.tagline}>ENGINEERING THE NEXT GENERATION</Text>
          </View>
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    position: Platform.OS === 'web' ? ('fixed' as any) : 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    transition: 'all 0.3s ease' as any,
  },
  headerScrolled: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(12px)' as any,
  },
  headerInner: {
    maxWidth: Layout.maxContentWidth,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.xl,
    height: Layout.headerHeight,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  logoIcon: {
    width: 36,
    height: 36,
    borderRadius: BorderRadius.sm,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIconText: {
    color: Colors.background,
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.bold,
  },
  logoText: {
    color: Colors.text,
    fontSize: FontSizes.xl,
    fontWeight: FontWeights.bold,
    letterSpacing: 0.5,
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing['2xl'],
  },
  navLinkWrapper: {
    alignItems: 'center',
    paddingVertical: Spacing.sm,
  },
  navLink: {
    color: Colors.textSecondary,
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.medium,
    letterSpacing: 0.3,
  },
  navLinkActive: {
    color: Colors.accent,
  },
  activeIndicator: {
    width: 20,
    height: 2,
    backgroundColor: Colors.accent,
    borderRadius: 1,
    marginTop: 4,
  },
  hamburger: {
    padding: Spacing.sm,
  },
  overlay: {
    position: Platform.OS === 'web' ? ('fixed' as any) : 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.overlay,
    zIndex: 1001,
  },
  mobileMenu: {
    position: Platform.OS === 'web' ? ('fixed' as any) : 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 280,
    backgroundColor: Colors.surface,
    zIndex: 1002,
    borderRightWidth: 1,
    borderRightColor: Colors.border,
  },
  mobileMenuHeader: {
    padding: Spacing.xl,
    paddingTop: Spacing['3xl'],
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  mobileMenuLinks: {
    flex: 1,
    paddingVertical: Spacing.base,
  },
  mobileNavLink: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.base,
    borderLeftWidth: 3,
    borderLeftColor: 'transparent',
  },
  mobileNavLinkActive: {
    backgroundColor: Colors.accentGlow,
    borderLeftColor: Colors.accent,
  },
  mobileNavLinkText: {
    color: Colors.textSecondary,
    fontSize: FontSizes.base,
    fontWeight: FontWeights.medium,
  },
  mobileNavLinkTextActive: {
    color: Colors.accent,
  },
  mobileMenuFooter: {
    padding: Spacing.xl,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  mobileContactButton: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.base,
  },
  tagline: {
    color: Colors.textMuted,
    fontSize: FontSizes.xs,
    fontWeight: FontWeights.semibold,
    letterSpacing: 2,
  },
});
