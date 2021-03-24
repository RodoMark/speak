import Overlay from './Overlay'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
  return (
    <Overlay>
      <CircularProgress />
      <h1>Loading</h1>
    </Overlay>
  );
}
