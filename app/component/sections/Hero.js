import { ArrowRight, Code, Zap, Users } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
            code<span style={{color: '#1890ff'}}>ORCA</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-foreground">
            Modern Software Development
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Kami menciptakan solusi digital yang inovatif dan powerful untuk mengubah bisnis Anda ke era digital yang baru.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            
            <button
              onClick={scrollToServices}
              className="border border-border px-8 py-4 rounded-lg hover:bg-muted transition-all duration-300"
            >
              Our Services
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-muted-foreground">Kode yang bersih, maintainable, dan scalable untuk jangka panjang.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
              <p className="text-muted-foreground">Optimasi performa maksimal untuk user experience yang superior.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Tim developer berpengalaman dengan teknologi terdepan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}