import { Button } from "@/components/ui/button";

type Props = {
  params: {
    id: string;
  };
};

const page = ({ params }: Props) => {
  console.log(params.id);
  return (
    <section className="container mx-auto p-4">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
        Publication title
      </h1>
      <p>Date</p>
      <p>About</p>
      <p>Recommended citation</p>
      <p>Description</p>
      <div className="flex items-center gap-4 mt-6">
        <Button variant={"default"}>Download Paper</Button>
        <Button variant={"secondary"}>Download Slides</Button>
      </div>
    </section>
  );
};

export default page;
