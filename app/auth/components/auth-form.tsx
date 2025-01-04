import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

function AuthForm({
  children,
  onSubmit,
  title,
  href,
  footerMsg,
  footerMsgLink,
}: {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  title: string;
  href: string;
  footerMsg: string;
  footerMsgLink: string;
}) {
  return (
    <Card className="w-[30vw] bg-accent">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="flex flex-col gap-3 ">
          {children}

          <Button type="submit" className="w-full">
            {title}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <span> {footerMsg} </span>
        <Link href={href} className="text-blue-500">
          {footerMsgLink}
        </Link>
      </CardFooter>
    </Card>
  );
}
export default AuthForm;
