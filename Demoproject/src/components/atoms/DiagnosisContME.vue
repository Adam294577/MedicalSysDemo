<script setup></script>
<template>
  <div class="bg-[#deedf3] w-[calc(100%-62px)]">
    <ul class="bg-[#4466C0] border-[1px] border-[#85A5FF] w-full h-[26px] flex">
      <!-- DiagnosisContRow -->
      <li class="w-[80px] text-center text-white font-bold leading-[22px]">
        操作
      </li>
      <li class="w-[40px] text-center text-white font-bold leading-[22px]">
        序號
      </li>
      <li class="w-[220px] text-center text-white font-bold leading-[22px]">
        院內代碼
      </li>
      <li class="w-[52px] text-center text-white font-bold leading-[22px]"></li>
      <li class="w-[45px] text-center text-white font-bold leading-[22px]">
        藥典
      </li>
      <li class="flex-1 text-center text-white font-bold leading-[22px]">
        藥品名稱/治療處置名稱
      </li>
      <li class="w-[305px] text-center text-white font-bold leading-[22px]">
        註記
      </li>
      <li
        class="w-[90px] text-center text-white font-bold leading-[22px] relative -left-2"
      >
        慢箋
      </li>
      <li
        class="w-[80px] text-center text-white font-bold leading-[22px] relative -left-2"
      >
        單次劑量
      </li>
      <li
        class="w-[100px] text-center text-white font-bold leading-[22px] relative -left-2"
      >
        頻次
      </li>
      <li
        class="w-[60px] text-center text-white font-bold leading-[22px] relative -left-2"
      >
        自費天
      </li>
      <li
        class="w-[60px] text-center text-white font-bold leading-[22px] relative -left-2"
      >
        健保天
      </li>
      <li
        class="w-[40px] text-center text-white font-bold leading-[22px] relative -left-2"
      >
        日
      </li>
      <li
        class="w-[40px] text-center text-white font-bold leading-[22px] relative -left-2"
      >
        磨粉
      </li>
      <li
        class="w-[120px] text-center text-white font-bold leading-[22px] relative -left-2"
      >
        途徑
      </li>
      <li
        class="w-[79px] text-center text-white font-bold leading-[22px] relative -left-2"
      >
        總量
      </li>
    </ul>
    <ul class="ListScroll h-[363px] overflow-hidden overflow-y-scroll pb-6">
      <DiagnosisContMEItem />
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
