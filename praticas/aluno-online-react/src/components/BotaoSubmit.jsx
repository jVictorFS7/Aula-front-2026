import './BotaoSubmit.css'

function BotaoSubmit({ children }) {
  return (
    <>
      <button type="submit">{children}</button>
    </>
  );
}

export default BotaoSubmit;
