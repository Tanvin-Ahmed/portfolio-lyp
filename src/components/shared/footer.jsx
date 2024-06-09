import { Github, Wifi } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-muted-foreground mt-20 bg-muted shadow-lg container mx-auto p-4">
      <h2 className="text-xl text-muted">Sitemap</h2>
      <div className="flex items-center gap-2">
        <p className="font-bold uppercase text-[14px]">FOLLOW:</p>
        <Link
          href={"https://github.com/Tanvin-Ahmed"}
          className="flex justify-center items-center gap-1 text-muted"
        >
          <Github size={14} /> <span className="uppercase">Github</span>
        </Link>
        <Link
          href={""}
          className="flex justify-center items-center gap-1 text-muted"
        >
          <Wifi size={14} className="transform rotate-45" />{" "}
          <span className="uppercase">Feed</span>
        </Link>
      </div>
      <p className="text-muted-foreground text-[14px] mt-6">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-bold">by Md. Ferdous</span>. All rights reserved.
      </p>
      <small className="text-muted-foreground">
        Developed by:{" "}
        <Link
          href={"https://tanvin-ahmed.web.app"}
          target="_blank"
          className="font-semibold"
        >
          A. N. M. Tanvin Ahmed
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
