import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects =[
    {
        id:1,
        title: 'AgriPrice Prediction System',
        description: "Agrilens is a crop price prediction system built using machine learning, historical price data, and market trends",
        image: "/projects/AgriLens.png",
        tags: ["Machine Learning", "Data Science", "Scikit-learn","Time Series Forecasting"],
        demoUrl: "#",
        githubUrl: "https://github.com/VaishakhKuduvan/Agro_price_prediction",

    },
    {
        id: 2,
        title: 'Real-time Chat Application',
        description: "A responsive chat app built during my internship using HTML, CSS, and JavaScript. It allows real-time messaging with a clean and user-friendly interface.",
        image: "/projects/ChatApp.png",
        tags: ["JavaScript", "HTML/CSS", "Firebase", "Bootstrap"],
        demoUrl: "https://chat-application-ochre-chi.vercel.app/",
        githubUrl: "https://github.com/VaishakhKuduvan/Chat_application",
    },
    {
        id: 3,
        title: 'Personal Portfolio Website',
        description: "A sleek and responsive portfolio website built using React and Tailwind CSS to showcase my skills, projects, and contact info.",
        image: "/projects/Portfolio.png",
        tags: ["React", "Tailwind CSS", "Responsive Design"],
        demoUrl: "https://my-react-tailwind-portfolio-seven.vercel.app/",
        githubUrl: "https://github.com/VaishakhKuduvan/my_react_tailwind_portfolio",
    },
    {
        id: 4,
        title: 'MovieRec System',
        description: "A content-based movie recommender built using Python, TF-IDF, and Cosine Similarity. Deployed with Flask and Render for easy user interaction.",
        image: "/projects/MovieRec.png",
        tags: ["Python", "Machine Learning", "Flask", "Cosine Similarity", "TF-IDF"],
        demoUrl: "#",
        githubUrl: "https://github.com/VaishakhKuduvan/Movie_recommendation_system",
    },
    

];
export const ProjectSection = () =>{
    return <section id ="projects" className ="py-24 px-4 relative">
        <div className =" container mx-auto max-w-5xl">
            <h2 className ="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className ="text-primary">  
                projects
                </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects. Each project was carefully crafter with lots of attention 
                to detail, performance and user experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key)=>(
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                    
                                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6 mx-3">{project.description}</p>
                                <div className="flex  justify-between items-center">
                                    <div className="flex space-x-3 mt-auto">
                                        <a href={project.demoUrl}
                                        target="_blank" 
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={17}/>
                                        </a>
                                        <a href={project.githubUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300 mb">
                                            <Github size={17}/>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                    </div>
                    
                ))}    
            </div>        
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                target="_blank"
                href="https://github.com/VaishakhKuduvan">
                    Check My Github <ArrowRight size={16}/>
                </a>

            </div>

        </div>
    </section>;
}