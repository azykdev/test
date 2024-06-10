<template>
  <nav>
    <div class="lg:w-8 md:w-10 h-full mx-auto px-3 flex align-items-center justify-content-between ">
      <div class="flex align-items-center gap-4">
        <RouterLink to="/">
          <img src="@/assets/img/logo.png" alt="logo" class="nav-logo">
        </RouterLink>
        <RouterLink to="/" class="hidden md:block">Тарифы</RouterLink>
        <RouterLink to="/" class="hidden md:block">Контакты</RouterLink>
      </div>

      <div class="flex align-items-center gap-4">
        <a href="tel:+74951184422" class="text-white hidden md:block"> +7 495 118-44-22</a>
        <RouterLink to="/">Вход</RouterLink>
        <RouterLink to="/" class="bg-primary p-2 border-round-md">Регистрация</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped>
nav {
  height: 60px;
  width: 100%;
  background: linear-gradient(to right, #000000, #1C2734);
}

.nav-logo {
  height: 26px;
}

a {
  color: white;
}
</style>