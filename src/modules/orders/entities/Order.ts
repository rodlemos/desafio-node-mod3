import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Game } from "../../games/entities/Game";
import { User } from "../../users/entities/User";

@Entity()
class Order {
  @PrimaryColumn()
  id: string;

  @ManyToOne(()=> User)
  @JoinColumn({name: "user_id"})
  user: User;

  @Column()
  user_id: string;

  @ManyToMany(() => Game)
  @JoinTable({
    name: "games_order",
    joinColumns: [{ name: "game_id" }],
    inverseJoinColumns: [{ name: "order_id" }]
  })
  games: Game[];
}

export { Order };