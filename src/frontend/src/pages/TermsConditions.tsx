import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

export default function TermsConditions() {
  const terms = [
    '6 Months Course is Completely Free',
    'ISO Certificate issued after successful completion',
    'Attendance and discipline mandatory',
    'No refund policy applicable as course is free',
    'Bridal service bookings require advance confirmation',
    'Travel charges may apply based on location for bridal services',
    'Results may vary based on skin type and conditions',
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="border-rose-gold text-rose-gold">
            Legal
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
          <p className="text-muted-foreground">
            Please read these terms carefully before using our services.
          </p>
        </div>

        <Card className="border-rose-gold/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-rose-gold" />
              Service Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {terms.map((term, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-rose-gold font-bold mt-1">•</span>
                  <span className="text-muted-foreground">{term}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-semibold text-lg mb-4">Course Completion Requirements</h3>
              <p className="text-muted-foreground mb-4">
                To receive the ISO Certificate, students must:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-muted-foreground">• Complete all 6 months of structured training</li>
                <li className="text-muted-foreground">• Maintain required attendance levels</li>
                <li className="text-muted-foreground">• Pass the final assessment</li>
                <li className="text-muted-foreground">• Demonstrate professional standards and discipline</li>
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                For any questions or concerns regarding these terms, please contact us:
              </p>
              <p className="text-rose-gold font-semibold mt-2">📞 9384459938</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
