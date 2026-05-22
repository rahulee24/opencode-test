import { motion } from 'framer-motion';
import { Bell, Shield, Globe } from 'lucide-react';
import { useState } from 'react';

const settingsSections = [
  {
    title: 'Notifications',
    description: 'Configure how you receive notifications',
    icon: Bell,
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    toggles: [
      { label: 'Email Notifications', description: 'Receive notifications via email', default: true },
      { label: 'Push Notifications', description: 'Receive push notifications', default: true },
      { label: 'SMS Notifications', description: 'Receive SMS notifications', default: false },
      { label: 'Weekly Digest', description: 'Receive weekly summary email', default: true },
    ]
  },
  {
    title: 'Security',
    description: 'Manage your security preferences',
    icon: Shield,
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    toggles: [
      { label: 'Two-Factor Authentication', description: 'Add an extra layer of security', default: false },
      { label: 'Login Alerts', description: 'Get notified on new login attempts', default: true },
      { label: 'Device Tracking', description: 'Track active sessions', default: true },
    ]
  },
  {
    title: 'Preferences',
    description: 'Customize your experience',
    icon: Globe,
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    toggles: [
      { label: 'Dark Mode', description: 'Use dark theme across the app', default: false },
      { label: 'Compact View', description: 'Show more content per page', default: false },
      { label: 'Animations', description: 'Enable interface animations', default: true },
    ]
  },
];

export const Settings: React.FC = () => {
  const [settingsState, setSettingsState] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    settingsSections.forEach(section => {
      section.toggles.forEach(toggle => {
        initial[toggle.label] = toggle.default;
      });
    });
    return initial;
  });

  const toggleSetting = (label: string) => {
    setSettingsState(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 max-w-4xl"
    >
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Manage your account settings and preferences</p>
      </div>

      {settingsSections.map((section, sectionIndex) => (
        <motion.div
          key={section.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-start space-x-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 flex items-center justify-center rounded-xl ${section.color}`}
            >
              <section.icon className="w-5 h-5" />
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{section.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{section.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            {section.toggles.map((toggle) => (
              <div
                key={toggle.label}
                className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{toggle.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{toggle.description}</p>
                </div>
                <button
                  onClick={() => toggleSetting(toggle.label)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                    settingsState[toggle.label] ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ease-in-out ${
                      settingsState[toggle.label] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Save Changes</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Your preferences are saved locally</p>
          </div>
          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const defaults: Record<string, boolean> = {};
                settingsSections.forEach(section => {
                  section.toggles.forEach(toggle => {
                    defaults[toggle.label] = toggle.default;
                  });
                });
                setSettingsState(defaults);
              }}
              className="px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
            >
              Reset to Default
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                alert('Settings saved successfully!');
              }}
              className="px-6 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-200 text-sm font-medium"
            >
              Save Settings
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};