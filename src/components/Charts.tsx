import { motion } from 'framer-motion';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  BarChart, Bar, XAxis as BarXAxis, YAxis as BarYAxis, 
  Tooltip as BarTooltip, Legend as BarLegend, ResponsiveContainer as BarResponsiveContainer 
} from 'recharts';
import { 
  PieChart, Pie, Cell, Tooltip as PieTooltip, Legend as PieLegend, ResponsiveContainer as PieResponsiveContainer 
} from 'recharts';
import { 
  RadarChart, Radar, PolarGrid, ResponsiveContainer as RadarResponsiveContainer 
} from 'recharts';

const lineData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const barData = [
  { name: 'Jan', Sales: 4000, Marketing: 2400, Development: 2400 },
  { name: 'Feb', Sales: 3000, Marketing: 1398, Development: 2210 },
  { name: 'Mar', Sales: 2000, Marketing: 9800, Development: 2290 },
  { name: 'Apr', Sales: 2780, Marketing: 3908, Development: 2000 },
  { name: 'May', Sales: 1890, Marketing: 4800, Development: 2181 },
  { name: 'Jun', Sales: 2390, Marketing: 3800, Development: 2500 },
];

const pieData = [
  { name: 'Team A', value: 400, fill: '#8884d8' },
  { name: 'Team B', value: 300, fill: '#82ca9d' },
  { name: 'Team C', value: 300, fill: '#ffc658' },
];

const radarData = [
  { name: 'Speed', score: 95, full: 100 },
  { name: 'Strength', score: 89, full: 100 },
  { name: 'Agility', score: 92, full: 100 },
  { name: 'Endurance', score: 85, full: 100 },
  { name: 'Intelligence', score: 91, full: 100 },
];

export const Charts: React.FC = () => {
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Charts</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Interactive data visualizations</p>
        </div>
        <button className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
          <span>Export All</span>
        </button>
      </div>

      {/* Line Chart */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
      >
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Over Time</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Monthly metrics</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#3b82f6" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="pv" stroke="#10b981" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Bar Chart */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
      >
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Department Comparison</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Quarterly performance</p>
        </div>
        <BarResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
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

      {/* Pie Chart */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
      >
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Resource Allocation</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Budget distribution</p>
        </div>
        <PieResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie 
              data={pieData} 
              cx="50%" 
              cy="50%" 
              labelLine={false} 
              label={false}
              innerRadius="60%"
              outerRadius="80%"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <PieTooltip 
              formatter={(value: any, name: any) => `${name}: ${value} (${((value / 1000) * 100).toFixed(1)}%)`}
            />
            <PieLegend 
              verticalAlign="top" 
              height={36} 
              formatter={(value: any) => `${value} units`} 
            />
          </PieChart>
        </PieResponsiveContainer>
      </motion.div>

      {/* Radar Chart */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
      >
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Skill Assessment</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Employee performance metrics</p>
        </div>
        <RadarResponsiveContainer width="100%" height={300}>
          <RadarChart data={radarData}>
            <PolarGrid />
            <Tooltip />
            <Legend />
            <Radar dataKey="score" fill="#3b82f6" fillOpacity="0.6" stroke="#3b82f6" strokeWidth="2" />
          </RadarChart>
        </RadarResponsiveContainer>
      </motion.div>
    </motion.div>
  );
};