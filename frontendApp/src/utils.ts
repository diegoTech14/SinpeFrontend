  function isToday(dateString: string): boolean {
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
  
    const dateToCompare = new Date(dateString);
    const formattedDate = dateToCompare.toISOString().split('T')[0];
  
    return formattedToday === formattedDate;
  }
  
  function formatDate(dateInput: string | Date): string {
    const date = new Date(dateInput);
  
    const utcDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  
    const dateParts = {
      day: String(utcDate.getUTCDate()).padStart(2, "0"),
      month: String(utcDate.getUTCMonth() + 1).padStart(2, "0"),
      year: String(utcDate.getUTCFullYear()).slice(-2),
    };
  
    return `${dateParts.day}/${dateParts.month}/${dateParts.year}`;
  }
  
  function movementDate(dateString: string): string {
    const formattedDate = formatDate(dateString);  
    
    return isToday(dateString) ? "Hoy" : formattedDate; 
  }
  
  function initialsFormat(name: string){
    return name
    .split(" ")
    .slice(0, 2)
    .map((word: string) => word.charAt(0).toUpperCase())
    .join("");
  }
  
  export {
    movementDate,
    initialsFormat
  };
  