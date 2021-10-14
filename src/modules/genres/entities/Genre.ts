import { Entity, JoinTable, ManyToMany, Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import { Game } from "../../games/entities/Game";

@Entity()
class Genre {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Game, (game) => game.genres)  
  games: Game[]; 

  @CreateDateColumn()
  created_at: Date;
}

export { Genre };