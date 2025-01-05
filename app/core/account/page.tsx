"use client";
import { Roles } from "@/models/user.model";
import { useUser } from "@/redux/hooks/useUser";
import { useEffect, useState } from "react";
import CardNeedAccount from "./components/card-need-account";

function AccountPage() {
  const { getUser } = useUser();
  const [cardAccount, setCardAccount] = useState(false);
  const userExist = getUser();
  useEffect(() => {
    if (userExist.role === Roles.GUEST) {
      setCardAccount(true);
    }
  }, []);

  return <>{cardAccount && <CardNeedAccount />}</>;
}
export default AccountPage;
