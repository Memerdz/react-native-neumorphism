import React, {useEffect, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

const gray = "#91A1BD";

const HomeScreen = () => {

  const NeuMorph = ({children, size, style}) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View style={[
            styles.inner, 
            {width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2},
            style
            ]}>
              {children}
          </View>
        </View>
      </View>
    )
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={['#0F2027', '#203A43', '#2C5364']}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 1}}
    >
      <SafeAreaView style={{ alignSelf: "stretch"}}>
        <View style={{ marginHorizontal: 32, marginTop: 32}}>
          <View style={styles.topContainer}>
            <NeuMorph size={48}>
              <Ionicons name="chevron-back" size={20} color={gray}/> 
            </NeuMorph>

            <View>
              <Text style={styles.playing}>
                BEACH BUNNY
              </Text>
            </View>

            <NeuMorph size={48}>
              <Ionicons name="ellipsis-horizontal" size={24} color={gray} />
            </NeuMorph>

          </View>

          <View style={styles.songArtContainer}>
            <NeuMorph size={300}>
              <Image source={require("../assets/beachbunny.jpg")} style={styles.songArt}/>
            </NeuMorph>
            <View style={{position:"absolute", marginTop: 264, right: 16}}>
              <NeuMorph size={48}>
                <Ionicons name="heart" size={24} color={gray} />
              </NeuMorph>
            </View>
          </View>

          <View style={styles.songContainer}>
            <Text style={styles.title}>Oxygen</Text>
            <Text style={styles.artist}>Beach Bunny</Text>
          </View>

          <View style={styles.trackContainer}>
            <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={styles.songTime}>1:21</Text>
              <Text style={styles.songTime}>3:46</Text>
            </View>

            <Slider 
                minimumValue = {0}
                maximumValue = {1}
                maximumTrackTintColor = '#2C3E50'
                minimumTrackTintColor = "#4CA1AF"
                thumbTintColor='#4CA1AF'
            />
          </View>

          <View style={styles.controlsContainer}>
            <NeuMorph size={80}>
              <Ionicons name="shuffle" size={24} color={gray} />
            </NeuMorph>
            <NeuMorph size={80}>
              <Ionicons name="play-skip-back" size={24} color={gray} />
            </NeuMorph>
            <NeuMorph size={80}>
              <Ionicons name="pause" size={24} color={gray} />
            </NeuMorph>
            <NeuMorph size={80}>
              <Ionicons name="play-skip-forward" size={24} color={gray} />
            </NeuMorph>
            <NeuMorph size={80}>
              <Ionicons name="repeat" size={24} color={gray} />
            </NeuMorph>
          </View>


        </View>
      </SafeAreaView>
      <StatusBar style="light" />
    </LinearGradient>
  );
  }

export default HomeScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inner: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#E2ECFD",
    borderWidth: 0
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: "#3A6073"
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#16222A"
  },
  playing: {
    color: gray,
    fontWeight: "800"
  },
  songArtContainer: {
    marginVertical: 32,
    alignItems: "center"
  },
  songArt: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "#3A6073",
    borderWidth: 10
  },
  songContainer: {
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color: "#bdc3c7",
    fontWeight: "600"
  },
  artist: {
    fontSize: 14,
    marginTop: 6,
    color: "#859398",
    fontWeight: "600"
  },
  trackContainer: {
    marginTop: 32,
    marginBottom: 64
  },
  songTime: {
    fontSize: 14,
    color: "#BBD2C5",
    fontWeight: "600"
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
