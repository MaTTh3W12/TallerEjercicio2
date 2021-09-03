import React from "react";
import { StyleSheet, Text, View} from 'react-native';

export default function Result(props){
    const{size, type, payment, quantity, total, errorMessage}=props;
    var siz, ty, pa;

    /**Seteamos para que nos muestre el tamaño de cafe que queremos */
    switch (size) {
        case 1:
          siz = "Pequeño"
          break;
        case 1.5:
          siz = "Mediano"
          break;
        case 2:
          siz = "Grande"
        default:
          break;
    }

    /**Seteamos para que nos muestre el tipo de cafe que queremos */
    switch (type) {
        case 2:
          ty = "Mocha" 
          break;
        case 2.5:
          ty = "Te Chai"
          break;
        case 1.5:
          ty = "Americano"
          break;
        case 3:
          ty = "Frapper"
          break;

        default:
          break;
    }

    /**Seteamos para que nos muestre el tipo de pago que realizara */
    switch (payment) {
        case 15:
          pa = "Efectivo";
          break;
        case 5:
          pa = "Tarjeta";
          break;
      
        default:
          break;
      }

    return(
        <View style={StyleSheet.content}>
            {(
                <View style={styles.boxResult}>
                    <Text style={styles.title}>FACTURA</Text>
                    <DataResult title="Cantidad a pedir: " value={`${quantity}`}/>
                    <DataResult title="Tamaño de cafe: " value={`$${size} - ${siz}`}/>
                    <DataResult title="Tipo de cafe: " value={`$${type} - ${ty}`}/>
                    <DataResult title="Tipo de pago: " value={`${pa}`}/>
                    <DataResult title="Descuento %: " value={`${payment} %`}/>
                    <DataResult title="Total a pagar: " value={`$$total}`}/>
                </View>
            )}total
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

function DataResult(props) {
    const {title, value} = props;
    return (
        <View style={styles.value}>
        <Text style={{color: '#d4c4ae'}}>{title}</Text>
        <Text style={{color: '#d4c4ae'}}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
    },

    boxResult: {
        padding: 30,
    },

    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#d4c4ae'
    },

    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
});