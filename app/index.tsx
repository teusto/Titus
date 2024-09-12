import { Text, View, useWindowDimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Index() {
  const { height, width } = useWindowDimensions();

  const APSECT_RATIO = width / height;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
          }}
        >
          <MapView
            style={{ width: "100%", height: "100%" }}
            mapType="satellite"
            initialRegion={{
              latitude: 38.762211,
              longitude: -9.154362,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05 * APSECT_RATIO,
            }}
          >
            <Marker
              key={0}
              coordinate={{
                latitude: 38.762211,
                longitude: -9.154362,
              }}
              title="EU"
              description={'Onde começa'}
            >
              <View style={{width: 20, height: 20, borderRadius: 50, borderWidth: 2, borderColor: 'white', backgroundColor: 'red'}}/>
            </Marker>
            <Marker
              key={0}
              coordinate={{
                latitude: 38.708921,
                longitude: -9.174424,
              }}
              title="VOCE"
              description={'Onde Termina'}
            >
              <View style={{width: 20, height: 20, borderRadius: 50, borderWidth: 2, borderColor: 'white', backgroundColor: 'red'}}/>
            </Marker>
          </MapView>
        </View>

        <View
          style={{
            backgroundColor: "black",
            width: "80%",
            height: "15%",
            position: "absolute",
            left: 10,
            top: "10%",
            display: "flex",
            flexDirection: "column",
            shadowColor: "black",
            shadowOpacity: 0.35,
            shadowOffset: { width: -1, height: 2 },
          }}
        >
          <View
            style={{
              flex: 0.85,
              justifyContent: "center",
              paddingLeft: "4%",
              paddingVertical: 2,
              backgroundColor: "lightgray",
            }}
          >
            <Text
              adjustsFontSizeToFit
              style={{
                color: "black",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: 28,
                fontStyle: "italic",
              }}
            >
              My Name
            </Text>
          </View>
          <View
            style={{
              borderTopColor: "gray",
              borderBottomColor: "gray",
              borderTopWidth: 0.8,
              borderBottomWidth: 0.8,
              flex: 1.65,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                --:--:--
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                --:--:--
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.65,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "space-around",
              }}
            >
              <Text
                adjustsFontSizeToFit
                style={{
                  color: "purple",
                  textAlign: "center",
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                S1
              </Text>
              <View
                style={{
                  width: "100%",
                  height: "12%",
                  backgroundColor: "purple",
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "space-around",
              }}
            >
              <Text
                adjustsFontSizeToFit
                style={{
                  color: "yellow",
                  textAlign: "center",
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                S2
              </Text>
              <View
                style={{
                  width: "100%",
                  height: "12%",
                  backgroundColor: "yellow",
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "space-around",
              }}
            >
              <Text
                adjustsFontSizeToFit
                style={{
                  color: "green",
                  textAlign: "center",
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                S3
              </Text>
              <View
                style={{
                  width: "100%",
                  height: "12%",
                  backgroundColor: "green",
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "rgba(20, 20, 20, 0.7)",
          position: "absolute",
          bottom: "2%",
          right: "2%",
          paddingHorizontal: "6%",
          display: "flex",
          borderRadius: 8,
        }}
      >
        <Text
          style={{ fontSize: 75, fontWeight: "bold", color: "white" }}
          numberOfLines={1}
          ellipsizeMode="clip"
        >
          Baku
        </Text>
      </View>
    </View>
  );
}
