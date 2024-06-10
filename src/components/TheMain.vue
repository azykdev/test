<template>
  <main>
    <div class="md:w-10 lg:w-8 mx-auto p-3">
      <h2 class="text-900 text-center mb-5">Документы</h2>

      <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
          <div class="border-1 surface-border border-round-md m-2 p-3 flex flex-column justify-content-between h-20rem">
            <div>
              <h3 class="text-blue-600 text-xl">{{ slotProps.data.title }}</h3>
              <p class="text-600 mt-2">{{ slotProps.data.text }}</p>
            </div>

            <Button label="Подробнее" class="bg-primary" @click="$router.push(`/document/${slotProps.data.id}`)"></Button>
          </div>
        </template>
      </Carousel>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
  { id: 1, title: 'Лицензионный договор', text: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ' },
  { id: 2, title: 'Политика обработки персональных данных', text: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.' },
  { id: 3, title: 'Информация об оплате', text: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.' },
  { id: 1, title: 'Лицензионный договор', text: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ' },
  { id: 2, title: 'Политика обработки персональных данных', text: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.' },
  { id: 3, title: 'Информация об оплате', text: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.' }
]);




</script>

<style scoped></style>