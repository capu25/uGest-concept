import { Text as DefaultText } from 'react-native';
import { theme } from './theme';

export function Text({ style, variant = 'body', ...props }) {
  return (
    <DefaultText 
      {...props} 
      style={[
        theme.textVariants[variant], // applica lo stile della variante
        style // permette override degli stili
      ]} 
    />
  );
}