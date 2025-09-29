export type {
  AlertProps,
  BeforeCloseScope,
  IconType,
  PromptProps,
} from './alert';
export { useAlertContext } from './alert';
export { default as Alert } from './alert.vue';
export {
  webAlert as alert,
  clearAllAlerts,
  webConfirm as confirm,
  webPrompt as prompt,
} from './AlertBuilder';
