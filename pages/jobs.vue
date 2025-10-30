<template>
  <div class="w-screen">
    <div class="w-screen bg-[#F1F2F4] mx-auto lg:px-17.5 px-4 py-10">
      <section class="max-w-[1440px] mx-auto">
        <p class="font-medium text-[18px] text-[#18191C]">Find Jobs</p>
      </section>
    </div>

    <div class="w-screen bg-white lg:px-17.5 px-4 py-20">
      <section class="max-w-[1440px] mx-auto">
        <div class="flex flex-col md:flex-row gap-4 mb-8">
          <input
            v-model="query"
            type="text"
            placeholder="Search jobs (e.g., developer, designer)"
            class="w-full md:w-1/2 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            v-model="country"
            type="text"
            placeholder="Enter country code (e.g., us, ng)"
            class="w-full md:w-1/4 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            @click="searchJobs"
            class="bg-[#0A65CC] text-white px-6 py-3 rounded-md hover:bg-[#094a9d] transition"
          >
            Search
          </button>
        </div>

        <div v-if="loading" class="flex flex-col items-center justify-center py-20">
          <div class="w-12 h-12 bg-[#0A65CC] rounded-full animate-pulse mb-4"></div>
          <p class="text-gray-500 animate-pulse text-lg">Loading jobs...</p>
        </div>

        <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>

        <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div
            v-for="(job, index) in jobs"
            :key="index"
            class="p-6 
            w-[424px] mx-auto md:mx-0
            bg-gradient-to-r from-[#FFF6E6] to-[#FFFFFF] rounded-[8px] flex flex-col justify-between"
          >
            <div>
              <h5 class="font-semibold text-[18px] text-[#18191C] mb-[6px]">
                {{ job.job_title }}
              </h5>

              <div class="flex gap-x-[8px] items-center flex-wrap">
                <p
                  class="text-[14px] uppercase text-[#0BA02C]
                  bg-[#E7F6EA] rounded-[3px] py-[4px] px-[8px]"
                >
                  {{ job.job_employment_type || 'Not specified' }}
                </p>
                <p class="text-[14px] text-[#767F8C] mb-2">
                  <span>Salary:</span>
                  <span v-if="job.job_min_salary">
                    {{ job.job_salary_currency || '' }}
                    {{ job.job_min_salary }} - {{ job.job_max_salary }}
                  </span>
                  <span v-else>Not specified</span>
                </p>
              </div>

              <div class="flex gap-x-[12px] mt-[20px]">
                <img
                  :src="job.employer_logo || '/images/default-company.png'"
                  alt="Company logo"
                  class="size-[48px] object-contain"
                />
                <div>
                  <p class="text-base font-medium text-[#18191C] mb-[4px]">
                    {{ job.employer_name }}
                  </p>
                  <div
                    class="text-[14px] text-[#767F8C] flex gap-x-[2px] items-center"
                  >
                    <img
                      src="/images/icons/location-gray-icon.svg"
                      alt="location icon"
                    />
                    {{
                      job.job_city
                        ? job.job_city + ', ' + job.job_country
                        : job.job_country
                    }}
                  </div>
                </div>
              </div>
            </div>

            <a
              :href="job.job_apply_link"
              target="_blank"
              class="mt-4 inline-block text-center bg-[#0A65CC] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#094a9d] transition"
            >
              Apply Now
            </a>
          </div>
        </div>

        <div
          v-if="!loading && jobs.length"
          class="flex justify-center gap-2 mt-12 flex-wrap"
        >
          <button
            @click="prevPage"
            :disabled="page === 1"
            class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md disabled:opacity-50 hover:bg-gray-300 transition"
          >
            Prev
          </button>

          <button
            v-for="num in totalPages"
            :key="num"
            @click="changePage(num)"
            :class="[
              'px-4 py-2 rounded-md transition',
              page === num
                ? 'bg-[#0A65CC] text-white font-semibold'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
            ]"
          >
            {{ num }}
          </button>

          <button
            @click="nextPage"
            class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const jobs = ref([])
const loading = ref(true)
const error = ref(null)
const query = ref('developer')
const country = ref('us')
const page = ref(1)
const totalPages = ref(5)

const fetchJobs = async () => {
  loading.value = true
  error.value = null

  const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(
    query.value
  )}%20jobs%20in%20${country.value}&page=${page.value}&num_pages=1&country=${country.value}`
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'jsearch.p.rapidapi.com',
      'x-rapidapi-key': 'a43522dd23msh1eb09361a040828p101ccejsn4068598786a8',
    },
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()
    jobs.value = data.data ? data.data.slice(0, 12) : []
  } catch (err) {
    console.error(err)
    error.value = 'Failed to load jobs'
  } finally {
    loading.value = false
  }
}

const nextPage = () => {
  page.value++
  fetchJobs()
}

const prevPage = () => {
  if (page.value > 1) {
    page.value--
    fetchJobs()
  }
}

const changePage = (num) => {
  page.value = num
  fetchJobs()
}

const searchJobs = () => {
  page.value = 1
  fetchJobs()
}

onMounted(fetchJobs)
</script>
