<script setup>
const DemoData = reactive({
  data: [
    {
      idx: 0,
      t1: "主",
      t2: "B002",
      t3: "054.2",
      t4: "Cholera due to Vibrio cholerae 01, biovar cholerae",
    },
    {
      idx: 1,
      t1: "次1",
      t2: "B003",
      t3: "054.72",
      t4: "Cholera, unspecified",
    },
    {
      idx: 2,
      t1: "次2",
      t2: "R002",
      t3: "785.1",
      t4: "Typhoid fever with heart involvement",
    },
    {
      idx: 3,
      t1: "次3",
      t2: "R008",
      t3: "785.3",
      t4: "Typhoid osteomyelitis",
    },
    {
      idx: 4,
      t1: "次4",
      t2: "R010",
      t3: "785.2",
      t4: "Type 2 diabetes mellitus with mild nonproliferative diabetic ...",
    },
    {
      idx: 5,
      t1: "次5",
      t2: "",
      t3: "",
      t4: "",
    },
    {
      idx: 6,
      t1: "次6",
      t2: "",
      t3: "",
      t4: "",
    },
    {
      idx: 7,
      t1: "次7",
      t2: "",
      t3: "",
      t4: "",
    },
    {
      idx: 8,
      t1: "次8",
      t2: "",
      t3: "",
      t4: "",
    },
    {
      idx: 9,
      t1: "次9",
      t2: "",
      t3: "",
      t4: "",
    },
  ],
});
</script>
<template>
  <li
    v-for="list in DemoData.data"
    :key="list.t1"
    class="h-[42px] flex items-center border-b-[1px] border-[#BFBFBF]"
  >
    <span
      class="inline-block h-full w-[80px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <button
        class="BtnShadow bg-[#FFCCC7] border-[#FF7875] border-[1px] rounded-[3px] px-[10px] h-[32px] text-[19px] font-medium text-[#434343] leading-[22px]"
      >
        刪除
      </button>
    </span>
    <span
      class="inline-block h-full w-[40px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <span class="text-[22px]"> {{ list.t1 }} </span>
    </span>
    <span
      class="inline-block h-full w-[150px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <div class="relative flex items-center justify-center h-full">
        <input
          class="bg-[#F8FDFF] w-[138px] h-[38px] rounded-[2px] border-[1px] border-[#096DD9] px-[6px] py-[5px] text-[#434343] text-[22px] font-medium"
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
      class="inline-block h-full w-[150px] text-center border-r-[1px] border-[#BFBFBF] leading-[42px]"
    >
      <div class="relative flex items-center justify-center h-full">
        <input
          class="bg-[#F8FDFF] w-[138px] h-[38px] rounded-[2px] border-[1px] border-[#096DD9] px-[6px] py-[5px] text-[#434343] text-[22px] font-medium"
          type="text"
          v-model="list.t3"
        />
        <div class="bg-[#F8FDFF] absolute w-[60px] flex justify-around right-2">
          <SvgIcon class="w-[28px] h-[28px]" name="ClearTxtBtn" />
          <SvgIcon class="w-[28px] h-[28px]" name="UnderOrderBtn" />
        </div>
      </div>
    </span>
    <span
      class="inline-block h-full w-[calc(100%-472px)] border-r-[1px] pl-3 border-[#BFBFBF] leading-[42px]"
    >
      <p class="font-medium text-[22px] whitespace-nowrap">
        {{ list.t4 }}
      </p>
    </span>
  </li>
</template>

<style lang="scss" scoped></style>
