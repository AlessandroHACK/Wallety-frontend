
type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Heading({ children, className = '' }: HeadingProps) {
  return (
    <h1 className={`text-2xl md:text-3xl font-extrabold text-white tracking-tight ${className}`}>
      {children}
    </h1>
  );
}
