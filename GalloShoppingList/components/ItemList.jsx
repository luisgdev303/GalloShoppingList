import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ItemList({ item }) {
  return (
    <View stylw={styles.itemList}>
      <Text style={styles.itemToBuy}>{item?.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    itemList: {
        padding: 15,
        elevation: 12, 
        borderRadius: 7,
        backgroundColor: 'white',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemToBuy: {
        color: '#fff', fontSize:24,
    }
})