<template>
    <div class="grid lg:grid-cols-[300px_1fr]  md:grid-cols-[200px_1fr] lg:mx-4 grid-cols-1 px-2 md:px-0 mb-32  height-3xl:mt-[4%] relative  "> 
        <div class="flex flex-col">
            <div class="flex h-full items-center mt-10 md:mt-0 md:min-h-[60vh] relative">
                <div class="md:w-full w-[320px] max-w-[360px]">
                    <h1 class="border-b-[1px] pb-1 w-[85%] text-[32px] md:text-3xl lg:text-5xl xl:text-6xl lg:pb-4 md:pb-2 md:leading-12 lg:leading-16 font-semibold lg:-mt-30 md:-mt-5">Let's get started</h1>
                    <div class="flex gap-1 mt-4">
                        <a href="https://www.linkedin.com/in/donald-kenechukwu-ebube" target="_blank" rel="noopener noreferrer">
                            <img src="../assets/icons/linkedin_icon.svg" alt="LinkedIn Icon" class="w-8 h-8  lg:w-10 lg:h-10 hover:scale-110 transition-transform duration-200">
                        </a>
                        <a href="https://github.com/donaldebube" target="_blank" rel="noopener noreferrer">
                            <img src="../assets/icons/github_icon.svg" alt="GitHub Icon" class="w-8 h-8 lg:w-10 lg:h-10 hover:scale-110 transition-transform duration-200">
                        </a>
                    </div>
                </div>
                
                <div class="sm:absolute md:block right-0 hidden   xl:inset-y-[5%] lg:inset-y-[-4%] md:inset-y-[18px] limitedHeight:inset-y-[13.5%] border-r-[1px] border-gray-800 h-115"></div>
            </div>
        </div>

        <div class="md:px-8 lg:px-12 overflow-hidden md:-mt-3 md:py-10  lg:-mt-10 xl:mt-0 limitedHeight:mt-[20%] mt-10   ">
            <h1 class="text-lg lg:text-xl xl:text-2xl text-[#1B263B] border-b-1 pb-4 border-b-[#1B263B]/20">You can reach me by filling the form below</h1>
            <div class=" mt-3 md:mt-6  rounded-lg font-sans">
    <div class="flex flex-wrap items-baseline md:gap-2 lg:gap-2 leading-relaxed border-b-1 border-b-[#1B263B]/20 pb-8">
      <span class="text-lg lg:text-2xl xl:text-4xl font-semibold text-slate-800  mr-4">My name is</span>
      <input 
        v-model="formData.fullName"
        type="text" 
        placeholder="YOUR FULL NAME"
        class="bg-transparent border-0 border-b-2 text-lg border-black/40 text-black    lg:text-3xl font-medium px-0 py-2 outline-none placeholder:text- xs placeholder:xl:text-xl placeholder:lg:text-lg placeholder:md:text-sm tracking-wide placeholder-[#9DA0A6]  focus:border-black max-w-100 flex-1 mr-4"
      />
      <span class="text-lg pt-4 md:pt-0 lg:text-2xl  xl:text-4xl font-semibold text-slate-800 mr-1 md:mr-0">and I</span>
      
      <span class="xl:w-full xl:h-0"></span>
      
      <span class="text-lg pt-4 md:pt-0 lg:text-2xl  xl:text-4xl font-semibold text-slate-800 mr-2 md:mr-4">have a</span>
      <input 
        v-model="formData.jobType"
        type="text" 
        placeholder="ONE-TIME GIG, PART-TIME OR FULL-TIME JOB ETC"
        class="bg-transparent border-0 border-b-2 placeholder:text-xs border-black/40 text-black font-medium text-lg xl:text-3xl  px-0 pt-2   pb-1 md:pt-0 py-2 placeholder:md:text-sm placeholder:lg:text-lg  outline-none placeholder:xl:text-xl  tracking-wide placeholder-[#9DA0A6] focus:border-black min-w-100  md:flex-1 mr-4"
      />
      <span class="text-lg lg:text-2xl  pt-5 md:pt-2 xl:text-4xl font-semibold text-slate-800 mr-1   md:mr-0">that</span><span class="text-lg lg:text-2xl lg:mt-3   xl:text-4xl mt-2 font-semibold text-slate-800 mr-2 md:mr-0"> needs help. You can reach me at</span>
      
      <div class="xl:w-full xl:h-0"></div>
      
      <input 
        v-model="formData.email"
        type="email" 
        placeholder="YOUR EMAIL ADDRESS"
        class="bg-transparent border-0 border-b-2 border-black/40 text-black font-medium text-lg xl:text-3xl  px-0 py-1 md:py-2 outline-none pt-3 placeholder:text-xs placeholder:md:text-sm placeholder:lg:text-lg placeholder:xl:text-xl tracking-wide placeholder-[#9DA0A6]  focus:border-black w-60  sm:max-w-130 flex-1 mr-4"
      />
      <span class="text-lg lg:text-2xl   xl:text-4xl font-semibold text-slate-800">to get</span>
      
      <div class="md:w-full md:h-0"></div>

      <span class="text-lg pt-4 md:pt-0 lg:text-2xl md:ml-2  xl:text-4xl font-semibold text-slate-800">things started.</span>
    </div>
  </div>
  
  <!-- Fixed message container with better positioning -->
  <div class="relative mt-6 pb-20">
    <button 
      @click="handleSubmit" 
      :disabled="isSubmitting"
      class="cursor-pointer font-bold text-xl group disabled:opacity-50 disabled:cursor-not-allowed"
    > 
      {{ isSubmitting ? 'Sending...' : 'Send Info' }}
      <span class="text-[1.2em] ml-2 transition-transform duration-150 group-hover:translate-x-1 group-focus:translate-x-1">→</span>
    </button>

    <!-- Fixed message display -->
    <div 
      v-if="message" 
      :class="messageClass" 
      class="absolute left-0 top-6 sm:top-7 mt-3 w-full max-w-md p-3 rounded-lg transition-all duration-300 z-50 shadow-md"
    >
      {{ message }}
    </div>
  </div>
        </div>
        
    </div>
    <TheFooter>Contact Ked...</TheFooter>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
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

