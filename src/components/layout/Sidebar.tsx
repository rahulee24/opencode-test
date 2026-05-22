import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, DollarSign, Search, User, Settings, LayoutDashboard, Activity, BarChart3, Users, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SidebarItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeItem: string;
}

const sidebarItems: SidebarItem[] = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Analytics', icon: Activity, href: '/analytics' },
  { name: 'Charts', icon: BarChart3, href: '/charts' },
  { name: 'Users', icon: Users, href: '/users' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, activeItem }) => {
  const navigate = useNavigate();

  const sidebarVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 20 } },
    exit: { x: '-100%', transition: { type: 'spring' as const, stiffness: 300, damping: 20 } },
  };

  const handleItemClick = (href: string) => {
    navigate(href);
  };

  const isActive = (href: string) => activeItem === href;

  return (
    <motion.nav
      variants={sidebarVariants}
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      exit="exit"
      className="fixed left-0 top-0 h-full w-64 bg-white/90 backdrop-blur-md dark:bg-gray-800/90 border-r border-gray-100 dark:border-gray-700 z-50"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center"
            >
              <DollarSign className="text-primary w-5 h-5" />
            </motion.div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">CadminT</h2>
          </div>
          <button
            onClick={onToggle}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle sidebar"
          >
            <ArrowLeft className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="px-6 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {sidebarItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-200 hover:bg-primary/5 dark:hover:bg-primary/10 ${
                  isActive(item.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => handleItemClick(item.href)}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-8 h-8 flex items-center justify-center rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <item.icon className={`w-5 h-5 ${isActive(item.href) ? 'text-primary' : 'text-gray-400 dark:text-gray-500'}`} />
                  </motion.div>
                  <span className={`font-medium whitespace-nowrap ${isActive(item.href) ? 'text-primary' : 'text-gray-900 dark:text-white'}`}>
                    {item.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="px-6 py-6 border-t border-gray-100 dark:border-gray-700 mt-auto">
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700"
            >
              <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Welcome Back</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">rahul@example.com</p>
            </div>
          </div>
          <button
            onClick={() => {}}
            className="w-full mt-4 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 flex items-center justify-center"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>
      </div>
    </motion.nav>
  );
};