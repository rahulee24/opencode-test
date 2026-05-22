import { motion } from 'framer-motion';
import { 
  PieChart, Pie, Cell, Tooltip as PieTooltip, Legend as PieLegend, ResponsiveContainer as PieResponsiveContainer 
} from 'recharts';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  BarChart, Bar, XAxis as BarXAxis, YAxis as BarYAxis, 
  Tooltip as BarTooltip, Legend as BarLegend, ResponsiveContainer as BarResponsiveContainer 
} from 'recharts';

const analyticsData = [
  { name: 'Direct', value: 300, fill: '#3b82f6' },
  { name: 'Email', value: 200, fill: '#10b981' },
  { name: 'Affiliates', value: 150, fill: '#f59e0b' },
  { name: 'Social', value: 100, fill: '#8b5cf6' },
  { name: 'Search', value: 75, fill: '#ec4899' },
];

const lineChartData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Aug', uv: 2490, pv: 3800, amt: 2500 },
  { name: 'Sep', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Oct', uv: 2490, pv: 3800, amt: 2500 },
  { name: 'Nov', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Dec', uv: 2490, pv: 3800, amt: 2500 },
];

const barChartData = [
  { name: 'Jan', Sales: 4000, Marketing: 2400, Development: 2400 },
  { name: 'Feb', Sales: 3000, Marketing: 1398, Development: 2210 },
  { name: 'Mar', Sales: 2000, Marketing: 9800, Development: 2290 },
  { name: 'Apr', Sales: 2780, Marketing: 3908, Development: 2000 },
  { name: 'May', Sales: 1890, Marketing: 4800, Development: 2181 },
  { name: 'Jun', Sales: 2390, Marketing: 3800, Development: 2500 },
  { name: 'Jul', Sales: 3490, Marketing: 4300, Development: 2100 },
  { name: 'Aug', Sales: 2490, Marketing: 3800, Development: 2500 },
];

const analyticsTableData = [
  { id: 1, page: '/home', visitors: '12,345', bounceRate: '45%', conversion: '3.2%', revenue: '$2,345' },
  { id: 2, page: '/products', visitors: '8,920', bounceRate: '38%', conversion: '5.1%', revenue: '$4,560' },
  { id: 3, page: '/about', visitors: '5,430', bounceRate: '52%', conversion: '1.8%', revenue: '$890' },
  { id: 4, page: '/blog', visitors: '15,670', bounceRate: '29%', conversion: '2.4%', revenue: '$1,230' },
  { id: 5, page: '/contact', visitors: '3,210', bounceRate: '41%', conversion: '4.3%', revenue: '$780' },
];

export const Analytics: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Deep insights into your performance</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
            <span>Export Report</span>
          </button>
          <button className="px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 dark:hover:bg-primary/10 transition-all duration-200">
            <span>Date Range</span>
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                <span className="text-2xl font-bold">👥</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Total Visitors</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">124,580</p>
              </div>
            </div>
            <p className="text-xs font-medium text-green-600 dark:text-green-400">+12.4%</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-100 text-green-800">
                <span className="text-2xl font-bold">💰</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">$89,450</p>
              </div>
            </div>
            <p className="text-xs font-medium text-green-600 dark:text-green-400">+8.7%</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-yellow-100 text-yellow-800">
                <span className="text-2xl font-bold">📈</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">3.8%</p>
              </div>
            </div>
            <p className="text-xs font-medium text-red-600 dark:text-red-400">-0.5%</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                <span className="text-2xl font-bold">⏱️</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Avg. Session Duration</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">4m 23s</p>
              </div>
            </div>
            <p className="text-xs font-medium text-green-600 dark:text-green-400">+15.2%</p>
          </div>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Traffic Sources</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Last 30 days</p>
          </div>
          <PieResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie 
                data={analyticsData} 
                cx="50%" 
                cy="50%" 
                labelLine={false} 
                label={false}
                innerRadius="60%"
                outerRadius="80%"
              >
                {analyticsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <PieTooltip 
                formatter={(value: any, name: any) => `${name}: ${value} visitors (${((value / 825) * 100).toFixed(1)}%)`}
              />
              <PieLegend 
                verticalAlign="top" 
                height={36} 
                formatter={(value: any) => `${value} visitors`} 
              />
            </PieChart>
          </PieResponsiveContainer>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Trends</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Monthly overview</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value) => `$${value}`} 
                labelFormatter={(value) => `Month: ${value}`} 
              />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#3b82f6" activeDot={{ r: 8 }} 
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }} 
                    isAnimationActive={true} />
              <Line type="monotone" dataKey="pv" stroke="#10b981" activeDot={{ r: 8 }} 
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }} 
                    isAnimationActive={true} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Bar Chart */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
      >
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Department Performance</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Monthly breakdown</p>
        </div>
        <BarResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <BarXAxis dataKey="name" />
            <BarYAxis />
            <BarTooltip />
            <BarLegend />
            <Bar dataKey="Sales" fill="#3b82f6" />
            <Bar dataKey="Marketing" fill="#10b981" />
            <Bar dataKey="Development" fill="#f59e0b" />
          </BarChart>
        </BarResponsiveContainer>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
      >
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Performing Pages</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Sorted by visitor count</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">#</th>
                <th scope="col" className="px-6 py-3">Page</th>
                <th scope="col" className="px-6 py-3">Visitors</th>
                <th scope="col" className="px-6 py-3">Bounce Rate</th>
                <th scope="col" className="px-6 py-3">Conversion</th>
                <th scope="col" className="px-6 py-3">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {analyticsTableData.map((page) => (
                <tr key={page.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {page.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary">{page.page.charAt(1).toUpperCase()}</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{page.page}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">/page</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {page.visitors}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${parseInt(page.bounceRate) < 40 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : parseInt(page.bounceRate) < 50 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                      {page.bounceRate}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${parseFloat(page.conversion) > 3 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : parseFloat(page.conversion) > 2 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                      {page.conversion}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {page.revenue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};