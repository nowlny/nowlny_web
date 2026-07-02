import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border-subtle bg-bg-surface/50 backdrop-blur-lg pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          <div className="flex flex-col">
            <Link href="/" className="mb-6 inline-block group">
              <Image
                src="/logotransparentDark.png"
                alt="Nowlny Logo"
                width={160}
                height={160}
                className="group-hover:opacity-90 transition-opacity duration-300"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              The ultimate food delivery experience. <br/>
              Fast, fresh, and reliable, bringing the best local flavors directly to your door.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-text-muted hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-muted hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-text-muted hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/faq" className="text-text-muted hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-text-muted hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="text-text-muted hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors"></span>
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Download</h4>
            <ul className="space-y-4">
              <li>
                <Link href="https://apps.apple.com/lb/app/nowlny/id6778863532" className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#222] border border-border-subtle hover:border-primary/50 text-white px-4 py-2 rounded-xl transition-all duration-300 text-sm group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="group-hover:text-primary transition-colors" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.577.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.577.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] text-text-muted">Download on the</span>
                    <span className="font-semibold">App Store</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/" className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#222] border border-border-subtle hover:border-primary/50 text-white px-4 py-2 rounded-xl transition-all duration-300 text-sm group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="group-hover:text-primary transition-colors" viewBox="0 0 16 16">
                    <path d="M15.14 7.636 1.158.33A.954.954 0 0 0 0 1.168v13.665a.954.954 0 0 0 1.158.837l13.982-7.306a.95.95 0 0 0 0-1.688v-.04Zm-13.626 5.34V3.023l6.58 3.513-6.58 3.514Z" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] text-text-muted">GET IT ON</span>
                    <span className="font-semibold">Google Play</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border-subtle gap-4">
          <p className="text-text-muted text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Nowlny. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://www.instagram.com/nowlnylb" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.036 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61589544729149" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
