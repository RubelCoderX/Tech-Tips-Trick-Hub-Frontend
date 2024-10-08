"use client";

import Link from "next/link";

import PremiumMonthlyMember from "@/src/components/UI/BecomeAmember/PremiumMonthlyMember";

export default function Page() {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between p-4 mb-16 bg-[#F9F9F9] dark:bg-[#b4b1b1] shadow-md">
          {/* Banner content */}
          <div className="flex items-center space-x-2 mx-auto">
            <p className="text-sm text-gray-900 dark:text-black text-center">
              <Link
                className="text-2xl text-black font-semibold dark:text-black font-serif"
                href="/"
              >
                Gadget <span className="text-pink-500">Guru Hub</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-semibold font-serif">
          Support great writing and access all stories on{" "}
          <span className="text-pink-500">Gadget Guru Hub</span>.
        </h1>
      </div>

      {/* Payment options */}
      <div className="max-w-5xl grid grid-cols-3 gap-5 mx-auto">
        {plans.map((plan, index) => (
          <PremiumMonthlyMember key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}
const plans = [
  {
    title: "Basic Plan",

    price: "00",
    description:
      "Access member-only stories and enjoy an enhanced reading and writing experience. Cancel anytime.",
    benefits: [
      "✓ Read member-only stories",
      "✓ Support writers you read most",
      "✓ Earn money for your writing",
      "✓ Listen to audio narrations",
      "✓ Access our Mastodon community",
    ],
  },
  {
    title: "Member",
    expiry: "1 Week",
    price: "299",
    description:
      "Contribute more to writers and strengthen your support for the community. Cancel anytime.",
    benefits: [
      "✓ All Medium member benefits",
      "✓ Give 4x more to the writers ",
      "✓ Share member-only stories ",
      "✓ Customize app icon",
      "✓ Customize app icon",
    ],
  },
  {
    title: "VIP Member",
    expiry: "1 Month",
    price: "499",
    description:
      "Get exclusive access to premium content and personalized recommendations. Cancel anytime.",
    benefits: [
      "✓ All Friend plan benefits",
      "✓ Access to VIP events",
      "✓ One-on-one support",
      "✓ Premium content tailored for you",
      "✓ Priority customer service",
    ],
  },
];
