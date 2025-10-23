import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const registrationSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  department: z.string().min(1, "Please select a department"),
  year: z.string().min(1, "Please select your year"),
  eventCategory: z.string().min(1, "Please select an event category"),
  specificEvent: z.string().trim().min(1, "Please specify the event").max(200, "Event name must be less than 200 characters"),
  message: z.string().trim().max(500, "Message must be less than 500 characters").optional(),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
  } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationForm) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Registration Successful!",
        description: "You have been registered for the event.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <Card className="max-w-md w-full text-center">
          <CardContent className="pt-12 pb-8">
            <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for registering. We'll send you event details via email.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Register for Another Event
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Registration</h1>
            <p className="text-muted-foreground text-lg">
              Fill in the details below to register for an event
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Registration Form</CardTitle>
              <CardDescription>
                Please provide accurate information for event participation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@college.edu"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    placeholder="1234567890"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                {/* Department */}
                <div className="space-y-2">
                  <Label htmlFor="department">Department *</Label>
                  <Select onValueChange={(value) => setValue("department", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-science">Computer Science</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="mechanical">Mechanical</SelectItem>
                      <SelectItem value="civil">Civil</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.department && (
                    <p className="text-sm text-destructive">{errors.department.message}</p>
                  )}
                </div>

                {/* Year */}
                <div className="space-y-2">
                  <Label htmlFor="year">Year of Study *</Label>
                  <Select onValueChange={(value) => setValue("year", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">First Year</SelectItem>
                      <SelectItem value="2">Second Year</SelectItem>
                      <SelectItem value="3">Third Year</SelectItem>
                      <SelectItem value="4">Fourth Year</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.year && (
                    <p className="text-sm text-destructive">{errors.year.message}</p>
                  )}
                </div>

                {/* Event Category */}
                <div className="space-y-2">
                  <Label htmlFor="eventCategory">Event Category *</Label>
                  <Select onValueChange={(value) => setValue("eventCategory", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical</SelectItem>
                      <SelectItem value="cultural">Cultural</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.eventCategory && (
                    <p className="text-sm text-destructive">{errors.eventCategory.message}</p>
                  )}
                </div>

                {/* Specific Event */}
                <div className="space-y-2">
                  <Label htmlFor="specificEvent">Specific Event Name *</Label>
                  <Input
                    id="specificEvent"
                    placeholder="e.g., Tech Hackathon 2024"
                    {...register("specificEvent")}
                  />
                  {errors.specificEvent && (
                    <p className="text-sm text-destructive">{errors.specificEvent.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Any special requirements or questions?"
                    rows={4}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Register Now"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
