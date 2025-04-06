import { ChildrenType } from "@/app/layout";

type Containertype = ChildrenType & {
  className?: string;
  background?: string;
};

const Container = ({ children, className, background }: Containertype) => {
  return (
    <div className={`${background} py-8 lg:py-10 2xl:py-16`}>
      <div className={`${className} mx-auto container`}> {children}</div>
    </div>
  );
};

export default Container;
