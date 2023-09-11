   // Get current date
   const currentDate = new Date();
   const currentDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currentDate);
   document.getElementById("currentDay").textContent = currentDay;

   function updateUTCTime() {
       //const currentUTC = new Date();
       //const currentTime = currentUTC.toISOString().split('T')[1].replace('Z', '');
       document.getElementById("currentUTC").textContent = Date.now();
   }
   
   setInterval(updateUTCTime, 10);