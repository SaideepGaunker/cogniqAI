import React from 'react';
import { ScrollView, View, StyleSheet, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Colors } from '../constants/theme';

export default function RootLayout() {
  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <Header />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.background },
          animation: 'fade',
        }}
      />
      {Platform.OS === 'web' && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
              * { box-sizing: border-box; margin: 0; padding: 0; }
              html, body, #root { 
                height: 100%; 
                background-color: #FFFFFF; 
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                scroll-behavior: smooth;
              }
              body {
                background-image: radial-gradient(circle, #E5E7EB 1px, transparent 1px);
                background-size: 24px 24px;
              }
              ::-webkit-scrollbar { width: 8px; }
              ::-webkit-scrollbar-track { background: #F3F4F6; }
              ::-webkit-scrollbar-thumb { background: #D1D5DB; border-radius: 4px; }
              ::-webkit-scrollbar-thumb:hover { background: ${Colors.textMuted}; }
              a { text-decoration: none; }
              button { cursor: pointer; }
              [role="button"] { cursor: pointer; }
              /* Smooth animations for cards */
              .card-hover { transition: transform 0.2s ease, border-color 0.2s ease; }
              .card-hover:hover { transform: translateY(-2px); }
            `,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
