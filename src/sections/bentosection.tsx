import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// --- SVGs Oficiais ---
const SpotifyLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-green-500">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const InstagramLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-pink-500">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-500">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.56 3.285-1.23 3.285-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const bentoItems = [
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: <LinkedInLogo />,
    link: "https://www.linkedin.com/in/bernardo-kirsch",
    bg: "bg-neutral-900/40 hover:bg-neutral-800/60",
    gradient: "group-hover:from-blue-500/20 group-hover:to-transparent"
  },
  {
    id: "instagram",
    title: "Instagram",
    icon: <InstagramLogo />,
    link: "https://www.instagram.com/bekirsch__/",
    bg: "bg-neutral-900/40 hover:bg-neutral-800/60",
    gradient: "group-hover:from-pink-500/20 group-hover:to-transparent"
  },
  {
    id: "github",
    title: "GitHub",
    icon: <GithubLogo />,
    link: "https://github.com/kirschzao", 
    bg: "bg-neutral-900/40 hover:bg-neutral-800/60",
    gradient: "group-hover:from-white/20 group-hover:to-transparent"
  },
  {
    id: "spotify",
    title: "Spotify",
    icon: <SpotifyLogo />,
    link: "https://open.spotify.com/user/sbmito?si=q3KYHDWxQ02mJeB04g8ZGA",
    bg: "bg-neutral-900/40 hover:bg-neutral-800/60",
    gradient: "group-hover:from-green-500/20 group-hover:to-transparent"
  },
];

function BentoSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-24 px-4 md:px-12 flex flex-col items-center justify-center relative z-10 overflow-hidden">
      <div className="w-full max-w-4xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-4 items-center"
        >
          <h2 className="text-5xl md:text-8xl font-bold text-white leading-tight">
            {t('bento.title_part1')}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {t('bento.title_part2')}
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
            {t('bento.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bentoItems.map((item, index) => (
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`
                relative group aspect-square rounded-[1.5rem] border border-white/10 p-6 
                flex items-center justify-center transition-all duration-500
                ${item.bg} backdrop-blur-md shadow-lg overflow-hidden
              `}
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 ${item.gradient}`} />
              <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl">
                {item.icon}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BentoSection;