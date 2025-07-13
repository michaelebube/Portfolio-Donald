<template>
    <div class="w-full min-h-screen bg-container relative">
        <!-- Header/Navbar -->
        <header class="w-full p-4 sm:p-6 md:p-10 lg:p-16 xl:px-14 xl:py-10 pb-0">
            <div class="flex justify-between items-center mb-8">
                <div class="text-sm md:text-[16px] lg:text-lg  border-b-3 text-[#343A40]">KED</div>
                <div class="text-sm md:text-[16px] lg:text-lg border-b-3 text-[#343A40]">Data Analyst</div>
            </div>
        </header>

        <!-- Main Content Area -->
        <div class="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-14  sm:gap-x-8 lg:gap-x-10  ">
            <DashboardNav />
            <div class="sm:ml-[100px] md:ml-[120px] pb-4    sm:pl-5" >
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style>
.bg-container {
    position: relative;
}

.bg-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #E3D5CA;
    z-index: -2;
}

.bg-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('../assets/img/bg-img.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.1;
    z-index: -1;
}
</style>