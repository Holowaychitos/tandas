
import React, { Component } from 'react'

import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as apiActions from '../actions/api'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Product from '../components/Product'

const {height, width} = Dimensions.get('window')

class HomeScreen extends Component {
  componentWillMount () {
    let { actions } = this.props
    actions.getItems()
  }

  parseCart (cart) {
    let totalCount = Object.keys(cart).reduce((reduce, el) => {
      return reduce + cart[el].count
    }, 0)

    return totalCount
  }

  render () {
    let { navigate } = this.props.navigation
    let { tandas, cart, actions } = this.props
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar barStyle='dark-content' />
        <ScrollView>
          {tandas.map((el, idx) => {
            return (
              <Product
                info={el}
                key={idx}
                idx={idx}
                actions={actions}
                // count={el.id in cart ? cart[el.id].count : 0}
               />
            )
          })}
        </ScrollView>

        <View style={styles.header}>
          <Text style={styles.headerTextBold}>
            <Icon onPress={() => navigate('Form')} size={50} name='add-circle-outline' color='#ff5300' />
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 50
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-between',
    backgroundColor: '#fffa'
  },
  headerText: {
    color: '#000',
    fontSize: 20,
    alignItems: 'center'
  },
  headerTextBold: {
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
    color: '#000',
    // fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 16
  }
})

HomeScreen.navigationOptions = {
  title: 'Tandas'
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
)(HomeScreen)
