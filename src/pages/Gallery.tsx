import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import techEvent from "@/assets/tech-event.jpg";
import culturalEvent from "@/assets/cultural-event.jpg";
import sportsEvent from "@/assets/sports-event.jpg";
import heroImage from "@/assets/hero-image.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      src: heroImage,
      alt: "Students celebrating at college event with confetti and lights",
      title: "Annual College Fest 2023",
    },
    {
      src: techEvent,
      alt: "Students participating in tech hackathon, coding on laptops",
      title: "Tech Hackathon",
    },
    {
      src: culturalEvent,
      alt: "Cultural dance performance on stage with colorful lights",
      title: "Cultural Night",
    },
    {
      src: sportsEvent,
      alt: "Athletic competition at university sports meet",
      title: "Sports Championship",
    },
    {
      src: gallery1,
      alt: "Students enjoying college fun fest with balloons and activities",
      title: "Fun Fest 2023",
    },
    {
      src: gallery2,
      alt: "Workshop session with students learning from speaker",
      title: "Leadership Workshop",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Gallery</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Relive the memorable moments from our past events
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want to be featured here?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our upcoming events and create unforgettable memories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
