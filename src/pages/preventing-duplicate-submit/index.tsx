import { SubmitHandler, useForm } from "react-hook-form";

type FormState = {
  name: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormState>({
    defaultValues: {
      name: "",
    },
  });
  const onSubmit: SubmitHandler<FormState> = async (data) => {
    console.log("start submit...");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(`submit: [${JSON.stringify(data)}]`);
  };
  return (
    <>
      <div>preventing duplicate submit</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <button type="submit">submit button (not disabled)</button>
        <button type="submit" disabled={isSubmitting}>
          submit
        </button>
      </form>
    </>
  );
}
