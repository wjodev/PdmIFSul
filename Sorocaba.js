import { useState } from "react";
import MapView from 'react-native-maps';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";
import { Marker } from 'react-native-maps';
import * as Speech from "expo-speech";

const DATA = [
  {
    id: "1",
    title: "Sorocaba",
    imageUri:
      "https://th.bing.com/th/id/R.a942f335d7b757407fd874b955ce75f5?rik=d3CajJY8Hf8wUQ&pid=ImgRaw&r=0",
  },
  {
    id: "2",
    title: "695.328 habitantes",
    imageUri:
      "https://st3.depositphotos.com/1032749/13266/v/450/depositphotos_132664130-stock-illustration-people-flat-style-icon.jpg",
  },
  {
    id: "3",
    title: "PIB per capita R$ 53.5 mil",
    imageUri:
      "https://static-public.klickpages.com.br/uploads/media/file/1612444/grafico_pizza_2.png",
  },
];

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

   
  const renderItemNovo = ({ item }) => {
    return (
      <View style={meuestilo.item} key={item.id}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#f1f1f1" : "transparent" },
            meuestilo.title,
          ]}
          onPress={() => {
            Speech.speak(item.title);
          }}
        >
          <View>
            <Image
              source={{ uri: item.imageUri }}
              style={meuestilo.itemImage}
            />
            <Text style={meuestilo.title}> {item.title}</Text>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={meuestilo.container}>

      <FlatList
        data={DATA}
        renderItem={renderItemNovo}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <MapView style={meuestilo.map} 
        initialRegion={{
          latitude: -23.470363765533,
          longitude: -47.4830347371817,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0421,
        }}>
      <Marker
            coordinate={{
              latitude: -23.470363765533,
          longitude: -47.4830347371817, }}
            title={"Sorocaba-SP"}
      ></Marker>
      </MapView>

    </SafeAreaView>
  );

  

 

  
};

const meuestilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    padding: 4,
    marginVertical: 2,
    marginHorizontal: 2,
  },
  title: {
    fontSize: 25,
  },

  itemImage: {
    width: 60,
    height: 60,
    marginLeft: 10,
    marginRight: 15,
    backgroundColor: "white",
    borderRadius: 40,
    elevation: 2,
  },

  map: {
  width: '100%',
  height: '50%',
  },

});

export default App;