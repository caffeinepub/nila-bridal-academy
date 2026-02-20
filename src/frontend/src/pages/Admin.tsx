import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lock, AlertTriangle, Users, BookOpen, Award, Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Admin() {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === 'NILA') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect PIN. Access denied.');
      setPin('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background py-20">
        <div className="container max-w-md">
          <Card className="border-rose-gold/20 shadow-xl">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-rose-gold/10 flex items-center justify-center">
                  <Lock className="h-8 w-8 text-rose-gold" />
                </div>
              </div>
              <CardTitle className="font-serif text-3xl">Admin Access</CardTitle>
              <CardDescription>
                This page is restricted for internal management use only.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert variant="destructive" className="mb-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Restricted Area</AlertTitle>
                <AlertDescription>
                  ⚠ This page is not accessible to public users. PIN authentication required.
                </AlertDescription>
              </Alert>

              <form onSubmit={handlePinSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pin">Enter PIN</Label>
                  <Input
                    id="pin"
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Enter PIN"
                    className="text-center text-2xl tracking-widest"
                    maxLength={10}
                  />
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button
                  type="submit"
                  className="w-full bg-rose-gold hover:bg-rose-gold/90"
                  size="lg"
                >
                  Access Admin Panel
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-rose-gold/10 flex items-center justify-center">
              <Settings className="h-8 w-8 text-rose-gold" />
            </div>
          </div>
          <Badge variant="outline" className="border-rose-gold text-rose-gold">
            Internal Management
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Internal management operations for Nila Bridal Academy
          </p>
        </div>

        <Alert className="mb-8 border-rose-gold/20 bg-rose-gold/5">
          <AlertTriangle className="h-4 w-4 text-rose-gold" />
          <AlertTitle className="text-rose-gold">Restricted Access</AlertTitle>
          <AlertDescription>
            This page is for internal management use only and is not accessible to public users.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="students" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="students">Student Records</TabsTrigger>
            <TabsTrigger value="batches">Batch Details</TabsTrigger>
            <TabsTrigger value="certificates">Certifications</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
          </TabsList>

          <TabsContent value="students" className="space-y-4">
            <Card className="border-rose-gold/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-rose-gold" />
                  <CardTitle>Student Records Management</CardTitle>
                </div>
                <CardDescription>
                  View and manage student enrollment, attendance, and progress tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-bold text-rose-gold">0</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium">Active Enrollments</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-bold text-rose-gold">0</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium">Completed</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-bold text-rose-gold">0</p>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-sm text-muted-foreground text-center py-8">
                    Student records and enrollment data will be displayed here.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="batches" className="space-y-4">
            <Card className="border-rose-gold/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-rose-gold" />
                  <CardTitle>Batch Details & Scheduling</CardTitle>
                </div>
                <CardDescription>
                  Manage training batches, schedules, and class assignments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium">Active Batches</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-bold text-rose-gold">0</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium">Upcoming Batches</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-bold text-rose-gold">0</p>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-sm text-muted-foreground text-center py-8">
                    Batch scheduling and management information will be displayed here.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-4">
            <Card className="border-rose-gold/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-rose-gold" />
                  <CardTitle>ISO Certification Tracking</CardTitle>
                </div>
                <CardDescription>
                  Track and manage ISO certificate issuance and student completion status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium">Certificates Issued</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-bold text-rose-gold">0</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium">Pending Assessments</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-bold text-rose-gold">0</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-bold text-rose-gold">0%</p>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-sm text-muted-foreground text-center py-8">
                    Certification tracking and completion records will be displayed here.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="operations" className="space-y-4">
            <Card className="border-rose-gold/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-rose-gold" />
                  <CardTitle>Management Operations</CardTitle>
                </div>
                <CardDescription>
                  Internal management tools and administrative functions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <Card className="bg-muted/50">
                      <CardHeader>
                        <CardTitle className="text-base">Application Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Review and process student applications and enrollment requests
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader>
                        <CardTitle className="text-base">Attendance Tracking</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Monitor student attendance and discipline records
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader>
                        <CardTitle className="text-base">Service Bookings</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Manage bridal makeup service bookings and scheduling
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Management operations and administrative tools will be available here.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <Button
            variant="outline"
            onClick={() => {
              setIsAuthenticated(false);
              setPin('');
            }}
            className="border-rose-gold text-rose-gold hover:bg-rose-gold/10"
          >
            <Lock className="h-4 w-4 mr-2" />
            Lock Admin Panel
          </Button>
        </div>
      </div>
    </div>
  );
}
