import { TypeName, UserInterfaceDashboardFlavor, UserInterfaceMapTracking } from "./Enums";
import { Serializable } from "./Serializable";
export declare class UserInterfaceSettings implements Serializable {
    readonly type = TypeName.UserInterfaceSettings;
    reticleImageUrl: string | null;
    droneOffsetsVisible: Boolean | null;
    missionSummaryExtended: Boolean | null;
    missionDetailsExpanded: Boolean | null;
    mapTracking: UserInterfaceMapTracking;
    dashboardFlavor: UserInterfaceDashboardFlavor;
    gimbalOrientationVisible: Boolean | null;
    applyJSON(json: any): void;
    get reticalImageUrl(): string | null;
    set reticalImageUrl(value: string | null);
}
