import TeachingCard from "@/components/teaching/teaching-card";
import { Separator } from "@/components/ui/separator";
import { teachingData } from "@/constant/teachingData";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Teaching | Portfolio",
  description: "My teaching experience",
};

const TeachingPage = () => {
  return (
    <section className="container mx-auto p-4">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">Teaching</h1>
      <div className="mt-6 space-y-10">
        {teachingData.map((data, index) => (
          <Fragment key={data._id}>
            <TeachingCard {...data} />
            {!(index + 1 === teachingData.length) ? <Separator /> : null}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default TeachingPage;
