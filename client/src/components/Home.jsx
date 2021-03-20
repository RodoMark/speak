import Button from './Buttons/Button';

const Home = () => {
  return (
    <>
      <h2>This is Home page</h2>
      <Button call confirm onClick={console.log('New room')}>
        +
      </Button>
    </>
  );
};

export default Home;
