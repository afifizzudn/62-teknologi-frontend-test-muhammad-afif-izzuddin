import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate()
  console.error(error);

  const goBack = () => navigate(-1)

  return (
    <div id="error-page">
      <h1>Oops 404!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
        <button onClick={goBack}>Go Back</button>
    </div>
  );
}