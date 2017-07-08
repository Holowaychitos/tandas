
import React, { Component } from 'react'

import {
  Button,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  DatePickerIOS
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as apiActions from '../actions/api'

import Icon from 'react-native-vector-icons/Entypo'
import Product from '../components/Product'

const {height, width} = Dimensions.get('window')

const userID = '3e332eh3h8293he8923e'

class Form extends Component {
  constructor (props, contex) {
    super(props, contex)
    this.state = {
      text: '',
      date: new Date()
    }
  }

  parseCart (cart) {
    let totalCount = Object.keys(cart).reduce((reduce, el) => {
      return reduce + cart[el].count
    }, 0)

    return totalCount
  }

  save () {
    let { navigate } = this.props.navigation
    let newProduct = {
      _id: userID,
      owner: 'Juan Perez',
      amount: parseInt(this.state.text, 10),
      people: [userID],
      step: 0,
      date: this.state.date
    }

    this.props.actions.addProduct(newProduct)
    navigate('Home')
  }

  render () {
    // let { tandas } = this.props

    let mount = this.state.text < 1000 ? 1000 : this.state.text
    let total = ((parseInt(mount, 10) || 0) / 10) / 4

    return (
      <View style={{flex: 1, padding: 15}}>
        <StatusBar barStyle='dark-content' />
        <View>
          <Text style={{}}>Crear tu meta de ahorro es muy facil solo indica el monto que quieres obtener mensualmente</Text>
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder='Monto'
            keyboardType='number-pad'
            autoFocus
          />
          <Text style={{fontSize: 10, textAlign: 'right', marginTop: 5}}>Monto minimo: $1000 mxn</Text>
        </View>


        <View style={{marginBottom: 10}}>
          <Text>Pago semanal: ${total.toLocaleString()}</Text>
        </View>

        <View style={{marginBottom: 10}}>
          <Text>Fecha de inicio</Text>
          <DatePickerIOS
            minimumDate={new Date()}
            date={this.state.date}
            mode='date'
            onDateChange={date => this.setState({date})}
            ></DatePickerIOS>
        </View>


        <Button
          onPress={this.save.bind(this)}
          title='Crear Tanda'
          color='blue'
          accessibilityLabel='Learn more about this purple button'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputGroup: {
    padding: 10
  },
  input: {
    height: 40,
    borderColor: '#ababab',
    borderWidth: 1,
    paddingLeft: 10
  }
})

Form.navigationOptions = {
  title: 'Nueva Tanda'
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(apiActions, dispatch)
  }
}

function mapStateToProps (store) {
  return {
    list: store.items,
    tandas: store.tandas
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
