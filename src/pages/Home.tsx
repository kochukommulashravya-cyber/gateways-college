import { Link } from "react-router-dom";
import { Calendar, Users, Trophy, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";
import heroImage from "@/assets/hero-image.jpg";
import techEvent from "@/assets/tech-event.jpg";
import culturalEvent from "@/assets/cultural-event.jpg";
import sportsEvent from "@/assets/sports-event.jpg";

const Home = () => {
  const upcomingEvents = [
    {
      title: "Tech Hackathon 2024",
      category: "Technical",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Computer Science Building",
      participants: 150,
      image: techEvent,
      description: "24-hour coding marathon featuring innovative projects and cutting-edge technologies.",
    },
    {
      title: "Cultural Fest - Kaleidoscope",
      category: "Cultural",
      date: "March 20, 2024",
      time: "5:00 PM - 10:00 PM",
      location: "Main Auditorium",
      participants: 300,
      image: culturalEvent,
      description: "Celebrate diversity through dance, music, and art performances from around the world.",
    },
    {
      title: "Annual Sports Meet",
      category: "Sports",
      date: "March 25, 2024",
      time: "8:00 AM - 5:00 PM",
      location: "University Stadium",
      participants: 200,
      image: sportsEvent,
      description: "Inter-department athletics competition featuring track, field, and team sports.",
    },
  ];

  const stats = [
    { icon: Calendar, label: "Events This Month", value: "15+" },
    { icon: Users, label: "Active Participants", value: "2000+" },
    { icon: Trophy, label: "Prizes Awarded", value: "50+" },
    { icon: Sparkles, label: "Categories", value: "10+" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Your Gateway to
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Campus Life Events
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Discover, register, and participate in exciting technical, cultural, and sports events.
                All your college events in one centralized platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/events">
                    Explore Events
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/register">Register Now</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="rounded-2xl overflow-hidden shadow-hover">
                <img
                  src={heroImage}
                  alt="College students at events"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-xl shadow-card hover:shadow-hover transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 bg-gradient-primary rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on these exciting events happening soon on campus
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join the Fun?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Register now and be part of amazing events that shape your college experience
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/register">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
