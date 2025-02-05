import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const CTAForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    date: "",
    time: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state

  const serviceId = "service_9jgmeaz";  // Replace with your service ID
  const templateId = "template_vbs4l69"; // Replace with your template ID
  const userId = "1AdhL9JAQDbff-cvu";     // Replace with your public key

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phoneNumber || !formData.date || !formData.time ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Validate phone number (optional: add your own validation logic)
    if (!/^\+?[1-9]\d{1,14}$/.test(formData.phoneNumber)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, formData, userId);
      toast.success("Your request has been received! We'll be in touch shortly.");
      setIsSubmitted(true);
      setFormData({
        name: "",
        phoneNumber: "",
        date: "",
        time: "",
      });
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto rounded-md shadow-lg p-6 ">
       {isSubmitted ? (
        <div className="text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Thank you!</h2>
          <p>Your request has been submitted successfully. We'll be in touch soon!</p>
        </div>
      ) : (
        <>
      <h2 className="text-2xl font-semibold text-white mb-4 text-center">
        Book a Free Consultation!
      </h2>
      <p className="text-white mb-6 text-center">
      Schedule Your Complimentary Call Today.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Your Phone Number *"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="Select Date *"
            />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2 px-7 w-full"
        >
          Book now
        </button>
      </form>
      </>
      )}
    </div>
  );
};

export default CTAForm;
