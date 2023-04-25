import {ApiProperty} from "@nestjs/swagger";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity('user_details')
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    @ApiProperty({example:"", description: 'firstname Description'})
    firstname: string;

    @Column()
    @ApiProperty({example:"", description: 'lastname Description'})
    lastname: string;

    @Column({ type: "timestamp", default: () => "now()" })
    @ApiProperty({ example: "", description: 'dob Description' })
    dob: Date;

    @Column()
    @ApiProperty({example:"", description: 'phonenumber Description'})
    phone_number: string;

    @Column()
    @ApiProperty({example:"", description: 'email Description'})
    email: string;

    @Column()
    @ApiProperty({example:"", description: 'address Description'})
    address: string;

    @Column()
    @ApiProperty({example:"", description: 'nextofkin Description'})
    next_of_kin: string;

    @Column()
    @ApiProperty({example:"", description: 'university Description'})
    university: string;
}
