import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export default function Logo({ width = 200, height = 100, className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Wallety"
      fetchPriority="high"
      width={width}
      height={height}
      className={className}
    />
  )
}
