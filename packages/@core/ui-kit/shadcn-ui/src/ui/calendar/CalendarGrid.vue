<script lang="ts" setup>
import type { CalendarGridProps } from 'radix-vue';

import type { HTMLAttributes } from 'vue';

import { cn } from '@web-core/shared/utils';

import { reactiveOmit } from '@vueuse/core';
import { CalendarGrid, useForwardProps } from 'radix-vue';

const props = defineProps<
  CalendarGridProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = reactiveOmit(props, 'class');

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarGrid
    :class="cn('w-full border-collapse space-y-1', props.class)"
    v-bind="forwardedProps"
  >
    <slot></slot>
  </CalendarGrid>
</template>
