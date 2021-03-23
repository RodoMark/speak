import CheckBoxOutlineBlankSharpIcon from '@material-ui/icons/CheckBoxOutlineBlankSharp';

const False = (props) => {


  return (
      <article onClick={props.onClick} className="rating">
        <h1 className="rating--text">{props.text}</h1>
        <CheckBoxOutlineBlankSharpIcon />
      </article>
  );
}

export default False
