import { Optional } from 'sequelize';
import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import Class from './class';
import Student from './student';

export interface IEnrollmentAttributes {
  student_id: string;
  class_id: string;
  expired_at: string;
  status: Status;
}
interface IEnrollmentCreationAttributes extends Optional<IEnrollmentAttributes, 'status' | 'expired_at'> {}

@Table({
  tableName: 'enrollment',
  timestamps: false,
})
class Enrollment extends Model<IEnrollmentAttributes, IEnrollmentCreationAttributes> {
  @ForeignKey(() => Class)
  @Column
  class_id!: string;

  @ForeignKey(() => Student)
  @Column
  student_id!: string;

  @Column({
    type: DataType.STRING,
    defaultValue: 'active',
    allowNull: false,
  })
  status!: string;

  @Column({
    type: DataType.DATE,
  })
  expired_at!: string;
}

export default Enrollment;
