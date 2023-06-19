import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type abilityModel = HydratedDocument<Ability>;

@Schema()
export class Ability {
    @Prop()
    id: number;
    @Prop()
    name: string;
    @Prop()
    avatar:string;
    @Prop()
    complexity: number;
    @Prop()
    attribute : [{
        agi_base: number;
        agi_gain: number;
        str_base: number;
        str_gain: number;
        int_base: number;
        int_gain: number;
        max_health: number;
        max_mana: number;
        health_regen: number;
        mana_regen: number;
        role_levels: number[];
        damage_max: number;
        damage_min: number;
        attack_capability: number;
        attack_range: number;
        attack_rate: number;
        armor: number;
        magic_resistance: number;
        movement_speed: number;
        sight_range_day: number;
        sight_range_night: number;
    }
] 
    @Prop()
    ability : [{
        avatar:string,
        poster:string,
        videowebm:string,
        videomp4:string
        nameskill:string,
        describle:string
        ability : string,
        affect : string,
        damagetype: string,
        piercesspellimmunity: boolean,
        dispellable:boolean,
        targets: string,
        damagepersecond:string,
        duration:string,
        castrange:string,
        cooldown:string,
        manacost:string,
        hint:string,
    }]
}

export const AbilitySchema = SchemaFactory.createForClass(Ability);