// Helper function to show message with auto-clear
const showMessage = (msg: string, isError: boolean = true) => {
  message.value = msg
  messageClass.value = isError 
    ? 'text-red-800 bg-red-50 border-2 border-red-300 font-medium'
    : 'text-green-800 bg-green-50 border-2 border-green-300 font-medium'
  

  setTimeout(() => {
    message.value = ''
    messageClass.value = ''
  }, 5000)
}

// Form submission handler
const handleSubmit = async () => {
  console.log('Form submitted with:', formData) // Debug log
  
  // Clear previous messages
  message.value = ''
  messageClass.value = ''

  // Check if all fields are empty
  if (!formData.fullName.trim() && !formData.jobType.trim() && !formData.email.trim()) {
    console.log('All fields empty') // Debug log
    showMessage('Please fill in all fields')
    return
  }
  
  // Individual field validation
  if (!formData.fullName.trim()) {
    console.log('Full name missing') // Debug log
    showMessage('Please enter your full name')
    return
  }
  
  if (!formData.jobType.trim()) {
    console.log('Job type missing') // Debug log
    showMessage('Please specify the type of job')
    return
  }
  
  if (!formData.email.trim()) {
    console.log('Email missing') // Debug log
    showMessage('Please enter your email address')
    return
  }
  
  if (!isValidEmail(formData.email)) {
    console.log('Invalid email') // Debug log
    showMessage('Please enter a valid email address')
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
    showMessage('Message sent successfully! I\'ll get back to you soon.', false)
    
    // Reset form after successful submission
    resetForm()
    
  } catch (error) {
    console.error('Error sending email:', error)
    showMessage('Failed to send message. Please try again or contact me directly.')
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