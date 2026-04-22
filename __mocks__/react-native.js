// Minimal react-native mock for unit tests
const StyleSheet = {
  create: (styles) => styles,
  flatten: (style) => (Array.isArray(style) ? Object.assign({}, ...style.filter(Boolean)) : style || {}),
};

const Platform = {
  OS: 'web',
  select: (obj) => obj.web || obj.default,
};

module.exports = {
  StyleSheet,
  Platform,
  View: 'View',
  Text: 'Text',
  TouchableOpacity: 'TouchableOpacity',
  Animated: {
    Value: class { constructor(v) { this._value = v; } },
    timing: () => ({ start: (cb) => cb && cb() }),
    View: 'Animated.View',
  },
  Dimensions: {
    get: () => ({ width: 1024, height: 768 }),
  },
  ScrollView: 'ScrollView',
};
