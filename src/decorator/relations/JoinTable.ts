import {getMetadataArgsStorage} from "../../index";
import {JoinTableOptions} from "../../metadata/options/JoinTableOptions";
import {JoinTableMetadataArgs} from "../../metadata/args/JoinTableMetadataArgs";

/**
 */
export function JoinTable(options?: JoinTableOptions): Function {
    return function (object: Object, propertyName: string) {
        options = options || {} as JoinTableOptions;
        const args: JoinTableMetadataArgs = {
            target: object.constructor,
            propertyName: propertyName,
            options: options
        };
        getMetadataArgsStorage().joinTables.add(args);
    };
}

