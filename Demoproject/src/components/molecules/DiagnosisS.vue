<script setup></script>
<template>
  <div
    class="w-[calc(50%-0.25rem)] h-[279px] border-[1px] border-[#262626] rounded-[4px] flex overflow-hidden"
  >
    <DiagnosisTitle>
      <template #titleEng> S </template>
      <template #titleCH> 主訴 </template>
      <template #List><DiagnosisBtnListS /></template>
    </DiagnosisTitle>
    <div class="bg-white w-[calc(100%-62px)]"></div>
  </div>
</template>

<style lang="scss" scoped></style>
