import { IGAEvent } from "./types/types";

export const trackEvent = ({ action, category, label, value }: IGAEvent) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    console.warn("gtag is not available");
  }
};




/**

"use client";

import { trackEvent } from "@/lib/analytics";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Event Tracking
    
    trackEvent({
      action: "form_submit",
      category: "contact",
      label: "contact_form",
    });

    console.log("Form submitted!");
  };


    return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};

 */
