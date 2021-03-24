<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white">
    <div class="container mt-20 mb-20 py-12 lg:px-20 md:w-2/3">

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

      <ul class="mx-auto md:mx-0 mt-20 w-1/2 md:w-auto grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

        <li class="flex justify-center">
          <img class="h-12 lg:h-8 object-contain" src="/images/clients/bill-and-melinda-gates-foundation.jpg" alt="">
        </li>

        <li class="flex justify-center">
          <img class="h-12 lg:h-8 object-contain" src="/images/clients/data2x.png" alt="">
        </li>

        <li class="flex justify-center">
          <img class="h-12 lg:h-8 object-contain" src="/images/clients/global-affairs-canada.jpeg" alt="">
        </li>

        <li class="flex justify-center">
          <img class="h-20 object-contain" src="/images/clients/idrc.png" alt="">
        </li>

        <li class="flex justify-center">
          <img class="h-20 object-contain" src="/images/clients/islamic-relief-canada.png" alt="">
        </li>

        <li class="flex justify-center">
          <img class="h-12 lg:h-10 object-contain" src="/images/clients/malala-fund.png" alt="">
        </li>

        <li class="flex justify-center">
          <img class="h-12 object-contain" src="/images/clients/oxfam-canada.png" alt="">
        </li>

        <li class="flex justify-center">
          <img class="h-20 object-contain" src="/images/clients/urban-institute.jpg" alt="">
        </li>

      </ul>

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
