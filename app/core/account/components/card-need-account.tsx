import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PublicRoutes } from "@/routes/routes";
import Link from "next/link";

function CardNeedAccount() {
  return (
    <Card className="w-screen h-full flex flex-col items-center justify-start pt-52">
      <CardHeader>
        <CardTitle>You need to create an account for this feature</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <h3>Create an account</h3>
        <Link href={PublicRoutes.REGISTER} className="text-blue-500">
          Register
        </Link>
        <Separator className="my-4" />
        <h3>Do you have an account?</h3>
        <Link href={PublicRoutes.LOGIN} className="text-blue-500">
          Login
        </Link>
      </CardContent>
    </Card>
  );
}
export default CardNeedAccount;
