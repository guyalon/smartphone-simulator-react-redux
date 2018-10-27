
export const getVacantGridIndexes = (apps=[],numberOfTiles)=>{

    let availableIndex = Array.from(Array(numberOfTiles),(x,i)=>i);
    if (apps.length===0) return availableIndex;

    apps.map(function(app) {
        var index = availableIndex.indexOf(app.index);
        if (index > -1) {
            availableIndex.splice(index, 1);
        }
        return app;
    });

    return availableIndex;

}


export const getNextAvailableIndex = (apps=[],index=0,numberOfTiles)=>{

    if (apps.length===0) return 0;
    let availableIndex = getVacantGridIndexes(apps,numberOfTiles);
    let newIndex = index;

    while (newIndex){
        if (availableIndex.indexOf(newIndex)>-1){
            return newIndex;
        }
        newIndex--;
    }
   newIndex = index;

   while(newIndex!==numberOfTiles){
       if (availableIndex.indexOf(newIndex)>-1){
           return newIndex;
       }
       newIndex++;
   }

   return -1;
};

export const getDropIndex = (x,y,{screenWidth,screenHeight,gridWidth,gridHeight})=>{

    const gridLeftMargin = (screenWidth - gridWidth*100)/2;
    const gridTopMargin = (screenHeight - gridHeight*100)/2;
    const row = Math.floor((y-gridTopMargin)/100);
    const column = Math.ceil((x-gridLeftMargin)/100);
    const index = row*gridWidth+column-1;

    return index;
};