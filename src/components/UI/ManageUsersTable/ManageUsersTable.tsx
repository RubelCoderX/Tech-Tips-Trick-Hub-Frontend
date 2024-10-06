"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";
import React from "react";

import { columns } from "./UserConstant";
import ManaeUserCell from "./ManaeUserCell";

import { useGetAllUsers } from "@/src/hooks/user.hook";

export default function ManageUsersTable() {
  const { data, isLoading, error } = useGetAllUsers();

  if (isLoading) {
    return (
      <div className="text-center my-auto">
        <Spinner color="primary" label="Primary" labelColor="primary" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center text-danger">
        Error fetching users: {error.message}
      </div>
    );
  }

  const users = data?.data || [];

  return (
    <>
      {users ? (
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
          <TableBody items={users}>
            {(user) => (
              <TableRow key={user?._id}>
                {(columns) => (
                  <TableCell>
                    <ManaeUserCell columnKey={columns as string} user={user} />
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center mt-4">
          <b>No users available</b>
        </div>
      )}
    </>
  );
}
