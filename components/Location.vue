<script setup>
import { useGeolocation } from "@vueuse/core";

const { coords, locatedAt, error, resume, pause, isLoading } = useGeolocation();
onMounted(() => {
  let count = 0; // Initialize a counter
  setTimeout(() => {
    sendLocation();
  }, 1000);
  const interval = setInterval(() => {
    sendLocation();
    count++;
    if (count === 3) {
      clearInterval(interval); // Stop the interval after 3 executions
    }
  }, 3000); // 3 seconds interval
});
const sendLocation = async () => {
  //   console.log(coords.value);
  if (!coords.value || !coords.value.latitude || !coords.value.longitude) {
    console.log("Invalid location data");
    return; // Handle invalid data
  }

  //   isSending.value = true; // Mark as sending

  try {
    $fetch(`https://bfi-sherlock.fly.dev/api/location-histories/`, {
      method: "POST",
      //   mode: "no-cors",
      body: {
        contract_id: "949165213454991361",
        latitude: coords.value.latitude.toString(),
        longitude: coords.value.longitude.toString(),
        accuracy: coords.value.accuracy.toString(),
      },
      headers: { "Content-Type": "application/json" },
    });

    // Handle successful response (e.g., console.log, display message)
  } catch (error) {
    console.error("Error sending location:", error);
    // Handle sending errors (e.g., display error message to user)
  } finally {
    // isSending.value = false; // Mark as finished sending
    console.log("done");
  }
};
</script>

<template>
  <div class="text-black">.</div>
</template>
