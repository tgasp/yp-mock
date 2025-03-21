import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("partners")
export class Partner {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    apiKey: string;

    @Column({ unique: true })
    clientId: string;

    @Column()
    name: string;
}
