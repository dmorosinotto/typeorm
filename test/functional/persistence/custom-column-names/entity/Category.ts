import {Table} from "../../../../../src/decorator/tables/Table";
import {PrimaryGeneratedColumn} from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import {Post} from "./Post";
import {Column} from "../../../../../src/decorator/columns/Column";
import {OneToMany} from "../../../../../src/decorator/relations/OneToMany";
import {OneToOne} from "../../../../../src/decorator/relations/OneToOne";
import {JoinColumn} from "../../../../../src/decorator/relations/JoinColumn";
import {CategoryMetadata} from "./CategoryMetadata";

@Table()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Post, post => post.category)
    posts: Post[];

    @Column({ type: "int", nullable: true })
    metadataId: number;
    
    @OneToOne(type => CategoryMetadata, metadata => metadata.category, {
        cascadeInsert: true
    })
    @JoinColumn({ name: "metadataId" })
    metadata: CategoryMetadata;
    
    @Column()
    name: string;

}