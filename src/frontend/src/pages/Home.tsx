import { Check, Phone, Sparkles, Award, Users, Star, Calendar, BookOpen, GraduationCap } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const services = [
    'Traditional Bridal Makeup',
    'HD & Natural Bridal Makeup',
    'Reception Makeup',
    'Engagement Makeup',
    'Hair Styling & Saree Draping',
  ];

  const missionPoints = [
    'Provide high-quality 6 months beauty training at no cost',
    'Support skill development and self-employment opportunities',
    'Award ISO Certification after successful completion',
    'Build confident, professional beauty artists across Tamil Nadu',
  ];

  const courseStructure = [
    {
      months: 'Month 1–2',
      topics: ['Basic Skin Care', 'Facial Techniques', 'Product Knowledge', 'Hygiene & Safety'],
    },
    {
      months: 'Month 3–4',
      topics: ['Bridal Makeup Basics', 'Hair Styling Techniques', 'Saree Draping', 'Client Consultation'],
    },
    {
      months: 'Month 5',
      topics: ['Advanced Bridal Makeup', 'HD Makeup Techniques', 'Portfolio Practice'],
    },
    {
      months: 'Month 6',
      topics: ['Live Model Practice', 'Professional Grooming', 'Final Assessment'],
    },
  ];

  const enrollmentSteps = [
    { number: '1', text: 'Fill out the Application Form' },
    { number: '2', text: 'Submit Basic Details' },
    { number: '3', text: 'Attend Counseling Session' },
    { number: '4', text: 'Confirm Admission' },
  ];

  const testimonials = [
    {
      name: 'Priya S.',
      text: 'Absolutely stunning bridal look! The makeup was elegant, natural, and long-lasting. Highly recommended across Tamil Nadu.',
      rating: 5,
    },
    {
      name: 'Keerthana R.',
      text: 'Best free beauty training experience. Clear guidance and practical teaching helped me gain confidence in makeup artistry.',
      rating: 5,
    },
    {
      name: 'Divya M.',
      text: 'Professional and calm service. Very punctual and supportive. My reception look was flawless.',
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/generated/training-hero.dim_800x600.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl space-y-6 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl">🌸</span>
              <Badge variant="secondary" className="bg-rose-gold/90 text-white border-0">
                6 Months FREE Course
              </Badge>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
              Transform Your Passion Into a Professional Career
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Nila Bridal Academy proudly offers a 6 Months Professional Beautician & Bridal Makeup Course – 
              Completely FREE across Tamil Nadu. Our mission is to empower women with industry-ready beauty 
              skills and provide an ISO Certificate upon successful course completion.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-rose-gold" />
                <span className="text-lg">6 Months Structured Training</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-rose-gold" />
                <span className="text-lg">100% Free Course</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-rose-gold" />
                <span className="text-lg">ISO Certificate After Completion</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-rose-gold" />
                <span className="text-lg">Practical & Hands-on Sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-rose-gold" />
                <span className="text-lg">Limited Seats – Apply Now</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                size="lg"
                className="bg-rose-gold hover:bg-rose-gold/90 text-white text-lg px-8"
                asChild
              >
                <a href="https://wa.me/919384459938" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <SiWhatsapp className="h-5 w-5" />
                  Apply via WhatsApp: 9384459938
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Main Mission Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <div className="flex justify-center mb-4">
                <img
                  src="/assets/generated/iso-badge.dim_200x200.png"
                  alt="ISO Certification"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <Badge variant="outline" className="border-rose-gold text-rose-gold">
                Our Mission
              </Badge>
              <h2 className="font-serif text-3xl md:text-5xl font-bold">
                Our Main Mission
              </h2>
            </div>

            <Card className="border-rose-gold/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  At Nila Bridal Academy, our primary goal is to:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Award className="h-6 w-6 text-rose-gold mt-0.5 flex-shrink-0" />
                      <span className="text-lg text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-center text-lg font-medium text-foreground">
                    We focus on real practical learning, discipline, and professional standards.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Structure Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(/assets/generated/course-structure-bg.dim_1920x1080.png)',
        }}
      >
        <div className="absolute inset-0 bg-background/95" />
        <div className="container relative z-10">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-rose-gold text-rose-gold">
              Course Details
            </Badge>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">
              Course Structure – 6 Months Program
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {courseStructure.map((phase, index) => (
              <Card key={index} className="border-rose-gold/20 hover:border-rose-gold/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="h-12 w-12 rounded-full bg-rose-gold/10 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-rose-gold" />
                    </div>
                    {phase.months}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <span className="text-rose-gold font-bold mt-1">•</span>
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Badge variant="secondary" className="bg-rose-gold text-white text-lg px-6 py-3">
              🎓 ISO Certificate Provided After Successful Completion
            </Badge>
          </div>
        </div>
      </section>

      {/* Student Application Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-rose-gold text-rose-gold">
                Enrollment
              </Badge>
              <h2 className="font-serif text-3xl md:text-5xl font-bold">
                Apply for 6 Months Free Course
              </h2>
              <p className="text-lg text-muted-foreground">
                To enroll in our free program:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {enrollmentSteps.map((step, index) => (
                <Card key={index} className="border-rose-gold/20">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full bg-rose-gold text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                        {step.number}
                      </div>
                      <CardTitle className="text-lg">{step.text}</CardTitle>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="border-rose-gold/20 bg-rose-gold/5">
              <CardContent className="pt-6">
                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <AlertCircle className="h-5 w-5 text-rose-gold" />
                    <p className="font-semibold text-lg">Limited Seats Available</p>
                  </div>
                  <p className="text-muted-foreground">
                    Selection Based on Eligibility & Commitment
                  </p>
                  <div className="pt-4">
                    <p className="text-2xl font-bold text-rose-gold mb-4">📞 Contact: 9384459938</p>
                    <Button
                      size="lg"
                      className="bg-rose-gold hover:bg-rose-gold/90 text-white"
                      asChild
                    >
                      <a href="https://wa.me/919384459938" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <SiWhatsapp className="h-5 w-5" />
                        Apply Now via WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bridal Makeup Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-rose-gold text-rose-gold">
              Our Services
            </Badge>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">Bridal Makeup Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Along with training, we provide professional bridal makeup services across Tamil Nadu. 
              Advance booking required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-rose-gold/20 hover:border-rose-gold/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-rose-gold/10 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-rose-gold" />
                    </div>
                    <CardTitle className="text-lg">{service}</CardTitle>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <img
              src="/assets/generated/makeup-service.dim_300x300.png"
              alt="Makeup Service"
              className="w-48 h-48 mx-auto rounded-full shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Book Online Section */}
      <section id="book" className="py-20 bg-rose-gold/5">
        <div className="container">
          <Card className="max-w-3xl mx-auto border-rose-gold/20 shadow-xl">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-rose-gold/10 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-rose-gold" />
                </div>
              </div>
              <CardTitle className="font-serif text-3xl md:text-4xl">
                Book Your Bridal Appointment Today
              </CardTitle>
              <CardDescription className="text-base">
                Reserve your wedding date with Nila Bridal Academy. We provide professional bridal makeup
                services throughout Tamil Nadu with easy booking via call or WhatsApp.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="space-y-2">
                <p className="text-2xl font-bold text-rose-gold">📞 9384459938</p>
                <p className="text-sm text-muted-foreground">
                  Advance booking recommended for all bridal services.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-rose-gold hover:bg-rose-gold/90 text-white"
                  asChild
                >
                  <a href="tel:9384459938">Call Now</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-rose-gold text-rose-gold hover:bg-rose-gold/10"
                  asChild
                >
                  <a href="https://wa.me/919384459938" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-rose-gold text-rose-gold">
              Testimonials
            </Badge>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-rose-gold/20">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-rose-gold text-rose-gold" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function AlertCircle({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
