<script setup></script>
<template>
  <div class="bg-[#deedf3] w-[calc(100%-62px)]">
    <ul class="bg-[#4466C0] border-[1px] border-[#85A5FF] w-full h-[26px] flex">
      <li class="w-[80px] text-center text-white font-bold leading-[22px]">
        操作
      </li>
      <li class="w-[40px] text-center text-white font-bold leading-[22px]">
        診斷
      </li>
      <li class="w-[150px] text-center text-white font-bold leading-[22px]">
        ICD-10
      </li>
      <li class="w-[52px] text-center text-white font-bold leading-[22px]"></li>
      <li class="w-[150px] text-center text-white font-bold leading-[22px]">
        ICD-9
      </li>
      <li class="flex-1 text-center text-white font-bold leading-[22px]">
        診斷敘述
      </li>
    </ul>
    <ul class="ListScroll h-[279px] overflow-hidden overflow-y-scroll pb-7">
      <DiagnosisContAItem />
    </ul>
  </div>
</template>

<style scoped>
.ListScroll::-webkit-scrollbar {
  width: var(--sb-size);
}

.ListScroll::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 5px;
}

.ListScroll::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 5px;
}
</style>
