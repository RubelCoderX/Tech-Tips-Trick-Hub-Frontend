import { useUser } from "@/src/context/user.provider";

const PremiumMonthlyMember = () => {
  const { user } = useUser();
  const defaultProfileImage = "https://i.ibb.co/hBpV37F/avater.png";

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Pricing cards */}
      <div className="grid md:grid-cols-2 bg-content1 bg-transparent gap-6">
        {/* Member Plan */}
        <div className="border p-6 rounded-lg">
          <div className="text-center mb-6">
            <div className="mb-4">
              <div className="mb-4 flex justify-center items-center mx-auto">
                <img
                  alt="Profile"
                  className="inline-block w-20 h-20 rounded-full"
                  src={user?.profileImage || defaultProfileImage}
                />
              </div>
            </div>
            <h2 className="text-xl font-semibold">Member</h2>
            <p className="text-lg text-gray-600">$20 USD/month</p>
            <p className="mt-2 text-gray-500">
              Access member-only stories and enjoy an enhanced reading and
              writing experience. Cancel anytime.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full">
              Select
            </button>
          </div>

          <ul className="space-y-2">
            <li className="flex items-center text-blue-600">
              ✓ Read member-only stories
            </li>
            <li className="flex items-center text-blue-600">
              ✓ Support writers you read most
            </li>
            <li className="flex items-center text-blue-600">
              ✓ Earn money for your writing
            </li>
            <li className="flex items-center text-blue-600">
              ✓ Listen to audio narrations
            </li>
            <li className="flex items-center text-blue-600">
              ✓ Read offline with the Medium app
            </li>
            <li className="flex items-center text-blue-600">
              ✓ Access our Mastodon community
            </li>
            <li className="flex items-center text-blue-600">
              ✓ Connect your custom domain
            </li>
            <li className="flex items-center text-blue-600">
              ✓ Create your own publications
            </li>
          </ul>
        </div>

        {/* Friend Plan */}
        <div className="border p-6 rounded-lg">
          <div className="text-center mb-6">
            <div className="mb-4 flex justify-center items-center mx-auto">
              <img
                alt="Profile"
                className="inline-block w-20 h-20 rounded-full"
                src={user?.profileImage || defaultProfileImage}
              />
            </div>
            <h2 className="text-xl font-semibold">Friend</h2>
            <p className="text-lg text-gray-600">$25 USD/month</p>
            <p className="mt-2 text-gray-500">
              Contribute more to writers and strengthen your support for the
              Medium community. Cancel anytime.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full">
              Select
            </button>
          </div>

          <ul className="space-y-2">
            <li className="flex items-center text-blue-600">
              ✓ All Medium member benefits
            </li>
            <li className="flex items-center text-blue-600">
              ✓ <strong>Give 4x more to the writers you read</strong>
            </li>
            <li className="flex items-center text-blue-600">
              ✓ Share member-only stories with anyone and drive more earnings
              for writers
            </li>
            <li className="flex items-center text-blue-600">
              ✓ Customize app icon
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PremiumMonthlyMember;
