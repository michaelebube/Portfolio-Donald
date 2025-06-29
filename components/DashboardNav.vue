<template>
    
    <nav class="max-sm:fixed max-sm:bottom-6  max-sm:right-0 max-sm:w-[90%] max-sm:left-1/2 max-sm:-translate-x-1/2 sm:flex-col sm:flex sm:gap-y-8 bg-[#1B263B] rounded-[70px] justify-center  sm:w-[100px] sm:h-[350px] md:h-[450px] my-auto   ">
        <div class="max-sm:px-6 max-sm:py-8 flex sm:flex-col gap-y-4 max-sm:justify-between">
            <NuxtLink 
                v-for="icon in linkIcons" 
                :to="icon.path" 
                class="group md:p-4 mx-auto flex max-sm:flex-col sm:gap-x-4 sm:gap-y-4 items-center transition-all duration-200 ease-in-out sm:my-3"
            >
                <img 
                    :src="icon.name" 
                    class="w-7 sm:w-9 transition-all duration-200"
                    :class="{ 'brightness-0 invert': isActiveRoute(icon.path) }"
                />
            </NuxtLink>
       </div>
    </nav>

</template>

<script setup lang="ts">
import AboutIcon from '../assets/img/about.svg'
import ContactIcon from '../assets/img/contact.svg'
import SkillsIcon from '../assets/img/briefcase.svg'
import ProjectsIcon from '../assets/img/skills.svg'

const route = useRoute()

const linkIcons = [
    {name: AboutIcon, path: "/about" },
    {name: ProjectsIcon, path: "/projects"},
    {name: SkillsIcon, path:"/skills"},
    {name: ContactIcon, path: "/contact"},
];

const isActiveRoute = (path: string) => {
    return route.path === path
}
</script>