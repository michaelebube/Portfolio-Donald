<template>
    <div class="grid lg:grid-cols-[300px_1fr]  md:grid-cols-[200px_1fr] lg:mx-4   "> 
        <div class="flex flex-col">
            <div class="flex h-full items-center min-h-[60vh] relative">
                <div class="w-full max-w-[300px]">
                    <h1 class="border-b-[1px] w-[85%] md:text-3xl lg:text-5xl xl:text-6xl lg:pb-4 md:pb-2 md:leading-12 lg:leading-16 font-semibold lg:-mt-30 md:-mt-5">Let's get started</h1>
                    <div class="flex gap-1 mt-4">
                        <a href="">
                            <img src="../assets/icons/linkedin_icon.svg" alt="LinkedIn Icon" class="md:w-8 md:h-8 lg:w-10 lg:h-10 hover:scale-110 transition-transform duration-200">
                        </a>
                        <a href="">
                            <img src="../assets/icons/github_icon.svg" alt="GitHub Icon" class="md:w-8 md:h-8 lg:w-10 lg:h-10 hover:scale-110 transition-transform duration-200">
                        </a>
                    </div>
                </div>
                
                <div class="absolute right-0  xl:inset-y-[5%] lg:inset-y-[-4%] md:inset-y-[18px] limitedHeight:inset-y-[13.5%] border-r-[1px] border-gray-800 h-115"></div>
            </div>
        </div>

        <div class="md:px-8 lg:px-12 overflow-hidden md:-mt-3 py-10  lg:-mt-10 xl:mt-0 limitedHeight:mt-[20%] ">
            <h1 class="text-lg lg:text-xl xl:text-2xl text-[#1B263B] border-b-1 pb-4 border-b-[#1B263B]/20">You can reach me by filling the form below</h1>
            <div class=" mt-6  rounded-lg font-sans">
    <div class="flex flex-wrap items-baseline md:gap-2 lg:gap-2 leading-relaxed border-b-1 border-b-[#1B263B]/20 pb-8">
      <span class="text-lg lg:text-2xl xl:text-4xl font-semibold text-slate-800 mr-4">My name is</span>
      <input 
        v-model="formData.fullName"
        type="text" 
        placeholder="YOUR FULL NAME"
        class="bg-transparent border-0 border-b-2 border-black/40 text-black  md:text-lg text-3xl font-medium px-0 py-2 outline-none placeholder:xl:text-xl placeholder:lg:text-lg placeholder:md:text-sm tracking-wide placeholder-[#9DA0A6]  focus:border-black max-w-100 flex-1 mr-4"
      />
      <span class="text-xl lg:text-2xl  xl:text-4xl font-semibold text-slate-800">and I</span>
      
      <span class="xl:w-full xl:h-0"></span>
      
      <span class="text-xl lg:text-2xl  xl:text-4xl font-semibold text-slate-800 mr-4">have a</span>
      <input 
        v-model="formData.jobType"
        type="text" 
        placeholder="ONE-TIME GIG, PART-TIME JOB, FULL-TIME JOB ETC"
        class="bg-transparent border-0 border-b-2 border-black/40 text-black font-medium text-lg xl:text-3xl  px-0 py-2 placeholder:md:text-sm placeholder:lg:text-lg  outline-none placeholder:xl:text-xl  tracking-wide placeholder-[#9DA0A6] focus:border-black min-w-100  flex-1 mr-4"
      />
      <span class="text-xl lg:text-2xl  xl:text-4xl font-semibold text-slate-800">that</span>
      
      <!-- <div class="xl:w-full xl:h-0"></div> --><span class="text-xl lg:text-2xl   xl:text-4xl font-semibold text-slate-800">needs help. You can reach me at</span>
      
      <div class="xl:w-full xl:h-0"></div>
      
      <input 
        v-model="formData.email"
        type="email" 
        placeholder="YOUR EMAIL ADDRESS"
        class="bg-transparent border-0 border-b-2 border-black/40 text-black font-medium text-lg xl:text-3xl  px-0 py-2 outline-none placeholder:md:text-sm placeholder:lg:text-lg placeholder:xl:text-xl tracking-wide placeholder-[#9DA0A6]  focus:border-black max-w-130 flex-1 mr-4"
      />
      <span class="text-xl lg:text-2xl   xl:text-4xl font-semibold text-slate-800">to get</span>
      
      <div class="w-full h-0"></div>
      
      <span class="text-xl lg:text-2xl  xl:text-4xl font-semibold text-slate-800">things started.</span>
    </div>
  </div>
  <div class="relative mt-6">
  <button 
    @click="handleSubmit" 
    :disabled="isSubmitting"
    class="cursor-pointer font-bold text-xl group disabled:opacity-50 disabled:cursor-not-allowed"
  > 
    {{ isSubmitting ? 'Sending...' : 'Send Info' }}
    <span class="text-[1.2em] ml-2 transition-transform duration-150 group-hover:translate-x-1 group-focus:translate-x-1">→</span>
  </button>

  <!-- Absolutely Positioned Success/Error Message -->
  <div 
    v-if="message" 
    :class="messageClass" 
    class="absolute left-0 top-full mt-2 w-full p-3 rounded transition-all duration-300 z-20"
  >
    {{ message }}
  </div>
