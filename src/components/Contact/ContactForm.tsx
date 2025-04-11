"use client";

import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

const ContactForm = () => {
  return (
    <div className="w-full h-full bg-slate-50 dark:bg-slate-950 p-8 space-y-5 flex flex-col justify-center">
      <div className="grid grid-cols-2 gap-4 ">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input placeholder="Your Name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input placeholder="Your Email" />
        </div>
      </div>
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input placeholder="Subject" />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Input className="h-48" placeholder="Message" />
      </div>
    </div>
  );
};

export default ContactForm;
