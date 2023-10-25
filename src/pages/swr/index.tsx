import Link from "next/link";
import React from "react";
import { SWRConfig } from "swr";
import useSWRImmutable from "swr/immutable";

const Swr = () => {
  const { data, mutate, isLoading } = useSWRImmutable("/api/swr", () =>
    fetch("/api/swr").then((value) => value.json())
  );
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <button
        onClick={() => {
          mutate();
        }}
      >
        revalidate
      </button>
      {data.message}
      <div>
        <Link href="/">back to top</Link>
      </div>
    </>
  );
};

export default function Page() {
  return (
    <SWRConfig value={{ suspense: false }}>
      <Swr />
    </SWRConfig>
  );
}
