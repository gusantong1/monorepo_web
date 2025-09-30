<script lang="ts" setup>
import type { CalendarHeadCellProps } from 'radix-vue';

import type { HTMLAttributes } from 'vue';

import { cn } from '@web-core/shared/utils';

import { reactiveOmit } from '@vueuse/core';
import { CalendarHeadCell, useForwardProps } from 'radix-vue';

const props = defineProps<
  CalendarHeadCellProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = reactiveOmit(props, 'class');

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarHeadCell
    :class="
      cn(
        'text-muted-foreground w-9 rounded-md text-[0.8rem] font-normal',
        props.class,
      )
    "
    v-bind="forwardedProps"
  >
    <slot></slot>
  </CalendarHeadCell>
</template>
