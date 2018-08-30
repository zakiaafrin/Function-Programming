const employees = [
    {name: "Shahid Hasan", hourlyRate: 38.50, hoursWorked: 62},
    {name: "Mina Rahman", hourlyRate: 36.65, hoursWorked: 60},
    {name: "Imran Khan", hourlyRate: 39.78, hoursWorked: 70}
    ]
  
  class Payroll{
    constructor(employees){
      this.employees = employees;
      this.fullName = this.getNames();
      this.fullTime = this.getFullTime();
      this.totalCost = this.getTotalLabor();
    }

    getNames(){
      const newarray = this.employees.map(employee => {
         return employee.name;
      })
      return newarray.sort();
      
    }

    getFullTime(){
      return this.employees.filter(employee => {
        return(employee.hoursWorked > 60) ? true:false;
      })
    }   
    
    getTotalLabor(){
      return this.employees.reduce((acc,curr)=>{
        return acc + (curr.hourlyRate*curr.hoursWorked);
    },0)
    }
   
  }
  
  const payroll = new Payroll(employees)
  // console.log(payroll.fullName)
  // console.log(payroll.fullTime)
  // console.log(payroll.totalCost)
  console.log(payroll)