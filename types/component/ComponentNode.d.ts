import { Node } from "../core/Node";
import { Component } from "./Component";
import { Vector2 } from "../core/Vector2";
import { ExecutionEngine } from "../core/Enums";
import { Message } from "../core/Message";
import { ComponentContext } from "./ComponentContext";
import { Dictionary } from "../core/Dictionary";
export declare class ComponentNode extends Node {
    readonly component: Component;
    label: string;
    constructor(parent: Node | null, component: Component);
    get name(): string;
    get title(): string;
    get subtitle(): string;
    get subComponentCount(): number;
    get descendantComponentCountsByType(): Dictionary<number>;
    descendantComponentCount(where: (descendant: Component) => boolean): number;
    descendantAllowed(descendant: any): boolean;
    executionEngineSupported(executionEngine: ExecutionEngine): boolean;
    get executionEngines(): ExecutionEngine[];
    elevationsRequired(context: ComponentContext): boolean;
    addChild(childComponent: Component, insert?: boolean): ComponentNode;
    get referenceOffsets(): Vector2[];
    get issues(): MissionIssue[];
}
declare type MissionIssue = {
    message: Message;
    node: Node;
};
export {};
