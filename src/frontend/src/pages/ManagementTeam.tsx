import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function ManagementTeam() {
  const teamMembers = [
    {
      title: 'Founder & Director',
      description: 'Responsible for academy vision, certification, and strategic development.',
      image: '/assets/generated/team-founder.dim_400x400.png',
    },
    {
      title: 'Academic Head',
      description: 'Oversees training curriculum and quality standards.',
      image: '/assets/generated/team-academic.dim_400x400.png',
    },
    {
      title: 'Senior Makeup Trainer',
      description: 'Handles practical bridal makeup training.',
      image: '/assets/generated/team-trainer.dim_400x400.png',
    },
    {
      title: 'Student Coordinator',
      description: 'Manages student enrollment and support.',
      image: '/assets/generated/team-coordinator.dim_400x400.png',
    },
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-rose-gold/10 flex items-center justify-center">
              <Users className="h-8 w-8 text-rose-gold" />
            </div>
          </div>
          <Badge variant="outline" className="border-rose-gold text-rose-gold">
            Leadership
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Our Leadership Team</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nila Bridal Academy operates under a structured and professional management system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-rose-gold/20 hover:border-rose-gold/40 transition-colors">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-rose-gold/20">
                    <img
                      src={member.image}
                      alt={member.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <CardTitle className="text-2xl text-rose-gold">{member.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            For inquiries about our management team, please contact us at{' '}
            <span className="text-rose-gold font-semibold">9384459938</span>
          </p>
        </div>
      </div>
    </div>
  );
}
