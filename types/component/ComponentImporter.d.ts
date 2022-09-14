import { Altitude } from "../core/Altitude";
import { PlanComponent } from "./PlanComponent";
export declare class ComponentImporter {
    static litchiWaypointsFromJson(content: string): any[] | null;
    static litchiAsOnboard(fileName: string, litchiWaypoints: LitchiWaypoint[]): PlanComponent;
    static litchiAsVirtualStick(fileName: string, litchiWaypoints: LitchiWaypoint[]): PlanComponent;
}
declare class LitchiWaypoint {
    fields: {
        [name: string]: string;
    };
    altitude(): Altitude;
    distance(key: String): number;
    actions(): any[];
}
export {};
