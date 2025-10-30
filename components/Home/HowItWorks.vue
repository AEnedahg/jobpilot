<template>
    <div class="w-screen bg-[#F1F2F4] lg:px-17.5 lg:py-40 px-4 py-20">
        <section class="max-w-[1440px] mx-auto">
            <h1 class="text-[40px] font-medium text-[#18191C] text-center">How jobpilot work</h1>
            <div class="md:mt-20 mt-10 lg:grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-1 grid-rows-4 justify-center gap-7">
                <div v-for="step of steps" :key="step.id"
                    class="lg:col-span-1 lg:row-span-1 cols-span-1 row-span-1 flex flex-col items-center max-w-[264px]
                        relative mx-auto
                    "
                >
                    <img :src="step.icon" alt="step icon" 
                        class="mb-[24px]"
                    />
                    <img :src="step.arrow" alt="" 
                        :class="step.arrowClass"
                    />
                    <h6 class="text-[18px] font-medium text-[#18191C]
                        mb-[12px]
                    ">{{ step.heading }}</h6>
                    <small class="text-[14px] text-[#767F8C] text-center">{{ step.para }}</small>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const steps = [
  {
    id: 1,
    icon: '/images/home/how-it-works/how-it-works-icon-one.svg',
    heading: "Create an Account",
    para: "Easily set up your account and start your job search journey.",
    arrow: '/images/home/how-it-works/arrow-dashed-up.svg',
    arrowClass: 'absolute lg:left-2/3 top-3/4 lg:-top-1/4 rotate-[90deg] lg:rotate-0 left-[50%]'
  },
  {
    id: 2,
    icon: '/images/home/how-it-works/how-it-works-icon-two.svg',
    heading: "Upload CV/Resume",
    para: "Share your experience and skills by uploading your resume.",
    arrow: '/images/home/how-it-works/arrow-dashed-down.svg',
    arrowClass: 'absolute lg:left-2/3 max-[600px]:top-4/5 lg:-bottom-1/4 rotate-[90deg] lg:rotate-0 right-1/2'
  },
  {
    id: 3,
    icon: '/images/home/how-it-works/how-it-works-icon-three.svg',
    heading: "Find a Suitable Job",
    para: "Explore job opportunities that match your skills and interests.",
    arrow: '/images/home/how-it-works/arrow-dashed-up.svg',
    arrowClass: 'absolute lg:left-2/3 top-3/4 lg:-top-1/4 rotate-[90deg] lg:rotate-0 left-[50%]'
  },
  {
    id: 4,
    icon: '/images/home/how-it-works/how-it-works-icon-four.svg',
    heading: "Apply for the Job",
    para: "Submit your application and take the next step in your career.",
    arrow: ''
  }
]
</script>