import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import Order from '@modules/orders/infra/typeorm/entities/Order';
import Product from '@modules/products/infra/typeorm/entities/Product';

@Entity('orders_products')
class OrdersProducts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Product, product => product.order_products, {
    cascade: ['insert'],
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => Order, order => order.order_products, {
    cascade: ['insert'],
  })
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column('uuid')
  product_id: string;

  @Column('uuid')
  order_id: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default OrdersProducts;
