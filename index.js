const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const fare = 10

const returnFirstTwoDrivers  = (driverArray) => driverArray.slice(0,2);

const returnLastTwoDrivers  = (driverArray) => driverArray.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multInt) => function(fare) {
    return fare*multInt
}

const fareDoubler = (createFareMultipler) => createFareMultipler*2;

const fareTripler = (createFareMultipler) => createFareMultipler*3;

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}