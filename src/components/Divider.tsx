export default function Divider({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div
        className={`rounded-full bg-blue! w-full h-[6px] ${className || ""}`}
        {...props}
      ></div>
    </>
  );
}
