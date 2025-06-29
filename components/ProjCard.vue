<template>
    <div class="container border-3  rounded-4xl   px-3 py-3  "
    style="">
        <div class=" border-b   font-bold sm:text-lg mb-2  pb-4  sm:h-[85px] lg:h-[60px]">
            <h1>{{ title }}</h1>
        </div>
        <div class="border-b font-normal pb-4 sm:pb-0 sm:py-2 sm:text-[17px] mb-3 sm:h-[240px] md:max-h-[170px]">
            <p>{{description}}</p>
        </div>
        <div>
            <h2 class="font-bold">Click here to view report</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    description: string
}>()
</script>


<style scoped>
.curved-container {
  width: 350px;
  padding: 24px;
 background-color: white;
  border: 2px solid #222;
  clip-path: path('M 0,0 L 500,0 Q 308,262 500,500 L 0,500 L 0,0 Z');
 
  border-radius: 0px 80px 80px 0;
  font-family: sans-serif;
}
</style>