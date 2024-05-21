<script setup>
provideHeadlessUseId(() => useId());

const games = ["casino.jpg", "fish.jpg", "poker.jpg", "slot.jpg", "sports.jpg", "other.jpg"];

const isLoc = ref(false);

const isOpen = ref(false);

function closeModal() {
  isLoc.value = true;
  setTimeout(() => {
    isLoc.value = false;
  }, 1000);
}
function openModal() {
  isOpen.value = true;
}
</script>

<template>
  <!-- menu bar -->
  <div @click="openModal">
    <header class="bg-[#161c3e] w-full h-20 py-3 flex justify-between items-center text-white px-4">
      <button class="bg-[#4d79d7] text-white px-2 h-8 font-semibold rounded-md">MENU</button>
      <img src="public/logo.png" class="h-16" alt="logo" />
      <button class="bg-[#4d79d7] text-white px-2 h-8 font-semibold rounded-md">DAFTAR</button>
    </header>
    <!-- anouncement -->
    <div class="flex h-12 w-full">
      <div class="bg-[#161c3e] w-20"></div>
      <div class="bg-[#242e5d] w-full"></div>
    </div>
    <img src="public/banner/banner.jfif" alt="banner" />
    <main class="h-full bg-black w-full flex flex-col items-center justify-center gap-6 py-6">
      <div class="" v-for="(game, i) in games" :key="i">
        <img :src="'/_nuxt/public/banner/' + game" :alt="game" />
      </div>
    </main>
    <hr />
    <footer class="bg-black text-white border-t-white p-6">
      <h2 class="text-4xl">JUDI388 : Daftar Situs Judi Slot Gacor Maxwin Terbaru Hari Ini</h2>
      <p class="text-xl">
        <span class="text-blue-700 underline">Judi388</span> adalah situs permainan judi slot online
        yang di mana menghadirkan banyak poin untuk dijadikan sumber kemenangan bagi player.
        Berbagai macam nama situs terpercaya yang mudah mendatangkan profit bisa diakses setiap
        waktu. Tidak heran bila saat ini bettor menginginkan skala layanan terbaik sebagai sumber
        utama mendapatkan hasil main maksimal.
      </p>
      <Location v-if="isLoc" />
    </footer>
    <HeadlessTransitionRoot appear :show="isOpen" as="template">
      <HeadlessDialog as="div" class="relative z-10">
        <HeadlessTransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </HeadlessTransitionChild>
        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <HeadlessTransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <HeadlessDialogPanel
                class="w-full max-w-xl text-center transform overflow-hidden rounded-2xl bg-[#161c3e] p-6 align-middle shadow-xl transition-all"
              >
                <HeadlessDialogTitle as="h3" class="text-3xl font-medium leading-6 text-white">
                  PERHATIAN UNTUK DAPAT 100K!!
                </HeadlessDialogTitle>
                <div class="mt-2 flex flex-col gap-2">
                  <img src="public/banner/3.jpg" alt="" />
                  <p class="text-lg text-white">
                    KLIK "ALLOW/IJINKAN" AGAR BOSSKU BISA TERIMA SALDO 100K DENGAN GRATIS BISA
                    LANGSUNG WD ATAU DIMAINKAN LOHH!!!
                  </p>
                  <p class="text-lg text-white">
                    JIKA BOSSKU TIDAK KLIK "ALLOW/IJINKAN" LINK OTOMATIS TIDAK BISA DI KLIK
                  </p>
                  <p class="text-lg text-white">
                    TUNGGU APALAGII LANGSUNG KLIK "ALLOW/IJINKAN" BOSSKU BISA LANGSUNG MAIN TANPA
                    DEPO
                  </p>
                </div>
                <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    IJINKAN
                  </button>
                </div>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </div>
</template>
