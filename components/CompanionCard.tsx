import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
  id: string;
  name: string;
  subject: string;
  topic: string;
  duration: number;
  color?: string;
  bookmarked?: boolean;
}

const CompanionCard = ({
  id,
  name,
  subject,
  topic,
  duration,
  color,
  bookmarked,
}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex items-center justify-between">
        <div className="subject-badge">{subject}</div>

        <button className="companion-bookmark">
          <Image
            src="/icons/bookmark.svg"
            alt="bookmark"
            width={12.5}
            height={15}
            quality={100}
          />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>

      <div className="flex items-center gap-2">
        <Image src="/icons/clock.svg" alt="clock" width={13.5} height={13.5} />
        <span className="text-sm">{duration} minutes</span>
      </div>

      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center bg-black">
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
