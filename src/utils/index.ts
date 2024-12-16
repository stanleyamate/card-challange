export function convertGmtToLocalTime(gmtTime:string) {
  // Parse the input GMT time string (format: HH:MM)
  const [hours, minutes] = gmtTime.split(':').map(Number);

  // Create a Date object with the current date and provided GMT time
  // We use 'UTC' to ensure the Date object treats the time as GMT
  const now = new Date();
  const gmtDate = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes));

  // Convert the GMT time to local time
  const localTime = gmtDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }); // Converts to local time and formats as a string

  return localTime;
}