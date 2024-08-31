import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

const ResultsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          Your Result
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 14,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            Share
          </Text>
          <AntDesign
            style={{ marginLeft: 4 }}
            name="sharealt"
            size={20}
            color="black"
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          Questions Answered
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          (7/7)
        </Text>
      </View>

      <Pressable
        style={{
          backgroundColor: "#ffffff",
          height: 250,
          borderRadius: 7,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "magenta",
            fontSize: 25,
            fontWeight: "500",
            textAlign: "center",
            textDecorationLine: "underline",
            marginTop: 8,
          }}
        >
          Score Card
        </Text>

        <FlatList
          numColumns={2}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                margin: 10,
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              <Text>{item.question}</Text>
              {item.answer === true ? (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="checkcircle"
                  size={20}
                  color="green"
                />
              ) : (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name="closecircle"
                  size={20}
                  color="red"
                />
              )}
            </View>
          )}
        />

        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "green",
            padding: 8,
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: 20,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "#ffffff", textAlign: "center" }}>
            Continue
          </Text>
        </Pressable>
      </Pressable>

      <View
        style={{
          marginTop: 145,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontStyle: "italic",
            fontSize: 20,
            fontWeight: "600",
            textDecorationLine: "underline",
          }}
        >
          You Played Well...😊😎
        </Text>
      </View>
      <View
        style={{
          marginTop: 145,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pressable>
          <Text>{href}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const href = "https://github.com/aAmir-90";

export default ResultsScreen;
