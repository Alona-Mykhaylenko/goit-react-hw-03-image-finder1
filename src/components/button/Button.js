const Button = ({ fetchImagesProp }) => {
  return (
    <button type="button" className="LoadMore-button" onClick={fetchImagesProp}>
      Load more
    </button>
  );
};

export default Button;
