const Footer = () => {
  return (
    <footer className="bg-primary-deep py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-6">
            Gracie Barra Layton
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-8">
            <div className="text-center">
              <h4 className="font-semibold text-primary-foreground mb-2">Location</h4>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                📍 70 S Fairfield Rd, Ste 4<br />
                Layton, Utah 84041
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold text-primary-foreground mb-2">Contact</h4>
              <div className="text-primary-foreground/80 text-sm space-y-1">
                <p>
                  <a href="tel:801-252-6087" className="hover:text-gold transition-colors">
                    📞 801-252-6087
                  </a>
                </p>
                <p>
                  <a href="mailto:steve@gblayton.com" className="hover:text-gold transition-colors">
                    ✉️ steve@gblayton.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold text-primary-foreground mb-2">Free Class</h4>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                🎉 Family Class<br />
                Saturdays at 10AM<br />
                <span className="text-gold">No experience needed!</span>
              </p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Gracie Barra Layton. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-xs mt-2">
              Transform your life through the art of Jiu-Jitsu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;