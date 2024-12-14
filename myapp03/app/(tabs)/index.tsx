import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://i5.walmartimages.com/asr/788d4005-63c1-4671-b409-ca56a242ffbc.819b1cf427442b054afbea9e07b0ea7e.jpeg' }} 
        style={styles.productImage} 
      />
      <Text style={styles.productName}>Notebook</Text>
      <Text style={styles.productPrice}>R$ 1.999,99</Text>
      <Button title="Comprar" onPress={() => alert('Produto adicionado ao carrinho')} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 30,
  },
  productImage: {
    width: 250,
    height: 210,
    borderRadius: 30,
    marginBottom: 30,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    color:'#000',
    marginBottom: 10,
    textAlign: 'center',
  },
});