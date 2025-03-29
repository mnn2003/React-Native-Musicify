import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExternalLink, Heart } from 'lucide-react-native';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>
      
      <TouchableOpacity
        style={styles.link}
        onPress={() => Linking.openURL('https://musicify-omega.vercel.app')}
      >
        <Text style={styles.linkText}>Open in Browser</Text>
        <ExternalLink size={20} color="#FFFFFF" />
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Made with</Text>
        <Heart size={16} color="#1DB954" style={styles.heartIcon} />
        <Text style={styles.footerText}>using Expo</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1DB954',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    marginRight: 10,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginHorizontal: 5,
  },
  heartIcon: {
    marginHorizontal: 5,
  },
});