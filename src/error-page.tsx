import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error"
      className="min-h-screen flex flex-col text-center justify-it dems-center place-items-center justify-center"
    >
      <h1>Opps, Looks like you looking for the wrong things here.</h1>
      <p>
        Error: <i>{isRouteErrorResponse(error) && error?.statusText}</i>
      </p>
    </div>
  );
}
