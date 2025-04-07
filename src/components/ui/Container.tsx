import { ChildrenType } from "@/app/layout";

type Containertype = ChildrenType & {
  className?: string;
  background?: string;
};

const Container = ({ children, className, background }: Containertype) => {
  return (
    <div className={`${background} py-6 lg:py-8 `}>
      <div className={`${className} mx-auto container`}> {children}</div>
    </div>
  );
};

export default Container;
