import { Drone } from "./Drone";
import { User } from "./User";
import { Device } from "./Device";
import { RemoteController } from "./RemoteController";
import { Dictionary } from "./Dictionary";
import { DroneOffsets } from "./DroneOffsets";
export declare class Context {
    user: User;
    device: Device;
    drone: Drone;
    remoteControllers: Dictionary<RemoteController>;
    droneOffsets: DroneOffsets;
    preview: boolean;
    metadata: any;
    remoteController(channel?: number): RemoteController;
}
