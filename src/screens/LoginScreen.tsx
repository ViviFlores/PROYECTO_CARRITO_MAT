import React, { useState } from 'react';
import { StatusBar, Text, View, KeyboardTypeOptions, Alert, TouchableOpacity } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';

//interface para el objeto del formulario
interface FormLogin {
    username: string;
    password: string;
}

//interface para los objetos de mi arreglo users
interface User {
    id: number;
    name: string;
    username: string;
    password: string;
}

//arreglo con la lista de usuarios
const users: User[] = [
    { id: 1, name: 'Viviana Flores', username: 'vflores', password: '123456' },
    { id: 2, name: 'Carlos Aguas', username: 'caguas', password: '654321' }
];

export const LoginScreen = () => {
    //hook useState para manejar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        username: '',
        password: ''
    });

    //hook useState para manejar el estado de la visibilidad de la contraseña
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    //hook useNavigation para navegar entre pantallas
    const navigation = useNavigation();

    //función para modificar el estado del formulario
    const changeForm = (property: string, value: string): void => {
        //console.log(property + ': ' + value);
        setFormLogin({ ...formLogin, [property]: value });
    }

    //función para validar el usuario y la contraseña
    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.username == formLogin.username && user.password == formLogin.password);
        return existUser;
    }


    //función permitir iniciar sesión
    const handleLogin = (): void => {
        if (formLogin.username == '' || formLogin.password == '') {
            Alert.alert('Error', 'Por favor, complete todos los campos');
            return; // si falta algún campo, nos saca del flujo
        }

        //verificar si el usuario existe
        if (!verifyUser()) {
            Alert.alert('Error', 'Usuario y/o contraseña incorrectos');
            return;
        }
        console.log(formLogin);
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title="Iniciar Sesión" />
            <BodyComponent>
                <Text style={styles.titleWelcome}>
                    Bienvenido de nuevo!
                </Text>
                <Text style={styles.textDescription}>
                    Realiza tus compras de manera rápida y segura
                </Text>
                <View style={styles.containerForm}>
                    <InputComponent placeholder='Usuario' keyboardType='default' changeForm={changeForm} property='username' />
                    <InputComponent placeholder='Contraseña'
                        keyboardType='default'
                        changeForm={changeForm}
                        property='password'
                        isPassword={hiddenPassword} />
                    <Icon name={hiddenPassword ? 'visibility' : 'visibility-off'}
                        size={20}
                        color={PRIMARY_COLOR}
                        style={styles.iconForm}
                        onPress={() => setHiddenPassword(!hiddenPassword)} />
                </View>
                <ButtonComponent textButton='Iniciar' handleLogin={handleLogin} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text style={styles.textRedirect}>
                        No tienes una cuenta? Regístrate ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
