import { useState } from "react";
import { EmailRepository } from "../../../app/repositories/email";
import ContactForm, { IFormInput } from "./form"

const ContactMe = () => {
  const emailRepository = new EmailRepository();
  const [sendValid, setSendValid] = useState<boolean | null>(null);
  const sendEmailContact = async (params: IFormInput) => {
    setSendValid(null)
    const response = await emailRepository.sendEmail(params);
    if (response === 201) {
      setSendValid(true);
    } else {
      setSendValid(false);
    }
  }

  return (
    <div className="m-auto" id="contactMe">
        <h1 className="text-center">Contactame</h1>
        <ContactForm onSend={sendEmailContact} valid={sendValid}/>
    </div>
  )
}

export default ContactMe