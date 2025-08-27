import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Pengembangan website modern dan responsif menggunakan teknologi terdepan",
      icon: "💻",
      color: "bg-blue-600",
    },
    {
      title: "E-Commerce Solutions",
      description: "Platform e-commerce lengkap dengan payment gateway dan inventory management",
      icon: "🛒",
      color: "bg-green-600",
    },
    {
      title: "Performance Optimization",
      description: "Optimasi performa aplikasi untuk pengalaman pengguna yang lebih baik",
      icon: "⚡",
      color: "bg-yellow-600",
    },
    {
      title: "UI/UX Design",
      description: "Desain antarmuka yang menarik dan user experience yang optimal",
      icon: "🎨",
      color: "bg-pink-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center text-foreground mb-16">
            Layanan{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Kami
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-lg text-center text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}