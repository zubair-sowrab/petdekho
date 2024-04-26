import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { colors, parameters } from '../global/styles';
import MapComponent from '../components/MapComponent';
import { Avatar, Icon } from 'react-native-elements';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Requestscreen() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Icon
          type="material-community"
          name="arrow-left"
          color={colors.black}
          size={30}
        />
      </View>
      <View style={styles.view2}>
        <TouchableOpacity>
          <View style={styles.view3}>
            <Avatar
              rounded
              avatarStyle={{}}
              size={30}
              source={require('../../assets/blankProfilePic.png')}
            />
            <Text style={{ marginLeft: 5 }}>
              For Someone
            </Text>
            <Icon
              type="material-community"
              name="chevron-down"
              color={colors.black}
              size={25}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.view4}>
          <View>
            <Image
              style={styles.image1}
              source={require("../../assets/transit.png")}
            />
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.view5}>
                <Text style={styles.text10}>
                  Your Location
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.view8}>
              <Icon
                type="material-community"
                name="plus-thick"
                color={colors.black}
                size={25}
              />
            </View>
          </View>
        </View>
      </View>
      <MapComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: parameters.statusBarHeight
  },
  view1: {
    position: "absolute",
    top: 25,
    left: 12,
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 8
  },
  view2: {
    height: SCREEN_HEIGHT * 0.21,
    alignItems: "center",
    zIndex: 5,
    backgroundColor: colors.white
  },
  view3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: colors.white,
    zIndex: 10,
  },
  view4: {
    flexDirection: "row",
    alignItems: "center",
  },
  view5: {
    backgroundColor: colors.grey7,
    width: SCREEN_WIDTH * 0.70,
    height: 40,
    justifyContent: "center",
    marginTop: 10,
  },
  image1: {
    height: 70,
    width: 30,
    marginRight: 10,
    marginTop: 10
  },
  view8: {
    marginLeft: 10
  },
  text10: {
    color: colors.grey2,
    paddingLeft: 10
  }
});
