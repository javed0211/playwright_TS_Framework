
let Employee = {
	name:'John',
	age:30,
	city:'New York',
    job:{
        title:'Software Engineer',
        company:'ABC Corp',
        department:{
            name:'Development',
            manager:{
                name:'Jane Doe'
            }
        }
    }
}
console.log(Employee.job.department.manager.name) // Output: Software Engineer


let Car = {
    brand:'Toyota',
    start: function(){
        console.log('Starting the engine...')
        },
    };
    Car.start() // Output: Starting the engine...
