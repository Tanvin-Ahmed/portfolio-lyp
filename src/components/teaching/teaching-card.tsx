import Link from "next/link";

type Props = {
  _id: string;
  title: string;
  timeAndPlace: string;
  description: string;
};

const TeachingCard = ({ _id, timeAndPlace, description, title }: Props) => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl sm:text-2xl font-bold">
        <Link href={`/teaching/${_id}`} className="text-primary underline">
          {title}
        </Link>
      </h2>
      <small className="text-muted-foreground">{timeAndPlace}</small>
      <p>{description}</p>
    </div>
  );
};

export default TeachingCard;
