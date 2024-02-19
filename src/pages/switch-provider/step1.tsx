import { NextPageWithLayout } from "@/pages/_app";
import { FormProvider, useBar, useFoo, useForm } from "@/components/provider";
import Link from "next/link";

const Step1: NextPageWithLayout = () => {
  const { type } = useForm();
  return (
    <>
      <div>{type}</div>
      {type === "foo" ? <Foo></Foo> : <Bar></Bar>}
      <Link href="/switch-provider/step2">next</Link>
    </>
  );
};

const Foo = () => {
  const { count, increment } = useFoo();
  console.log("template: foo", count);
  return <button onClick={increment}>{count}</button>;
};

const Bar = () => {
  const { count, increment } = useBar();
  console.log("template: bar", count);
  return <button onClick={increment}>{count}</button>;
};

Step1.getLayout = function getLayout(page: React.ReactElement) {
  return <FormProvider>{page}</FormProvider>;
};

export default Step1;
