import { Button } from "@/components/ui/button";
import Link from "next/link";

const CVPage = () => {
  return (
    <section className="container mx-auto p-4 h-screen">
      <iframe
        src="https://drive.google.com/file/d/13QX5skwDJ0BbhPxvJNu2Znr6d4dHIA0Y/preview"
        width="100%"
        height="100%"
        allow="autoplay"
      />
      <div className="flex justify-center items-center mt-6">
        <Button>
          <Link
            className="w-full h-full block"
            href="https://drive.google.com/uc?export=download&id=13QX5skwDJ0BbhPxvJNu2Znr6d4dHIA0Y"
            download={true}
          >
            Download CV
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CVPage;
