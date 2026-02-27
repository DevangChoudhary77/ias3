import { FadeIn, SectionHeading } from '../components/Shared';

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      title: "Campus Life",
      category: "Campus"
    },
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      title: "Library Study Session",
      category: "Study"
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      title: "Expert Seminar",
      category: "Events"
    },
    {
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
      title: "University Grounds",
      category: "Campus"
    },
    {
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      title: "Group Discussion",
      category: "Study"
    },
    {
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
      title: "Success Celebration",
      category: "Events"
    },
    {
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
      title: "Interactive Classroom",
      category: "Study"
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      title: "Guest Lecture",
      category: "Events"
    },
    {
      url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
      title: "Study Materials",
      category: "Campus"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 pt-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop" 
          alt="University campus background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-50/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <SectionHeading 
            title="Life at Secure IAS" 
            subtitle="Glimpses of our vibrant campus, intense study sessions, and moments of triumph."
            centered
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {images.map((img, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] bg-slate-200">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">{img.category}</span>
                  <h3 className="text-white text-lg font-semibold">{img.title}</h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
