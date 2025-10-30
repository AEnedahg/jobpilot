<template>
    <div class="w-screen bg-[#18191C] lg:px-17.5 lg:py-40 px-4 py-20 mt-20">
        <section class="max-w-[1440px] mx-auto grid grid-cols-1 grid-rows-5 lg:grid-cols-5 lg:grid-rows-1 gap-5">
            <div class="col-span-1 row-span-1">
                <NuxtLink to="/">
                    <div class="flex items-center gap-x-2">
                        <img src="/images/footer/logo-job-pilot-white.svg" alt="logo" class="size-[60px]" />
                        <h4 class="text-[24px] font-semibold text-white">Jobpilot</h4>
                    </div>
                </NuxtLink>
                <p class="text-[#5E6670] text-[18px] mt-5">
                    Call now: <span class="!text-white font-medium">+234 81 108 344 37</span>
                    92 Uwanse Street, Mount Zion, Calabar, Cross River State, Nigeria.
                </p>
            </div>
            <div class="links">
                <h2 class="text-white text-[20px] font-medium">Quick Links</h2>
                <p v-for="quickLink of quickLinks" :key="quickLink"
                    class="text-[#9199A3]"
                >{{ quickLink }}</p>
            </div>
            <div class="links">
                <h2 class="text-white text-[20px] font-medium">Candidate</h2>
                <p v-for="candidate of candidates" :key="candidate"
                    class="text-[#9199A3]"
                >{{ candidate }}</p>
            </div>
            <div class="links">
                <h2 class="text-white text-[20px] font-medium">Employer</h2>
                <p v-for="employer of employers" :key="employer"
                    class="text-[#9199A3]"
                >{{ employer }}</p>
            </div>
            <div class="links">
                <h2 class="text-white text-[20px] font-medium">Support</h2>
                <p v-for="support of supports" :key="support"
                    class="text-[#9199A3]"
                >{{ support }}</p>
            </div>
        </section>
        <section class="flex flex-col lg:flex-row lg:justify-between mt-10 max-w-[1440px] mx-auto gap-y-[50px]">
            <small class="text-[#767F8C] text-[14px]">@ {{ new Date().getFullYear() }} Jobpilot - Job Portal. All rights Rserved</small>
            <div class="flex items-center gap-x-[20px]">
                <img 
                    v-for="social of socials" :key="social"
                    class="size-[40px]"
                :src="social" alt="social icon" />
            </div>
        </section>
    </div>
</template>

<script setup>
const quickLinks = ['About', 'Contact', 'Pricing', 'Blog']
const candidates = ['Browse Jobs', 'Browse Employers', 'Candidate Dashboard', 'Saved Jobs']
const employers = ['Post a Job', 'Browse Candidates', 'Employers Dashboard', 'Applications']
const supports = ['Faqs', 'Privacy Policy', 'Terms & Conditions']
const socials = ['/images/icons/instagram-icon.png', '/images/icons/facebook-icon.png', '/images/icons/linkedin-icon.png', '/images/icons/x-icon.png']
</script>

<style>
.links > h2 {
    margin-bottom: 16px;
}
.links > p {
    margin-bottom: 8px;
}
</style>