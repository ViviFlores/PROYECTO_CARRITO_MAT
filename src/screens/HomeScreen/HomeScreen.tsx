import React, { useState } from 'react';
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

//interface para el arreglo carrito
interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {
    //arreglo con la lista de usuarios
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 2, name: 'Funda de azucar', price: 2.50, stock: 0, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaxaL8A7qM6YagKhqvPXMkQ9OeVZ5Kvf2mg&s' },
        { id: 3, name: 'Funda de papas', price: 1.70, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUiI60_tgyYYB8I6trGvIvE7wA3stSKDahcdPxNkw7AEELOHYLrXSVpV495wCRpfx8UtA&usqp=CAU' },
        { id: 4, name: 'Funda de fideos', price: 2.00, stock: 4, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyu0O-qOMpWDxFoPPdmVzt6Wdf1MyGgx8WQ&s' },
        { id: 5, name: 'Funda de sal', price: 0.50, stock: 8, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7UmFvGme9iLeiS7cx-B_chmKubpPTVDVHccgp89aXhUH0WLZvhuPOymQ33KePB2LV3Ng&usqp=CAU' },
        { id: 6, name: 'Funda de arroz', price: 3.30, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 7, name: 'Funda de azucar', price: 2.50, stock: 7, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaxaL8A7qM6YagKhqvPXMkQ9OeVZ5Kvf2mg&s' },
        { id: 8, name: 'Funda de papas', price: 1.70, stock: 10, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUiI60_tgyYYB8I6trGvIvE7wA3stSKDahcdPxNkw7AEELOHYLrXSVpV495wCRpfx8UtA&usqp=CAU' },
        { id: 9, name: 'Funda de fideos', price: 2.00, stock: 4, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyu0O-qOMpWDxFoPPdmVzt6Wdf1MyGgx8WQ&s' },
        { id: 10, name: 'Funda de sal', price: 0.50, stock: 8, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7UmFvGme9iLeiS7cx-B_chmKubpPTVDVHccgp89aXhUH0WLZvhuPOymQ33KePB2LV3Ng&usqp=CAU' }
    ];

    //hook useState para manejar el estado de los productos
    const [listProducts, setListProducts] = useState<Product[]>(products);  ///areglo de productos

    //hook useSate para controlar los productos del carrito
    const [cart, setCart] = useState<Cart[]>([]);  //arreglo con los productos seleccionados

    //función para actualizar el stock
    const updateStock = (id: number, quantity: number): void => {
        const updateProducts = listProducts.map(product => product.id == id
            ? { ...product, stock: product.stock - quantity }
            : product);
        //actualizar producto en el arreglo
        setListProducts(updateProducts);
        //llamar la función para añadir al carrito
        addProduct(id, quantity);
    }

    //función para agregar los productos al carrito
    const addProduct = (id: number, quantity: number): void => {
        const product = listProducts.find(product => product.id == id);

        //Validar si existe el producto
        if (!product) {
            return;
        }

        //Crear producto para el carrito
        const newProductCart: Cart = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: product.price * quantity
        }

        //Añadir en el carrito
        setCart([...cart, newProductCart]);
        console.log(cart);
        
    }


    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title="Productos" />
            <BodyComponent>
                <FlatList
                    data={listProducts}
                    renderItem={({ item }) => <CardProduct item={item} updateStock={updateStock} />}
                    keyExtractor={item => item.id.toString()}
                />
            </BodyComponent>
        </View>
    )
}
