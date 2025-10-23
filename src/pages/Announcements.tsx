import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, Trophy, Users } from "lucide-react";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      type: "Event Update",
      title: "Tech Hackathon Registration Extended",
      date: "March 10, 2024",
      content: "Due to popular demand, we've extended the registration deadline for Tech Hackathon 2024 to March 13. Don't miss this opportunity to showcase your coding skills!",
      badge: "New",
      icon: Bell,
    },
    {
      id: 2,
      type: "Results",
      title: "Cultural Fest Winners Announced",
      date: "March 8, 2024",
      content: "Congratulations to all winners of Cultural Fest 2024! Check the detailed results on the events page. Certificates will be distributed next week.",
      badge: "Results",
      icon: Trophy,
    },
    {
      id: 3,
      type: "Schedule",
      title: "Sports Meet Schedule Released",
      date: "March 7, 2024",
      content: "The complete schedule for Annual Sports Meet is now available. Events will run from March 25-27. Participants should report to the stadium by 7:30 AM.",
      badge: "Schedule",
      icon: Calendar,
    },
    {
      id: 4,
      type: "Registration",
      title: "Workshop on AI/ML - Limited Seats",
      date: "March 5, 2024",
      content: "Only 20 seats remaining for the AI/ML Workshop on March 18. Register now to secure your spot. Industry experts will conduct hands-on sessions.",
      badge: "Important",
      icon: Users,
    },
    {
      id: 5,
      type: "General",
      title: "New Event Categories Added",
      date: "March 3, 2024",
      content: "We're excited to announce new event categories including Photography Competition, Debate Championship, and Gaming Tournament. Stay tuned for more details!",
      badge: "Update",
      icon: Bell,
    },
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case "new":
        return "bg-primary text-primary-foreground";
      case "results":
        return "bg-secondary text-secondary-foreground";
      case "important":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Announcements</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest news, schedules, and results
          </p>
        </div>

        {/* Announcements List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {announcements.map((announcement, index) => (
            <Card
              key={announcement.id}
              className="hover:shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <announcement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={getBadgeColor(announcement.badge)}>
                          {announcement.badge}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {announcement.type}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{announcement.title}</CardTitle>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap">
                    {announcement.date}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {announcement.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-primary text-white border-0">
            <CardContent className="p-8 text-center">
              <Bell className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h2 className="text-2xl font-bold mb-2">Never Miss an Update</h2>
              <p className="opacity-90 mb-4">
                Follow us on social media to get instant notifications about events and announcements
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
