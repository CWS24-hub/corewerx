import React from 'react';
import { Calendar } from 'lucide-react';

interface BookingWidgetProps {
  serviceId?: string;
  className?: string;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ serviceId, className = '' }) => {
  // Microsoft Bookings URL
  const bookingUrl = "https://outlook.office.com/bookwithme/user/2aa5b16e6eef44e99ee06735519986df@ozlink.it/meetingtype/puacwdevXkersDireAn3Bw2?anonymous&ep=mLinkFromTile";

  return (
    <div className={`bg-navy/90 backdrop-blur-sm p-6 rounded-lg border border-bright-cyan/15 shadow-lg ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <Calendar className="w-6 h-6 text-bright-cyan" />
        <h3 className="text-xl font-bold text-white">Schedule a Consultation</h3>
      </div>
      
      <p className="text-gray-300 mb-6">
        Book a free consultation with our experts to discuss your IT needs and discover how we can help transform your business.
      </p>
      
      <div className="aspect-video w-full">
        <iframe
          src={bookingUrl}
          frameBorder="0"
          scrolling="yes"
          className="w-full h-full rounded-lg"
          title="Book a consultation"
        />
      </div>
      
      <div className="mt-4 text-sm text-gray-400">
        <p>You can also book by:</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <a 
              href={bookingUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-bright-cyan hover:text-electric-blue transition-colors"
            >
              Opening the booking page directly
            </a>
          </li>
          <li>Calling us at +971 50 000 0000</li>
          <li>Emailing info@corewerx.ae</li>
        </ul>
      </div>
    </div>
  );
};

export default BookingWidget;