import { useNavigate } from 'react-router-dom';

export default function Back() {
  const nav = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          nav(-1);
        }}
      >
        Go back
      </button>
    </>
  );
}
