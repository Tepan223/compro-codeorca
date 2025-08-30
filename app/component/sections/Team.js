import { Github, Linkedin, Mail } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      bio: "Fullstack developer dengan 8+ tahun pengalaman dalam React, Node.js, dan cloud architecture.",
      image: "",
      social: {
        github: "#",
        linkedin: "#",
        email: "alex@codeorca.com"
      }
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      bio: "Designer kreatif yang berfokus pada user experience dan modern interface design.",
      image: "",
      social: {
        github: "#",
        linkedin: "#", 
        email: "sarah@codeorca.com"
      }
    },
    {
      name: "Mike Rodriguez",
      role: "Backend Specialist",
      bio: "Expert dalam database design, API development, dan system architecture.",
      image: "",
      social: {
        github: "#",
        linkedin: "#",
        email: "mike@codeorca.com"
      }
    },
    {
      name: "Emily Watson",
      role: "Frontend Developer",
      bio: "Spesialis Web development dengan React, NextJS, dan TailwindCSS.",
      image: "",
      social: {
        github: "#",
        linkedin: "#",
        email: "emily@codeorca.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tim profesional kami terdiri dari developer dan designer berpengalaman yang siap mewujudkan visi digital Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{member.bio}</p>
              
              <div className="flex justify-center gap-4">
                <a 
                  href={member.social.github}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={member.social.linkedin}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={`mailto:${member.social.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}