import { NextPageWithLayout } from "@/pages/_app";
import Head from "next/head";

const Page3: NextPageWithLayout = () => {
  return <>Page3</>;
};

Page3.getLayout = (page: React.ReactNode) => {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.payload = "page3"`,
          }}
        />
      </Head>
      {page}
    </>
  );
};

export default Page3;
