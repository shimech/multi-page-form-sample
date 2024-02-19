import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>multi-page-form-sample</title>
      </Head>
      <main>
        <ul>
          <li>
            <Link href="/switch-provider/step1">Switch Provider</Link>
          </li>
          <li>
            <Link href="/without-beforeunload-event/step1">
              without beforeunload event
            </Link>
          </li>
          <li>
            <Link href="/swr">SWR</Link>
          </li>
          <li>
            <Link href="/preventing-duplicate-submit">
              preventing duplicate submit
            </Link>
          </li>
          <li>
            <Link href="/404">404</Link>
          </li>
          <li>
            <Link href="/error">error</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
