<template>
  <header>
    <div class="md:w-10 lg:w-8 mx-auto p-3">
      <div class="grid ">
        <div class="lg:col-6">
          <h1 style="font-size: 41px;">Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>

          <form class="mt-5" @submit.prevent>
            <div class="grid">
              <div class="md:col-7 col-12">
                <div class="flex flex-column gap-2">
                  <label for="car_number">Номер автомобиля</label>
                  <InputText id="car_number" placeholder="АА 123 АА" required />
                </div>
              </div>
              <div class="md:col-5 col-12">
                <div class="flex flex-column gap-2">
                  <label for="region">Регион</label>
                  <InputText id="region" placeholder="Регион" required />
                </div>
              </div>
              <div class="col-12">
                <div class="flex flex-column gap-2">
                  <label for="region">Свидетельство о регистрации ТС</label>
                  <InputText id="region" placeholder="Свидетельство" required />
                </div>
              </div>
            </div>

            <div class="mt-3 sm:flex lg:block gap-2">
              <Button type="submit" class=" border-round-lg mb-2 mr-2 ">
                <span class="mb-1">Проверить штрафы</span>
                <i class="pi pi-arrow-right ml-2 "></i>
              </Button>
              <Button type="button" class=" border-round-lg mb-2" outlined @click="visible = true">
                <i class="pi pi-youtube mr-2 text-2xl"></i>
                <span class="text-900 mr-1 mb-1">О сервисе </span>
                <span class="mb-1"> (1 мин. 20 сек)</span>
              </Button>
            </div>

            <p class="mt-3 text-600" style="font-size: 13px;">Нажимая «Проверить штрафы» вы соглашаетесь с политикой
              обработки персональных данных и принимаете оферту</p>

          </form>
        </div>
        <div class="lg:col-6">
          <img src="@/assets/img/header-img.png" alt="" class="w-full mt-5 lg:mt-0">
        </div>
      </div>

      <h2 class="mt-6 text-900 text-center" style="font-size: 34px;">Плюсы использования сервиса «Компас» для анализа
        штрафов</h2>

      <div class="grid mt-5">
        <div class="md:col-4 sm:col-6 col-12" v-for="cart in carts">
          <div
            class="card flex align-items-center bg-300 border-1 border-round-md border-200 p-3 h-full bg-bluegray-50">
            <img :src="cart.img" alt="" class="mr-3">
            <div>
              <h4 class="text-blue-600 ">{{ cart.title }}</h4>
              <p class="text-600 mt-2" style="font-size: 13px;">{{ cart.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>


  <Dialog v-model:visible="visible" modal  :style="{ width: '960px', padding: '0' }">
    <img src="@/assets/img/Rectangle 7.png" alt="" class="w-full">
  </Dialog>

</template>

<script setup>
import Frame from '@/assets/img/Frame.png'
import Frame1 from '@/assets/img/Frame (1).png'
import Frame2 from '@/assets/img/Frame (2).png'
import Frame3 from '@/assets/img/Frame (3).png'
import Frame4 from '@/assets/img/Frame (4).png'
import Frame5 from '@/assets/img/Frame (5).png'
import { ref } from 'vue'

const visible = ref(false);

const carts = [
  {
    img: Frame,
    title: 'Неограниченный автопарк',
    text: 'Можно добавить неограниченное кол-во машин и водителей',
  },
  {
    img: Frame1,
    title: 'Сокращение затрат до 50%',
    text: 'Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке',
  },
  {
    img: Frame2,
    title: 'Безопасность',
    text: 'Данные передаются в зашифрованном виде, они доступны только получателю',
  },
  {
    img: Frame3,
    title: 'Уведомление о погашении',
    text: 'Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП',
  },
  {
    img: Frame4,
    title: 'Квитанция об оплате',
    text: 'После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.',
  },
  {
    img: Frame5,
    title: 'Все история сохраняется по каждой машине',
    text: 'Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам',
  },
]
</script>

<style scoped>
header {
  padding: 50px 10px;
}

label {
  font-weight: 500;
  font-size: 12px;
}
</style>