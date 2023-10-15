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
            <Link href="/without-beforeunload-event/step1">
              without beforeunload event
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
