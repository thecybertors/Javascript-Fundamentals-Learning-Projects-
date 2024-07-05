const car={
    engine: "Vrooom!",
    wheel: 4,
    doors: 4,
    brake(){
        return "Grrrrrrr";
    },
    seat_option: ["leather","cloth"]
};
console.log(car.engine);
console.log(car.brake());
console.log(car.wheel);

const tesla=Object.create(car);
console.log(tesla.wheel);
tesla.doors=2;
console.log(tesla.doors);
console.log(tesla.seat_option[0]);

const band={
    instrument:"Guitar",
    group:5,
    smoke:true,
    speaker:"JBL"
};
console.log(Object.keys(band));
console.log(Object.values(band));

for(let job in band){
    console.log(`The ${job} is ${band[job]}`);
}
delete band.group;
console.log(band.group);
console.log(band.hasOwnProperty("group"));
