import Layout, { FormSchema } from "@/components/layout";
import { NextPageWithLayout } from "@/pages/_app";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useFormContext } from "react-hook-form";

const Step2: NextPageWithLayout = () => {
  const router = useRouter();
  const { register, handleSubmit } = useFormContext<FormSchema>();
  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    console.log(data);
    await router.push("/without-beforeunload-event/complete");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="age">Age</label>
        <input id="age" {...register("age", { valueAsNumber: true })}></input>
        <button type="submit">Complete</button>
      </form>
      <div>
        <Link href="/without-beforeunload-event/step1">Back (input name)</Link>
      </div>
    </>
  );
};

Step2.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Step2;
