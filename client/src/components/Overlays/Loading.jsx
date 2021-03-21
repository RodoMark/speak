import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
  return (
    <div className='overlay'>
      <CircularProgress />
      <h1>Loading</h1>
    </div>
  );
}
