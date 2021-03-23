import Loading from './Overlays/Loading';
import { useContext } from 'react';
import { CameraContext } from '../context/CameraContext';

export default function Ploading() {
  const { stateLoading } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;

  return <>{loading && <Loading className='loading'/>}</>;
}
