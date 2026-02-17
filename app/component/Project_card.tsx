import Image from "next/image";

export default function Project_card({
  title,
  date,
  info,
  src,
  alt,
}: {
  title: string;
  date: string;
  info: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow hover:shadow-md transition-shadow">
      <div className="p-4 flex justify-center bg-green-50 dark:bg-green-950">
        <Image src={src} alt={alt} width={80} height={80} />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p>{info}</p>
      </div>
    </div>
  );
}
