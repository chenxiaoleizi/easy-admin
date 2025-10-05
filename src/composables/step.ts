import { ref } from "vue";

export function useStep(stepCount: number) {
  const currentStep = ref(0);

  function previousStep() {
    currentStep.value = Math.max(0, currentStep.value - 1);
  }
  function nextStep() {
    currentStep.value = Math.min(stepCount, currentStep.value + 1);
  }

  return { currentStep, previousStep, nextStep };
}
