<script setup lang="ts">
import { ref } from 'vue';

import { LangEnum, loadLocaleMessages } from '@web/locales';
import { ThemeEnum, useThemeStore } from '@web/stores';

// import { DatePicker } from '@web-core/primevue-ui';
import { Calendar } from '@web-core/shadcn-ui';
// import DatePicker from 'volt/DatePicker.vue';

const themeStore = useThemeStore();

// 语言切换
const chanLange = () => {
  const currentLang = document
    .querySelector('html')
    ?.getAttribute('lang') as LangEnum;
  console.log(currentLang);
  if (currentLang === LangEnum.ZH_CN) {
    loadLocaleMessages(LangEnum.EN_US);
  } else {
    loadLocaleMessages(LangEnum.ZH_CN);
  }
};

const value = ref<Date | null>(null);

const date = ref(null);
</script>

<template>
  <div>
    <button @click="chanLange">{{ $t('demos.changeLang') }}</button>

    <div class="bg-primary-demo h-[200px] w-[200px]">
      <div class="text-text-demo">321321312321321323</div>
      <button @click="themeStore.setCurrentTheme(ThemeEnum.LIGHT)">
        主题切换
      </button>
    </div>

    <div class="scss-box">
      <div class="scss-box-text">321321312321321323</div>
      <button @click="themeStore.setCurrentTheme(ThemeEnum.DARK)">
        主题切换
      </button>
    </div>

    <div>
      <div>shadcn</div>
      <div class="card flex justify-center">
        <Calendar
          v-model="value"
          weekday-format="short"
          class="rounded-md border"
        />
      </div>
    </div>

    <!-- <div>
      <div>shadcn</div>
      <div class="card flex justify-center">
        <DatePicker v-model="date" />
      </div>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.scss-box {
  background: var(--primary-demo);

  .scss-box-text {
    color: var(--text-demo);
  }
}
</style>
