<template>
    <div
      class="block md:-mt-10 xl:-mt-10 2xl:-mt-8 relative border-b-2 border-t-2 border-l-2 border-[#222] border-r-2 md:border-r-0 rounded-[22px] p-[22px] pr-[80px] no-underline text-[#222] overflow-hidden transition-all duration-200 group mb-32 md:mb-20 mx-2 md:mx-0 height-3xl:mt-[1%]"
      tabindex="0"
    >
      <div class="grid xl:grid-cols-[250px_1fr] pt-3  lg:gap-6">
        <div class="flex flex-col md:gap-6 text-[#1B263B] relative">
          <!-- Tools Section -->
          <div class="flex-col xl:h-[270px] relative">
            <h1 class="text-xl font-bold mb-4 text-inherit">Tools</h1>
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <p
                  v-for="(tool, index) in tools"
                  :key="index"
                  class="mb-5 text-[16px] text-inherit"
                >
                  {{ tool }}
                </p>
              </div>
            </div>
  
            <!-- Vertical Divider -->
            <div class="hidden xl:block absolute top-[20px] bottom-[20px] -right-[10px] h-[220px] w-px bg-[#222]"></div>
          </div>
  
          <!-- Soft Skills Section -->
          <div class="flex-1 flex flex-col">
            <h1 class="text-xl font-bold mb-4 text-inherit">
              My Top 5 Consistently Demonstrated Soft Skills
            </h1>
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <p
                  v-for="(softSkill, index) in softSkills"
                  :key="index"
                  class="mb-3 text-[16px] text-inherit"
                >
                  {{ softSkill }}
                </p>
              </div>
            </div>
          </div>

          <div class="hidden xl:block absolute  bottom-[15px] -right-[10px] h-[220px] w-px bg-[#222]"></div>
        
        </div>
  
        <!-- Right Column -->
        <div class="text-[#1B263B] xl:-mt-1 xl:px-6 flex flex-col md:gap-6">
          <!-- Core Expertise Section -->
          <div class="flex-1 flex flex-col">
            <h1 class="text-xl font-bold mb-4 text-inherit">Core Domains of Expertise</h1>
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <h1
                  v-for="expertise in coreExpertises"
                  :key="expertise.title"
                  class="font-bold text-[16px] mb-2"
                >
                  {{ expertise.title }}:
                  <span class="font-normal">{{ expertise.description }}</span>
                </h1>
              </div>
            </div>
          </div>
  
          <!-- Certificates Section -->
          <div class="flex-1 flex flex-col">
            <h1 class="text-xl font-bold mb-4 text-inherit xl:w-[200px] mt-1">Data Professional Certificates</h1>
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <h1
                  v-for="certificate in Certificates"
                  :key="certificate.title"
                  class="text-[16px]  mb-2 hover:scale-105 transition-transform duration-200 hover:text-blue-500"
                >
                  <a :href="certificate.url" target="_blank" rel="noopener noreferrer">
                    {{ certificate.title }}
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Curved SVG on Right -->
      <svg
        class="absolute -right-[8px] top-0 h-full w-40 pointer-events-none z-10 hidden md:block"
        viewBox="-30 0 40 100"
        preserveAspectRatio="none"
      >
        <path d="M10,0 Q-30,50 10,100" fill="none" stroke="#222" stroke-width="0.8" />
      </svg>
      <!-- Footer text -->
      
    </div>
    <TheFooter class="mt-4">Skills.Certificates...</TheFooter>
  </template>
  
  <script setup lang="ts">
  const tools = [
    "Google Big Query SQL",
    "Google Looker Studio",
    "Microsoft Excel/Google Sheets",
    "Microsoft Power BI",
    "Microsoft SQL Server"
  ];
  
  const softSkills = [
    "Analytical Thinking",
    "Initiative & Ownership",
    "Curiosity & Growth Mindset",
    "Attention to Detail",
    "Strategic Thinking"
  ];
  
  const coreExpertises = [
    {
      title: "Data Analytics & BI",
      description:
        "Extracting actionable insights from complex datasets to support business growth and operational decisions."
    },
    {
      title: "Financial & Trading Analytics",
      description:
        "Deep dive into trading volumes, customer behavior, and revenue streams for fintech environments."
    },
    {
      title: "Dashboarding & Reporting",
      description:
        "Building intuitive dashboards for executives to track KPIs, campaigns, and revenue performance in real-time."
    },
    {
      title: "Marketing Analytics",
      description:
        "Evaluating campaign effectiveness and user acquisition channels with detailed attribution analysis"
    }
  ];
  
  const Certificates = [{
    title: "Google Data Analytics Professional Certificate",
    url: "https://coursera.org/share/1a5bbcf96e2c478114b0deabf6bf3911"
  },
  {
    title: "Google Business Intelligence Professional Certificate",
    url: "https://coursera.org/share/77ebad7fcf4ab9be292a497c6795f656"
  },
  {
    title: "Google Cloud Data Analytics Professional Certificate",
    url: "https://coursera.org/share/3b6bbdf9f07d7a84d89f677fbd34b0f1"
  }];
  </script>
  