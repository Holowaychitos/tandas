import { StackNavigator } from 'react-navigation'

import Home from './Views/Home'
import Shop from './Views/Shop'
import Form from './Views/Form'
import Resume from './Views/Resume'

export default StackNavigator({
  Shop: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  Home: {
    screen: Shop,
    navigationOptions: ({navigation}) => ({
      header: null
    })
  },
  Form: {screen: Form},
  Resume: {screen: Resume}
})
