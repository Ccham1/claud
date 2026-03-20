<template>
  <section id="about" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col lg:flex-row gap-14 items-start">

        <!-- Text content -->
        <div class="flex-1 min-w-0">

          <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet New Friends in Barcelona Over 30
          </h1>
          <p class="text-gray-600 leading-relaxed mb-10">
            Amigos 30+ is Barcelona's warmest community for adults aged 30 and above. Whether you're
            a long-time resident or freshly arrived expat, we make it easy to build real friendships
            outside of work. <a href="#about" class="text-orange-600 hover:underline font-medium">Learn more about who we are</a>
            and why hundreds of members keep coming back.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mb-3">
            Join Events and Meetups in Barcelona
          </h2>
          <p class="text-gray-600 leading-relaxed mb-10">
            From rooftop dinners and weekend hikes in the Collserola hills to language exchanges and
            cooking classes in the Eixample — there's always something on the calendar.
            Our <a href="#events" class="text-orange-600 hover:underline font-medium">upcoming events</a>
            are open to all members and designed to help you meet people naturally, without any pressure.
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mb-3">
            Chat and Connect Safely
          </h2>
          <p class="text-gray-600 leading-relaxed mb-10">
            Once you've connected with a fellow member, you can send messages directly through our
            platform — no need to share personal contact details straight away. Our
            <a href="#chat" class="text-orange-600 hover:underline font-medium">built-in chat</a>
            keeps conversations private and gives you full control over who can reach you. Safety
            and respect are at the heart of everything we do.
          </p>

          <div class="grid sm:grid-cols-3 gap-8">

            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">How It Works</h3>
              <p class="text-gray-600 leading-relaxed text-sm">
                Sign up in seconds, browse member profiles, and start connecting.
                <a href="#how-it-works" class="text-orange-600 hover:underline font-medium">See the full process →</a>
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Frequently Asked Questions</h3>
              <p class="text-gray-600 leading-relaxed text-sm">
                Wondering about privacy, pricing, or safety? We've answered the most common questions.
                <a href="#faq" class="text-orange-600 hover:underline font-medium">Read the FAQ →</a>
              </p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Get in Touch</h3>
              <p class="text-gray-600 leading-relaxed text-sm">
                Have a question or just want to say hello? We'd love to hear from you.
                <a href="#contact" class="text-orange-600 hover:underline font-medium">Contact us →</a>
              </p>
            </div>

          </div>
        </div>

        <!-- Image -->
        <div class="w-full lg:w-80 xl:w-96 flex-shrink-0">
          <div class="rounded-3xl overflow-hidden bg-gradient-to-br from-orange-400 via-orange-500 to-amber-400 aspect-[3/4] flex flex-col items-center justify-center p-8 shadow-lg">

            <!-- Illustration -->
            <svg viewBox="0 0 200 200" class="w-full max-w-[220px]" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Person 1 -->
              <circle cx="70" cy="72" r="22" fill="white" fill-opacity="0.9"/>
              <circle cx="70" cy="62" r="11" fill="#fed7aa"/>
              <path d="M48 95 Q70 85 92 95 L92 115 Q70 108 48 115 Z" fill="#fed7aa"/>
              <!-- Person 2 -->
              <circle cx="130" cy="72" r="22" fill="white" fill-opacity="0.9"/>
              <circle cx="130" cy="62" r="11" fill="#bfdbfe"/>
              <path d="M108 95 Q130 85 152 95 L152 115 Q130 108 108 115 Z" fill="#bfdbfe"/>
              <!-- Person 3 -->
              <circle cx="100" cy="128" r="22" fill="white" fill-opacity="0.9"/>
              <circle cx="100" cy="118" r="11" fill="#bbf7d0"/>
              <path d="M78 151 Q100 141 122 151 L122 171 Q100 164 78 171 Z" fill="#bbf7d0"/>
              <!-- Connecting lines -->
              <line x1="70" y1="94" x2="100" y2="106" stroke="white" stroke-width="2" stroke-opacity="0.6" stroke-dasharray="4 3"/>
              <line x1="130" y1="94" x2="100" y2="106" stroke="white" stroke-width="2" stroke-opacity="0.6" stroke-dasharray="4 3"/>
              <!-- Heart -->
              <path d="M97 50 C97 47 100 44 100 44 C100 44 103 47 103 50 C103 53 100 56 100 56 C100 56 97 53 97 50Z" fill="white" fill-opacity="0.8"/>
            </svg>

            <p class="text-white font-bold text-xl mt-6 text-center leading-tight">500+ members<br/>across Barcelona</p>
            <p class="text-white/80 text-sm mt-2 text-center">30+ nationalities</p>

          </div>
          <a
            href="#contact"
            class="mt-4 flex items-center justify-center w-full py-3 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Join Amigos 30+
          </a>
        </div>

      </div>
    </div>
  </section>
</template>
