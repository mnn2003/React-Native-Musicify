import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WebViewScreen() {
  const WebComponent = Platform.select({
    web: () => (
      <iframe
        src="https://musicify-omega.vercel.app"
        style={{
          border: 'none',
          width: '100%',
          height: '100%',
          backgroundColor: '#000000',
        }}
      />
    ),
    default: () => (
      <WebView
        source={{ uri: 'https://musicify-omega.vercel.app' }}
        style={styles.webview}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        allowsBackgroundMediaPlayback={true}
      />
    ),
  });

  return (
    <SafeAreaView style={styles.container}>
      <WebComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  webview: {
    flex: 1,
    backgroundColor: '#000000',
  },
});