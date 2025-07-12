import { Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Phone } from "lucide-react";
import { cn } from '@/lib/utils';
// import { toast } from "sonner";

export const ContactSection = () =>{

    const handleSubmit =(e) =>{
        e.prevenDefault()

        setTimeout(() =>{

        }, 1500)
    }
    return ( 
    <section 
    id="contact"
    className="py-24 px-4 relative bg-secondary">
        <div className="container mx-auto max-w-5xl">     
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Feel free to reach out. I'm always open to discussing new opportunities.
                </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-12 pt-1">  Contact Information</h3>
                    <div className="space-y-6 pl-17">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail  className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:hello@gmail.com" 
                                className="text-muted-foreground hover:text-primary transition-colors">  
                                    vaishakhkuduvan@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone  className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+918956692081" 
                                className="text-muted-foreground hover:text-primary transition-colors">  
                                    +91 8956692081
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin  className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">  
                                    Pune, Maharashtra, India
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        {/* <h4 className="font-medium mb-4">Connect With Me</h4> */}
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/vaishakh-kuduvan-941475250/" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="#" target="_blank">
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card px-8 pb-8 pt-4 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">
                        Send a message
                    </h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-m font-medium mb-2"> Your Name </label>
                            <input type="text"  
                            id="name"
                            name="name" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Enter Your Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-m font-medium mb-2"> Your Email </label>
                            <input type="text"  
                            id="email" 
                            name="email"
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Enter Your Email"
                            />
                             
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-m font-medium mb-2"> Your Message </label>
                            <textarea   
                            id="message"
                            name="message" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Type your message"
                            />
                             
                        </div>
                        <button type="submit" className= {cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            Send Message
                            <Send  size={15}/>
                        </button>
                    </form>

                </div>
            </div>
        </div>
    </section>);
}