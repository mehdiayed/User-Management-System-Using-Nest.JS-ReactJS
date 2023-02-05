import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;



@Schema()
export class User {
    @Prop({ required: true })
    fullname: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    country: string;
}

export const UserSchema = SchemaFactory.createForClass(User);