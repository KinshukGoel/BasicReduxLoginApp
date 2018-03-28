import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
  //  backgroundColor: '#36648B', /*To be commented out, steel blue #4*/
  //  backgroundColor: '#030303', /*To be commented out, gray #1*/
    //backgroundColor: '#696969',
    //backgroundColor: '#008080', /*teal*/
  //  backgroundColor: '#F0FFF0', /*Honey Dew*/
    backgroundColor: '#EEE9E9',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
