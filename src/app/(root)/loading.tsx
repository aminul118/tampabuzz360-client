import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-284px)]">
      <Image
        src="/images/loading.gif"
        alt="Loading spinner for loader"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Loading;
