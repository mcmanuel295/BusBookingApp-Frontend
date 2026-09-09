// Seat Selection

const Seats = {
    getSeatMap: async function(busId) {
        try {
            return await API.get(`/buses/${busId}/seats`);
        } catch (error) {
            Utils.showNotification(error.message, 'error');
            return null;
        }
    },

    renderSeatMap: function(container, seats) {
        const seatMap = document.createElement('div');
        seatMap.className = 'seat-map';
        
        seats.forEach(seat => {
            const seatEl = document.createElement('div');
            seatEl.className = `seat ${seat.available ? 'available' : 'booked'}`;
            seatEl.textContent = seat.number;
            seatEl.dataset.seatId = seat.id;
            
            if (seat.available) {
                seatEl.addEventListener('click', () => Seats.toggleSeat(seatEl));
            }
            
            seatMap.appendChild(seatEl);
        });
        
        container.innerHTML = '';
        container.appendChild(seatMap);
    },

    toggleSeat: function(seatEl) {
        seatEl.classList.toggle('selected');
    },

    getSelectedSeats: function() {
        return Array.from(document.querySelectorAll('.seat.selected')).map(el => ({
            id: el.dataset.seatId,
            number: el.textContent
        }));
    },
};
