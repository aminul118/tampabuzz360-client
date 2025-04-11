import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import Container from "@/components/ui/Container";
import generateSEO from "@/lib/seo/seo";

export const metadata = generateSEO({
  title: "Contact - TampaBuzz360",
  description:
    "Get in touch with TampaBuzz360 for news tips, advertising inquiries, partnerships, or general questions. We’re here to connect, collaborate, and respond to your media needs. Reach out today!",
  url: "https://tampabuzz360.com/contact",
  author: "Syed Tajim Hossain",
  keywords:
    "Contact TampaBuzz360, Tampa news contact, media inquiries Tampa, news tip TampaBuzz360, TampaBuzz360 advertising, connect with TampaBuzz360, news partnership Tampa, Tampa journalism contact",
});

const ContactPage = () => {
  return (
    <Container className="flex min-h-[calc(100vh-424px)] justify-center items-center ">
      {/* Contact Info */}
      <div className="w-1/2 h-[500px]">
        <ContactInfo />
      </div>

      <div className="w-1/2 h-[500px]">
        <ContactForm />
      </div>
    </Container>
  );
};

export default ContactPage;
