import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Made with <Heart className="text-primary" size={16} fill="currentColor" /> by Sarthakbrata Halder
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
