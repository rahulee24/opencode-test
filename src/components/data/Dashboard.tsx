import { motion } from 'framer-motion';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  BarChart, Bar, XAxis as BarXAxis, YAxis as BarYAxis, 
  Tooltip as BarTooltip, Legend as BarLegend, ResponsiveContainer as BarResponsiveContainer 
} from 'recharts';
import { Users, DollarSign, TrendingUp, Activity } from 'lucide-react';

const statsData = [
  { title: 'Total Users', value: '12,345', change: '+12%', icon: Users, color: 'bg-primary/10 text-primary' },
  { title: 'Revenue', value: '$45,678', change: '+8%', icon: DollarSign, color: 'bg-green-100 text-green-800' },
  { title: 'Conversion Rate', value: '3.4%', change: '-2%', icon: TrendingUp, color: 'bg-yellow-100 text-yellow-800' },
  { title: 'Active Sessions', value: '1,234', change: '+5%', icon: Activity, color: 'bg-blue-100 text-blue-800' },
];

const lineChartData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const barChartData = [
  { name: 'Jan', Sales: 4000, Marketing: 2400, Development: 2400 },
  { name: 'Feb', Sales: 3000, Marketing: 1398, Development: 2210 },
  { name: 'Mar', Sales: 2000, Marketing: 9800, Development: 2290 },
  { name: 'Apr', Sales: 2780, Marketing: 3908, Development: 2000 },
  { name: 'May', Sales: 1890, Marketing: 4800, Development: 2181 },
  { name: 'Jun', Sales: 2390, Marketing: 3800, Development: 2500 },
];

const tableData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', plan: 'Pro', date: '2023-05-01' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Pending', plan: 'Free', date: '2023-05-02' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active', plan: 'Enterprise', date: '2023-05-03' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Active', plan: 'Pro', date: '2023-05-04' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', status: 'Inactive', plan: 'Free', date: '2023-05-05' },
];

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon, color }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 flex items-center justify-center rounded-xl ${color}`}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{title}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
          </div>
        </div>
        <p className={`text-xs font-medium ${change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {change}
        </p>
      </div>
    </motion.div>
  );
};

const LineChartCard: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Website Traffic</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Last 6 months</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="pv" stroke="#10b981" strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

const BarChartCard: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Monthly Expenses</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Department allocation</p>
      </div>
      <BarResponsiveContainer width="100%" height={300}>
        <BarChart data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <BarXAxis dataKey="name" />
          <BarYAxis />
          <BarTooltip />
          <BarLegend />
          <Bar dataKey="Sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Marketing" fill="#10b981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Development" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        </BarChart>
      </BarResponsiveContainer>
    </motion.div>
  );
};

const TableCard: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Users</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Latest registered users</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Plan</th>
              <th scope="col" className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((user) => (
              <tr key={user.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {user.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary text-sm font-medium">{user.name.charAt(0)}</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${user.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : user.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {user.plan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {user.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export const Dashboard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Overview of your business metrics</p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
            <span>Export Data</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
        </motion.div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat) => (
          <StatCard 
            key={stat.title} 
            title={stat.title} 
            value={stat.value} 
            change={stat.change} 
            icon={stat.icon}
            color={stat.color} 
          />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <LineChartCard />
        <BarChartCard />
      </div>

      <TableCard />
    </motion.div>
  );
};