import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    //backgroundColor: '#4F94CD',
    //backgroundColor: '#36648B', /*steel Blue 4*/
    //backgroundColor: '#030303', /*Gray 1*/
    //backgroundColor: '#696969',
  //  backgroundColor: '#008080', /*Teal*/
  //  backgroundColor: '#698B22', /*Green*/
  //  backgroundColor: '#4F94CD', /*Blue*/
    backgroundColor: '#FFA500', /*Orange*/
    borderRadius: 5,
    borderWidth: 1,
    //borderColor: '#007aff',
    borderColor: '#FFA500',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
