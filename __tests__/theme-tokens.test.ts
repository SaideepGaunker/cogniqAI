/**
 * Unit tests for theme color tokens (task 14.2)
 * Asserts each Colors.* token matches its expected light-theme value.
 */
import { Colors } from '../constants/theme';

describe('Colors theme tokens — light theme values', () => {
  it('Colors.background is #FFFFFF', () => {
    expect(Colors.background).toBe('#FFFFFF');
  });

  it('Colors.surface is #F3F4F6', () => {
    expect(Colors.surface).toBe('#F3F4F6');
  });

  it('Colors.surfaceLight is #FFFFFF', () => {
    expect(Colors.surfaceLight).toBe('#FFFFFF');
  });

  it('Colors.surfaceHover is #F9FAFB', () => {
    expect(Colors.surfaceHover).toBe('#F9FAFB');
  });

  it('Colors.accent is #4F46E5', () => {
    expect(Colors.accent).toBe('#4F46E5');
  });

  it('Colors.accentLight is #6366F1', () => {
    expect(Colors.accentLight).toBe('#6366F1');
  });

  it('Colors.accentDark is #3730A3', () => {
    expect(Colors.accentDark).toBe('#3730A3');
  });

  it('Colors.accentGlow is rgba(79, 70, 229, 0.08)', () => {
    expect(Colors.accentGlow).toBe('rgba(79, 70, 229, 0.08)');
  });

  it('Colors.gradientStart is #4F46E5', () => {
    expect(Colors.gradientStart).toBe('#4F46E5');
  });

  it('Colors.gradientEnd is #3730A3', () => {
    expect(Colors.gradientEnd).toBe('#3730A3');
  });

  it('Colors.text is #111827', () => {
    expect(Colors.text).toBe('#111827');
  });

  it('Colors.textSecondary is #6B7280', () => {
    expect(Colors.textSecondary).toBe('#6B7280');
  });

  it('Colors.textMuted is #9CA3AF', () => {
    expect(Colors.textMuted).toBe('#9CA3AF');
  });

  it('Colors.textAccent is #4F46E5', () => {
    expect(Colors.textAccent).toBe('#4F46E5');
  });

  it('Colors.textOnAccent is #FFFFFF', () => {
    expect(Colors.textOnAccent).toBe('#FFFFFF');
  });

  it('Colors.border is #E5E7EB', () => {
    expect(Colors.border).toBe('#E5E7EB');
  });

  it('Colors.borderLight is #D1D5DB', () => {
    expect(Colors.borderLight).toBe('#D1D5DB');
  });

  it('Colors.borderAccent is rgba(79, 70, 229, 0.3)', () => {
    expect(Colors.borderAccent).toBe('rgba(79, 70, 229, 0.3)');
  });

  it('Colors.overlay is rgba(0, 0, 0, 0.4)', () => {
    expect(Colors.overlay).toBe('rgba(0, 0, 0, 0.4)');
  });

  it('Colors.glassBg is rgba(255, 255, 255, 0.9)', () => {
    expect(Colors.glassBg).toBe('rgba(255, 255, 255, 0.9)');
  });
});
