import { MotionLimits6 } from "./MotionLimits6";
import { Limits } from "./Limits";
import { CameraSpecification } from "./CameraSpecification";
import { MotionLimits3 } from "./MotionLimits3";
import { Orientation3Optional } from "./Orientation3Optional";
import { MotionLimitsOptional } from "./MotionLimitsOptional";
export declare class Constants {
    static readonly Version = "4.9.0";
    static readonly ExecuteFrequencyTargetDefault = 10;
    static readonly ExecuteFrequencyMinDefault = 5;
    static readonly ExecuteDelayStrikesMaxDefault = 5;
    static readonly ExecuteFrequencyTargetAutel = 5;
    static readonly ExecuteFrequencyMinAutel = 4;
    static readonly ExecuteFrequencyTargetDJI2 = 20;
    static readonly ExecuteFrequencyMinDJI2 = 5;
    static readonly SimulationExecuteIntervalTarget: number;
    static readonly DroneConnectionLatency: number;
    static DroneMotionLimits: {
        Generic: () => MotionLimits6;
        Conservative: () => MotionLimits6;
        Max: () => MotionLimits6;
    };
    static DroneOrientationLimits: {
        Yaw: Limits;
    };
    static GimbalLimits: {
        Pitch: Limits;
        Roll: Limits;
        Yaw: Limits;
    };
    static GimbalMotionLimits: MotionLimits3;
    static CameraSpecifications: CameraSpecification[];
    static CameraSpecification: (id: any) => CameraSpecification;
    static readonly MissionReengagementAltitudeRange: number;
    static readonly MissionReengagementMinAltitude: number;
    static readonly MissionReengagementTakeoffAltitude: number;
    static readonly MissionReengagementMinRampVelocity: number;
    static readonly CameraFocusCalibrationDistance: number;
    static readonly CameraFocusCalibrationRingValueRange = 0.05;
    static readonly CameraFocusCalibrationMinRingValues = 5;
    static readonly ComponentElevationTolerance = 1;
    static readonly ComponentDyanmicHomeLocationUpdateFrequency = 5;
    static readonly PlanComponentTakeoffDistanceHorizontal: number;
    static readonly PlanComponentCompleteVerticalMotionLimits: MotionLimitsOptional;
    static readonly PlanComponentCompleteHorizontalMotionLimits: MotionLimitsOptional;
    static readonly PlanComponentCompleteReturnHomeAltitude: number;
    static readonly DroneMotionComponentGimbalOrientation: Orientation3Optional;
    static readonly DroneMotionComponentModelSampleTimeMax = 2;
    static readonly DroneMotionComponentErrorK: number;
    static readonly DroneMotionErrorLimitHorizontalMin = 1;
    static readonly DroneMotionErrorToleranceHorizontal: number;
    static readonly DroneMotionErrorToleranceVertical: number;
    static readonly DestinationComponentHeadingAchievement: number;
    static readonly DestinationComponentEstimateSampleDistance = 1;
    static readonly DestinationComponentAchievementTime = 4;
    static readonly DestinationComponentAchievementDistanceHorizontal: number;
    static readonly DestinationComponentAchievementDistanceVertical: number;
    static readonly DestinationComponentAltitude: number;
    static readonly DestinationComponentAltitudeRange: number;
    static readonly DestinationComponentRestrictionZoneCornerRadius: number;
    static readonly DestinationComponentSampleDistance = 0.3;
    static readonly DestinationComponentRestrictionZoneExitMinAltitude: number;
    static readonly DestinationComponentClosingSpeedRatio: number;
    static readonly DestinationComponentClosingTimeLimitRatio: number;
    static readonly DestinationComponentClosingTimeLimitMin = 10;
    static readonly CourseComponentAchievementDistance: number;
    static readonly FacadeComponentDistance: number;
    static readonly FacadeComponentMinCaptureInterval = 2;
    static readonly FacadeComponentVerticalOverlap = 0.5;
    static readonly FacadeComponentHorizontalOverlap = 0.5;
    static readonly FacadeComponentVerticalDistance = 5;
    static readonly FacadeComponentHorizontalDistance = 5;
    static readonly FacadeComponentGimbalPitch: number;
    static readonly FacadeComponentInitialAltitude: number;
    static readonly FacadeComponentFinalAltitude: number;
    static readonly FacadeComponentCornerRadius: number;
    static readonly FacadeComponentOrbitSteps = 360;
    static readonly FacadeComponentSampleDistanceMax = 0.3;
    static readonly FacadeComponentSampleDistanceMin = 0.1;
    static readonly FacadeGimbalPitchLimits: Limits;
    static readonly HeadingComponentAchievementTime = 1;
    static readonly HeadingComponentAchievementDistance: number;
    static readonly HoverComponentTime = 3;
    static readonly InspectionComponentAchievementTime = 3;
    static readonly InspectionComponentAchievementDistanceHorizontal: number;
    static readonly InspectionComponentAchievementDistanceVertical: number;
    static readonly InspectionComponentOrientationDistanceHorizontal: number;
    static readonly InspectionComponentOrientationDistanceVertical: number;
    static readonly InspectionComponentOrientationTimeMax = 3;
    static readonly InspectionComponentActionDroneOrientationCompatibilityThreshold: number;
    static readonly InspectionComponentOrientationDroneThreshold: number;
    static readonly InspectionComponentOrientationGimbalThreshold: number;
    static readonly InspectionComponentAltitudeRange: number;
    static readonly MapComponentMaxHorizontalVelocity: number;
    static readonly MapComponentMinHorizontalVelocity = 0.1;
    static readonly MapComponentMinCaptureInterval = 2;
    static readonly MapComponentFrontOverlap = 0.75;
    static readonly MapComponentSideOverlap = 0.7;
    static readonly MapComponentFrontDistance: number;
    static readonly MapComponentSideDistance: number;
    static readonly MapComponentGimbalPitch: number;
    static readonly MapComponentBaseAccelerationMultiplier = 0.5;
    static readonly MapComponentSampleDistance = 0.3;
    static readonly MapComponentRampDistanceCornerRadiusMultipler = 5;
    static readonly MapComponentMinTargetDistance: number;
    static readonly MapComponentTraverseFinalHeadingTime = 1;
    static readonly MapComponentTerrainFollowGranularity = 30;
    static readonly MapComponentLinearPatternDefaultPassCount = 2;
    static readonly MapComponentLargeMapAreaMax: number;
    static readonly MapComponentLinearPatternLargeMapSegmentsLengthMax: number;
    static readonly MapComponentLinearPatternMinBoundarySegmentsAngle: number;
    static readonly MapComponentLinearPatternMinSegmentLengthMultiplier = 0.5;
    static readonly MapComponentLinearPatternPathCornerRadius: number;
    static readonly MapComponentLinearPatternWidth: number;
    static readonly MapCameraSpecification: CameraSpecification;
    static readonly MapGimbalPitchLimits: Limits;
    static readonly OrbitComponentEstimateSampleDistance = 1;
    static readonly OrbitComponentSampleDistance = 0.3;
    static readonly OrbitComponentMinRadius = 1;
    static readonly PathComponentCornerRadius: number;
    static readonly PathComponentModelSampleDistance = 0.3;
    static readonly PathComponentModelSampleDistancePosition = 1;
    static readonly PlanRestrictionZoneMinApplicableProximityHorizontal: number;
    static readonly PlanRestrictionZoneMinApplicableProximityVertical: number;
    static readonly RotationComponentVelocity: number;
    static readonly RotationComponentDistance: number;
    static readonly RotationComponentVelocityMin: number;
    static readonly RotationAchievementDistance: number;
    static readonly WaitComponentTime = 1;
    static readonly VelocityHorizontalDampenThreshold = 2;
    static readonly VelocityVerticalDampenThreshold = 2;
    static readonly VelocityRotationalDampenThreshold: number;
    static readonly LowBatteryWarningThresholdDroneCommandValue = 0.2;
    static readonly SeriousLowBatteryWarningThresholdDroneCommand = 0.1;
    static readonly ReturnHomeAltitudeDroneCommandValue: number;
    static readonly MaxAltitudeDroneCommandValue: number;
    static readonly MaxDistanceDroneCommandValue: number;
    static readonly ObstacleAvoidanceBrakingDistanceDroneCommandValue = 1;
    static readonly ObstacleAvoidanceWarningDistanceDroneCommandValue = 1.1;
    static readonly PhotoIntervalCommandValue = 2;
    static readonly ZoneMaxAltitude: number;
    static readonly ZoneEdgeBufferDistance = 0.1;
    static readonly DJIWaypointMissionComponentMaxWaypoints = 99;
    static readonly DJIWaypointMissionComponentMinWaypointDistance = 0.2;
    static readonly DJIWaypointMissionComponentMaxWaypointActions = 15;
    static readonly DJIWaypointMissionComponentZeroSpeed = 0.01;
    static readonly DJIWaypointMissionComponentCornerRadius: number;
    static readonly DJIWaypointMissionComponentCornerRadiusMin = 0.2;
    static readonly DJIWaypointMissionComponentCornerRadiusMax = 1000;
    static readonly DJIWaypointMissionComponentWaypointAltitude: number;
}
