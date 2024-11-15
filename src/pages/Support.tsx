import { useState } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function Support() {
  const [activeTab, setActiveTab] = useState('faq');

  const faqs = [
    {
      question: "How long does the passport application process take?",
      answer: "The standard processing time is 4-6 weeks. For expedited service, it typically takes 2-3 weeks."
    },
    {
      question: "What documents are required for a new passport?",
      answer: "You'll need proof of citizenship (birth certificate or naturalization papers), a valid government-issued photo ID, and recent passport photos."
    },
    {
      question: "How can I track my application status?",
      answer: "You can track your application status through your dashboard using your application reference number."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit/debit cards, net banking, and UPI payments."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
        <p className="text-lg text-gray-600">We're here to help you with any questions or concerns</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('faq')}
              className={`${
                activeTab === 'faq'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`${
                activeTab === 'contact'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium`}
            >
              Contact Support
            </button>
          </nav>
        </div>
      </div>

      {activeTab === 'faq' ? (
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600">support@passportpro.com</p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600">1-800-PASSPORT</p>
            </div>
            <div className="text-center">
              <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600">Available 24/7</p>
            </div>
          </div>

          <form className="max-w-2xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="label">Name</label>
              <input type="text" id="name" className="input" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="label">Email</label>
              <input type="email" id="email" className="input" placeholder="Your email" />
            </div>
            <div>
              <label htmlFor="subject" className="label">Subject</label>
              <input type="text" id="subject" className="input" placeholder="How can we help?" />
            </div>
            <div>
              <label htmlFor="message" className="label">Message</label>
              <textarea
                id="message"
                rows={4}
                className="input"
                placeholder="Describe your issue"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      )}
    </div>
  );
}