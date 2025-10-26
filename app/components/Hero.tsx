import { Link } from "react-router";
import ProfilePhoto from "../assets/images/maz_profile_photo.jpeg";
import MountainPhoto from "../assets/images/maz_profile_photo_mountains.jpeg";

const Hero = () => {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gray-900 text-light-gray transition-colors duration-300">
      <div className="w-full max-w-5xl">
        {/* Top: Text */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-xl font-bold mb-2">Hi, I'm Marianna Mirabile</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-light-yellow">
            FRONTEND DEVELOPER
          </h1>
        </div>

        {/* Bottom: Photo + Paragraphs */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left: Photo */}
          <div className="shrink-0">
            {/* Flip-card container */}
            <div className="group relative w-48 h-48 md:w-56 md:h-56 rounded-full ring-4 ring-accent-green shadow-lg">
              <div className="absolute inset-0 perspective">
                <div className="relative w-full h-full transition-transform duration-800 ease-[cubic-bezier(.2,.8,.2,1)] transform-gpu will-change-transform transform-style-preserve-3d group-hover:rotate-y-180">
                  <img
                    src={ProfilePhoto}
                    alt="Marianna Mirabile"
                    className="absolute inset-0 w-full h-full rounded-full object-cover backface-hidden"
                  />
                  <img
                    src={MountainPhoto}
                    alt="Marianna in the mountains"
                    className="absolute inset-0 w-full h-full rounded-full object-cover rotate-y-180 backface-hidden"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="text-justify md:text-left space-y-4 text-medium-gray text-lg leading-relaxed">
            <p>
              I'm a Frontend Developer with hands-on experience building
              projects while learning React and modern web tools.
            </p>
            <p>
              I love solving challenges, exploring new technologies, and turning
              ideas into functional, meaningful websites.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <Link
                to="/projects"
                className="bg-secondary-green text-primary-blue-dark px-8 py-4 rounded-lg hover:bg-accent-green transition"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="border border-secondary-green text-light-gray px-8 py-4 rounded-lg hover:bg-accent-green hover:text-primary-blue-dark transition"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
