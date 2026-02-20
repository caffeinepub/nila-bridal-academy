import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function RefundPolicy() {
  const policies = [
    {
      title: 'Free Training Programs',
      description: 'All training programs are completely free. No fees are charged for course enrollment.',
    },
    {
      title: 'Bridal Makeup Services',
      description: 'Advance payments for bridal makeup services are non-refundable.',
    },
    {
      title: 'Rescheduling',
      description: 'Rescheduling is allowed based on availability. Please contact us as early as possible.',
    },
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="border-rose-gold text-rose-gold">
            Legal
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Refund Policy</h1>
          <p className="text-muted-foreground">
            Understanding our payment and refund terms.
          </p>
        </div>

        <Card className="border-rose-gold/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-rose-gold" />
              Payment & Refund Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {policies.map((policy, index) => (
                <div key={index} className="pb-6 border-b border-border last:border-0 last:pb-0">
                  <h3 className="font-semibold text-lg mb-2 text-rose-gold">{policy.title}</h3>
                  <p className="text-muted-foreground">{policy.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                For refund inquiries or rescheduling requests, please contact us:
              </p>
              <p className="text-rose-gold font-semibold mt-2">📞 9384459938</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
