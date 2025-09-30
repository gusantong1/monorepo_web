<script lang="ts" setup>
import type { CalendarGridRowProps } from 'radix-vue';

import type { HTMLAttributes } from 'vue';

import { cn } from '@web-core/shared/utils';

import { reactiveOmit } from '@vueuse/core';
import { CalendarGridRow, useForwardProps } from 'radix-vue';

const props = defineProps<
  CalendarGridRowProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = reactiveOmit(props, 'class');

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarGridRow :class="cn('flex', props.class)" v-bind="forwardedProps">
    <slot></slot>
  </CalendarGridRow>
</template>
