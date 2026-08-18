import Link from "next/link";

export default function ToolCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="mt-3 text-gray-500">{desc}</p>
      </div>
    </Link>
  );
}
