import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
  //  backgroundColor: '#fff',
  //  backgroundColor: '#FFFFE0',
  //  backgroundColor: '#36648B', /*Steel blue 4*/
  //  backgroundColor: '#030303',
  //  backgroundColor: '#696969',
  //backgroundColor: '#008080', /*teal*/
  //  backgroundColor: '#F0FFF0', /*Honey Dew*/
      backgroundColor: '#EEE9E9',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
