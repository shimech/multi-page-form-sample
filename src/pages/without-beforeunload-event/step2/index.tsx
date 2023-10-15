import Layout from "@/components/layout";
import { NextPageWithLayout } from "@/pages/_app";
import Link from "next/link";
import { useFormContext } from "react-hook-form";

const Step1: NextPageWithLayout = () => {
  const { register } = useFormContext();
  return (
    <>
      <form>
        <label htmlFor="age">Age</label>
        <input id="age" {...register("age", { valueAsNumber: true })}></input>
      </form>
      <div>
        <Link href="/without-beforeunload-event/step1">Back (input name)</Link>
      </div>
    </>
  );
};

Step1.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Step1;
