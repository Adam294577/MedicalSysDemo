<script setup></script>
<template>
  <div
    class="w-[calc(100%-0.25rem)] mx-auto h-[363px] border-[1px] border-[#262626] rounded-[4px] flex overflow-hidden"
  >
    <DiagnosisTitle>
      <template #titleEng> <span class="text-[#3F6600]">M</span> </template>
      <template #titleCH>
        <span class="text-[#3F6600] text-[18px]">用藥</span>
      </template>
      <template #title2Eng> <span class="text-[#0050B3]">E</span> </template>
      <template #title2CH> <span class="text-[#0050B3]">處置</span> </template>
      <template #title2CH2> <span class="text-[#0050B3]">檢驗</span> </template>
      <template #List><DiagnosisBtnListME /></template>
    </DiagnosisTitle>
    <DiagnosisContME />
  </div>
</template>

<style lang="scss" scoped></style>
