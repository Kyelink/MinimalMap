/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

console.info('Roofs Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    WA.room.area.onEnter("roof_under").subscribe(() => {
        hideRoof1();
    });
    WA.room.area.onLeave("roof_under").subscribe(() => {
        showRoof1();
    });
    
    

   
}).catch(e => console.error(e));

const hideRoof1 = () => {
    WA.room.hideLayer("roof");
    
}
const showRoof1 = () => {
    WA.room.showLayer("roof");
    WA.room.hideLayer("screens");
}


export {}
