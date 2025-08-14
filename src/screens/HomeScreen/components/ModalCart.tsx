import React from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/constants';
import { Cart } from '../HomeScreen';

interface Props {
    visible: boolean;
    setShowModal: () => void;
    cart: Cart[];
}

export const ModalCart = ({ visible, setShowModal, cart }: Props) => {
    const { width } = useWindowDimensions();
    //función para calcular el total a pagar
    const totalPay = (): number => {
        let total = 0;
        cart.forEach(product => {
            total += product.total;
        })
        return total;
    }

    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.modal,
                    width: width * 0.80
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>Mis Productos</Text>
                        <View style={styles.containerIcon}>
                            <Icon name='cancel'
                                size={18}
                                color={PRIMARY_COLOR}
                                onPress={setShowModal} />
                        </View>
                    </View>
                    <View style={localStyles.headerTable}>
                        <Text style={localStyles.textHeaderTable}>Producto</Text>
                        <View style={localStyles.headerTableInfo}>
                            <Text style={{
                                ...localStyles.textHeaderTable,
                                marginHorizontal: 9
                            }}>Pre.</Text>
                            <Text style={{
                                ...localStyles.textHeaderTable,
                                marginHorizontal: 6
                            }}>
                                Cant.
                            </Text>
                            <Text style={{
                                ...localStyles.textHeaderTable,
                                marginLeft: 9
                            }}>Total</Text>
                        </View>
                    </View>
                    <View>
                        <FlatList
                            data={cart}
                            renderItem={({ item }) =>
                                <View style={localStyles.headerTable}>
                                    <Text>{item.name}</Text>
                                    <View style={localStyles.headerTableInfo}>
                                        <Text style={{ paddingHorizontal: 15 }}>
                                            ${item.price.toFixed(2)}
                                        </Text>
                                        <Text style={{ paddingHorizontal: 10 }}>
                                            {item.quantity}
                                        </Text>
                                        <Text style={{ paddingLeft: 15 }}>
                                            ${item.total.toFixed(2)}
                                        </Text>
                                    </View>
                                </View>
                            }
                            keyExtractor={item => item.id.toString()} />
                    </View>
                    <View style={localStyles.containerTotalPay}>
                        <Text style={localStyles.textTotalPay}>
                            Total pagar: ${totalPay().toFixed(2)}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.buttonAddCart}>
                        <Text style={styles.buttonAddCartText}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}


const localStyles = StyleSheet.create({
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTableInfo: {
        flexDirection: 'row'
    },
    textHeaderTable: {
        fontSize: 15,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
    },
    containerTotalPay: {
        alignItems: 'flex-end',
        marginTop: 15
    },
    textTotalPay: {
        fontSize: 15,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    }
})