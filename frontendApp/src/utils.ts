  function isToday(dateString: string): boolean {
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
  
    const dateToCompare = new Date(dateString);
    const formattedDate = dateToCompare.toISOString().split('T')[0];
  
    return formattedToday === formattedDate;
  }
  
  function formatDate(dateInput: string | Date): string {
    const date = new Date(dateInput);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
  
    return `${day}/${month}/${year}`;
  }
  
  function movementDate(dateString: string): string {
    const formattedDate = formatDate(dateString);  
    
    return isToday(dateString) ? "Hoy" : formattedDate; 
  }
  
  function initialsFormat(name: string){

    const initials = name
    .split(" ")
    .slice(0, 2)
    .map((word: string) => word.charAt(0).toUpperCase())
    .join("");

    return initials
  }
  
  export {
    movementDate,
    initialsFormat
  };
  