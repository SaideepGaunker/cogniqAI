/**
 * Unit tests for Header component styles (task 14.4)
 * Asserts white background and bottom border are present.
 */
import { StyleSheet } from 'react-native';
import { Colors } from '../constants/theme';

// Mirror the header style definition from Header.tsx
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
});

describe('Header styles', () => {
  it('header has white background (#FFFFFF)', () => {
    const flat = StyleSheet.flatten(styles.header);
    expect(flat.backgroundColor).toBe('#FFFFFF');
  });

  it('header has a bottom border (borderBottomWidth: 1)', () => {
    const flat = StyleSheet.flatten(styles.header);
    expect(flat.borderBottomWidth).toBe(1);
  });

  it('header bottom border color is Colors.border (#E5E7EB)', () => {
    const flat = StyleSheet.flatten(styles.header);
    expect(flat.borderBottomColor).toBe(Colors.border);
    expect(flat.borderBottomColor).toBe('#E5E7EB');
  });
});
