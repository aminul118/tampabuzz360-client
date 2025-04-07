import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    text: "Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522",
  },
  {
    icon: Phone,
    text: "(257) 563-7401",
  },
  {
    icon: Mail,
    text: "acb@example.com",
  },
];

const socialLinks = [
  {
    icon: Facebook,
    href: "#",
  },
  {
    icon: Twitter,
    href: "#",
  },
  {
    icon: Instagram,
    href: "#",
  },
  {
    icon: Linkedin,
    href: "#",
  },
];

const ContactInfo = () => {
  return (
    <div className="text-white lg:w-1/2 lg:mx-6">
      <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
        Get a quote
      </h1>
      <p className="max-w-xl mt-6">
        Ask us everything and we would love to hear from you
      </p>

      {/* Contact Info */}
      <div className="mt-6 space-y-6 md:mt-8">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <p key={index} className="flex items-start">
              <Icon className="w-6 h-6 text-white mr-2" />
              <span className="w-72 truncate">{item.text}</span>
            </p>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="mt-8">
        <h3 className="text-gray-300">Follow us</h3>
        <div className="flex mt-4 gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="text-white hover:text-blue-500"
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
