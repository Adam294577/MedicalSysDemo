<script setup></script>
<template>
  <div
    class="w-[calc(50%-0.25rem)] h-[279px] border-[1px] border-[#262626] rounded-[4px] flex overflow-hidden"
  >
    <DiagnosisTitle>
      <template #titleEng> A </template>
      <template #titleCH> 診斷 </template>
      <template #List><DiagnosisBtnListA /></template>
    </DiagnosisTitle>
    <DiagnosisContA />
  </div>
</template>

<style lang="scss" scoped></style>
