<template>
  <div>
    <!-- Alternating Feature Sections -->
    <div class="relative pt-16 pb-32 overflow-hidden">
      <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"></div>
      <div class="relative">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div class="mt-20">
                 <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Get in touch
                </h2>
                <p class="mt-3 text-lg leading-6 text-gray-500">
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
                </p>
                <dl class="mt-8 text-base text-gray-500">
                  <div>
                    <dt class="sr-only">Postal address</dt>
                    <dd>
                      <p>742 Evergreen Terrace</p>
                      <p>Springfield, OR 12345</p>
                    </dd>
                  </div>
                  <div class="mt-6">
                    <dt class="sr-only">Phone number</dt>
                    <dd class="flex">
                      <!-- Heroicon name: outline/phone -->
                      <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span class="ml-3">
                        +1 (555) 123-4567
                      </span>
                    </dd>
                  </div>
                  <div class="mt-3">
                    <dt class="sr-only">Email</dt>
                    <dd class="flex">
                      <!-- Heroicon name: outline/mail -->
                      <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span class="ml-3">
                        support@example.com
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg" alt="Inbox user interface">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {

  }
}
</script>
