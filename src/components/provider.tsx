import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

type Foo = { count: number; increment: VoidFunction };

const FooContext = React.createContext<Foo>({} as Foo);

export const FooProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = React.useState(0);
  return (
    <FooContext.Provider
      value={{ count, increment: () => setCount((prev) => prev + 1) }}
    >
      {children}
    </FooContext.Provider>
  );
};

export const useFoo = () => React.useContext(FooContext);

type Bar = { count: number; increment: VoidFunction };

const BarContext = React.createContext<Bar>({} as Bar);

export const BarProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = React.useState(0);
  return (
    <BarContext.Provider
      value={{ count, increment: () => setCount((prev) => prev + 1) }}
    >
      {children}
    </BarContext.Provider>
  );
};

export const useBar = () => React.useContext(BarContext);

type Type = "foo" | "bar";

type Form = { type: Type | undefined };

const FormContext = React.createContext<Form>({} as Form);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: type } = useSWR("key", () => {
    console.log("fetch");
    const type = Math.random() < 0.5 ? "foo" : "bar";
    return type;
  });
  const [isClientSideRendered, setClientSideRendered] = React.useState(false);
  const Provider =
    type === "foo"
      ? FooProvider
      : type === "bar"
      ? BarProvider
      : React.Fragment;

  React.useEffect(() => {
    setClientSideRendered(true);
  }, []);

  if (typeof window === "undefined" || !isClientSideRendered) {
    return null;
  }

  return (
    <Provider>
      <FormContext.Provider value={{ type }}>{children}</FormContext.Provider>
    </Provider>
  );
};

export const useForm = () => React.useContext(FormContext);
