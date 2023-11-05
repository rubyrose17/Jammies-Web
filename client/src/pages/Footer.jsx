import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Hotel Reservation</h3>
            <ul className="text-sm">
              <li>Book a room</li>
              <li>Reservations</li>
              <li>Special offers</li>
              <li>Customer reviews</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Restaurant</h3>
            <ul className="text-sm">
              <li>Menu</li>
              <li>Table reservations</li>
              <li>Events</li>
              <li>Catering</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <address className="text-sm">
              <p>123 Main St, City</p>
              <p>Email: info@example.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
