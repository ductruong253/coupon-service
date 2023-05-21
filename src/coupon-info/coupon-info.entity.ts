import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class CouponInfo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    vendorCode: string
}