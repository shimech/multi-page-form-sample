import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { DevTool } from "@hookform/devtools";

const formSchema = z.object({
  name: z.string(),
  age: z.number(),
});
export type FormSchema = z.infer<typeof formSchema>;

export default function Layout({ children }: { children: React.ReactNode }) {
  const methods = useForm<FormSchema>({
    defaultValues: { name: "", age: 0 },
    resolver: zodResolver(formSchema),
  });
  return (
    <FormProvider {...methods}>
      {children}
      <DevTool control={methods.control} />
    </FormProvider>
  );
}
