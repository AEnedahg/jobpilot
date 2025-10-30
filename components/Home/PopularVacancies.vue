<template>
    <div class="w-screen bg-white lg:px-17.5 lg:py-40 px-4 py-20">
        <section class="max-w-[1440px] mx-auto">
            <h1 class="text-[40px] font-medium text-[#18191C]">Most Popular Vacancies</h1>
            <div class="lg:grid lg:grid-cols-4 lg:grid-rows-3 flex flex-wrap
             gap-x-4 gap-y-8 mt-5 lg:mt-10">
                <div v-for="vacancy of vacancies" :key="vacancy.id"
                    class="max-w-[321px] space-y-5 lg:col-span-1 lg:row-span-1">
                    <h6 class="text-[#18191C] text-[18px] font-medium">{{ vacancy.jobName }}</h6>
                    <small class="text-[#767F8C] text-[14px]">{{ vacancy.noOfPositions }} Open Positions</small>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const vacancies = [
    {
        id: 1,
        jobName: 'Anesthesiologists',
        noOfPositions: '45,904'
    },
    {
        id: 2,
        jobName: 'Surgeons',
        noOfPositions: '50,364'
    },{
        id: 3,
        jobName: 'Obstetricians-Gynecologists',
        noOfPositions: '4,339'
    },{
        id: 4,
        jobName: 'Orthodontists',
        noOfPositions: '20,079'
    },{
        id: 5,
        jobName: 'Maxillofacial Surgeons',
        noOfPositions: '74,875'
    },{
        id: 6,
        jobName: 'Software Developer',
        noOfPositions: '43,359'
    },{
        id: 7,
        jobName: 'Psychiatrists',
        noOfPositions: '18,599'
    },{
        id: 8,
        jobName: 'Data Scientist',
        noOfPositions: '28,200'
    },{
        id: 9,
        jobName: 'Financial Manager',
        noOfPositions: '61,391'
    },{
        id: 10,
        jobName: 'Management Analysis',
        noOfPositions: '93,046'
    },{
        id: 11,
        jobName: 'IT Manager',
        noOfPositions: '50,963'
    },{
        id: 12,
        jobName: 'Operations Research Analysis',
        noOfPositions: '16,627'
    },
]
</script>