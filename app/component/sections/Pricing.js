import { Check, Star } from "lucide-react";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Custom Web Application",
      price: "3,500,000",
      period: "project",
      description: "Aplikasi web custom untuk memenuhi kebutuhan bisnis dengan fitur yang dapat disesuaikan.",
      features: [
        "Desain UI/UX",
        "Pengembangan Fitur Khusus",
        "Integrasi Payment Gateway", 
        "Hosting 1 Tahun",
        "Pengujian dan Revisi",
        "Support Teknis Selama 1 Bulan"
      ],
      popular: false
    },
    {
      name: "Company Profile",
      price: "2,000,000",
      period: "project",
      description: "Website E-Commerce untuk mempermudah penjualan online dengan tampilan profesional.",
      features: [
        "Desain UI/UX",
        "Konten dan Fitur Halaman",
        "Hosting 1 Tahun",
        "Pengujian dan Revisi",
      ],
      popular: true
    },
    {
      name: "E-Commerce",
      price: "2,850,000",
      period: "project",
      description: "Solusi enterprise grade untuk large corporation dengan requirement khusus.",
      features: [
        "Desain UI/UX",
        "Fitur Utama",
        "Optimasi SEO Dasar",
        "Hosting 1 Tahun",
        "Pengujian dan Revisi",
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pricing Plans</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah include consultation dan project planning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-card border rounded-lg p-8 relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                    <Star size={16} />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    {plan.price === "Custom" ? "Custom" : `Rp ${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                      <Check className="text-primary" size={16} />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border hover:bg-muted'
                }`}
              >
                {plan.price === "Custom" ? "Get Quote" : "Get Started"}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Semua paket sudah termasuk consultation gratis dan project planning. Pembayaran bisa dicicil sesuai pencapaian project.
          </p>
          <p className="text-sm text-muted-foreground">
            * Harga dapat berubah sewaktu-waktu tergantung kompleksitas project dan requirement khusus
          </p>
        </div>
      </div>
    </section>
  );
}