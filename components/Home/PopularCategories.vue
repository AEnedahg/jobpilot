<template>
    <div class="w-screen bg-white lg:px-17.5 lg:py-40 px-4 py-20">
        <section class="max-w-[1440px] mx-auto">
            <h1 class="text-[40px] font-medium text-[#18191C] text-center lg:text-left">Popular category</h1>
            <div class="grid grid-cols-1 grid-rows-8 lg:grid-cols-4 lg:grid-rows-2 gap-[24px]
                mt-10
            ">
                <div v-for="popularCategory of popularCategories" :key="popularCategory.id"
                    class="flex gap-x-[16px] max-w-[312px] col-span-1 row-span-1 
                    lg:col-span-1 lg:row-span-1 mx-auto lg:mx-0"
                >
                    <img :src="popularCategory.icon" :alt="popularCategory.title" />
                    <div class="space-y-[8px]">
                        <h6 class="text-[#18191C] font-medium text-[18px]">{{ popularCategory.title }}</h6>
                        <small class="text-[14px] text-[#5E6670]">{{ popularCategory.noOfPositions }} Open position</small>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const popularCategories = [
    {
        id: 1,
        icon: '/images/home/popular-categories/popular-category-icon-one.svg',
        title: 'Graphics & Design',
        noOfPositions: '357'
    },{
        id: 2,
        icon: '/images/home/popular-categories/popular-category-icon-two.svg',
        title: 'Code & Programing',
        noOfPositions: '312'
    },{
        id: 3,
        icon: '/images/home/popular-categories/popular-category-icon-three.svg',
        title: 'Digital Marketing',
        noOfPositions: '297'
    },{
        id: 4,
        icon: '/images/home/popular-categories/popular-category-icon-four.svg',
        title: 'Video & Animation',
        noOfPositions: '247'
    },{
        id: 5,
        icon: '/images/home/popular-categories/popular-category-icon-five.svg',
        title: 'Music & Audio',
        noOfPositions: '204'
    },{
        id: 6,
        icon: '/images/home/popular-categories/popular-category-icon-six.svg',
        title: 'Account & Finance',
        noOfPositions: '167'
    },{
        id: 7,
        icon: '/images/home/popular-categories/popular-category-icon-seven.svg',
        title: 'Health & Care',
        noOfPositions: '125'
    },{
        id: 8,
        icon: '/images/home/popular-categories/popular-category-icon-eight.svg',
        title: 'Data & Science',
        noOfPositions: '57'
    },
]
</script>