const checkLateStatus = () => {
  const expectedCheckInTime = "08:30:00"; // Waktu yang diharapkan
  const currentDate = new Date().toISOString().split("T")[0]; // Mendapatkan tanggal hari ini (YYYY-MM-DD)

  // Menggabungkan tanggal hari ini dengan waktu yang diharapkan
  const dateTimeExpected = new Date(`${currentDate}T${expectedCheckInTime}`);
  console.log("Expected Check-in Time:", dateTimeExpected);

  // Mendapatkan waktu sekarang
  const checkInTime = new Date(Date.now());
  console.log("Actual Check-in Time:", checkInTime);

  // Membandingkan apakah waktu check-in lebih lambat dari waktu yang diharapkan
  if (checkInTime > dateTimeExpected) {
    return true; // Terlambat
  }
  return false; // Tidak terlambat
};

export default checkLateStatus;
