import React, { useState, useEffect } from "react";
import { View, Text, Keyboard, ScrollView, Pressable, TouchableOpacity, Button } from "react-native"
import { Modal } from "react-native-paper";
import ToolBar from "../ToolBar";
import styles from "./styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';

import AsyncStorage from "@react-native-async-storage/async-storage";

function Book() {
    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")
    const [categoria, setCategoria] = useState("")
    const [ano, setAno] = useState("")
    const [isbn, setIsbn] = useState("")
    const [books, setBooks] = useState([])
    const [lido, setLido] = useState(0)
    const [modalVisible, setModalVisible] = useState(false);

    async function loadBooks() {
        try {
            AsyncStorage.clear
            const arr = await AsyncStorage.getItem('bookList')
            if (arr != null) {
                setBooks(JSON.parse(arr))
                console.log(books);
            }
            setLido(1)
            setModalVisible(false)
        } catch (e) {
            alert('[ERROR]: AsyncStorage - getItem()')
        }
    }

    async function saveBook() {
        const book = {
            titulo: titulo,
            autor: autor,
            categoria: categoria,
            ano: ano,
            isbn: isbn,
        };
        const arr = [...books, book]

        try {
            await AsyncStorage.setItem('bookList', JSON.stringify(arr))
            alert('Adicionado com Sucesso!')
            setTitulo("")
            setAutor("")
            setCategoria("")
            setAno("")
            setIsbn("")
            setLido(0)
            setModalVisible(false)
            Keyboard.dismiss()
        } catch (error) {
            alert(error)
        }
    }
    useEffect(() => {
        if (lido == 0) {
            loadBooks()
        }
    });

    return (
        <View style={styles.container}>
            <ToolBar title="Meus Livros" />
            <View style={{
                width: "100%",
                position: "absolute",
                flexDirection: "row-reverse",
                top: 51,
                right: 9,
                borderBottomWidth: 1,
                borderBottomColor: "#6E5494",
                alignItems: "center"
            }}>

                <TouchableOpacity>
                    <Icon
                        style={styles.buttom}
                        name="book-plus"
                        color="#005494"
                        size={40}
                        onPress={() => { setModalVisible(true) }}
                    />
                </TouchableOpacity>

            </View>

            <View>
                <ScrollView style={{top:80}}>
                    {books.map((item, index) => {
                        return [
                            <View style={{ width: "100%", borderBottomWidth: 1, borderBottomColor: "gray", marginTop: 5, marginBottom: 5, padding: 5 }}>
                                <TouchableOpacity>
                                    <Icon
                                        style={styles.buttom}
                                        name="book-open-page-variant"
                                        color="#6E5494"
                                        size={40}
                                    />
                                </TouchableOpacity>
                                <View>
                                    <Text style={{ color: "#000", }}>{item.titulo}</Text>
                                    <Text style={{ color: "gray" }}>{item.autor}</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: "row", position: "absolute", right: 1 }}>
                                    <Text style={{ color: "gray" }}>{item.categoria}</Text>
                                    <TouchableOpacity>
                                        <Icon
                                            name="book-search"
                                            color="green"
                                            size={30}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon
                                            name="book-remove"
                                            color="red"
                                            size={30}
                                        />
                                    </TouchableOpacity>
                                </View>


                            </View>
                        ];
                    })}
                </ScrollView>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.text}>Novo Livro</Text>
                            <TextInput
                                label="Título"
                                onChangeText={(text) => setTitulo(text)}
                            />
                            <TextInput
                                label="Autor"
                                onChangeText={(text) => setAutor(text)}
                            />
                            <TextInput
                                label="Categoria"
                                onChangeText={(text) => setCategoria(text)}
                            />
                            <TextInput
                                label="Ano"
                                onChangeText={(text) => setAno(text)}
                            />
                            <TextInput
                                label="ISBN"
                                onChangeText={(text) => setIsbn(text)}
                            />
                            <View style={{flex:1, flexDirection:"row", justifyContent:"space-around", alignContent:"center", top:20,position:"relative"}}>
                                <Button style={styles.botaoLeft} title="Cadastrar" onPress={() => saveBook()} color="#6E5494" />
                                <Button style={styles.botaoRight} title="Cancelar" onPress={() => { setModalVisible(false) }} color="#F77737" />
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* <Modal animationType="slide" isVisible={isModalVisible}>
                    <View style={styles.container}>
                        <Text style={styles.text}>Novo Livro</Text>
                        <TextInput
                            placeholder="Nome"
                            onChangeText={(text) => setTitulo(text)}
                        />
                        <TextInput
                            placeholder="Autor"
                            onChangeText={(text) => setAutor(text)}
                        />
                        <TextInput
                            placeholder="Categoria"
                            onChangeText={(text) => setCategoria(text)}
                        />
                        <TextInput
                            placeholder="Ano de Lançamento"
                            onChangeText={(text) => setAno(text)}
                        />
                        <TextInput
                            placeholder="Código"
                            onChangeText={(text) => setIsbn(text)}
                        />
                        <Button title="Cadastrar" onPress={() => saveBook()} color="#6E5494" />
                        <Button title="Cancelar" onPress={toggleModal} color="#F77737" />
                    </View>
                </Modal> */}
            </View >

        </View >
    )
}


export default Book