const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t-4 border-gb-red">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gb-blue mb-2">
              Gracie Barra Layton
            </h3>
            <p className="text-muted-foreground">
              Your Path to Strength, Confidence, and Community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gb-blue mb-3 text-lg">📍 Location</h4>
              <p className="text-foreground leading-relaxed">
                70 S Fairfield Rd, Suite 4<br />
                Layton, Utah 84041
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gb-blue mb-3 text-lg">📞 Contact</h4>
              <div className="space-y-2">
                <p>
                  <a href="tel:801-252-6087" className="text-foreground hover:text-gb-red transition-colors font-semibold">
                    801-252-6087
                  </a>
                </p>
                <p>
                  <a href="mailto:steve@gblayton.com" className="text-foreground hover:text-gb-red transition-colors font-semibold">
                    steve@gblayton.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gb-light-blue rounded-lg border-2 border-gb-blue">
              <h4 className="font-bold text-gb-blue mb-3 text-lg">🎉 Free Class</h4>
              <p className="text-foreground leading-relaxed">
                <strong>Family Class</strong><br />
                Saturdays at 10:00 AM<br />
                <span className="text-gb-red font-semibold">No experience needed!</span>
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-muted-foreground text-sm mb-2">
              © 2024 Gracie Barra Layton. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              Official Gracie Barra affiliate • Authentic Brazilian Jiu-Jitsu instruction
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;