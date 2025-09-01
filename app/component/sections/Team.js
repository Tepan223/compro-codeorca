import { Github, Linkedin, Mail } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Irene Djaya",
      role: "UI/UX Designer",
      bio: "Designer kreatif yang berfokus pada user experience dan modern interface design.",
      image: "Irene.jpg",
      social: {
        github: "https://github.com/l13nnn",
        email: "irenedjaya288@gmailcom",
      }
    },
    {
      name: "Stevanus Gabriel",
      role: "Front-end Developer",
      bio: "Expert dalam membuat antarmuka pengguna yang responsif dan interaktif.",
      image: "TepanG.jpg",
      social: {
        github: "#",
        email: "mike@codeorca.com"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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