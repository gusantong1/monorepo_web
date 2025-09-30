<script lang="ts" setup>
import type { CalendarHeaderProps } from 'radix-vue';

import type { HTMLAttributes } from 'vue';

import { cn } from '@web-core/shared/utils';

import { reactiveOmit } from '@vueuse/core';
import { CalendarHeader, useForwardProps } from 'radix-vue';

const props = defineProps<
  CalendarHeaderProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = reactiveOmit(props, 'class');

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarHeader
    :class="
      cn('relative flex w-full items-center justify-between pt-1', props.class)
    "
    v-bind="forwardedProps"
  >
    <slot></slot>
  </CalendarHeader>
</template>
