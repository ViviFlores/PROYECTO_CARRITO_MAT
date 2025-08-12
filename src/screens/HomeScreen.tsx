import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { PRIMARY_COLOR } from '../commons/constants';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';

//interface para le arreglo de productos
interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {
    //arreglo con la lista de usuarios
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: '' },
        { id: 2, name: 'Funda de azucar', price: 2.50, stock: 7, pathImage: '' },
        { id: 3, name: 'Funda de papas', price: 1.70, stock: 10, pathImage: '' },
        { id: 4, name: 'Funda de fideos', price: 2.00, stock: 4, pathImage: '' },
        { id: 5, name: 'Funda de sal', price: 0.50, stock: 8, pathImage: '' }
    ];

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title="Productos" />
            <BodyComponent>
            </BodyComponent>
        </View>
    )
}
