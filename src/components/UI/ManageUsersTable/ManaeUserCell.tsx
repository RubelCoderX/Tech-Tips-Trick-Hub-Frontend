import React from "react";
import { User, Tooltip, Button } from "@nextui-org/react";

import { useDeletedUser, useUpdateStatusUser } from "@/src/hooks/user.hook";

interface IMangeUserCellProps {
  columnKey: string;
  user: any;
}
const ManaeUserCell: React.FC<IMangeUserCellProps> = ({ columnKey, user }) => {
  const { mutate: createDeleteUser } = useDeletedUser();
  const { mutate: createUpdateStatusUser, isPending } = useUpdateStatusUser();
  const handleDeleteUser = (id: string) => {
    createDeleteUser(id);
  };
  const handleUpdateStatusUser = (id: string) => {
    createUpdateStatusUser(id);
  };
  const cellValue = user[columnKey];

  switch (columnKey) {
    case "name":
      return (
        <User
          avatarProps={{ radius: "lg", src: user.profileImage }}
          description={user?.email}
          name={cellValue}
        >
          {user?.email}
        </User>
      );
    case "gender":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-sm capitalize">{cellValue}</p>
        </div>
      );
    case "role":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-sm capitalize">{cellValue}</p>
        </div>
      );
    case "status":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-sm capitalize">{cellValue}</p>
        </div>
      );

    case "actions":
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip
            color="warning"
            content={
              user?.status === "active"
                ? "Are you sure you want to block this user?"
                : "Are you sure you want to unblock this user?"
            }
          >
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              {user?.status === "active" ? (
                <Button
                  className="bg-pink-500 text-white hover:bg-pink-600"
                  radius="none"
                  variant="bordered"
                  onClick={() => handleUpdateStatusUser(user?._id)}
                >
                  Blocked
                </Button>
              ) : (
                <Button
                  className="bg-green-500 px-4 text-white hover:bg-green-600"
                  radius="none"
                  variant="bordered"
                  onClick={() => handleUpdateStatusUser(user?._id)}
                >
                  Unblock
                </Button>
              )}
            </span>
          </Tooltip>
          <Tooltip>
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50" />
          </Tooltip>
          <Tooltip
            color="danger"
            content={
              user?.isDeleted === true
                ? "User is already deleted"
                : "Are you sure you want to delete this user?"
            }
          >
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              {user?.isDeleted === true ? (
                <Button
                  className="bg-gray-400 text-white hover:bg-gray-500"
                  radius="none"
                  onClick={() => handleDeleteUser(user?._id)}
                >
                  Already Deleted
                </Button>
              ) : (
                <Button
                  className="bg-red-500 text-white hover:bg-red-600"
                  radius="none"
                  variant="bordered"
                  onClick={() => handleDeleteUser(user?._id)}
                >
                  Delete
                </Button>
              )}
            </span>
          </Tooltip>
        </div>
      );
    default:
      return <>{cellValue}</>;
  }
};

export default ManaeUserCell;
