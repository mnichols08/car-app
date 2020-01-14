(function() {

    class Car {
        constructor(year,make,model,trim,color) {
            this.color = color
            this.year = year
            this.make = make
            this.model = model
            this.trim = trim
            this.parts = [] // provides an array to contain all catalogs of parts
         }
    }
    
    class Catalog {
        constructor(name) {
            this.name = name
            this.collection = [] // provides an array to organize parts into bigger lumps (such as brakes, headlights, etc.)
        }
        addPart(part, ...hardware) {
            let thisPart = new Part(part)
            thisPart.hardware.push(hardware)
            this.collection.push(thisPart)
            return this.collection
        }
    }

    class Part {
        constructor(part) {
            this.part = part
            this.hardware = [] // provides an array to contain additional hardware required to install part
        }
    }

    class Hardware {
        constructor(type,size,qty) {
            this.type = type
            this.size = size
            this.qty = qty
        }
    }


    const getCar = () => {
        let  year = prompt('What is the year that your vehicle was made?')
        let make = prompt('What is the make of your vehicle?')
        let model = prompt('What is the model of your vehicle?')
        let trim = prompt('What is the trim style of your vehicle?')
        let color = prompt('What color is your vehicle?')
        return new Car(year, make, model, trim, color)
    }


    //let yourCar = getCar()

    // today I called this stupid :/
    let myCar = new Car(1990, 'Eagle', 'Talon', 'TSi', 'Blue' )

    
        let drivetrain = new Catalog('Drivetrain')
        drivetrain.addPart('Driveshaft', '4 nuts', '4 bolts')
        drivetrain.addPart('Transfer Case', '4 nuts', '4 bolts')
        drivetrain.addPart('Rear Differential', '4 bolts')
        drivetrain.addPart('Axles', '4 nuts', '4 bolts')
        drivetrain.addPart('Brakes', '4 nuts', '4 bolts')
        drivetrain.addPart('Suspension', '8 nuts, 6 bolts')


        myCar.parts.push(drivetrain)


})()

// Wishlish App?
// Payday App?
// Part Catalog App
