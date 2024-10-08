"use client";
import React from "react";
import Link from "next/link";

import { useUser } from "@/src/context/user.provider";
import { usePayment } from "@/src/hooks/payment.hook";

interface PremiumPlan {
  title: string;
  expiry?: string;
  price: string;
  description: string;
  benefits: string[];
}
const PremiumMonthlyMember = ({ plan }: { plan: PremiumPlan }) => {
  const { user } = useUser();

  const defaultProfileImage = "https://i.ibb.co/hBpV37F/avater.png";
  const { mutate: createPayment } = usePayment();

  const handleCreatePayment = (plan: PremiumPlan) => {
    const premiumPlanData = {
      user: user?._id,
      price: plan.price,
      title: plan.title,
      expiry: plan?.expiry || "",
    };

    createPayment(premiumPlanData);
  };

  return (
    <div className="border p-6 rounded-lg flex flex-col mb-4">
      <div className="text-center mb-4 flex-grow">
        <div className="mb-4 flex justify-center items-center mx-auto">
          <img
            alt="Profile"
            className="inline-block w-20 h-20 rounded-full"
            src={user?.profileImage || defaultProfileImage}
          />
        </div>
        <h2 className="text-xl font-semibold text-pink-500">{plan.title}</h2>
        <p className="text-lg text-gray-600">{plan.price}</p>
        <p className="mt-2 text-gray-500">{plan.description}</p>
        <p className="mt-2 text-gray-400">{plan.expiry}</p>

        {user ? (
          <button
            className="mt-4 bg-transparent text-pink-500 border border-pink-500 px-6 py-2 rounded-full"
            onClick={() => handleCreatePayment(plan)}
          >
            Select
          </button>
        ) : (
          <Link
            className="mt-4 block bg-transparent text-pink-500 border border-pink-500 px-6 py-2 rounded-full"
            href={"/login?redirect=become-member"}
          >
            Select
          </Link>
        )}
      </div>

      <ul className="space-y-2">
        {plan?.benefits?.map((benefit, benefitIndex) => (
          <li key={benefitIndex} className="flex items-center text-pink-500">
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PremiumMonthlyMember;
