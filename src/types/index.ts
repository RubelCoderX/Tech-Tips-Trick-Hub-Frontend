import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
}

// export interface IUser {
//   name: string;
//   email: string;
//   password: string;
//   role: string;
//   gender: string;
//   birthDate: string;
//   isVerified: boolean;
//   profileImage: string;
//   followers: any[];
//   following: any[];
//   payments: any[];
//   bio: string;
//   address: string;
//   isDeleted: boolean;
//   _id: string;
//   createdAt?: string;
//   updatedAt?: string;
//   __v: number;
// }

export interface IUser {
  id: string;
  email: string;
  role: string;
  profileImage: string;
}
