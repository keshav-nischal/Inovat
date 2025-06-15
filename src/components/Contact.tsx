
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { InlineWidget } from 'react-calendly';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  
  // return (
  //   <section id="contact" className="py-20 md:py-32 relative bg-gradient-to-br from-[#000000] via-[#000000] to-[#111827]">
      
  //     <div className="container mx-auto px-4 md:px-8">
  //       <div className="max-w-6xl mx-auto">
  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
  //           <div>
  //             <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Talk</h2>
  //             <p className="text-lg md:text-xl mb-8 max-w-md">
  //               Interested in working together? Fill out the form and we'll be in touch soon.
  //             </p>
              
  //             <div className="space-y-6">
  //               <div>
  //                 <h3 className="text-xl font-medium mb-2">Email</h3>
  //                 <a href="mailto:hello@outils.studio" className="arrow-link">hello@outils.studio</a>
  //               </div>
                
  //               <div>
  //                 <h3 className="text-xl font-medium mb-2">Phone</h3>
  //                 <a href="tel:+11234567890" className="arrow-link">+1 (123) 456-7890</a>
  //               </div>
                
  //               <div>
  //                 <h3 className="text-xl font-medium mb-2">Location</h3>
  //                 <p>New York City, NY</p>
  //               </div>
  //             </div>
  //           </div>
            
  //           <div>
  //             <form onSubmit={handleSubmit} className="space-y-6">
  //               <div>
  //                 <label htmlFor="name" className="block mb-2 font-medium">
  //                   Name
  //                 </label>
  //                 <Input
  //                   id="name"
  //                   name="name"
  //                   value={formData.name}
  //                   onChange={handleChange}
  //                   placeholder="Your name"
  //                   required
  //                   className="w-full p-4"
  //                 />
  //               </div>
                
  //               <div>
  //                 <label htmlFor="email" className="block mb-2 font-medium">
  //                   Email
  //                 </label>
  //                 <Input
  //                   id="email"
  //                   name="email"
  //                   type="email"
  //                   value={formData.email}
  //                   onChange={handleChange}
  //                   placeholder="Your email address"
  //                   required
  //                   className="w-full p-4"
  //                 />
  //               </div>
                
  //               <div>
  //                 <label htmlFor="company" className="block mb-2 font-medium">
  //                   Company (optional)
  //                 </label>
  //                 <Input
  //                   id="company"
  //                   name="company"
  //                   value={formData.company}
  //                   onChange={handleChange}
  //                   placeholder="Your company name"
  //                   className="w-full p-4"
  //                 />
  //               </div>
                
  //               <div>
  //                 <label htmlFor="message" className="block mb-2 font-medium">
  //                   Message
  //                 </label>
  //                 <Textarea
  //                   id="message"
  //                   name="message"
  //                   value={formData.message}
  //                   onChange={handleChange}
  //                   placeholder="Tell us about your project"
  //                   required
  //                   className="w-full p-4 min-h-[120px]"
  //                 />
  //               </div>
                
  //               <Button 
  //                 type="submit" 
  //                 className="w-full py-6 text-lg"
  //                 disabled={isSubmitting}
  //               >
  //                 {isSubmitting ? 'Sending...' : 'Send Message'}
  //               </Button>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
  return(
    <>
            <InlineWidget url="https://calendly.com/keshavnischal/30min" />

    </>
  )
};

export default Contact;
