// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of problems I am working on and thinking about to make programming less hard.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-papers",
          title: "Papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/papers/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-presented-our-work-on-contextualized-programming-language-documentation-at-spash-2022",
          title: 'I presented our work on contextualized programming language documentation at SPASH 2022!',
          description: "",
          section: "News",},{id: "news-i-passed-my-phd-qualifying-evaluation",
          title: 'I passed my PhD qualifying evaluation!',
          description: "",
          section: "News",},{id: "news-i-won-second-place-at-the-ecoop-issta-student-research-competition-on-our-work-using-contexualized-explanations-to-teach-a-new-programming-language-and-paradigm-in-a-classroom",
          title: 'I won second place at the ECOOP/ISSTA student research competition on our work...',
          description: "",
          section: "News",},{id: "news-we-were-selected-for-a-best-paper-award-for-our-oopsla-paper-on-live-pattern-matching-with-typed-holes",
          title: 'We were selected for a best paper award for our OOPSLA paper on...',
          description: "",
          section: "News",},{id: "news-ben-presented-our-work-on-identifying-and-suppressing-equivalent-mutatns-for-java-programs-at-issta-2024",
          title: 'Ben presented our work on Identifying and Suppressing Equivalent Mutatns for Java Programs...',
          description: "",
          section: "News",},{id: "news-our-work-on-evaluating-the-impact-of-scaffolding-and-visualizations-for-mutation-testing-exercises-in-software-engineering-education-has-been-accepted-to-the-software-engineering-education-track-for-fse-2025",
          title: 'Our work on evaluating the impact of scaffolding and visualizations for mutation testing...',
          description: "",
          section: "News",},{id: "projects-ai-assisted-programming",
          title: 'AI Assisted Programming',
          description: "Because standard programming language interfaces are hard.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai_assisted_programming.html";
            },},{id: "projects-code-tours",
          title: 'Code Tours',
          description: "Because understanding a code change is hard.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cod_tours.html";
            },},{id: "projects-hazel-tutor",
          title: 'Hazel Tutor',
          description: "Because learning a new programming language is hard.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hazel_tutor.html";
            },},{id: "projects-mutant-explanations",
          title: 'Mutant Explanations',
          description: "Because understanding even a small program change is hard.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mutantion_testing.html";
            },},{id: "projects-pull-request-decomposition",
          title: 'Pull Request Decomposition',
          description: "Because reviewing pull requests is hard.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pull_request_decomp.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%6B%70%6F%74%74%65%72@%63%73.%77%61%73%68%69%6E%67%74%6F%6E.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/hannahpotter", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hannah-potter-422443116", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-8502-1657", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
