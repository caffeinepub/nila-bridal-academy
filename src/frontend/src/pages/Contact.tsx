import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Contact() {
  return (
    <div className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="border-rose-gold text-rose-gold">
            Get in Touch
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-muted-foreground">
            We're here to help with your bridal makeup and training needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-rose-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-rose-gold" />
                Phone & WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-2xl font-bold text-rose-gold">9384459938</p>
              <div className="flex flex-col gap-2">
                <Button
                  className="bg-rose-gold hover:bg-rose-gold/90 text-white w-full"
                  asChild
                >
                  <a href="tel:9384459938">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-rose-gold text-rose-gold hover:bg-rose-gold/10 w-full"
                  asChild
                >
                  <a href="https://wa.me/919384459938" target="_blank" rel="noopener noreferrer">
                    <SiWhatsapp className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-rose-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-rose-gold" />
                Service Area
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold mb-2">All Over Tamil Nadu</p>
              <p className="text-muted-foreground">
                We provide professional bridal makeup services and free training programs throughout Tamil Nadu.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-rose-gold/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-rose-gold" />
              Booking Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌸</span>
              <span className="font-serif text-xl font-bold text-rose-gold">Nila Bridal Academy</span>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-start gap-2">
                <span className="text-rose-gold font-bold">•</span>
                <span>Advance booking required for all bridal makeup services</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-rose-gold font-bold">•</span>
                <span>Free training programs require prior registration</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-rose-gold font-bold">•</span>
                <span>Limited seats available for training courses</span>
              </p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground italic">
                Contact us today to reserve your wedding date or register for our free beautician training
                programs.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
