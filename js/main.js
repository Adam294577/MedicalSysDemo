window.onload = () => {
  const { createApp, ref, reactive, computed, watch, onMounted, onUpdated ,onBeforeUnmount} =
    Vue;
  const App = {
    setup() {
     
      onMounted(() => {
        const api = axios.create({
          baseURL: "./api/",
        });
        const PromiseArr = [
          
        ];

        const init = async () => {
          try {
            
          } catch {
            console.error("沒接到API");
          }
        };
        init();
      });
    
      return {
        };
    },
  };
  createApp(App).mount("#app");
};
