import { Calendar } from "lucide-react";

type Props = {
  params: {
    id: string;
  };
};

const page = ({ params }: Props) => {
  return (
    <section className="container mx-auto p-4">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">Blog title</h1>
      <small className="text-muted-foreground">reading time</small>
      <p className="flex items-center gap-1 font-bold">
        <Calendar className="w-4 h-4" />
        <span>Published: date</span>
      </p>
      <p>description</p>
    </section>
  );
};

export default page;
