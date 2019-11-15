import { ModelProperty } from './ModelProperty';
import { Enum } from './Enum';

export interface Model {
    isInterface: boolean;
    isType: boolean;
    isEnum: boolean;
    name: string;
    type: string;
    base: string;
    template: string | null;
    validation: string | null;
    description: string | null;
    extends: string | null;
    imports: string[];
    enums: Enum[];
    properties: ModelProperty[];
}
