export const Button = ({ text, onClick, isLoading }) => {
  return (
    <button onClick={onClick} disabled={isLoading} type="button">
      {text}
    </button>
  );
};
