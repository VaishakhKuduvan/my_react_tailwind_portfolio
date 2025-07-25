import { ArrowUp } from "lucide-react"

export const Footer = () =>{
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col items-center justify-center space-y-4">
            <p className="text-sm text-muted-foreground"> © {new Date().getFullYear()} All rights reserved.</p>

            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ArrowUp />
            </a>
        </footer>
    )
}