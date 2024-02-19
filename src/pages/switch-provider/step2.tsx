import { NextPageWithLayout } from "@/pages/_app";
import { FormProvider, useBar, useFoo, useForm } from "@/components/provider";

const Step2: NextPageWithLayout = () => {
  const { type } = useForm();
  return (
    <>
      <div>{type}</div>
      {type === "foo" ? <Foo></Foo> : <Bar></Bar>}
    </>
  );
};

const Foo = () => {
  const { count, increment } = useFoo();
  return <button onClick={increment}>{count}</button>;
};

const Bar = () => {
  const { count, increment } = useBar();
  return <button onClick={increment}>{count}</button>;
};

Step2.getLayout = function getLayout(page: React.ReactElement) {
  return <FormProvider>{page}</FormProvider>;
};

export default Step2;
