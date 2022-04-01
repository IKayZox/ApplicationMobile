import * as React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';

export default function ProfileScreen({ navigation }) {
    let [fontsLoaded] = useFonts({

    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const [user, setUser] = useState('')

    useEffect(() => {
        setUser(await getDoc(auth.currentUser?.email));
        })

    return (
        <View style={{ flexDirections: 'column', flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <View style={{ maxHeight: 40, flexDirections: 'column', flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Ionicons name="person" size={50} color="blue" padding={10} />
                <Text style={{ fontSize: 10 }}>Last Name: {user.data().name}</Text>
                <Text style={{ fontSize: 10 }}>First Name: {user.data().firstname}</Text>
                <Text style={{ fontSize: 10 }}>Email: {user.data().mail}</Text>
            </View>
            <Button
                title="Sign out"
                onPress={() => {
                    auth
                        .signOut()
                        .then(() => {
                            navigation.navigate("Login")
                        })
                        .catch(error => alert(error.message))
                }}
            />


        </View>
    );
}