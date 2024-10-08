import { Divider } from "@nextui-org/divider";
import { ArrowDownIcon, ArrowUpIcon, UsersIcon } from "lucide-react";
import { FaMoneyBillWave, FaUserShield, FaChartLine } from "react-icons/fa6";

export default function AdminDashboard() {
  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return "Good morning!";
    } else if (currentHour < 18) {
      return "Good afternoon!";
    } else {
      return "Good evening!";
    }
  };

  return (
    <div className="p-6">
      <div>
        <h2 className="text-3xl font-bold">
          Welcome to the Admin Dashboard! 👋
        </h2>
        <p className="text-gray-500 mb-4">{getGreeting()}</p>
      </div>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Users Card */}
          <StatCard
            change="+5%"
            color="bg-gradient-to-r from-blue-500 to-blue-600"
            icon={<UsersIcon className="h-6 w-6 text-white" />}
            title="Total Users"
            value="1,230"
          />

          {/* Total Income Card */}
          <StatCard
            change="+10%"
            color="bg-gradient-to-r from-green-500 to-green-600"
            icon={<FaMoneyBillWave className="h-6 w-6 text-white" />}
            title="Total Income"
            value="$45,600"
          />

          {/* Total Admins Card */}
          <StatCard
            change="+2%"
            color="bg-gradient-to-r from-purple-500 to-purple-600"
            icon={<FaUserShield className="h-6 w-6 text-white" />}
            title="Total Admins"
            value="12"
          />

          {/* Growth Rate Card */}
          <StatCard
            negative
            change="-1%"
            color="bg-gradient-to-r from-red-500 to-red-600"
            icon={<FaChartLine className="h-6 w-6 text-white" />}
            title="Growth Rate"
            value="+8.5%"
          />
        </div>
        <Divider className="my-8" />
      </main>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
  negative?: boolean;
}

function StatCard({
  title,
  value,
  change,
  icon,
  color,
  negative = false,
}: StatCardProps) {
  return (
    <div className={`rounded-xl shadow-md overflow-hidden ${color}`}>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-medium text-xl">{title}</p>
            <p className="text-3xl font-bold text-white">{value}</p>
          </div>
          <div className="p-3 rounded-full bg-white bg-opacity-20">{icon}</div>
        </div>
        <div className="mt-4 flex items-center">
          {negative ? (
            <ArrowDownIcon className="h-4 w-4 text-red-300 mr-1" />
          ) : (
            <ArrowUpIcon className="h-4 w-4 text-green-300 mr-1" />
          )}
          <span
            className={`text-sm font-medium ${
              negative ? "text-red-300" : "text-green-300"
            }`}
          >
            {change}
          </span>
        </div>
      </div>
    </div>
  );
}
