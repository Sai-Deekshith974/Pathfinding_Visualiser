export class Node
{
    id: any;
    status: any;
    previousNode: any;
    path: any;
    direction: any;
    storedDirection: any;
    distance: any;
    totalDistance: any;
    heuristicDistance: any;
    weight: any;
    relatesToObject: any;
    overwriteObjectRelation: any;
    otherid: any;
    otherstatus: any;
    otherpreviousNode: any;
    otherpath: any;
    otherdirection: any;
    otherstoredDirection: any;
    otherdistance: any;
    otherweight: any;
    otherrelatesToObject: any;
    otheroverwriteObjectRelation: any;
    constructor(id: any,status: any)
    {
        this.id = id;
        this.status = status;
        this.previousNode = null;
        this.path = null;
        this.direction = null;
        this.storedDirection = null;
        this.distance = Infinity;
        this.totalDistance = Infinity;
        this.heuristicDistance = null;
        this.weight = 0;
        this.relatesToObject = false;
        this.overwriteObjectRelation = false;

        this.otherid = id;
        this.otherstatus = status;
        this.otherpreviousNode = null;
        this.otherpath = null;
        this.otherdirection = null;
        this.otherstoredDirection = null;
        this.otherdistance = Infinity;
        this.otherweight = 0;
        this.otherrelatesToObject = false;
        this.otheroverwriteObjectRelation = false;
    }
}