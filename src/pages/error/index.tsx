import React from "react";

export default function Page() {
  const [isError, invokeError] = React.useReducer(() => true, false);

  if (isError) {
    throw new Error();
  }

  return (
    <>
      <button onClick={invokeError}>invoke error</button>
    </>
  );
}
