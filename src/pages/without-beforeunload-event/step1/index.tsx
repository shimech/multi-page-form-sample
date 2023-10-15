import Layout, { FormSchema } from "@/components/layout";
import { NextPageWithLayout } from "@/pages/_app";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useFormContext } from "react-hook-form";

const Step1: NextPageWithLayout = () => {
  const router = useRouter();
  const { register, handleSubmit } = useFormContext<FormSchema>();
  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    console.log(data);
    await router.push("/without-beforeunload-event/step2");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} />
        <button type="submit">Next (input age)</button>
      </form>
    </>
  );
};

Step1.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Step1;
