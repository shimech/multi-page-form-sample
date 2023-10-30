import { NextPageWithLayout } from "@/pages/_app";
import Link from "next/link";
import Script from "next/script";

const Page1: NextPageWithLayout = () => {
  return (
    <>
      <div>Page1</div>
      <ul>
        <li>
          <Link href="/log/page2">Page2</Link>
        </li>
        <li>
          <Link href="/log/page3">Page3</Link>
        </li>
      </ul>
    </>
  );
};

Page1.getLayout = (page: React.ReactNode) => {
  return (
    <>
      <Script id="page1">{`window.payload = "page1"; window.sendLog();`}</Script>
      {page}
    </>
  );
};

export default Page1;
