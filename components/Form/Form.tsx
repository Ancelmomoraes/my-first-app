import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";


export function Form(){
    const [side, setSide] = useState(0); //captura a ação de digitar
    const [area, setArea] = useState(0);
    
    function calculateArea() {
       let result = ((side ** 2) * Math.sqrt(3)) / 4; 

       setArea(result);
    }

    return (
        <View>
            <View>
                <Text>Lado:</Text>
                <TextInput
                    onChangeText={setSide}

                    placeholder="Digite o lado em cm"
                    inputMode="numeric" // deixa o teclado somente com numeros 
                    value={side}

                />
                <Pressable
                    title ="Calcular"
                    onPress={() => calculateArea}
                
                
                />

            </View>

        </View>


    )

} 