"use client";
import { Roles } from "@/models/user.model";
import { useEffect, useState } from "react";
import CardNeedAccount from "./components/card-need-account";
import { useUser } from "@/context/user.store";

function AccountPage() {
  const userExist = useUser((state) => state.user);
  const [cardAccount, setCardAccount] = useState(false);
  useEffect(() => {
    if (userExist.role === Roles.GUEST) {
      setCardAccount(true);
    }
  }, []);

  return <>{cardAccount && <CardNeedAccount />}</>;
}
export default AccountPage;
