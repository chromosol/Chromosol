import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ServiceInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    phoneNumber: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceId = "service_9jgmeaz";  // Replace with your service ID
  const templateId = "template_9r0fl75"; // Replace with your template ID
  const userId = "1AdhL9JAQDbff-cvu";         // Replace with your public key

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, formData, userId);
      toast.success("Your inquiry has been sent successfully!");
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        service: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send the email. Please try again.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <div className="max-w-sm mx-auto rounded-md shadow-lg ">
      {isSubmitted ? (
        <div className="text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Thank you!</h2>
          <p>Your request has been submitted successfully. We'll be in touch soon!</p>
        </div>
      ) : (
        <>
      <h2 className="text-2xl font-semibold text-white mb-4">Let Us Know</h2>
      <p className="text-white mb-6 text-center">
      Request services that you like.
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
          type="email"
          name="email"
          placeholder="Your Email *"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <input
          type="text"
          name="service"
          placeholder="Service *"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number (Optional)"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message *"
          value={formData.message}
          onChange={handleChange}
          required
          rows={2}
          className="w-full p-2 rounded bg-gray-700 text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2 px-7 w-full"
        >
          Submit
        </button>
      </form>
        </>
        )}
    </div>
  );
};

export default ServiceInquiryForm;
