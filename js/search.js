// Bus Booking Search Functionality

const Search = {
    searchBuses: async function(filters) {
        try {
            Utils.showLoading();
            const response = await API.get('/buses/search', {
                params: filters
            });
            Utils.hideLoading();
            return response;
        } catch (error) {
            Utils.hideLoading();
            Utils.showNotification(error.message, 'error');
            return null;
        }
    },

    getRoutes: async function() {
        try {
            return await API.get('/routes');
        } catch (error) {
            Utils.showNotification(error.message, 'error');
            return null;
        }
    },
};
