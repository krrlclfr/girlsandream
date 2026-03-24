// import { useAppDispatch, UseAppSelector } from './hooks/reduxHooks'
// import { increment } from './app/features/counter/counterSlice';
// import { Button } from '@mui/material';
import AppRoutes from './routes/AppRoutes';
import FooterPage from "./components/Footer";

function App() {
  // const count = UseAppSelector(state => state.counter.value)
  // const dispatch = useAppDispatch();

  return (
    <div className="App">
      {/* <Home /> */}
      <AppRoutes />
      {/* <h1>Counter: {count}</h1>
      <Button onClick={() => dispatch(increment())} variant="outlined" color="primary"> CLICK ME </Button> */}
    </div>
  );
}

export default App;
