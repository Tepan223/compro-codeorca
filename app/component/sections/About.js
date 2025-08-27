import { Target, Eye, Award, Users } from "lucide-react";
import '../../globals.css';

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About codeORCA</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kami adalah perusahaan teknologi yang berfokus pada pengembangan solusi software modern dan inovatif untuk membantu bisnis bertransformasi digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Eye className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Visi Kami</h3>
            <p className="text-muted-foreground leading-relaxed">
              Menjadi perusahaan teknologi terdepan yang mengubah cara bisnis beroperasi melalui solusi digital yang inovatif, reliable, dan user-friendly. Kami berkomitmen untuk mewujudkan transformasi digital yang berkelanjutan bagi setiap klien.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Misi Kami</h3>
            <p className="text-muted-foreground leading-relaxed">
              Memberikan solusi software berkualitas tinggi yang membantu klien mencapai tujuan bisnis mereka. Kami menggunakan teknologi terdepan dan metodologi agile untuk memastikan setiap project memberikan value maksimal bagi bisnis klien.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Award className="text-primary" size={32} />
            </div>
            <h4 className="text-3xl font-bold mb-2">50+</h4>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Users className="text-primary" size={32} />
            </div>
            <h4 className="text-3xl font-bold mb-2">30+</h4>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Target className="text-primary" size={32} />
            </div>
            <h4 className="text-3xl font-bold mb-2">99%</h4>
            <p className="text-muted-foreground">Success Rate</p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Eye className="text-primary" size={32} />
            </div>
            <h4 className="text-3xl font-bold mb-2">24/7</h4>
            <p className="text-muted-foreground">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}