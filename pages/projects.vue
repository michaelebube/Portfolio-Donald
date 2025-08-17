<template>
    <div class="grid grid-cols-1 
    sm:grid-cols-2 xl:grid-cols-3 gap-8   xl:mb-16 lg:-mt-[3%] xl:-mt-[1%] height3xl:mt-[4%] mb-36 md:mb-10 lg:mb-0 ">
        <div v-for="proj in projects" >
        <ProjCard :title="proj.title" :description="proj.description" :link="proj.link" />
    </div>
      <!-- Footer text -->
      <TheFooter>Projects...</TheFooter>
    </div>
    
</template>

<script setup lang="ts">
const projects = [ {
    title: "Navigating Nigeria's Car Market: A Data Driven Analysis",
    description: "The purpose of the Nigeria Cars Analysis Report is to provide insights into the Nigerian car market and help stakeholders make informed decisions based on the data analysis.",
    link: "https://github.com/donaldebube/Nigeria-Cars-Dataset-Case-Study-with-Python/wiki/Navigating-Nigeria's-Car-Market:-A-Data-Driven-Analysis"
},
{
    title: "Covid-19 Case Study – Africa Edition" ,
    description: "This case study explores which African countries managed the pandemic well and which struggled, to highlight gaps in resources and preparedness.",
    link: "https://github.com/donaldebube/Covid19-Report-Africa/wiki/Covid-19-Case-Study-%E2%80%93-Africa-Edition"
},
{
    title: "AirBnB Case Study for Real Estate Zone",
    description: "Real Estate Zone is expanding from Nigeria to Canada. This project offers insights to guide the CEO’s expansion decisions.",
    link:"https://www.kaggle.com/code/donaldebube/airbnb-case-study-for-real-estate-zone"
},
{
    title: "Health-Substance-Abuse-Analysis",
    description: "This analysis aims at providing insights on the substances that are most consumed by patients, average recovery rate and how best to help these individuals (patients) to recover.",
    link: "https://github.com/donaldebube/Health-Substance-Abuse-Analysis/wiki/SUBSTANCE-ABUSE-ANALYSIS---Enterprise-DNA"
},
{
    title: "Plato’s Pizza Place Report",
    description: "Analyzed one year of Plato's Pizza sales to identify best-selling pizzas and uncover opportunities to boost future sales.",
    link: "https://github.com/donaldebube/Pizza-Place-Sales-Case-Study/wiki/Plato%E2%80%99s-Pizza-Place-Report-%E2%80%93-Maven-Analytics-Case-Study"
},
{
    title: "Forbes World's Billionaires List 2022",
    description: "Analyzed Forbes 2022 Billionaires List dataset (provided by Onyx) to uncover key insights for business analysis.",
    link: "https://www.kaggle.com/code/donaldebube/forbes-world-s-billionaires-list-2022"
},
]
</script>