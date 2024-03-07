import { theme } from '@/theme';
import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black,
    padding: 24,
    borderRadius: theme.borderRadius.lg,
    position: 'absolute',
    bottom: 24,
    width: Dimensions.get('window').width - 48
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 34
  },
  title: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular
  }
});
