import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('addresses')
class Address extends BaseEntity {
  @Column({ nullable: false })
  public model_id: string;

  @Column({ nullable: true })
  public address: string;

  @Column({ nullable: true })
  public city: string;

  @Column({ nullable: true })
  public state: string;
}

export default Address;
