<template>
    <div class=" pb-24 sm:pt-5 mt-35  md:pt-10   xl:-mt-[-2%] 2xl:-mt-[2%] height-3xl:mt-[4%] text-[#1B263B] text-wrap 3xl:text-3xl xl:text-[17px] lg:text-lg md:text-lg sm:text-sm px-2 md:px-0">
        <!-- Text content with right padding to avoid image overlap -->
        <div class="   xl:mr-54">
            <p class="xl:mb-8 lg:mb-6  mb-4 tracking-normal"> As I was saying, I'm <span class="font-bold">Donald Ebube</span>, a Data Analyst who transforms <span class="font-bold">raw data</span> into <span class="font-bold">
                clear, actionable insights.
            </span></p>

            <p class="mb-4 sm:mb-1 lg:mr-8  tracking-normal">  With certifications in <span class="font-bold">
                Google Data Analytics, Google  Business Intelligence,
            </span>  and most recently, the <span class="font-bold">Google Cloud Data Analytics Professional Certificate,</span> I've deepened my expertise in data visualization and dashboard design, skills that have significantly improved the way I communicate insights and track performance at work.</p>

            <p class="mb-4 sm:mb-1 lg:mb-2  tracking-normal">
                I operate at the intersection of <span class="font-bold">analytics, storytelling, and strategy,</span> helping teams make informed decisions through clear, impactful insights. 
            </p>

            <p class="mb-4 sm:mb-2 lg:mb-6  tracking-normal">
                From <span class="font-bold">A/B test evaluation to KPI tracking, customer retention, and churn prediction,</span> I break down complex data into practical solutions that drive action.
            </p>
        </div>

            <div>
                
            <p class="mb-4 sm:mb-2 lg:mb-5 mr-0  tracking-normal">
                My toolkit includes <span class="font-bold">Google BigQuery, Google Looker Studio, Microsoft Power BI, and Google Sheets,</span> tools I use daily to build clean, user-focused dashboards and reports.
            </p>
            <p class="mb-4 sm:mb-2 lg:mb-5 tracking-normal">Thanks to my background in UI/UX, I don't just visualize data, I craft intuitive experiences that make insights easy to understand and act on.</p>

            <p class=" font-bold mb-10 tracking-normal">
                Whether I'm prioritizing data requests, managing recurring reports, or aligning cross-functional needs, I bring structure, clarity, and a calm approach to every task, even under pressure.
            </p>
            </div>
            
      

        <!-- Image positioned absolutely -->
        <div>
            <img 
            ref="profileImage"
                src="../assets/img/Profile-Pic.png" 
             class="absolute top-22 xl:top-36 2xl:top-32 height-3xl:top-[178px] w-16
                -translate-x-1/2 sm:w-28 md:w-auto md:-translate-x-1/2 left-1/2 xl:left-auto
                md:top-28 lg:h-50 lg:w-auto xl:h-66 xl:w-auto md:h-42 md:block xl:translate-x-0
                xl:right-[calc(2rem+60px-1.5ch)]
                opacity-0 transition-opacity duration-300
                " 
                alt="Donald Ebube Profile Picture"
            />
        </div>

        <!-- Footer text -->
       <TheFooter>About me...</TheFooter>
    </div>
</template>

<script setup lang="ts">
const profileImage = useTemplateRef('profileImage')

onMounted(() => {
    
    setTimeout(() => {
        if (profileImage.value) {
            profileImage.value.classList.remove('opacity-0')
            profileImage.value.classList.add('opacity-100')
        }
    }, 400)
})

onBeforeRouteLeave((to, from, next) => {
    if (profileImage.value) {
        profileImage.value.classList.remove('opacity-100')
        profileImage.value.classList.add('opacity-0')
    }
    // Small delay to let image fade out before navigation
    setTimeout(() => {
        next()
    }, 200)
})
</script>