</div>
        </div>
        <TheFooter>Contact Ked...</TheFooter>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'

// EmailJS Configuration - Using environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// Validate environment variables
if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  console.error('EmailJS environment variables are missing!')
}

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

// Reactive state for form data
const formData = reactive({
  fullName: '',
  jobType: '',
  email: ''
})

// Loading and message state
const isSubmitting = ref(false)
const message = ref('')
const messageClass = ref('')

// Email validation function
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Form submission handler
const handleSubmit = async () => {
  // Clear previous messages
  message.value = ''

  
  if(!formData.fullName && !formData.jobType &&!formData.email) {
    message.value = 'Please fill in all fields'
    messageClass.value = 'text-red-700 bg-transparent rounded-lg  border border-red-700'
    return
  }
  // Validate form data
  if (!formData.fullName.trim()) {
    message.value = 'Please enter your full name'
    messageClass.value = 'text-red-700 bg-transparent rounded-lg border border-red-700'
    return
  }
  
  if (!formData.jobType.trim()) {
    message.value = 'Please specify the type of job'
    messageClass.value = 'text-red-700 bg-transparent rounded-lg border border-red-700'
    return
  }
  
  if (!formData.email.trim()) {
    message.value = 'Please enter your email address'
    messageClass.value = 'text-red-700  bg-transparent rounded-lg border border-red-700'
    return
  }

  
  
  if (!isValidEmail(formData.email)) {
    message.value = 'Please enter a valid email address'
    messageClass.value = 'text-red-700 bg-transparent border border-red-700'
    return
  }

  // Set loading state
  isSubmitting.value = true
  
  try {
    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.fullName,
        from_email: formData.email,
        job_type: formData.jobType,
        message: `${formData.fullName} has a ${formData.jobType} and wants to get in touch. Contact them at ${formData.email}.`
      },
      EMAILJS_PUBLIC_KEY
    )
    
    console.log('Email sent successfully:', response)
    
    // Show success message
    message.value = 'Message sent successfully! I\'ll get back to you soon.'
    messageClass.value = 'text-green-900 bg-transparent  border border-green-900'
    
    // Reset form after successful submission
    resetForm()
    
  } catch (error) {
    console.error('Error sending email:', error)
    message.value = 'Failed to send message. Please try again or contact me directly.'
    messageClass.value = 'text-red-600 bg-red-50 border-2 border-red-600'
  } finally {
    // Reset loading state
    isSubmitting.value = false
  }
}

// Reset form
const resetForm = () => {
  formData.fullName = ''
  formData.jobType = ''
  formData.email = ''
}

// Optional: Watch form data changes
watch(formData, (newValues) => {
  console.log('Form data updated:', newValues)
}, { deep: true })
</script>

<style scoped>
/* Responsive adjustments for mobile */
@media (max-width: 768px) {
  .text-3xl {
    font-size: 1.5rem;
  }
  
  .min-w-48 {
    min-width: 8rem;
  }
  
  .min-w-96 {
    min-width: 12rem;
  }
  
  .min-w-64 {
    min-width: 10rem;
  }
}

@media (max-width: 480px) {
  .text-3xl {
    font-size: 1.25rem;
  }
  
  .min-w-48,
  .min-w-96,
  .min-w-64 {
    min-width: 7rem;
  }
}
</style>