import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import colors from '../utils/colors';
import RNPickerSelect from 'react-native-picker-select';

export default function Form(props) {
  const {setSize, setType, setPayment, setQuantity} = props;

  const validateChange = e => {
    if (parseInt(e) < 1 || e === '-' || e === '') {
      console.log('invalid');
    } else {
      setQuantity(e);
    }
  };

  return (
    <View style={styles.viewForm}>
      <View style={styles.Size}>
        <RNPickerSelect
          style={picketSelectStyles}
          onValueChange={value => setSize(value)}
          placeholder={{
            label: 'Selecciona el tamaño de cafe',
            value: null,
          }}
          items={[
            {label: 'Pequeño - $1', value: 1},
            {label: 'Mediano - $1.5', value: 1.5},
            {label: 'Grande - $2', value: 2},
          ]}
        />
      </View>
      <View style={styles.Tipo}>
        <RNPickerSelect
          style={picketSelectStyles}
          onValueChange={value => setType(value)}
          placeholder={{
            label: 'Selecciona el tipo de cafe',
            value: null,
          }}
          items={[
            {label: 'Mocha - $2', value: 2},
            {label: 'Te chai - $2.5', value: 2.5},
            {label: 'Americano - $1.5', value: 1.5},
            {label: 'Frapper - $3', value: 3},
          ]}
        />
      </View>
      <View style={styles.viewInputs}>
        <View style={styles.viewPicker}>
          <RNPickerSelect
            style={picketSelectStyles}
            onValueChange={value => setPayment(value)}
            placeholder={{
              label: 'Tipo de pago',
              value: null,
            }}
            items={[
              {label: 'Efectivo', value: 15},
              {label: 'Tarjeta', value: 5},
            ]}
          />
        </View>
        <TextInput
          style={[styles.input, styles.inputQuantity]}
          placeholder="Cantidad"
          keyboardType="numeric"
          type
          onChange={e => validateChange(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPicker: {
    width: '60%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  viewForm: {
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.TRANSPARENT,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },

  input: {
    position: 'absolute',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },

  Tipo: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },

  Size: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },

  viewInputs: {flexDirection: 'row'},

  input: {
    height: 50,
    backgroundColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginRight: 5,
    marginLeft: -5,
    marginTop: 20,
    color: '#fff',
    paddingHorizontal: 20,
  },

  inputQuantity: {
    width: '40%',
    marginLeft: 5,
  },
});

const picketSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginLeft: -5,
    marginRight: -5,
  },

  inputAndroid: {
    fontSize: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 20,
    color: 'white',
    paddingRight: 30,
    backgroundColor: '#000',
  },
});
