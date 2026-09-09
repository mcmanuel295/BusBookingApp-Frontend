// Bus Booking App Configuration
// Copy to config.js and update

const CONFIG = {
  API_BASE_URL: 'http://localhost:8080/api/v1',
  REQUEST_TIMEOUT: 30000,
  
  STORAGE_KEYS: {
    TOKEN: 'bba_auth_token',
    USER: 'bba_current_user',
    BOOKING: 'bba_current_booking',
  },
  
  ROLES: {
    PASSENGER: 'PASSENGER',
    ADMIN: 'ADMIN',
    OPERATOR: 'OPERATOR',
  },
  
  BOOKING_STATUS: {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    CANCELLED: 'CANCELLED',
    COMPLETED: 'COMPLETED',
  },
  
  ITEMS_PER_PAGE: 10,
  DATE_FORMAT: 'DD/MM/YYYY',
  TIME_FORMAT: 'HH:MM',
  
  FEATURES: {
    ENABLE_NOTIFICATIONS: true,
    ENABLE_EXPORT: true,
    ENABLE_CANCELLATION: true,
  },
};
