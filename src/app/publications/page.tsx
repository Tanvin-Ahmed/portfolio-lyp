import PublicationCard from "@/components/publications/publication-card";
import { Separator } from "@/components/ui/separator";
import { publicationData } from "@/constant/publicationsData";
import { Fragment } from "react";

const PublicationsPage = () => {
  return (
    <section className="container mx-auto p-4">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
        Publications
      </h1>
      <p>
        You can also find my articles on my{" "}
        <a href="" className="text-primary underline">
          Google Scholar profile
        </a>
        .
      </p>
      <div className="mt-6 space-y-10">
        {publicationData.map((data, index) => (
          <Fragment key={data._id}>
            <PublicationCard {...data} />
            {!(index + 1 === publicationData.length) ? <Separator /> : null}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default PublicationsPage;
