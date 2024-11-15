import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">Get in touch with our team for any inquiries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="label">Full Name</label>
                <input type="text" id="name" className="input" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="label">Email Address</label>
                <input type="email" id="email" className="input" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="label">Phone Number</label>
                <input type="tel" id="phone" className="input" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label htmlFor="message" className="label">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="input"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Office Address</h3>
                  <p className="text-gray-600">
                    123 Passport Street<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">
                    Toll-free: 1-800-PASSPORT<br />
                    Local: (555) 123-4567
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">
                    General: info@passportpro.com<br />
                    Support: support@passportpro.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-4">Emergency Support</h2>
            <p className="text-gray-600 mb-4">
              For urgent passport-related emergencies outside of business hours, please call our 24/7 emergency hotline:
            </p>
            <p className="text-lg font-semibold text-blue-600">1-800-URGENT-PP</p>
          </div>
        </div>
      </div>
    </div>
  );
}