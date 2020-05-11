export declare class LinkedValue<I> {
    readonly current: I;
    private _previous;
    private _next;
    constructor(current: I, previous?: LinkedValue<I> | null);
    insertBefore(value: I): LinkedValue<I>;
    insertAfter(value: I): LinkedValue<I>;
    get list(): LinkedValue<I>[];
    get valueList(): I[];
    get previous(): LinkedValue<I> | null;
    set previous(value: LinkedValue<I> | null);
    get next(): LinkedValue<I> | null;
    set next(value: LinkedValue<I> | null);
    get first(): LinkedValue<I>;
    get last(): LinkedValue<I>;
}
