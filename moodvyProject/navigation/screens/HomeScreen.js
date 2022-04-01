import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase'

export default function HomeScreen({ navigation }) {
    console.log(auth.currentUser?.user);
    return (
        <View style={{ flexDirections: 'column', flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'lightgreen' }}>

            <TouchableOpacity style={{ width: 180, height: 50, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                onPress={() => {
                }
                }>
                <Text style={{ fontSize: 20 }}>Triste</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: 180, height: 50, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                onPress={() => {
                }
                }>
                <Text style={{ fontSize: 20 }}>Joyeux</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: 180, height: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                onPress={() => {
                }
                }>
                <Text style={{ fontSize: 20 }}>Action-packed</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: 180, height: 50, backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                onPress={() => {
                }
                }>
                <Text style={{ fontSize: 20 }}>Tragique</Text>
            </TouchableOpacity>
        </View>
    )
}