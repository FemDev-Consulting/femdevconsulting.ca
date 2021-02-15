<template>
  <div>
    <header class="bg-white">
      <h2 class="sr-only">Site header information</h2>
      <div class="container">
        <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a
              class="flex items-center"
              href="#">
              <svg
                class="h-8 w-auto sm:h-10 text-brand-green-600"
                viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- fill="#F5CFCE" stroke="#DEBBBA" -->
                <circle cx="105.5" cy="105.5" r="105" class=" fill-current" />
                <rect x="74" y="62" width="71" height="17" fill="white"/>
                <rect x="74" y="103" width="66" height="17" fill="white"/>
                <rect x="74" y="141" width="17" height="17" fill="white"/>
              </svg>
              <span class=" ml-5 text-2xl font-semibold tracking-widest text-brand-green-600">FEMDEV</span>
            </a>
          </div>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <!--
            <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            -->
            <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-green-600 hover:bg-brand-green-700">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
