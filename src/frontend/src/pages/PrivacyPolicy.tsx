import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="border-rose-gold text-rose-gold">
            Legal
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Your privacy is important to us.
          </p>
        </div>

        <Card className="border-rose-gold/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-rose-gold" />
              Our Commitment to Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Data Collection</h3>
              <p className="text-muted-foreground">
                Nila Bridal Academy respects your privacy. Personal information collected during booking or
                course registration is used only for communication and service coordination.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Data Usage</h3>
              <p className="text-muted-foreground">
                We collect your contact information (name, phone number, email) solely to:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground ml-4">
                <li>Confirm and manage your bridal makeup appointments</li>
                <li>Coordinate training program registrations</li>
                <li>Communicate service updates and reminders</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Third-Party Sharing</h3>
              <p className="text-muted-foreground">
                We do not sell or share your information with third parties. Your data remains confidential and
                is used exclusively for providing our services.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                If you have any questions about our privacy practices, please contact us:
              </p>
              <p className="text-rose-gold font-semibold mt-2">📞 9384459938</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
