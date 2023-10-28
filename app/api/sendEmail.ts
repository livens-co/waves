import axios from "axios";
import toast from "react-hot-toast";

interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  date: string;
  numberOfPeople: number;
  userNotes: string;
  emailType: string;
  bookingId: string;
}

const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    const response = await axios.post("/api/send", { ...emailData });

    if (response.status === 200) { 
      return true;
    }
    toast.error("Email sending failed");
    return false;
  } catch (error) {
    console.error("Email sending failed:", error);
    toast.error("Email sending failed");
    throw error;
  }
};

export { sendEmail };


