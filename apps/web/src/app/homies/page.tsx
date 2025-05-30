import { PROJECTS } from "@/app/projects";
import { Card } from "../../components/card";
import { Link } from "../../components/link";
import { MobileCard } from "../../components/mobile-card";
import { generateOGHuntMetadata } from "../metadata";

export const generateMetadata = generateOGHuntMetadata({
  title: "OGHUNT | The Homies Products",
  description: "Our homies cooked many different side products please give them a look 🙏",
});

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b p-1 text-center">
      <Link href="/" className="mt-4 font-bold text-2xl">
        ← Back to Product Hunt with ZERO AI Slop
      </Link>
      <h1 className="text-white my-8 text-6xl font-extrabold">The Homies Products</h1>

      <div className="flex flex-col gap-4 overflow-hidden px-2 text-left md:gap-8">
        {PROJECTS.map((item, idx) => (
          <div key={`homie-${item.id}`}>
            {idx !== 0 && (
              <div className="flex h-0.5 w-full bg-neutral-200 md:hidden dark:bg-neutral-800" />
            )}
            <div key={`desktop-${item.name}`} className="hidden md:flex">
              <Card key={`card-${item.name}`} homie index={idx} post={item} url={item.url} />
            </div>
            <div key={`mobile-${item.name}`} className="md:hidden">
              <MobileCard key={`card-${item.name}`} post={item} url={item.url} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
