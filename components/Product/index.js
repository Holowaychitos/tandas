import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import Icon from 'react-native-vector-icons/Octicons'
import moment from 'moment'

const {height, width} = Dimensions.get('window')

const userID = '3e332eh3h8293he8923e'

export default ({info, idx, actions, count = 0}) => (
  <View style={styles.box}>
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{info.owner}</Text>
        <View style={styles.array}>
          {info.people.map((el, key) => {
            return (
              <Image
                style={styles.miniAvatar}
                key={key}
                source={{uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'}} />
            )
          })}
        </View>
      </View>

      <View style={{justifyContent: 'space-between'}}>
        <Text style={styles.price}>${info.amount.toLocaleString()}</Text>
        <Text style={styles.date}>{moment(info.date).format('LL')}</Text>

        {/*
          <View style={styles.actions}>
            {
              info.people.includes(userID)
              ? <Icon onPress={() => actions.removePeople(idx, userID)} size={25} name='calendar' color='blue' />
              : <Icon onPress={() => actions.addPeople(idx, userID)} size={25} name='calendar' color='#000' />
            }
          </View>
          */}
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 10
  },
  miniAvatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 10,
    marginTop: 10
  },
  array: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },

  box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    flex: 1,
    borderWidth: 2,
    borderColor: '#ababab0f',
    backgroundColor: '#fff8'
  },
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  count: {
    fontSize: 10,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginLeft: 20,
    marginRight: 20
  },
  price: {
    fontSize: 18,
    backgroundColor: 'transparent'
  },
  date: {
    fontSize: 12,
    color: '#ff5300'
  },
  actions: {
    alignItems: 'center',
    padding: 20
  }
})
