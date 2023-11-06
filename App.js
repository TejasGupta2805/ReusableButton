import Button from './src/components/MLISUPERAPP/Button';
import closeIcon from './assets/Icons/close.png';

function App() {
  return (
    <Button
      btnText={'Click Me'}
      btnWidth={232}
      height={48}
      borderRadius={200}
      backgroundColor={'#F27930'}
      rightIcon={closeIcon}
    />
  );
}

export default App;
