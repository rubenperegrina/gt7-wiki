export class EngineSwap {
    constructor(
        public engine_swaps: EngineSwap[]
    ) {}
}

export interface EngineSwap {
    last_update:    Date;
    engine:         string;
    source_car:     string;
    available_cars: string[];
}