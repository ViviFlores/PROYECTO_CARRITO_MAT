import React from 'react'
import { Modal, Text, View } from 'react-native'
import { styles } from '../../../theme/appTheme';
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/constants';

//interface para las propiedades
interface Props {
    visible: boolean;
    item: Product;
    setShowModal: () => void;
}

export const ModalProduct = ({ visible, item, setShowModal }: Props) => {
    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={styles.modal}>
                    <View>
                        <Icon name='cancel'
                            size={17}
                            color={PRIMARY_COLOR}
                            onPress={setShowModal} />
                    </View>
                    <Text>{item.name}</Text>
                </View>
            </View>
        </Modal>
    )
}
