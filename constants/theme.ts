// Design tokens for the CogniqAI clone
export const Colors = {
  // Backgrounds
  background: '#FFFFFF',
  surface: '#F3F4F6',
  surfaceLight: '#FFFFFF',
  surfaceHover: '#F9FAFB',

  // Brand / Accent
  accent: '#4F46E5',
  accentLight: '#6366F1',
  accentDark: '#3730A3',
  accentGlow: 'rgba(79, 70, 229, 0.08)',

  // Gradients
  gradientStart: '#4F46E5',
  gradientEnd: '#3730A3',
  gradientPurple: '#7C3AED',

  // Text
  text: '#111827',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  textAccent: '#4F46E5',
  textOnAccent: '#FFFFFF',

  // Borders
  border: '#E5E7EB',
  borderLight: '#D1D5DB',
  borderAccent: 'rgba(79, 70, 229, 0.3)',

  // Status
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.4)',
  glassBg: 'rgba(255, 255, 255, 0.9)',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
  '6xl': 80,
  '7xl': 96,
  '8xl': 128,
};

export const FontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 60,
};

export const FontWeights = {
  normal: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
  extrabold: '800' as const,
};

export const BorderRadius = {
  sm: 6,
  md: 10,
  lg: 14,
  xl: 18,
  '2xl': 24,
  full: 999,
};

export const Shadows = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  glow: {
    shadowColor: Colors.accent,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 6,
  },
  subtle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
};

export const Layout = {
  maxContentWidth: 1200,
  headerHeight: 72,
  sectionPaddingVertical: 80,
  sectionPaddingHorizontal: 24,
};
