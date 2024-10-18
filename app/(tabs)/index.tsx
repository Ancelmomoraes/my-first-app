import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function HomeScreen() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [imc, setImc] = useState('');

    const [imcList, setImcList] = useState([]);

    function validatorImc() 
    {

        console.log(imcList);

        if (weight !== undefined && height !== undefined) {
            let totalImc = (weight / (height * height)).toFixed(2)
            
            imcList.push(totalImc)
            setImc(totalImc)

            setHeight('')
            setWeight('')
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>ALtura:</Text>
                {/* <!---dados dentro dela mesmo---> */}
                <TextInput
                    onChangeText={setHeight}
                    inputMode="numeric"
                    placeholder="Ex. 1.75"
                    value={height}
                    style={styles.formInput}
                />

                <Text style={styles.formLabel}>Peso:</Text>
                <TextInput
                    onChangeText={setWeight}
                    inputMode="numeric"
                    placeholder="Ex. 67.5"
                    value={weight}
                    style={styles.formInput}
                />

                <Pressable onPress={() => validatorImc()} style={styles.formButton}>
                    <Text style={styles.formButtonText}>Calcular</Text>
                </Pressable>
                {/* botão, tem um texto nele  */} 

                <Text style={styles.formLabelImc}>{imc}</Text>

            <FlatList 
                 data={imcList.reverse()}
                 renderItem={({item}) => {
                    return (
                        <View>
                            <Text>{item}</Text>
                        </View>
                    )
                 }}
                
            />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    //o padding é a borda interna de um componente
    // margin é a borda entre um conteúdo e outro

    //RELEMBRANDO< TEM QUE COLOCAR EM TODOS OS OBJETOS USADOS NESSE COMPONENTE, CADA ABERTURA DE 
    //OBJETO RECEBE O SEU STYLE ESPECIFICO
    Context: {
        // CADA ABERTURA DESSASCHAVES SÃO AS PROPRIEDADES DE ESTILIZAÇÃO
        //ISTO É, ao chamar a style={}, passamos a const Styles

        width: "80vw",
        height: "80vh",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30
    }, //view mais geral
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10
    }, // 
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20
    }, // para aquelas caixas de texto
    formInput: {
        width: "90%",
        height: 40,
        borderRadius: 30,
        backgroundColor: "#f6f6f6",
        margin: 12,
        paddingLeft: 10,
    }, //style para inputs
    formButton: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 12,
        margin: 30,
    }, //style para botões
    formButtonText: {
        fontSize: 20,
        color: "#fff"
    },
    formLabelImc: {
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%"
    }
})
// operador ternario:
// true? seTrue : seFalse
// se verdade, executa x, se n, executa y

// $Nome = 1>10? "Léo" : "Leonardo"
// 1 n é maior que 10, então nome recebe leonardo pois é falso

// nullsaveoperator???????