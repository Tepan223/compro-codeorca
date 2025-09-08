import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Movie Collection Web",
      description: "Website interaktif untuk menampilkan koleksi film dengan animasi transisi yang halus menggunakan GSAP.",
      image: "Movie Collection.jpg",
      technologies: ["React", "gsap"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Dessert Shop Website",
      description: "Situs toko dessert dengan tampilan modern yang memudahkan pengguna untuk melihat menu dan detail produk.",
      image: "Dessert.jpg",
      technologies: ["React"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Company Profile",
      description: "Website profil perusahaan yang menampilkan informasi bisnis, layanan, dan kontak dengan desain profesional.",
      image: "Company.jpg",
      technologies: ["Next.js", "AntD"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Webflow",
      description: "Website modern dengan desain responsif yang dibuat menggunakan React untuk menampilkan portofolio kreatif.",
      image: "Webflow.jpg",
      technologies: ["React"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase dari berbagai project yang telah kami kerjakan dengan teknologi modern dan standar yang terbaik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors duration-200"
                      aria-label="View Live"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors duration-200"
                      aria-label="View Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}