import {
  View,
  Button,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

export default function Movies() {
  const [search, setSearch] = useState("");
  const [movies, setmoviestList] = useState([]);
  const HandleInputSearch = (textinput) => {
    setSearch(textinput);
  };
  const HandleSearch = async () => {
    let res = await fetch(
      `https://www.omdbapi.com/?apikey=1310bb05&s=${search}`
    );
    let data = await res.json();
    setmoviestList(data.Search);
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={HandleInputSearch}
        style={styles.InputColor}
        placeholder="Enter Movie Name"
      />
      <View style={styles.BtnStyle}>
        <Button onPress={HandleSearch} color={"green"} title="Search" />
      </View>
      <View>
        {movies && (
          <Text style={styles.MovieFoundText}>
            {movies?.length} Found Movies
          </Text>
        )}
        <FlatList
          data={movies}
          renderItem={({ item }) => {
            return (
              <View style={styles.MovieListContainer}>
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{ uri: item.Poster }}
                />
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "green" }}>
                  {item.Title}
                </Text>
                <Text style={{ fontSize: 15, color: "black" }}>
                  {item.Year}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
    height: "100%",
  },
  InputColor: {
    paddingLeft: 30,
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 5,
  },
  BtnStyle: {
    marginTop: 10,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  MovieFoundText: {
    marginTop: 10,
    fontSize: 15,
    textAlign: "center",
    color: "green",
  },
  MovieListContainer: {
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
