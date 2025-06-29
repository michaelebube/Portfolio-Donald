<template>
    <a :href="reportUrl" 
       class="block relative border-b-2 border-t-2 border-l-2 border-[#222] border-r-0 rounded-[22px] p-[22px] pr-[30px] no-underline text-[#222] overflow-hidden transition-all duration-200 hover:scale-[1.02] focus:scale-[1.02] group" 
       tabindex="0">
      
      <div class="border-b-[1.5px] border-[#222] mb-3 p-2 pr-0 pb-[8px] font-bold text-[1.1rem] leading-[1.3] sm:h-[105px] md:h-[80px]">
        <h1>{{ title }}</h1>
      </div>
      
      <div class="text-base text-[#444] mb-[18px] pb-[5px] border-b border-[#444] sm:h-[220px] md:h-[140px] h-[130px]">
        <p>{{ description }}</p>
      </div>
      
      <div class="flex items-center font-bold text-[1.03rem] gap-2 cursor-pointer">
        <span>Click here to view report</span>
        <span class="text-[1.2em] ml-[2px] transition-transform duration-150 group-hover:translate-x-1 group-focus:translate-x-1">→</span>
      </div>
      
      <svg class="absolute right-0 top-0 h-full w-12 pointer-events-none z-[2]" 
           viewBox="0 0 10 100" 
           preserveAspectRatio="none">
        <path d="M10,2 Q0,50 11,100" fill="none" stroke="#222" stroke-width="0.8"/>
      </svg>
    </a>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  description: string,
  reportUrl?: string
}>()
</script>