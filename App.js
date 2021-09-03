/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Alert
} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

export default function App(){
  const [size, setSize] = useState(0);
  const [type, setType] = useState(0);
  const [payment, setPayment] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const calculate = () => {
    reset();
    if (!size) {
      setErrorMessage('Agregue un tamaño de cafe');
    }else if (!type) {
      setErrorMessage('Agrega el tipo de cafe que necesitas');
    }else if (!payment) {
      setErrorMessage('Elija el metodo de pago a realizar');
    }else if (!quantity) {
      setErrorMessage('Agregue la cantidad de bebidas que necesita')
    }
    else{
      const desc = payment / 100;
      const tot = ((size + type) * quantity) * desc;
      setTotal((((size + type) * quantity) - tot).toFixed(2));
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };


  return(
    <>
      <View style={styles.Body}>
        <StatusBar barStyle="light-content"/>
        <SafeAreaView style={styles.Header}>
          <Text style={styles.Title}>Start Bosco</Text>
          <Form
            setSize={setSize}
            setType={setType}
            setPayment={setPayment}
            setQuantity={setQuantity}
          />
        </SafeAreaView>
        <Result
          quantity = {quantity}
          size = {size}
          type = {type}
          payment = {payment}
          descuento = {payment}
          total = {total}
          errorMessage = {errorMessage}
        />
        <Footer calculate = {calculate}></Footer>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  Body:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: '100%'
  },
  Header: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    height: 250,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    alignItems: 'center',
  },
  Title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.PRIMARY_COLOR_TEXT,
    marginTop: 10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
