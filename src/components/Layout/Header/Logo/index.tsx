import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center space-x-3">
  <Image
    src="/images/logo/logob.svg"
    alt="logo"
    width={45}
    height={15}
    style={{ width: "120", height: "auto" }}
    quality={100}
  />
  <span className="text-2xl font-bold text-gray-100">Chromosol.</span>
</Link>
  );
};

export default Logo;
