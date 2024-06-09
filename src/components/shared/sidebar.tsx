import { sidebarData } from "@/constant/sidebarData";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <section className="hidden md:block fixed max-w-52 left-0 top-0 bottom-0 overflow-y-auto overflow-x-hidden p-4 bg-inherit mt-16">
        <div className="mt-6 mb-4 space-y-6">
          <Avatar className="h-40 w-40">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="img"
              className="w-full h-full"
            />
            <AvatarFallback>F</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Md. Ferdous</h1>
            <small className="text-muted-foreground">
              Short biography for the left-hand sidebar
            </small>
          </div>
          <div className="flex flex-col justify-center gap-y-1">
            {sidebarData.map((data) =>
              data.link.trim() ? (
                <Link href={data.link} key={data.link}>
                  <div className="flex justify-start items-center gap-1 text-[12px]">
                    {data.Icon ? (
                      <data.Icon size={12} />
                    ) : (
                      <Image src={data.src} alt="logo" width={12} height={12} />
                    )}
                    <span className="text-muted-foreground">{data.label}</span>
                  </div>
                </Link>
              ) : (
                <small
                  key={data.link}
                  className="flex justify-start items-center gap-1"
                >
                  {data.Icon ? (
                    <data.Icon size={12} />
                  ) : (
                    <Image src={data.src} alt="logo" width={12} height={12} />
                  )}
                  <span className="text-muted-foreground">{data.label}</span>
                </small>
              )
            )}
          </div>
        </div>
      </section>
      <section className="flex items-center gap-6 md:hidden mt-20 container mx-auto p-4">
        <div className="flex justify-center items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="img" />
            <AvatarFallback>F</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="sm:text-lg font-bold m-0 p-0">Md. Ferdous</h1>
            <small className="text-muted-foreground text-[10px] sm:text-[12px] m-0 p-0">
              Short biography for the left-hand sidebar
            </small>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} className="text-[12px] sm:text-[14px]">
              Follow
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-w-56">
            <DropdownMenuGroup>
              {sidebarData.map((data) =>
                data.link.trim() ? (
                  <Link href={data.link} key={data.link}>
                    <DropdownMenuItem className="flex justify-start items-center gap-1">
                      {data.Icon ? (
                        <data.Icon size={12} />
                      ) : (
                        <Image
                          src={data.src}
                          alt="logo"
                          width={12}
                          height={12}
                        />
                      )}
                      <span className="text-muted-foreground">
                        {data.label}
                      </span>
                    </DropdownMenuItem>
                  </Link>
                ) : (
                  <DropdownMenuItem
                    key={data.link}
                    className="flex justify-start items-center gap-1"
                  >
                    {data.Icon ? (
                      <data.Icon size={12} />
                    ) : (
                      <Image src={data.src} alt="logo" width={12} height={12} />
                    )}
                    <span className="text-muted-foreground">{data.label}</span>
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </>
  );
};

export default Sidebar;
