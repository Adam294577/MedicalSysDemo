<script setup></script>
<template>
  <div
    class="w-[62px] bg-[#DEEDF3] relative overflow-hidden border-r-[#262626] border-r-[1px] pt-[4px] h-full"
  >
    <div class="text-center">
      <span
        class="w-[40px] text-[22px] leading-[22px] inline-block font-bold text-[#434343]"
      >
        <slot name="titleEng"></slot>
      </span>
      <span
        class="w-[40px] text-[20px] leading-[22px] inline-block font-bold text-[#434343]"
      >
        <slot name="titleCH"></slot>
      </span>
      <span
        class="w-[40px] text-[20px] leading-[22px] inline-block font-bold text-[#434343]"
      >
        <slot name="titleCH2"></slot>
      </span>
    </div>
    <div class="text-center relative -top-[22px]">
      <span
        class="w-[40px] text-[20px] leading-[22px] inline-block font-bold text-[#434343]"
      >
        <slot name="title2Eng"></slot>
      </span>
      <span
        class="w-[40px] text-[18px] leading-[22px] inline-block font-bold text-[#434343]"
      >
        <slot name="title2CH"></slot>
      </span>
      <span
        class="w-[40px] text-[18px] leading-[22px] inline-block font-bold text-[#434343]"
      >
        <slot name="title2CH2"></slot>
      </span>
    </div>
    <slot name="List"> </slot>
  </div>
</template>

<style lang="scss" scoped></style>
