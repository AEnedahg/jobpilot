<template>
    <div class="w-screen bg-[#F1F2F4] lg:px-17.5 lg:py-40 px-4 py-20">
        <section class="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:justify-between">
            <div class="sm:max-w-[642px] max-w-[300px] mx-auto lg:mx-0">
                <h1 class="text-[30px] leading-[38px] lg:text-[56px] 
                lg:leading-[64px] font-medium text-[#18191C]">Find a job that suits your interest & skills.</h1>
                <p class="text-[18px] leading-[28px] text-[#5E6670] mt-[24px] mb-[32px]">Live your life calmly and steadily. Stay composed in challenges and keep moving forward with determination.</p>
                <form>
                    <div class="flex flex-col lg:flex-row gap-8 p-10 lg:p-[12px] rounded-[8px] bg-white">
                        <div class="w-1/4">
                            <img src="/images/icons/search-icon.svg" alt="search icon" />
                            <input type="search" name="title-and-keyword-search" placeholder="Job title, Keyword..." required/>
                        </div>
                        <div class="w-1/4">
                            <img src="/images/icons/location-icon.svg" alt="location icon" />
                            <input type="search" name="location-search" placeholder="Your Location" required/>
                        </div>
                        <NuxtLink to="/jobs">
                            <button class="py-[16px] px-[32px] text-white bg-[#0A65CC] rounded-[4px] text-base font-semibold">
                                Find Job
                            </button>
                        </NuxtLink>
                    </div>
                </form>

                <p class="text-[#474C54] mt-[24px] text-center lg:text-left"><span class="!text-[#9199A3]">Suggestion:</span>
                    Designer,
                    Programing,
                    <span class="!text-[#0A65CC]">Digital Marketing</span>,
                    Video,
                    Animation.
                </p>
            </div>
            <img src="/images/home/hero/hero-img.svg" alt="illustration of person using laptop" 
                class="lg:max-w-[642px] mt-10 lg:mt-0 mx-auto lg:mx-0"
            />
        </section>
        <section class="grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1 gap-5 mt-10">
            <div v-for="heroInfo of heroInfos" :key="heroInfo.id"
                class="col-span-1 row-span-1 md:col-span-1 md:row-span-1 flex rounded-[8px] p-[20px] items-center bg-white"
            >
                <img :src="heroInfo.img" alt="hero icons" 
                    class="size-[72px]"
                />
                <div class="flex flex-col gap-1 ml-3">
                    <h6 class="text-[#18191C] text-[24px]">{{ heroInfo.heading }}</h6>
                    <p class="text-[#767F8C] text-base">{{ heroInfo.para }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const heroInfos = [
    {
        id: 1,
        img: '/images/home/hero/hero-list-icon-one.svg',
        heading: '175,324',
        para: 'Live Job'
    },
    {
        id: 2,
        img: '/images/home/hero/hero-list-icon-two.svg',
        heading: '97,354',
        para: 'Companies'
    },
    {
        id: 3,
        img: '/images/home/hero/hero-list-icon-three.svg',
        heading: '3847,154',
        para: 'Candidates'
    },
     {
        id: 4,
        img: '/images/home/hero/hero-list-icon-four.svg',
        heading: '7,532',
        para: 'New Jobs'
    },
]
</script>

<style>
form > div > div {
    display: flex;
    gap: 8px;
    align-items: center;
}
input {
    color: #9199A3;
    margin-left: 12px;
}
input::placeholder {
    color: #9199A3;
}
</style>