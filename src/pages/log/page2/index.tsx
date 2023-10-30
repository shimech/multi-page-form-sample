import { NextPageWithLayout } from "@/pages/_app";
import Script from "next/script";

const Page2: NextPageWithLayout = () => {
  return <>Page2</>;
};

Page2.getLayout = (page: React.ReactNode) => {
  return (
    <>
      <Script id="page2">{`window.payload = "page2"; window.sendLog();`}</Script>
      {page}
    </>
  );
};

export default Page2;
