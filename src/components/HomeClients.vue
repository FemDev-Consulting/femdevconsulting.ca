<template>
  <div>
    <div class="bg-white">
      <div class="container py-12 lg:py-52">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Clients
            </h2>
            <p class="mt-3 max-w-3xl text-lg text-gray-500">
              We are proud to partner with organizations that are committed to advancing
              gender equality, social justice and human rights.
            </p>
          </div>
          <div class="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img class="max-h-12" :src="imgData2xUrl" alt="Workcation">
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img class="max-h-12" :src="imgGatesUrl" alt="Workcation">
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img class="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage">
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img class="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple">
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img class="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel">
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img class="max-h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit">
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img class="max-h-12" src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg" alt="Statamic">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import imgGatesUrl from './../assets/images/clients/bill-and-melinda-gates-foundation.jpg';
import imgData2xUrl from './../assets/images/clients/data2x.png';


export default {
  setup () {

    return {
      imgGatesUrl,
      imgData2xUrl,
    }

  }
}
</script>
