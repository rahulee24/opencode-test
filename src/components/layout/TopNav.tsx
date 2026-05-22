import { motion } from 'framer-motion';
import { Bell, MessageSquare, MoreVertical, UserCircle, Sun, Moon, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  unread: boolean;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface TopNavProps {
  onToggleSidebar: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const notifications: Notification[] = [
  {
    id: 1,
    title: 'New order received',
    description: 'Customer #1234 placed a new order worth $299.99',
    time: '2 min ago',
    unread: true,
    icon: Bell,
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
  },
  {
    id: 2,
    title: 'Payment successful',
    description: 'Payment of $89.99 processed successfully',
    time: '15 min ago',
    unread: false,
    icon: MessageSquare,
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
  },
  {
    id: 3,
    title: 'Server maintenance',
    description: 'Scheduled maintenance tonight at 2:00 AM',
    time: '1 hour ago',
    unread: false,
    icon: Bell,
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
  }
];

export const TopNav: React.FC<TopNavProps> = ({ onToggleSidebar, isDarkMode, toggleDarkMode }) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-64 right-0 top-0 h-16 bg-white/80 backdrop-blur-md dark:bg-gray-800/80 border-b border-gray-100 dark:border-gray-700 z-40 flex items-center px-6"
    >
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mr-4"
        aria-label="Toggle sidebar"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 flex items-center justify-center rounded-lg"
        >
          <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </motion.div>
      </button>

      <div className="flex-1 max-w-lg">
        <div className="relative">
          <input
            type="text"
            placeholder="Search dashboard..."
            className="w-full pl-4 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={toggleNotifications}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
            aria-label="Notifications"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 flex items-center justify-center rounded-lg"
            >
              <Bell className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              {notifications.some(n => n.unread) && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </motion.div>
          </button>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={notificationsOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-2 w-80 origin-top-right bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-20"
          >
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
              <h3 className="font-medium text-gray-900 dark:text-white">Notifications</h3>
              <button
                onClick={() => {}}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              >
                Mark all as read
              </button>
            </div>
            <div className="max-h-60 overflow-y-auto">
              {notifications.map(notification => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: notification.id * 0.05, duration: 0.3 }}
                  className={`px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0 ${notification.unread ? 'bg-blue-50 dark:bg-blue-900/30' : ''}`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${notification.color}`}>
                      <notification.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{notification.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{notification.description}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{notification.time}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="px-4 py-3 text-center border-t border-gray-100 dark:border-gray-700">
              <button
                onClick={() => {}}
                className="w-full text-sm font-medium text-primary hover:text-primary/80"
              >
                View All Notifications
              </button>
            </div>
          </motion.div>
        </div>

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 flex items-center justify-center rounded-lg"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-500" />
            )}
          </motion.div>
        </button>

        <div className="relative">
          <button
            onClick={toggleProfile}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="User profile"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 flex items-center justify-center rounded-lg overflow-hidden"
            >
              <UserCircle className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </motion.div>
          </button>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={profileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-2 w-56 origin-top-right bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-20"
          >
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <UserCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">rahul@example.com</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
                </div>
              </div>
            </div>
            <div className="px-4 py-2">
              <button
                onClick={() => {}}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center space-x-3"
              >
                <UserCircle className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Profile</span>
              </button>
              <button
                onClick={() => {}}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mt-1 flex items-center space-x-3"
              >
                <Settings className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Settings</span>
              </button>
              <button
                onClick={() => {}}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors mt-1 flex items-center space-x-3 text-red-500 dark:text-red-400"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Sign Out</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};