import { TChildren } from "@/lib/types/types";

type TContainer = TChildren & {
  className?: string;
  background?: string;
};

const Container = ({ children, className, background }: TContainer) => {
  return (
    <div className={`${background} py-6 lg:py-8 px-2`}>
      <div className={`${className} mx-auto container`}> {children}</div>
    </div>
  );
};

export default Container;
