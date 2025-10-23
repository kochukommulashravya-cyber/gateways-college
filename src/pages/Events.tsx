import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventCard from "@/components/EventCard";
import techEvent from "@/assets/tech-event.jpg";
import culturalEvent from "@/assets/cultural-event.jpg";
import sportsEvent from "@/assets/sports-event.jpg";

const Events = () => {
  const [activeTab, setActiveTab] = useState("all");

  const events = [
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
      title: "AI/ML Workshop",
      category: "Technical",
      date: "March 18, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Lab",
      participants: 80,
      image: techEvent,
      description: "Hands-on workshop on artificial intelligence and machine learning fundamentals.",
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
      title: "Music Night",
      category: "Cultural",
      date: "March 22, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Open Air Theater",
      participants: 250,
      image: culturalEvent,
      description: "Live performances by student bands and solo artists across various genres.",
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
    {
      title: "Cricket Tournament",
      category: "Sports",
      date: "March 28, 2024",
      time: "7:00 AM - 6:00 PM",
      location: "Sports Complex",
      participants: 120,
      image: sportsEvent,
      description: "Exciting cricket matches between department teams competing for the championship.",
    },
  ];

  const filteredEvents = activeTab === "all" 
    ? events 
    : events.filter(event => event.category.toLowerCase() === activeTab);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Events</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our diverse range of technical, cultural, and sports events
          </p>
        </div>

        {/* Event Categories Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="cultural">Cultural</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            {filteredEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event, index) => (
                  <div
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <EventCard {...event} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No events found in this category.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Events;
