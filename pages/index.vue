<template>
  <div>
    <!-- Splash Screen -->
    <div 
      v-if="showSplash" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#E3D5CA] to-[#D4C4B0] transition-opacity duration-1000"
      :class="{ 'opacity-0': !splashVisible }"
    >
      <div class="text-center">
        <div class="absolute top-8 left-4 sm:left-[calc(1rem+30px-1.5ch)] md:left-[calc(1rem+50px-1.5ch)] lg:left-[calc(2rem+50px-1.5ch)] xl:left-[calc(3rem+60px-1.5ch)] md:text-[16px] lg:text-xl border-b-3 text-[#343A40] z-10 font-family-handwriting">KED</div>
        <div class="absolute bottom-8 right-8 md:right-[calc(1rem+50px-1.5ch)] lg:right-[calc(1rem+50px-1.5ch)] xl:right-[calc(2rem+60px-1.5ch)] border-b-3 text-[#343A40] z-10 font-family-handwriting">Data Analyst</div>
        
        <!-- Loading animation -->
        <div class="flex items-center justify-center">
          <h1 ref="typewriterText" class="text-[22px] sm:text-4xl lg:text-5xl md:text-4xl font-semibold text-[#343A40]"></h1>
          <span ref="cursor" class="text-5xl font-semibold text-[#343A40] ml-1">|</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const router = useRouter()
const showSplash = ref(true)
const splashVisible = ref(true)
const typewriterText = useTemplateRef('typewriterText');
const cursor = useTemplateRef('cursor');

onMounted(() => {
  nextTick(() => {
    // GSAP Typewriter Animation
    const text = "Hi, I'm Donald. I'm a data analyst..."
    const textElement = typewriterText.value
    const cursorElement = cursor.value
    
    if (!textElement || !cursorElement) {
      console.error('Template refs not found:', { textElement, cursorElement })
      return
    }
    
    // Start with empty text
    textElement.textContent = ""
    
    // Animate cursor blinking
    gsap.to(cursorElement, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    })
    
    // Typewriter effect
    gsap.to({}, {
      duration: text.length * 0.1, 
      ease: "none",
      onUpdate: function() {
        const progress = this.progress()
        const currentLength = Math.floor(progress * text.length)
        if (textElement) {
          textElement.textContent = text.substring(0, currentLength)
        }
      }
    })
    
    // Start fade out after 4.5 seconds (giving time for typing animation)
    setTimeout(() => {
      splashVisible.value = false
    }, 5500)
    
    // Hide splash and redirect after fade transition
    setTimeout(() => {
      showSplash.value = false
      router.push('/about')
    }, 6000) 
  })
})


</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>