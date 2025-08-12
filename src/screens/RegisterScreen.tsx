import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { PRIMARY_COLOR } from '../commons/constants';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//interface para las propiedades
interface Props {
    users: User[];
    addUser: (user: User) => void;
}

//interface para el formulario de registro
interface FormRegister {
    name: string;
    username: string;
    password: string;
}

export const RegisterScreen = ({ users, addUser }: Props) => {
    //hook useState para manejar el estado del formulario
    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        username: '',
        password: ''
    });

    //hook useNavigation para navegar entre pantallas
    const navigation = useNavigation();

    //función para modificar el estado del formulario
    const changeForm = (property: string, value: string): void => {
        //modificar el estado del formulario
        setFormRegister({ ...formRegister, [property]: value });

    }

    //función para verificar si existe el usuario
    const verifyUsername = (): User | undefined => {
        const existUsername = users.find(user => user.username == formRegister.username);
        return existUsername;
    }

    //función para generar los ids de los nuevos usuarios
    const getIdUser = (): number => {
        const getId = users.length + 1;  //length devuelve el número de elementos en el arreglo
        return getId;
    }

    //función permitir registro
    const handleSignUp = (): void => {
        if (formRegister.name == '' || formRegister.username == '' || formRegister.password == '') {
            Alert.alert('Error', 'Por favor, complete todos los campos');
            return;
        }

        //Validar que no exista el usuario
        if (verifyUsername() != undefined) {
            Alert.alert('Error', 'El usuario ya existe');
            return;
        }

        //Crear el nuevo usua|rio (objeto)
        const newUser: User = {
            id: getIdUser(),
            name: formRegister.name,
            username: formRegister.username,
            password: formRegister.password
        }

        //Agregar el nuevo usuario en el arreglo
        addUser(newUser);
        Alert.alert('Éxito', 'Usuario registrado correctamente');
        navigation.goBack();
        //console.log(formRegister);
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
                        property='name' />
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
                <ButtonComponent textButton='Registrar' onPress={handleSignUp} />
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
