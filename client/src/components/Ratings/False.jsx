import CheckBoxOutlineBlankSharpIcon from '@material-ui/icons/CheckBoxOutlineBlankSharp';

const False = (props) => {

  return (
      <article class="rating">
        <h1 class="rating--text">{props.text}</h1>
        <CheckBoxOutlineBlankSharpIcon />
      </article>
  );
}

export default False
