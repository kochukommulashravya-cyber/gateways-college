import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "events@college.edu",
      link: "mailto:events@college.edu",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (234) 567-890",
      link: "tel:+1234567890",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "123 University Road, Campus City, State 12345",
      link: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday: 9:00 AM - 5:00 PM",
      link: null,
    },
  ];

  const organizers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Faculty Coordinator",
      email: "sarah.johnson@college.edu",
      phone: "+1 (234) 567-891",
    },
    {
      name: "Prof. Michael Chen",
      role: "Technical Events Head",
      email: "michael.chen@college.edu",
      phone: "+1 (234) 567-892",
    },
    {
      name: "Ms. Priya Sharma",
      role: "Cultural Events Coordinator",
      email: "priya.sharma@college.edu",
      phone: "+1 (234) 567-893",
    },
    {
      name: "Mr. David Wilson",
      role: "Sports Events Manager",
      email: "david.wilson@college.edu",
      phone: "+1 (234) 567-894",
    },
  ];

  const socialMedia = [
    { name: "Facebook", icon: Facebook, link: "https://facebook.com", color: "hover:text-[#1877F2]" },
    { name: "Twitter", icon: Twitter, link: "https://twitter.com", color: "hover:text-[#1DA1F2]" },
    { name: "Instagram", icon: Instagram, link: "https://instagram.com", color: "hover:text-[#E4405F]" },
    { name: "LinkedIn", icon: Linkedin, link: "https://linkedin.com", color: "hover:text-[#0A66C2]" },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? We're here to help! Reach out to us through any of the following channels.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="hover:shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-3 bg-gradient-primary rounded-lg mb-4">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{info.details}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Organizers Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Event Organizers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizers.map((organizer, index) => (
              <Card
                key={index}
                className="hover:shadow-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{organizer.name}</CardTitle>
                  <CardDescription>{organizer.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a
                    href={`mailto:${organizer.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="truncate">{organizer.email}</span>
                  </a>
                  <a
                    href={`tel:${organizer.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{organizer.phone}</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-primary text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
              <p className="opacity-90 mb-6">
                Follow us on social media for instant updates and behind-the-scenes content
              </p>
              <div className="flex justify-center gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
