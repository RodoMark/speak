import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const True = (props) => {
  
  return (
      <article class="rating">
        <h1 class="rating--text">{props.text}</h1>
        <DoneOutlineIcon />
      </article>
  );
}

export default True
