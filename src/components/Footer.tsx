const Footer = () => {
  return (
    <footer className="bg-[#73E073]">
      <div className="bg-foreground rounded-t-[32px] flex flex-col items-center py-10 gap-2.5 dark:bg-background max-md:px-6 max-md:gap-16">
        <div className="container flex flex-col gap-8 min-h-[240px] md:flex-row md:justify-between max-md:gap-9">
          <div className="flex flex-col gap-4 max-md:items-start">
            <div className="h-25 max-md:h-12">
              <div className="flex items-center justify-center text-white text-2xl font-bold">
                PinSpec
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-2">
            <div className="flex flex-col gap-4 w-[80px]">
              <h3 className="font-medium text-white">Product</h3>
              <a href="#features" className="text-sm text-gray-400 hover:text-primary">Features</a>
              <a href="#faq" className="text-sm text-gray-400 hover:text-primary">FAQ</a>
              <a href="#" className="text-sm text-gray-400 hover:text-primary">Pricing</a>
            </div>
            <div className="flex flex-col gap-2 w-[116px]">
              <h3 className="font-medium text-white">Resources</h3>
              <a href="#" className="text-sm text-gray-400 hover:text-primary">Guides & tutorial</a>
              <a href="#" className="text-sm text-gray-400 hover:text-primary">Support</a>
              <a href="#" className="text-sm text-gray-400 hover:text-primary">Blog</a>
            </div>
          </div>
        </div>
        
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between max-md:flex-col-reverse">
          <p className="flex-1 text-sm text-gray-400 max-md:text-center">
            © PinSpec 2025. All Rights Reserved
          </p>
          
          <div className="flex-1 flex gap-4 justify-center">
            <a href="#" className="text-sm text-gray-400 hover:text-primary">Terms & Conditions</a>
            <a href="#" className="text-sm text-gray-400 hover:text-primary">Privacy Policy</a>
          </div>
          
          <div className="flex-1 flex gap-3 justify-end max-md:justify-center">
            <a href="#" className="text-sm text-gray-400 hover:text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.641 5H19.095L13.735 10.93L20.041 19H15.103L11.236 14.106L6.81102 19H4.35602L10.09 12.657L4.04102 5H9.10302L12.599 9.474L16.641 5Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.317 4.369c-1.02-.47-2.135-.82-3.298-1.004.003.02.007.041.01.061a12.9 12.9 0 0 1 .814 1.486 17.568 17.568 0 0 0-5.298 0 12.9 12.9 0 0 1 .813-1.486c.003-.02.007-.041.01-.061-1.163.184-2.277.534-3.297 1.004C1.668 9.074.358 13.587 1.2 17.993c.001.006.002.012.004.018a18.614 18.614 0 0 0 5.593 2.83.05.05 0 0 0 .054-.019c.42-.569.794-1.17 1.119-1.804a.05.05 0 0 0-.027-.069 12.285 12.285 0 0 1-1.756-.837.05.05 0 0 1-.024-.042.05.05 0 0 1 .02-.042c.118-.088.236-.18.348-.272a.048.048 0 0 1 .051-.007c3.681 1.681 7.672 1.681 11.314 0a.048.048 0 0 1 .052.006c.112.093.23.185.349.273a.05.05 0 0 1-.003.084 11.538 11.538 0 0 1-1.757.838.05.05 0 0 0-.026.069c.332.634.706 1.235 1.118 1.804a.05.05 0 0 0 .054.019 18.573 18.573 0 0 0 5.598-2.83.05.05 0 0 0 .004-.019c1.007-5.093-.168-9.518-2.153-13.461a.04.04 0 0 0-.021-.018z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;