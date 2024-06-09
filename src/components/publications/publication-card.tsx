import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  _id: string;
  title: string;
  publicationDate: string;
  about: string;
  recommendedCitation: string;
  paperDownloadLink: string;
  slideDownloadLink: string;
};

const PublicationCard = ({
  _id,
  about,
  paperDownloadLink,
  publicationDate,
  recommendedCitation,
  slideDownloadLink,
  title,
}: Props) => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl sm:text-2xl font-bold">
        <Link href={`/${_id}`} className="text-primary underline">
          {title}
        </Link>
      </h2>
      <p>{publicationDate}</p>
      <p>{about}</p>
      <p>Recommended citation: {recommendedCitation}</p>
      <div className="flex items-center gap-4">
        <Button variant={"default"}>Download Paper</Button>
        <Button variant={"secondary"}>Download Slides</Button>
      </div>
    </div>
  );
};

export default PublicationCard;
