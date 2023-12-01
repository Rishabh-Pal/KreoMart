"use client";
import Icon from "@/components/shared/Icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import route from "@/routes";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserDropdown = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>loading...</div>;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className=" border border-none">
          <Icon name={"user"} size={24} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white w-96 h-96">
        <DropdownMenuLabel className="text-xl font-normal">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="border-t border-gray-300 my-4" />
        {status === "authenticated" ? (
          <>
            <Link href={route.Profile}>
              <DropdownMenuItem className="text-xl font-normal">
                Account Setting{" "}
              </DropdownMenuItem>
            </Link>

            <Link href={route.Wishlist}>
              <DropdownMenuItem className="text-xl font-normal">
                My WishList
              </DropdownMenuItem>
            </Link>

            <Link href={route.OrderHistory}>
              <DropdownMenuItem className="text-xl font-normal">
                My Order
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator className="border-t border-gray-300 my-4" />
            <DropdownMenuItem>
              <button
                onClick={() => signOut()}
                className="text-xl font-normal text-red-default"
              >
                Logout
              </button>
            </DropdownMenuItem>
          </>
        ) : (
          <Link href={`${route.Login}`}>
            <DropdownMenuItem className="text-xl font-normal">
              {" "}
              Login
            </DropdownMenuItem>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserDropdown;
