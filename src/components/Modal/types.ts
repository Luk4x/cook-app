export type ModalProps = {
  message: string;
  onClose: () => void;
  button: {
    title: string;
    onPress: () => void;
  };
};
