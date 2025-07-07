import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Telephony AI',
    description: 
      `Telephony AI is an AI-powered interface that transforms human-AI interaction through seamless voice and visual communication. It integrates real-time audio/video streaming with Google's Gemini model, enabling natural conversations with AI. Whether you want to have a voice chat, share your screen, or use your camera for visual context, just speak naturally with VoiceMode — no text typing needed, no technical complexity.`,
    techStack: [
      'Python',
      'Google Gemini API',
      'OpenCV',
      'PyAudio',
      'PIL (Pillow)',
      'WASAPI (Windows Audio)',
      'AsyncIO',
      'WebSocket',
      'Base64',
      'Google genai Client'
    ],
    date: '2025',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/DharanesshMD/Telephony-AI',
      },
      // {
      //   name: 'Launch Video',
      //   url: 'https://www.youtube.com/watch?v=4QUE2KgKDUw',
      // },
      // {
      //   name: 'X',
      //   url: 'https://x.com/chainSynto',
      // },
      // {
      //   name: 'Technical Video',
      //   url: 'https://www.youtube.com/watch?v=1CjBLKPUwtA&feature=youtu.be',
      // },
      // {
      //   name: 'Pitch Deck',
      //   url: 'https://drive.google.com/file/d/1B3m44mEgv81rJHfjNfTKi147yX4raQed/view?usp=sharing',
      // },
      // {
      //   name: 'Usage tutorial',
      //   url: 'https://www.youtube.com/watch?v=PRu1cfvT2bA',
      // }
    ],
    images: [
      {
        src: '/tele1.png',
        alt: 'Voice model',
      },
      {
        src: '/tele2.png',
        alt: 'Initial commands',
      },
      {
        src: '/tele3.png',
        alt: 'Audio routing',
      },
      {
        src: '/tele4.png',
        alt: 'List audio devices',
      },
      {
        src: '/tele5.png',
        alt: 'Final command and result',
      },
      {
        src: '/tele6.png',
        alt: 'Image',
      },
    ],
  },
  {
    title: 'Dataset Download Automation',
    description:
      "Dataset Download Automation is an AI-powered solution that streamlines data acquisition through automated web interaction. It integrates real-time web navigation with the Mistral API, enabling seamless and efficient dataset downloads. Whether you need to bypass CAPTCHAs, fill forms, or click download buttons, just run the script with Python — no manual intervention needed, no technical complexity, and all data is retrieved effortlessly.",
    techStack: ['Python',
'Selenium',
'webdriver-manager',
'requests',
'python-dotenv',
'Mistral API'],
    date: '2025',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/DharanesshMD/Dataset_download_automation',
      },
    ],
    images: [
      {
        src: '/data1.png',
        alt: 'Indian Government Dataset Webpage',
      },
      {
        src: '/data2.png',
        alt: 'Nvidia NIM Mistral API',
      },
      {
        src: '/data3.gif',
        alt: 'Task',
      },
    ],
  },
  {
    title: 'Anemia Curability Prediction',
    description:
      'Curability Prediction Models for Anemia is a machine learning-driven solution that automates the end-to-end process of medical data simulation, model training, and prediction analysis. It leverages synthetic data generation, advanced preprocessing, and machine learning pipelines to deliver accurate anemia curability predictions. With a user-friendly GUI built on Tkinter, you can visualize dataset-wide results in just a click—no manual data wrangling, no complex setup, and all insights are generated seamlessly.',
    techStack: ['Python', 'scikit-learn', 'pandas', 'numpy', 'joblib', 'tkinter', 'matplotlib'],
    date: '2022',
    links: [
      {
        name: 'github',
        url: 'https://github.com/DharanesshMD/Curability-Prediction-Models-For-Anemia-Using-Machine-Learning',
      },
    ],
    images: [
      {
        src: '/ane1.png',
        alt: 'Dataset',
      },
      {
        src: '/ane2.png',
        alt: 'Supervised ML models',
      },
      {
        src: '/ane3.png',
        alt: 'Result',
      },
      {
        src: '/ane4.png',
        alt: 'Outcome',
      },
    ],
  },
  {
    title: 'Weather Forecast App',
    description:
      "Weather Forecast App is a modern web application that transforms user interaction through seamless real-time weather and forecast data. It integrates location-based services with a responsive design, enabling intuitive access to weather information. Whether you want to search by city, view detailed conditions, or check a 5-day forecast, just interact naturally with the interface — no complex setup needed, no technical complexity, and all data is retrieved effortlessly.",
    techStack: [
      'Next.js',
'TypeScript',
'React',
'Zustand',
'Tailwind CSS',
'Jest',
'ESLint'
    ],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://weather-forecast-app-dharanesshmds-projects.vercel.app/',
      },
      {
        name: 'github',
        url: 'https://github.com/DharanesshMD/weather-forecast-app',
      },
    ],
    images: [
      {
        src: '/weather1.png',
        alt: 'Landing Page',
      },
      {
        src: '/weather2.png',
        alt: 'Landing Page with map',
      },
      {
        src: '/weather3.png',
        alt: 'Search option',
      },
    ],
  },
  {
    title: 'Unit Converter',
    description:
      "Unit Converter is an intuitive web application that simplifies the process of converting between various units with ease and precision. Built with a modern React and Next.js stack, it offers a seamless user experience for quick and accurate conversions. Whether you’re switching between metric and imperial, or handling more specialized units, just enter your values and select the units — no manual calculations, no confusion, and all results are delivered instantly.",
    techStack: [
      'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'ESLint', 'PostCSS' 
    ],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://unit-converter-dharanesshmds-projects.vercel.app/',
      },
      {
        name: 'github',
        url: 'https://github.com/DharanesshMD/unit-converter',
      },
    ],
    images: [
      {
        src: '/unit1.png',
        alt: 'Unit Converter landing page',
      },
    ],
  },
  {
    title: 'Old Portfolio',
    description:
      "This Developer Portfolio is a modern, full-stack web application designed to showcase professional skills and projects. It's built with Next.js and React, leveraging server-side rendering for optimal performance and SEO. The project emphasizes code quality through ESLint and accessibility with axe-core integration. This portfolio provides a robust, performant, and accessible platform for presenting a developer's work, ensuring a seamless user experience for visitors and potential employers alike.",
    techStack: ['Next.js', 'React', 'TypeScript', 'Axios', 'ESLint', 'axe-core'],
    date: '2024',
    links: [
      {
        name: 'website',
        url: 'https://dev-dharanesshmds-projects.vercel.app/',
      },
      {
        name: 'github',
        url: 'https://github.com/DharanesshMD/old-portfolio',
      },
    ],
    images: [
      {
        src: '/old1.png',
        alt: 'Old Portfolio About section',
      },
      {
        src: '/old2.png',
        alt: 'Experience section',
      },
      {
        src: '/old3.png',
        alt: 'Skills and Projects section',
      },
      {
        src: '/old4.png',
        alt: 'Education and Contact section',
      },

    ],
  },
  // {
  //   title: 'Minishell',
  //   description:
  //     "Minishell is a project that aims to create a simple shell. It's a great introduction to process creation and management in C, offering fundamental Unix command-line functionality. This was a very challenging project, but I learned a lot from it.",
  //   techStack: ['C', 'Unix', 'Bash'],
  //   date: '2023',
  //   links: [
  //     {
  //       name: 'GitHub',
  //       url: '',
  //     },
  //   ],
  //   images: [
  //     {
  //       src: '/minishell1.png',
  //       alt: 'Minishell landing page',
  //     }
  //   ],
  // },
  // {
  //   title: 'YouBot',
  //   description:
  //     'YouBot is a Python Bot that Scrapes Videos from Pexels, adds a random song from a Songs Folder, then auto-uploads the videos to your YouTube Channel for continuous content generation.',
  //   techStack: ['Python', 'YouTube API', 'Pexels API'],
  //   date: '2022',
  //   links: [
  //     {
  //       name: "YouTube Video",
  //       url: ""
  //     },
  //     {
  //       name: 'GitHub',
  //       url: '',
  //     }
  //   ],
  //   images: [
  //     {
  //       src: '/youbot1.jpg',
  //       alt: 'Youbot landing page',
  //     },
  //     {
  //       src: '/youbot2.png',
  //       alt: 'Youbot chatbot',
  //     },
  //   ],
  // },
  // {
  //   title: 'Old Portfolio',
  //   description:
  //     'My previous traditional portfolio built with vanilla HTML, CSS and JS with GSAP animations for a smooth and interactive user experience.',
  //   techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
  //   date: '2022',
  //   links: [
  //     {
  //       name: 'Website',
  //       url: '/',
  //     },
  //     {
  //       name: 'GitHub',
  //       url: '',
  //     },
  //   ],
  //   images: [
  //     {
  //       src: '/oldport1.png',
  //       alt: 'Old Portfolio landing page',
  //     },
  //     {
  //       src: '/oldport2.png',
  //       alt: 'Old Portfolio projects',
  //     }
  //   ],
  // },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'AI SaaS Project',
    title: 'Telephony AI',
    src: '/telepreview.png',
    content: <ProjectContent project={{ title: 'Telephony AI' }} />,
  },
  {
    category: 'Web Automation',
    title: 'Dataset Download Automation',
    src: '/datapreview.png',
    content: <ProjectContent project={{ title: 'Dataset Download Automation' }} />,
  },
  {
    category: 'Machine Learning',
    title: 'Anemia Curability Prediction',
    src: '/anepreview.png',
    content: <ProjectContent project={{ title: 'Anemia Curability Prediction' }} />,
  },
  {
    category: 'Web Application',
    title: 'Weather Forecast App',
    src: '/weatherpreview.png',
    content: <ProjectContent project={{ title: 'Weather Forecast App' }} />,
  },
  {
    category: 'Web Application',
    title: 'Unit Converter',
    src: '/unitpreview.png',
    content: <ProjectContent project={{ title: 'Unit Converter' }} />,
  },
  {
    category: 'Web Application',
    title: 'Old Portfolio',
    src: '/oldportfoliopreview.png',
    content: <ProjectContent project={{ title: 'Old Portfolio' }} />,
  },
  // {
  //   category: '42 Project',
  //   title: 'Minishell',
  //   src: '/minishellpreview.png',
  //   content: <ProjectContent project={{ title: 'Minishell' }} />,
  // },
  // {
  //   category: 'Automation',
  //   title: 'YouBot',
  //   src: '/youbotpreview.png',
  //   content: <ProjectContent project={{ title: 'YouBot' }} />,
  // },
  // {
  //   category: 'Web Development',
  //   title: 'Old Portfolio',
  //   src: '/oldportfoliopreview.png',
  //   content: <ProjectContent project={{ title: 'Old Portfolio' }} />,
  // },
];
