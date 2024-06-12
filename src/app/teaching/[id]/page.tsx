type Props = {
  params: {
    id: string;
  };
};

const page = ({ params }: Props) => {
  return (
    <section className="container mx-auto p-4">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
        Teaching title
      </h1>
      <small className="text-muted-foreground">time and place</small>
      <p>Description</p>
    </section>
  );
};

export default page;
