"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

type BookingType =
  | "Deluxe Room"
  | "Sweet Room"
  | "Premium Deluxe"
  | "Destination Wedding"
  | "Party Hall"
  | "Conference Hall";

interface BookingPopupProps {
  type: BookingType;
  defaultPurpose?: string;
  onClose: () => void;
}

const BookingPopup: React.FC<BookingPopupProps> = ({ type, defaultPurpose = "", onClose }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_mobile: "",
    booking_date: "",
    booking_purpose: defaultPurpose,
    booking_notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setFormData(prev => ({ ...prev, booking_purpose: defaultPurpose }));
  }, [defaultPurpose]);

  // ⏳ Auto-close after 8 seconds when success
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [success, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID!,
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          user_mobile: formData.user_mobile,
          booking_date: formData.booking_date,
          booking_purpose: formData.booking_purpose,
          booking_notes: formData.booking_notes,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true); // ✅ show success message
      setFormData({
        user_name: "",
        user_email: "",
        user_mobile: "",
        booking_date: "",
        booking_purpose: defaultPurpose,
        booking_notes: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send booking. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose} // closes only when clicking outside
    >
      <div
        className="bg-white rounded-2xl w-[95%] max-w-md p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()} // ✅ stops closing when clicking inside
      >
        {!success ? (
          <>
            <div className="mb-4 text-center">
              <h2 className="text-2xl font-semibold">{type}</h2>
              {formData.booking_purpose && (
                <p className="text-gray-500 mt-1">Purpose: {formData.booking_purpose}</p>
              )}
            </div>

        <form onSubmit={handleSubmit} className="space-y-4">
  <div>
    <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
      Name
    </label>
    <input
      id="user_name"
      type="text"
      name="user_name"
      placeholder="Your Name"
      value={formData.user_name}
      onChange={handleChange}
      className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
      required
    />
  </div>

  <div>
    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
      Email
    </label>
    <input
      id="user_email"
      type="email"
      name="user_email"
      placeholder="Your Email"
      value={formData.user_email}
      onChange={handleChange}
      className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
      required
    />
  </div>

  <div>
    <label htmlFor="user_mobile" className="block text-sm font-medium text-gray-700 mb-1">
      Mobile Number
    </label>
    <input
      id="user_mobile"
      type="tel"
      name="user_mobile"
      placeholder="Mobile Number"
      value={formData.user_mobile}
      onChange={handleChange}
      className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
      required
    />
  </div>

  <div>
    <label htmlFor="booking_date" className="block text-sm font-medium text-gray-700 mb-1">
      Booking Date
    </label>
    <input
      id="booking_date"
      type="date"
      name="booking_date"
      value={formData.booking_date}
      onChange={handleChange}
      className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
      required
    />
  </div>

  <div>
    <label htmlFor="booking_notes" className="block text-sm font-medium text-gray-700 mb-1">
      Additional Notes
    </label>
    <textarea
      id="booking_notes"
      name="booking_notes"
      placeholder="Additional Notes"
      value={formData.booking_notes}
      onChange={handleChange}
      className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
    />
  </div>

  <div className="flex justify-end gap-3 mt-4">
    <button
      type="button"
      onClick={onClose}
      className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100 transition"
    >
      Cancel
    </button>
    <button
      type="submit"
      disabled={loading}
      className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition disabled:opacity-50"
    >
      {loading ? "Sending..." : "Submit"}
    </button>
  </div>
</form>

          </>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-600">✅ Submitted!</h2>
            <p className="text-gray-700">
              We have received your booking enquiry. <br />
              Our team will reach out to you within <strong>1–2 hours</strong> during working time.
            </p>
            <p className="text-sm text-gray-500">This window will close automatically in 8 seconds.</p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
            >
              Close Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPopup;
