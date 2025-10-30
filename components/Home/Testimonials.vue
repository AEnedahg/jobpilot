<template>
    <div class="w-screen bg-[#F1F2F4] lg:px-17.5 lg:py-40 px-4 py-20">
        <section class="max-w-[1440px] mx-auto">
            <h1 class="text-[40px] font-medium text-[#18191C] text-center">Clients Testimonial</h1>
            <div class="mt-10 grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-[24px]">
                <div v-for="testimonial of testimonials" :key="testimonial.id"
                    class="p-[24px] max-w-[424px] mx-auto lg:mx-0
                        col-span-1 row-span-1 bg-white rounded-[12px]
                        relative min-h-[294px]
                    "
                >
                    <img src="/images/home/testimonial/stars-icon.svg" alt="stars icon" 
                        class="mb-[16px]"
                    />
                    <p class="text-base text-[#464D61]">{{ testimonial.text }}</p>
                    <div class="absolute bottom-[24px] left-[24px] w-full">
                        <div class="flex gap-x-[12px]">
                            <img :src="testimonial.img" :alt="testimonial.name" 
                                class="size-[48px]"
                            />
                            <div class="space-y-[4px]">
                                <p class="text-base font-medium text-[#191F33]">{{ testimonial.name }}</p>
                                <small class="text-[14px] text-[#767E94]">{{ testimonial.job }}</small>
                            </div>
                            <img src="/images/home/testimonial/quote.svg" alt="quote icon" 
                                class="absolute bottom-0 right-[50px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const testimonials = [
  {
    id: 1,
    text: "“The platform is easy to use and reliable. It helped me connect with great opportunities that matched my skills perfectly.”",
    img: "/images/home/testimonial/robert-fox.png",
    name: "Robert Fox",
    job: "UI/UX Designer"
  },
  {
    id: 2,
    text: "“An amazing experience! The process was smooth, and I found my current position faster than I expected.”",
    img: "/images/home/testimonial/robert-cooper.png",
    name: "Robert Cooper",
    job: "Creative Director"
  },
  {
    id: 3,
    text: "“This service really stands out. The recommendations were accurate, and the support team was incredibly helpful throughout.”",
    img: "/images/home/testimonial/james-cooper.png",
    name: "James Cooper",
    job: "Creative Director"
  },
]

</script>
