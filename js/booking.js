// Booking Management

const Booking = {
    createBooking: async function(bookingData) {
        try {
            Utils.showLoading();
            const response = await API.post('/bookings', bookingData);
            Utils.hideLoading();
            localStorage.setItem(CONFIG.STORAGE_KEYS.BOOKING, JSON.stringify(response));
            return response;
        } catch (error) {
            Utils.hideLoading();
            Utils.showNotification(error.message, 'error');
            return null;
        }
    },

    getBookings: async function() {
        try {
            return await API.get('/bookings');
        } catch (error) {
            Utils.showNotification(error.message, 'error');
            return null;
        }
    },

    cancelBooking: async function(bookingId) {
        try {
            return await API.delete(`/bookings/${bookingId}`);
        } catch (error) {
            Utils.showNotification(error.message, 'error');
            return null;
        }
    },
};
