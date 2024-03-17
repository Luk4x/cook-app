import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { ButtonProps } from './types';

function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.button]} {...rest}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
}

export { Button, ButtonProps };
