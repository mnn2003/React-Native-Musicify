import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

interface MediaControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function MediaControls({ isPlaying, onPlayPause, onNext, onPrevious }: MediaControlsProps) {
  return (
    <BlurView intensity={80} tint="dark" style={styles.container}>
      <View style={styles.controls}>
        <TouchableOpacity onPress={onPrevious} style={styles.button}>
          <SkipBack size={24} color="#FFFFFF" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={onPlayPause} style={[styles.button, styles.playButton]}>
          {isPlaying ? (
            <Pause size={28} color="#000000" />
          ) : (
            <Play size={28} color="#000000" />
          )}
        </TouchableOpacity>
        
        <TouchableOpacity onPress={onNext} style={styles.button}>
          <SkipForward size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  button: {
    padding: 10,
  },
  playButton: {
    backgroundColor: '#1DB954',
    borderRadius: 30,
    padding: 15,
  },
});