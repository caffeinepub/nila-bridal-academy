import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accessibility } from 'lucide-react';

export default function AccessibilityStatement() {
  return (
    <div className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="border-rose-gold text-rose-gold">
            Accessibility
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Accessibility Statement</h1>
          <p className="text-muted-foreground">
            We are committed to providing an inclusive experience for all.
          </p>
        </div>

        <Card className="border-rose-gold/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Accessibility className="h-5 w-5 text-rose-gold" />
              Our Commitment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Nila Bridal Academy is committed to providing an accessible and inclusive experience for all
                clients and students. We strive to ensure that our services, training programs, and facilities
                are welcoming and accessible to everyone, regardless of ability.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Our Efforts</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Providing clear communication about our services and training programs</li>
                <li>Offering flexible scheduling to accommodate individual needs</li>
                <li>Ensuring our staff is trained to assist clients with diverse requirements</li>
                <li>Continuously improving our accessibility practices</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Need Assistance?</h3>
              <p className="text-muted-foreground">
                If you require assistance or have specific accessibility needs, please don't hesitate to contact
                us. We will work with you to ensure you receive the best possible service.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Contact us for accessibility assistance:
              </p>
              <p className="text-rose-gold font-semibold mt-2">📞 9384459938</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
