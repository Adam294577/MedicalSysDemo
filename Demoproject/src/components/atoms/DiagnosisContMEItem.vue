<script setup>
const GreenDemoData = reactive({
  data: [
    { t1: 1, t2: "A001584100", t3: "MAGNESIA TABLETS ”WASHINGTON”" },
    { t1: 2, t2: "A001437277", t3: "AMPICILLIN INJECTION 500 MG ”CHI.." },
    { t1: 3, t2: "A007157100", t3: "OXAPAM TABLETS" },
    { t1: 4, t2: "INCALM TABLETS ”SINPHAR”" },
  ],
});
const BlueDemoData = reactive({
  data: [
    { t1: 5, t2: "A1004C", t3: "第一階段疾病管理照護費(未連續管理3個..." },
    { t1: 6, t2: "01C-07", t3: "胸腔檢查（包括各種角度部位之胸腔檢查.." },
    { t1: 7, t2: "06001C", t3: "酸鹼度反應" },
    { t1: 8, t2: "", t3: "" },
    { t1: 9, t2: "", t3: "" },
    { t1: 10, t2: "", t3: "" },
  ],
});
</script>
<template>
  <li
    class="h-[42px] flex items-center border-b-[1px] border-[#BFBFBF] bg-[#E0F3DE]"
    v-for="list in GreenDemoData.data"
    :key="list.t2"
  >
    <!-- DiagnosisContItem_ME -->
    <span
      class="inline-block h-full w-[80px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- BtnType -->
      <button
        class="BtnShadow bg-[#FFCCC7] border-[#FF7875] border-[1px] rounded-[3px] px-[10px] h-[32px] text-[19px] font-medium text-[#434343] leading-[22px]"
      >
        刪除
      </button>
    </span>
    <span
      class="inline-block h-full w-[40px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- DiagnosisSort -->
      <span class="text-[22px]">{{ list.t1 }}</span>
    </span>
    <span
      class="inline-block h-full w-[220px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- DiagnosisID -->
      <div class="relative flex items-center justify-center h-full">
        <input
          class="bg-[#F8FDFF] w-[208px] h-[38px] rounded-[2px] border-[1px] border-[#096DD9] px-[6px] py-[5px] text-[#434343] text-[22px] font-medium"
          type="text"
          v-model="list.t2"
        />
        <div class="bg-[#F8FDFF] absolute w-[60px] flex justify-around right-2">
          <SvgIcon class="w-[28px] h-[28px]" name="ClearTxtBtn" />
          <SvgIcon class="w-[28px] h-[28px]" name="UnderOrderBtn" />
        </div>
      </div>
    </span>
    <span
      class="inline-block h-full w-[52px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <SvgIcon class="w-[52px] h-[42px] cursor-pointer" name="SearchBtn" />
    </span>
    <span
      class="inline-block h-full w-[45px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- PharmacopoeiaBtn -->
      <div class="h-full flex justify-center items-center">
        <SvgIcon class="w-[31px] h-[30px]" name="PharmacopoeiaBtn" />
      </div>
    </span>
    <span
      class="inline-block h-full w-[calc(100%-1411px)] border-r-[1px] pl-3 border-[#BFBFBF] leading-[42px]"
    >
      <!-- PharmacopoeiaName  -->
      <p class="font-normal text-[22px] whitespace-nowrap">
        {{ list.t3 }}
      </p>
    </span>
    <span
      class="inline-block h-full w-[305px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- PharmacopoeiaNote  -->
      <div class="h-full flex justify-center items-center">
        <input
          class="bg-[#F8FDFF] w-[293px] h-[38px] rounded-[2px] border-[1px] border-[#096DD9] px-[6px] py-[5px] text-[#434343] text-[22px] font-medium"
          type="text"
          value=""
        />
      </div>
      <!-- PharmacopoeiaNoteWithTagIcon  -->
    </span>
    <span
      class="inline-block h-full w-[90px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- PharmacopoeiaSlow  -->
      <div class="h-full flex justify-center items-center">
        <input
          class="bg-[#F0F0F0] w-[78px] h-[38px] rounded-[2px] border-[1px] border-[#BFBFBF] px-[6px] py-[5px] text-[#434343] text-[22px] font-normal"
          type="text"
          value="3個月"
          disabled
        />
      </div>
    </span>
    <span
      class="inline-block h-full w-[80px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- PharmacopoeiaSingleTimes  -->
      <div class="h-full flex justify-center items-center">
        <input
          class="bg-[#F0F0F0] w-[78px] h-[38px] rounded-[2px] border-[1px] border-[#BFBFBF] px-[6px] py-[5px] text-[#434343] text-[22px] font-normal"
          type="text"
          value="1"
          disabled
        />
      </div>
    </span>
    <span
      class="inline-block h-full w-[100px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- PharmacopoeiaFrequency  -->
      <div class="h-full flex justify-center items-center">
        <input
          class="bg-[#F0F0F0] w-[88px] h-[38px] rounded-[2px] border-[1px] border-[#BFBFBF] px-[6px] py-[5px] text-[#434343] text-[22px] font-normal"
          type="text"
          value="AC"
          disabled
        />
      </div>
    </span>
    <span
      class="inline-block h-full w-[60px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- SelfInsuranceDay  -->
      <div class="h-full flex justify-center items-center">
        <input
          class="bg-[#F0F0F0] w-[48px] h-[38px] rounded-[2px] border-[1px] border-[#BFBFBF] px-[6px] py-[5px] text-[#434343] text-[22px] font-normal"
          type="text"
          value="0"
          disabled
        />
      </div>
    </span>
    <span
      class="inline-block h-full w-[60px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- HealthInsuranceDay  -->
      <div class="h-full flex justify-center items-center">
        <input
          class="bg-[#F0F0F0] w-[48px] h-[38px] rounded-[2px] border-[1px] border-[#BFBFBF] px-[6px] py-[5px] text-[#434343] text-[22px] font-normal"
          type="text"
          value="3"
          disabled
        />
      </div>
    </span>
    <span
      class="inline-block h-full w-[40px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- TotalDay  -->
      <span class="text-[22px]">1</span>
    </span>
    <span
      class="inline-block h-full w-[40px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- NeedGrind  -->
      <div class="h-full flex justify-center items-center">
        <input
          class="bg-[#F0F0F0] w-[16px] h-[16px] rounded-[2px] px-[6px] py-[5px] text-[#434343] text-[22px] font-normal"
          type="checkbox"
        />
      </div>
    </span>
    <span
      class="inline-block h-full w-[120px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- Pathway  -->
      <div class="h-full flex justify-center items-center">
        <input
          class="bg-[#F0F0F0] w-[108px] h-[38px] rounded-[2px] border-[1px] border-[#BFBFBF] px-[6px] py-[5px] text-[#434343] text-[22px] font-normal"
          type="text"
          value="PO"
          disabled
        />
      </div>
    </span>
    <span
      class="inline-block h-full w-[79px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- Dosage  -->
      <span class="text-[22px]">9</span>
    </span>
  </li>

  <li
    class="h-[42px] flex items-center border-b-[1px] border-[#BFBFBF]"
    v-for="list in BlueDemoData.data"
    :key="list.t2"
  >
    <!-- DiagnosisContItem_ME -->
    <span
      class="inline-block h-full w-[80px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- BtnType -->
      <button
        class="BtnShadow bg-[#FFCCC7] border-[#FF7875] border-[1px] rounded-[3px] px-[10px] h-[32px] text-[19px] font-medium text-[#434343] leading-[22px]"
      >
        刪除
      </button>
    </span>
    <span
      class="inline-block h-full w-[40px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- DiagnosisSort -->
      <span class="text-[22px]">{{ list.t1 }}</span>
    </span>
    <span
      class="inline-block h-full w-[220px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- DiagnosisID -->
      <div class="relative flex items-center justify-center h-full">
        <input
          class="bg-[#F8FDFF] w-[208px] h-[38px] rounded-[2px] border-[1px] border-[#096DD9] px-[6px] py-[5px] text-[#434343] text-[22px] font-medium"
          type="text"
          v-model="list.t2"
        />
        <div class="bg-[#F8FDFF] absolute w-[60px] flex justify-around right-2">
          <SvgIcon class="w-[28px] h-[28px]" name="ClearTxtBtn" />
          <SvgIcon class="w-[28px] h-[28px]" name="UnderOrderBtn" />
        </div>
      </div>
    </span>
    <span
      class="inline-block h-full w-[52px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <SvgIcon class="w-[52px] h-[42px] cursor-pointer" name="SearchBtn" />
    </span>
    <span
      class="inline-block h-full w-[45px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
    </span>
    <span
      class="inline-block h-full w-[calc(100%-1411px)] border-r-[1px] pl-3 border-[#BFBFBF] leading-[42px]"
    >
      <!-- PharmacopoeiaName  -->
      <p class="font-normal text-[22px] whitespace-nowrap">{{ list.t3 }}</p>
    </span>
    <span
      class="inline-block h-full w-[305px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <!-- PharmacopoeiaNoteWithTagIcon  -->
      <div class="h-full flex justify-center items-center">
        <!-- TagIcon -->
        <SvgIcon class="w-[28px] h-[28px] relative -left-1" name="TagIcon" />
        <input
          class="bg-[#F8FDFF] w-[260px] h-[38px] rounded-[2px] border-[1px] border-[#096DD9] px-[6px] py-[5px] text-[#434343] text-[22px] font-medium"
          type="text"
          value=""
        />
      </div>
    </span>
    <span
      class="inline-block h-full w-[90px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
    </span>
    <span
      class="inline-block h-full w-[80px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
    </span>
    <span
      class="inline-block h-full w-[100px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
    </span>
    <span
      class="inline-block h-full w-[60px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
    </span>
    <span
      class="inline-block h-full w-[60px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
    </span>
    <span
      class="inline-block h-full w-[40px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
    </span>
    <span
      class="inline-block h-full w-[40px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
    </span>
    <span
      class="inline-block h-full w-[120px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
    </span>
    <span
      class="inline-block h-full w-[79px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
    </span>
  </li>
</template>

<style lang="scss" scoped></style>
