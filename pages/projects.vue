<template>
    <div class="grid grid-cols-1 
    sm:grid-cols-2 xl:grid-cols-3 gap-8   xl:mb-16 lg:-mt-[3%] xl:-mt-[1%] mb-36 md:mb-10 lg:mb-0 ">
        <div v-for="proj in projects" >
        <ProjCard :title="proj.title" :description="proj.description" />
    </div>
      <!-- Footer text -->
      <TheFooter>Projects...</TheFooter>
    </div>
    
</template>

<script setup lang="ts">
const projects = [ {
    title: "Navigating Nigeria's Car Market: A Data Driven Analysis",
    description: "The purpose of the Nigeria Cars Analysis Report is to provide insights into the Nigerian car market and help stakeholders make informed decisions based on the data analysis."
},
{
    title: "Covid-19 Case Study – Africa Edition" ,
    description: "This case study explores which African countries managed the pandemic well and which struggled, to highlight gaps in resources and preparedness."
},
{
    title: "AirBnB Case Study for Real Estate Zone",
    description: "Real Estate Zone is expanding from Nigeria to Canada. This project offers insights to guide the CEO’s expansion decisions."
},
{
    title: "Health-Substance-Abuse-Analysis",
    description: "This analysis aims at providing insights on the substances that are most consumed by patients, average recovery rate and how best to help these individuals (patients) to recover."
},
{
    title: "Plato’s Pizza Place Report",
    description: "Analyzed one year of Plato's Pizza sales to identify best-selling pizzas and uncover opportunities to boost future sales."
},
{
    title: "Forbes World's Billionaires List 2022",
    description: "Analyzed Forbes 2022 Billionaires List dataset (provided by Onyx) to uncover key insights for business analysis."
},
]
</script>