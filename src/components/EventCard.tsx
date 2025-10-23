import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  participants?: number;
  image: string;
  description: string;
}

const EventCard = ({
  title,
  category,
  date,
  time,
  location,
  participants,
  image,
  description,
}: EventCardProps) => {
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "technical":
        return "bg-primary text-primary-foreground";
      case "cultural":
        return "bg-secondary text-secondary-foreground";
      case "sports":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-hover transition-all duration-300 group">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className={`absolute top-4 right-4 ${getCategoryColor(category)}`}>
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          {participants && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{participants} participants</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">
          Register Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
