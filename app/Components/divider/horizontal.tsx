import { cn } from "../Lib/utils";

type HorizontalDividerProps = {
  classname?: string;
};

export const HorizontalDividerProps = ({
  classname,
}: HorizontalDividerProps) => {
  return (
    <div className={cn("w-full my-8 border-b border-b-gray-800", classname)} />
  );
};
