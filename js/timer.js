function calculateDaysSince(dateString) {
    const startDate = new Date(dateString);
    const today = new Date();
    // Clear time to midnight for accurate day difference
    startDate.setHours(0,0,0,0);
    today.setHours(0,0,0,0);
    const diffTime = today - startDate; // milliseconds difference
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  function updateDaysCount() {
    const days = calculateDaysSince('2019-02-20');
    document.getElementById('daysCount').textContent = days;
  }

  // Run on load
  updateDaysCount();

  // Optional: update every 24 hours (in case page stays open)
  setInterval(updateDaysCount, 1000 * 60 * 60 * 24);
