import { useRef } from 'react';
import { useContext } from 'react';
import Axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { CameraContext } from '../context/CameraContext';

const CreateRoom = (props) => {
  const { stateLoading } = useContext(CameraContext);
  const [loading, setLoading] = stateLoading;
  const techerId = Axios.get();
  const params = useParams();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    console.log('Title and description', title, description);
    const link = `http://localhost:3000/Login/${title}`;

    const roomInfo = { title, description, link };
    setLoading(true);
    Axios.post('api/rooms', roomInfo)
      .then((res) => {
        setLoading(false);
        history.push(`/`);
      })
      .catch((err) => console.log(err));
    // .
  };
  return (
    <div className='box'>
      <div className='square'></div>
      <div className='square'></div>
      <div className='square'></div>
      <div className='square'></div>
      <div className='square'></div>
      <div className='container'>
        <div className='form'>
          <h2>Create New Room</h2>
          <form action='' onSubmit={handleSubmit}>
            <p className='forget'>Choose a title for the room</p>
            <div className='inputBox'>
              <input type='text' placeholder='Room Title' ref={titleRef} />
            </div>
            <p className='forget'>Choose a brief description for the room</p>
            <div className='inputBox'>
              <input
                type='text'
                placeholder='Room Description'
                ref={descriptionRef}
              />
            </div>
            <div className='inputBox'>
              <input type='submit' value='+' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateRoom;
