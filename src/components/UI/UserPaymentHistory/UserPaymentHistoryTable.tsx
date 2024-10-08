"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Divider,
} from "@nextui-org/react";
import React from "react";

import MangeUserSkeleton from "../Skeleton/MangeUserSkelent";

import { columns } from "./UserPaymentContent";
import UserPaymentHistoryCell from "./UserPaymentHistoryCell";

import { IUser } from "@/src/types";
import { useGetSinglePayment } from "@/src/hooks/payment.hook";
import { useUser } from "@/src/context/user.provider";

export default function UserPaymentHistoryTable() {
  const { user } = useUser();

  const { data, isLoading } = useGetSinglePayment(user?._id as string);

  if (isLoading) {
    return <MangeUserSkeleton />;
  }

  const payments = data?.data || [];

  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-bold mb-2">
          Manage <span className="text-pink-500">Users</span>
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Manage all users and see how they are performing
        </p>
      </div>
      <Divider className="my-6" />
      {payments.length > 0 ? (
        <Table aria-label="Manage Users Table">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={payments}>
            {(payment: IUser) => (
              <TableRow key={payment?._id}>
                {(columns) => (
                  <TableCell>
                    <UserPaymentHistoryCell
                      columnKey={columns as string}
                      payment={payment}
                    />
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center mt-4">
          <b>
            It seems there are no users to manage at the moment. Lets add some!
          </b>
        </div>
      )}
    </>
  );
}
