import { Text, View } from 'react-native';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';
import { ModalProps } from './types';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/theme';
import { Button } from '../Button';

function Modal({ message, onClose, button }: ModalProps) {
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(500)}
      exiting={SlideOutDown.duration(500)}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{message}</Text>
        <MaterialIcons
          name="close"
          size={24}
          onPress={onClose}
          color={theme.colors.gray_400}
        />
      </View>
      <Button title={button.title} onPress={button.onPress} />
    </Animated.View>
  );
}

export { Modal, ModalProps };
