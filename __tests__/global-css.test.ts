/**
 * Unit tests for global CSS in _layout.tsx (task 14.5)
 * Asserts the CSS string contains grid pattern and light scrollbar styles.
 */

// Read the raw source of _layout.tsx and inspect the CSS string literal
import * as fs from 'fs';
import * as path from 'path';

const layoutSource = fs.readFileSync(
  path.resolve(__dirname, '../app/_layout.tsx'),
  'utf-8'
);

describe('_layout.tsx global CSS', () => {
  it('contains white background-color (#ffffff or #FFFFFF)', () => {
    expect(layoutSource).toMatch(/background-color:\s*#[Ww][Hh][Ii][Tt][Ee]|background-color:\s*#[Ff][Ff][Ff][Ff][Ff][Ff]/);
  });

  it('contains radial-gradient for grid pattern', () => {
    expect(layoutSource).toContain('background-image: radial-gradient');
  });

  it('contains light scrollbar track color (#F3F4F6)', () => {
    expect(layoutSource).toContain('#F3F4F6');
  });

  it('contains light scrollbar thumb color (#D1D5DB)', () => {
    expect(layoutSource).toContain('#D1D5DB');
  });

  it('contains ::-webkit-scrollbar style', () => {
    expect(layoutSource).toContain('::-webkit-scrollbar');
  });
});
