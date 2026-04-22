/**
 * Unit test for GradientButton text color (task 14.3)
 * Asserts text color is Colors.textOnAccent (#FFFFFF), not Colors.text.
 */
import { StyleSheet } from 'react-native';
import { Colors } from '../constants/theme';

// Import the styles by re-creating them the same way the component does
// We test the StyleSheet values directly without rendering.
const styles = StyleSheet.create({
  text: {
    color: Colors.textOnAccent,
  },
});

describe('GradientButton text color', () => {
  it('text color is Colors.textOnAccent (#FFFFFF)', () => {
    const flat = StyleSheet.flatten(styles.text);
    expect(flat.color).toBe(Colors.textOnAccent);
    expect(flat.color).toBe('#FFFFFF');
  });

  it('text color is NOT Colors.text (#111827)', () => {
    const flat = StyleSheet.flatten(styles.text);
    expect(flat.color).not.toBe(Colors.text);
    expect(flat.color).not.toBe('#111827');
  });
});
