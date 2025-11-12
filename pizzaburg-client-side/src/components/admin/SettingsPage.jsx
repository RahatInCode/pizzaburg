// src/components/admin/SettingsPage.jsx
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FiSave } from 'react-icons/fi';
import './SettingsPage.css';

const SettingsPage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      siteName: 'Pizzaburg',
      siteEmail: 'info@pizzaburg.com',
      sitePhone: '+1 (555) 123-4567',
      siteAddress: '123 Pizza Street, Food City, FC 12345',
      deliveryFee: '5.00',
      freeDeliveryThreshold: '25.00',
      taxRate: '10'
    }
  });

  const onSubmit = (data) => {
    console.log('Settings updated:', data);
    toast.success('Settings saved successfully!');
  };

  return (
    <div className="settings-page">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Settings
      </motion.h1>

      <motion.div
        className="settings-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="settings-form">
          <div className="settings-section">
            <h2>General Information</h2>
            
            <div className="form-group">
              <label htmlFor="siteName">Site Name</label>
              <input
                id="siteName"
                type="text"
                {...register('siteName')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="siteEmail">Contact Email</label>
              <input
                id="siteEmail"
                type="email"
                {...register('siteEmail')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="sitePhone">Phone Number</label>
              <input
                id="sitePhone"
                type="tel"
                {...register('sitePhone')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="siteAddress">Address</label>
              <textarea
                id="siteAddress"
                rows="3"
                {...register('siteAddress')}
              />
            </div>
          </div>

          <div className="settings-section">
            <h2>Order Settings</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="deliveryFee">Delivery Fee ($)</label>
                <input
                  id="deliveryFee"
                  type="number"
                  step="0.01"
                  {...register('deliveryFee')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="freeDeliveryThreshold">Free Delivery Threshold ($)</label>
                <input
                  id="freeDeliveryThreshold"
                  type="number"
                  step="0.01"
                  {...register('freeDeliveryThreshold')}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="taxRate">Tax Rate (%)</label>
              <input
                id="taxRate"
                type="number"
                step="0.01"
                {...register('taxRate')}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            <FiSave /> Save Settings
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SettingsPage;