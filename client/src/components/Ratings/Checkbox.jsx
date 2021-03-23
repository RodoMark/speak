import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const Checkbox = (props) => {
  
  const [ratings, setRatings] = useState(
    [
      {ethical: false}, 
      {persuasive: false}, 
      {wellInformed: false}
    ]
  )

  return (
      <article class="rating">
        <DoneOutlineIcon />
      </article>
  );
}

export default Checkbox
