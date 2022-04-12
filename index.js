// Code your solution in this file!
const returnFirstTwoDrivers = ([driver1, driver2, driver3, driver4]) => [driver1, driver2];

const returnLastTwoDrivers = ([driver1, driver2, driver3, driver4]) => [driver3, driver4];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return (function(value){
        return int * value;
    })
}

const fare = createFareMultiplier();

const fareDoubler = fare => fare * 2;

const fareTripler = fare => fare * 3;

function selectDifferentDrivers([driver1, driver2, driver3, driver4], returnFirstTwoDrivers){
    return returnFirstTwoDrivers([driver1, driver2, driver3, driver4]);
}
    