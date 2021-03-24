<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white">
    <div class="container mt-20 mb-28 py-12 lg:px-20 md:w-2/3">

     <h2 class="tracking-normal font-bold text-brand-green-800 text-4xl sm:text-5xl md:text-6xl xl:text-5xl md:text-center">
        Our Clients
      </h2>
      <p class="mt-10 text-xl text-gray-700 leading-loose max-w-prose md:text-center mx-auto">
        We are proud to partner with organizations that are committed to advancing gender equality,
        social justice and human rights.
      </p>

      <!--
      <p class="mb-20 text-center text-xl font-semibold uppercase text-brand-green-500 tracking-wider">
        We are proud to partner with organizations that are committed to advancing gender equality,
        social justice and human rights.
      </p>
      -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-2 lg:gap-y-20 items-center">
        <div class="flex justify-center bg-red-100">
          <img class="h-22 lg:h-8 object-contain" src="/images/clients/bill-and-melinda-gates-foundation.jpg" alt="">
        </div>
        <div class="flex justify-center bg-gray-600">
          <img class="h-12 lg:h-8 object-contain" src="/images/clients/data2x.png" alt="">
        </div>
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img class="h-12 lg:h-8 object-contain" src="/images/clients/global-affairs-canada.jpeg" alt="">
        </div>
        <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <img class="h-20 object-contain" src="/images/clients/idrc.png" alt="">
        </div>
        <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <img class="h-20 object-contain" src="/images/clients/islamic-relief-canada.png" alt="">
        </div>
        <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <img class="h-12 lg:h-10 object-contain" src="/images/clients/malala-fund.png" alt="">
        </div>
        <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <img class="h-12 object-contain" src="/images/clients/oxfam-canada.png" alt="">
        </div>
        <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <img class="h-20 object-contain" src="/images/clients/urban-institute.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {

    return {
    }

  }
}
</script>
