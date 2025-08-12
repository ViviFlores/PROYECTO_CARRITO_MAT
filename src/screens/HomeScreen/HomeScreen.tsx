import React from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { PRIMARY_COLOR } from '../../commons/constants';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProduct } from './components/CardProduct';

//interface para le arreglo de productos
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {
    //arreglo con la lista de usuarios
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 2, name: 'Funda de azucar', price: 2.50, stock: 7, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaxaL8A7qM6YagKhqvPXMkQ9OeVZ5Kvf2mg&s' },
        { id: 3, name: 'Funda de papas', price: 1.70, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUiI60_tgyYYB8I6trGvIvE7wA3stSKDahcdPxNkw7AEELOHYLrXSVpV495wCRpfx8UtA&usqp=CAU' },
        { id: 4, name: 'Funda de fideos', price: 2.00, stock: 4, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyu0O-qOMpWDxFoPPdmVzt6Wdf1MyGgx8WQ&s' },
        { id: 5, name: 'Funda de sal', price: 0.50, stock: 8, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7UmFvGme9iLeiS7cx-B_chmKubpPTVDVHccgp89aXhUH0WLZvhuPOymQ33KePB2LV3Ng&usqp=CAU' },
        { id: 6, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 7, name: 'Funda de azucar', price: 2.50, stock: 7, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaxaL8A7qM6YagKhqvPXMkQ9OeVZ5Kvf2mg&s' },
        { id: 8, name: 'Funda de papas', price: 1.70, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUiI60_tgyYYB8I6trGvIvE7wA3stSKDahcdPxNkw7AEELOHYLrXSVpV495wCRpfx8UtA&usqp=CAU' },
        { id: 9, name: 'Funda de fideos', price: 2.00, stock: 4, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyu0O-qOMpWDxFoPPdmVzt6Wdf1MyGgx8WQ&s' },
        { id: 10, name: 'Funda de sal', price: 0.50, stock: 8, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7UmFvGme9iLeiS7cx-B_chmKubpPTVDVHccgp89aXhUH0WLZvhuPOymQ33KePB2LV3Ng&usqp=CAU' }
    ];

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title="Productos" />
            <BodyComponent>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <CardProduct item={item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </BodyComponent>
        </View>
    )
}
