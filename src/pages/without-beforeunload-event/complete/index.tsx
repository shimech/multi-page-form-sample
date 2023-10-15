import Layout, { FormSchema } from "@/components/layout";
import { NextPageWithLayout } from "@/pages/_app";
import Link from "next/link";
import { useFormContext, useWatch } from "react-hook-form";

const Complete: NextPageWithLayout = () => {
  const { control } = useFormContext<FormSchema>();
  const data = useWatch({ control });
  return (
    <>
      {JSON.stringify(data)}
      <div>
        <Link href="/">Top</Link>
      </div>
    </>
  );
};

Complete.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Complete;
