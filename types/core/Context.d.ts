import { Drone } from "./Drone";
import { User } from "./User";
import { Device } from "./Device";
import { RemoteController } from "./RemoteController";
import { Dictionary } from "./Dictionary";
import { DroneOffsets } from "./DroneOffsets";
import { Message } from "./Message";
export declare class Context {
    user: User;
    device: Device;
    drone: Drone;
    remoteControllers: Dictionary<RemoteController>;
    droneOffsets: DroneOffsets;
    preview: boolean;
    metadata: any;
    logMessagesNative: Message[];
    remoteController(channel?: number): RemoteController;
    logNative(message: Message): void;
}
