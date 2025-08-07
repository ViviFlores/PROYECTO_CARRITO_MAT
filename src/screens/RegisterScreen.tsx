import React from 'react';
import { StatusBar, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { PRIMARY_COLOR } from '../commons/constants';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const RegisterScreen = () => {

    //hook useNavigation para navegar entre pantallas
    const navigation = useNavigation();

    //función para modificar el estado del formulario
    const changeForm = (property: string, value: string): void => {
    }

    //función permitir registro
    const handleLogin = (): void => {
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title="Regístrate" />
            <BodyComponent>
                <Text style={styles.titleWelcome}>
                    Estás muy cerca!
                </Text>
                <Text style={styles.textDescription}>
                    Realiza tus compras de manera rápida y segura
                </Text>
                <View style={styles.containerForm}>
                    <InputComponent placeholder='Nombre'
                        keyboardType='default'
                        changeForm={changeForm}
                        property='' />
                    <InputComponent
                        placeholder='Usuario'
                        keyboardType='default'
                        changeForm={changeForm}
                        property='username' />
                    <InputComponent placeholder='Contraseña'
                        keyboardType='default'
                        changeForm={changeForm}
                        property='password' />
                </View>
                <ButtonComponent textButton='Iniciar' handleLogin={handleLogin} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                    <Text style={styles.textRedirect}>
                        Ya tienes una cuenta? Iniciar sesión ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
