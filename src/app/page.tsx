import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  // Feature cards data
  const features = [
    {
      title: "Attendance Management",
      description: "Track employee attendance with ease. Generate reports and monitor trends.",
      icon: "📊"
    },
    {
      title: "Branches",
      description: "Manage multiple branches from a single dashboard. Coordinate operations efficiently.",
      icon: "🏢"
    },
    {
      title: "Departments",
      description: "Organize your workforce by departments. Streamline communication and workflows.",
      icon: "👥"
    },
    {
      title: "Employee Management",
      description: "Comprehensive employee profiles with performance tracking and documentation.",
      icon: "👤"
    },
    {
      title: "Leave Management",
      description: "Simplify leave requests, approvals, and balance tracking for your entire organization.",
      icon: "📅"
    }
  ];

  // Placeholder blog posts (to be replaced with actual LinkedIn content)
  const blogPosts = [
    {
      title: "Revolutionizing Workforce Management",
      excerpt: "How modern enterprises are transforming their HR operations with automation.",
      date: "March 1, 2025"
    },
    {
      title: "The Future of Employee Engagement",
      excerpt: "Discover how technology is reshaping the way organizations connect with their workforce.",
      date: "February 15, 2025"
    },
    {
      title: "Streamlining Leave Management",
      excerpt: "Best practices for implementing an efficient leave management system in your organization.",
      date: "January 28, 2025"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full glass">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">Staffstream</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#features" className="text-foreground/80 hover:text-primary transition-colors">Features</Link>
            <Link href="#blogs" className="text-foreground/80 hover:text-primary transition-colors">Blogs</Link>
            <Link href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link>
          </nav>
          <Button className="frosted-purple">Get Started</Button>
        </div>
        <div className="absolute inset-0 -z-10 opacity-0 transition-opacity" data-scroll data-scroll-class="opacity-100 purple-glow"></div>
      </header>

      {/* Hero Section */}
      <section className="h-screen relative py-100 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(138,43,226,0.2),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,0,255,0.2),transparent_40%)]"></div>
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 metal-text">
            Enterprise Workflow Automation Platform
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mb-10">
            Streamline your business operations with our comprehensive suite of management tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="frosted-purple text-lg px-8 py-6">
              Request Demo
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 frosted-purple">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 metal-text">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass glass-hover purple-glow border-border/50 overflow-hidden">
                <CardHeader>
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl metal-text">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 metal-text">
            Latest Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="glass glass-hover magenta-glow border-border/50 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl metal-text">{post.title}</CardTitle>
                  <CardDescription className="text-foreground/60">{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="frosted-purple p-0">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-foreground/70 mb-4">Visit our LinkedIn page for more articles and updates</p>
            <Button variant="outline" className="frosted-purple">
              <Link href="https://www.linkedin.com/company/kartavyatech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 metal-text">
            Get In Touch
          </h2>
          <div className="glass purple-glow max-w-3xl mx-auto p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold metal-text mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <a href="mailto:dharam@kartavyatech.com" className="text-foreground/80 hover:text-accent">dharam@kartavyatech.com</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <a href="tel:+919620594287" className="text-foreground/80 hover:text-accent">+91-9620594287</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <a href="https://www.linkedin.com/company/kartavyatech" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-accent">linkedin.com/company/kartavyatech</a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold metal-text mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full p-2 rounded-md bg-background/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div>
                    <input type="email" placeholder="Your Email" className="w-full p-2 rounded-md bg-background/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div>
                    <textarea placeholder="Your Message" rows={4} className="w-full p-2 rounded-md bg-background/50 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50"></textarea>
                  </div>
                  <Button className="w-full frosted-purple">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 glass">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">Staffstream</span>
              <p className="text-foreground/60 mt-2">Enterprise workflow automation platform</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#features" className="text-foreground/80 hover:text-primary transition-colors">Features</Link>
              <Link href="#blogs" className="text-foreground/80 hover:text-primary transition-colors">Blogs</Link>
              <Link href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-foreground/60">
            <p>&copy; {new Date().getFullYear()} Staffstream. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
