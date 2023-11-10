import Button from './src/components/MLISUPERAPP/Button';
import closeIcon from './assets/Icons/close.png';
import {indianOrange,white,shadowColor} from './src/themes/colors'
import stringText from './src/themes/stringText';
import sizes from './src/themes/sizes';

function App() {
  const handleClick = () => {
    alert ('login');
  }
  return (
    <Button
      btnText={stringText.loginButtonText}
      btnWidth={sizes.buttonWidth}
      height={sizes.buttonHeight}
      borderRadius={sizes.buttonBorderRadius}
      backgroundColor={white}
      borderColor={shadowColor}
      borderWidth={sizes.buttonBorderWidth}
      // rightIcon={closeIcon}
      onPress={handleClick}
    />
  );
}

export default App;
