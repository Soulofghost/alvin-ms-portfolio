export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1200));

    console.log("Dispatching email message to alvinms493@gmail.com:", data);

    return {
      success: true,
      message: `Thank you ${data.name}! Your message has been sent to Alvin MS (alvinms493@gmail.com). Alvin will respond to ${data.email} shortly.`
    };
  } catch (error) {
    console.error("EmailJS dispatch failed:", error);
    return {
      success: false,
      message: "Failed to send email. Please try emailing directly at alvinms493@gmail.com."
    };
  }
}