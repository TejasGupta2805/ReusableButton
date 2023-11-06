import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import closeIcon from '../../../assets/Icons/close.png';

const Button = ({
  btnText = 'Login',
  btnWidth = 200,
  height = 50,
  borderRadius = 150,
  backgroundColor = 'red',
  rightIcon,
}) => {
  const containerStyle = {
    width: btnWidth,
    height: height,
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  };

  return (
    <View style={styles.appContainer}>
      <TouchableOpacity
        style={containerStyle}
        onPress={() => alert('Click Me !')}>
        <Text style={styles.btnText}>{btnText}</Text>
        {rightIcon && (
          <Image
            style={{marginLeft: 15, alignItems: 'center', fontSize: 20}}
            source={closeIcon}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    // fontFamily: 'Manrope',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: -0.0035,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
