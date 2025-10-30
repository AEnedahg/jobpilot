<template>
  <div class="w-screen">
    <div class="w-screen bg-[#F1F2F4] mx-auto lg:px-17.5 px-4 py-10">
      <section class="max-w-[1440px]">
        <p class="font-medium text-[18px] text-[#18191C]">Contact</p>
      </section>
    </div>

    <section
      class="bg-white max-w-[1440px] mx-auto lg:px-17.5 px-4 py-20 flex flex-col lg:flex-row justify-between gap-10"
    >
      <div class="sm:max-w-[642px] mx-auto lg:mx-0">
        <small class="text-[14px] font-medium text-[#0A65CC]">Who are we</small>
        <h1
          class="text-[30px] leading-[38px] lg:text-[56px] lg:leading-[64px] font-medium text-[#18191C] mt-2"
        >
          We care about customer services
        </h1>
        <p
          class="text-[18px] leading-[28px] text-[#5E6670] mt-[24px] mb-[32px]"
        >
          Live your life calmly and steadily. Stay composed in challenges and
          keep moving forward with determination.
        </p>
        <NuxtLink to="/jobs">
          <button
            class="py-[16px] px-[32px] text-white bg-[#0A65CC] rounded-[4px] text-base font-semibold"
          >
            Email Support
          </button>
        </NuxtLink>
      </div>

    
      <form
        class="lg:p-[32px] p-10 mt-10 lg:mt-0 bg-white shadow-lg rounded-[20px] flex flex-col items-center lg:max-w-[600px]"
      >
        <h1
          class="text-[30px] leading-[38px] lg:text-[40px] lg:leading-[48px] font-medium text-[#18191C] mb-10"
        >
          Get in Touch
        </h1>

        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full
          *:rounded-[12px] *:p-4 *:w-full
          *:border *:border-gray-300 *:text-gray-700 *:placeholder:text-gray-400
          "
        >
          <input 
            class="col-span-1"
          type="text" name="name" placeholder="Name" />
          <input 
            class="col-span-1"
          type="email" name="email" placeholder="Email" />
          <input 
          type="text" name="subjects" placeholder="Subject" class="col-span-1 lg:col-span-2" />
          <textarea
            rows="5"
            name="message"
            placeholder="Message"
            class="lg:col-span-2 resize-none ml-2"
          ></textarea>
        </div>

        <NuxtLink to="/jobs" class="w-full mt-6">
          <button
            class="flex gap-x-[12px] justify-center items-center
            py-[16px] text-white bg-[#0A65CC] rounded-[8px] text-base 
            font-semibold w-full hover:bg-[#094a9d] transition"
          >
            Send Message
            <img src="/images/contact/send-icon.png" alt="send icon" class="w-5 h-5" />
          </button>
        </NuxtLink>
      </form>
    </section>
  </div>
  <ContactMap />
</template>

<script setup>

</script>
