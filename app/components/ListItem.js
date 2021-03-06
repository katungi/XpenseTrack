import React from 'react';
import { Text, View, StyleSheet } from "react-native";

import ListItemIcon from "../components/ListItemIcon";

function ListItem({header, name, description}) {
  return (
    <View style={styles.container}>
        <ListItemIcon />
        <View style={styles.detailsContainter}>
          <Text style={styles.header}>{header}</Text>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  detailsContainter: {
    flexDirection: "column",
    marginLeft: 30    
  },
  container: {
    flexDirection: "row",
    marginVertical: 16,
    marginHorizontal: 16
  },
  description: {
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 16,
    color: "#1c2629"
  },
  name: {
    marginTop: 6,
    color: "#1d272a",
    fontSize: 16
  },
  header: {
    color: "#6c7174",
    textTransform: "uppercase"
  }
  
})

export default ListItem;