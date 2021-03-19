<template>
  <div>
    <div class="bg-white">
      <div class="container py-32">

        <h2 class="text-5xl font-extrabold text-brand-green-900 tracking-tight">
          Our Services
        </h2>
        <p class="mt-4  text-2xl text-gray-600 max-w-prose">
          Our expertise in gender equality and women’s rights is diverse, ranging from education and decent employment, to health and gender-based violence, to social norms and care work. We work with organizations to provide the following types of services:
        </p>
        <div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">

          <div
            v-for="service in services"
            :key="service.title" >
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-brand-green-600 to-brand-green-700 shadow-sm">
              <!-- Heroicon name: outline/inbox -->
              <div v-html="service.svg">
              </div>
            </div>
            <div class="mt-6">
              <h3 class="text-2xl font-medium text-brand-green-700">
                {{ service.title }}
              </h3>
              <p class="mt-2 text-xl text-gray-600">
                {{ service.description }}
              </p>
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

    const serviceSvgClass = 'h-6 w-6 text-white';

    const services = [
      {
        svg: `
          <svg class="${serviceSvgClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          `,
        title: 'Research',
        description: 'Design, facilitation and analysis of research on gender equality and women’s empowerment ',
      },
      {
        svg: `
          <svg class="${serviceSvgClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          `,
        title: 'Evaluation',
        description: 'Evaluation of development programs, including the design of instruments and indicators',
      },
      {
        svg: `
          <svg class="${serviceSvgClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          `,
        title: 'Analysis',
        description: 'Evidence reviews and landscaping analysis of development issues, programs and trends',
      },
      {
        svg: `
          <svg class="${serviceSvgClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          `,
        title: 'Knowledge translation',
        description: 'Translating technical data and evidence into alternative knowledge products',
      },
      {
        svg: `
          <svg class="${serviceSvgClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          `,
        title: 'Event facilitation',
        description: 'Facilitation of training seminars, workshops, and public learning events',
      },
      {
        svg: `
          <svg class="${serviceSvgClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          `,
        title: 'Proposal development',
        description: 'Project and grant proposal development',
      },
       {
        svg: `
          <svg class="${serviceSvgClass}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          `,
        title: 'Strategic planning',
        description: 'Organizational strategic planning, evaluation and learning',
      }
    ];

    return {
      services,
    }

  }
}
</script>
