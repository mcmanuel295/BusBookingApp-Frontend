# Bus Booking Application - Frontend

A professional, responsive frontend for the Bus Booking Application built with vanilla HTML, CSS, and JavaScript.

## Features

- **User Authentication**: Secure JWT-based login and registration
- **Bus Search**: Find buses by route, date, and time
- **Seat Selection**: Interactive seat map with real-time availability
- **Booking Management**: Create, view, and cancel bookings
- **Payment Integration**: Secure payment processing
- **Booking History**: View past and upcoming bookings
- **User Profile**: Manage personal information and preferences
- **Route Management**: Admin interface for managing routes
- **Real-time Updates**: Live seat availability and bus status
- **Responsive Design**: Mobile-friendly interface

## Project Structure

```
frontend/
├── index.html              # Landing page
├── css/
│   ├── common.css         # Shared styles
│   ├── landing.css        # Landing page styles
│   ├── auth.css           # Auth pages styles
│   ├── search.css         # Bus search styles
│   ├── booking.css        # Booking process styles
│   ├── seats.css          # Seat selection styles
│   ├── profile.css        # User profile styles
│   └── responsive.css     # Mobile responsive styles
├── js/
│   ├── config.js          # Configuration
│   ├── auth.js            # Authentication
│   ├── api.js             # API communication
│   ├── search.js          # Bus search functionality
│   ├── booking.js         # Booking management
│   ├── seats.js           # Seat selection
│   ├── payment.js         # Payment processing
│   └── utils.js           # Utility functions
├── pages/
│   ├── login.html         # Login page
│   ├── register.html      # Registration page
│   ├── search.html        # Bus search
│   ├── booking.html       # Booking details
│   ├── seats.html         # Seat selection
│   ├── payment.html       # Payment page
│   ├── history.html       # Booking history
│   └── profile.html       # User profile
└── assets/
    └── images/            # Images and icons
```

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Vanilla JS without frameworks
- **Fetch API**: For REST API communication
- **Local Storage**: JWT token and booking data persistence

## Getting Started

### Prerequisites

- Modern web browser
- Backend API running (Bus Booking System Backend)
- Node.js and npm (optional)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mcmanuel295/BusBookingApp-Frontend.git
cd BusBookingApp-Frontend
```

2. Create configuration file:
```bash
cp config.example.js config.js
```

3. Update `config.js` with your API endpoint

4. Start a local server:
```bash
python -m http.server 3000
```

5. Open browser to `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/logout` - User logout

### Buses
- `GET /buses/search` - Search buses
- `GET /buses/{id}` - Get bus details
- `GET /buses/{id}/seats` - Get seat availability

### Bookings
- `GET /bookings` - List user bookings
- `POST /bookings` - Create booking
- `GET /bookings/{id}` - Get booking details
- `PUT /bookings/{id}` - Update booking
- `DELETE /bookings/{id}` - Cancel booking

### Payments
- `POST /payments` - Process payment
- `GET /payments/{id}` - Get payment status

### Routes
- `GET /routes` - List all routes
- `GET /routes/{id}` - Get route details

## User Workflows

### Passenger
1. Register or login
2. Search buses by route, date, and time
3. Select preferred bus
4. Choose seats from interactive seat map
5. Enter passenger details
6. Proceed to payment
7. Confirm booking
8. Download ticket

### Admin
1. Login to admin panel
2. Manage bus routes
3. Add/update bus details
4. Monitor bookings
5. Generate reports

## Features Implementation

✅ User authentication and registration
✅ Bus search functionality
✅ Interactive seat selection
✅ Booking management
✅ Payment processing
✅ Responsive design
✅ Booking history
✅ User profile management
🔄 SMS notifications (coming soon)
🔄 Email confirmations (coming soon)
🔄 Cancellation policy management (coming soon)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Security Features

- JWT authentication
- HTTPS enforced
- Input validation
- CSRF protection
- Rate limiting
- Secure session management

## License

MIT License

## Support

For issues, please create an issue in the repository.
