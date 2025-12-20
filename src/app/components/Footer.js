import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Dinokojt7", label: "GitHub" },
    {
      icon: Linkedin,
      href: "linkedin.com/in/tiisetso-dinoko-6bb84280/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/tiisetso_dinoko", label: "Twitter" },
    { icon: Mail, href: "mailto:jacobdinoko@gmail.com", label: "Email" },
  ];
  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-[#1b1b1e]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Available for select freelance opportunities
        </h2>
        <p className="text-gray-600 mb-8">
          I'm currently open to new opportunities and collaborations. Whether
          you have a question, a project idea, or just want to say hello, feel
          free to reach out!
        </p>{" "}
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-4"
        >
          <span className="text-gray-500">Follow me:</span>
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white shadow-sm hover:shadow-md rounded-lg transition-all hover:bg-primary hover:text-white"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
