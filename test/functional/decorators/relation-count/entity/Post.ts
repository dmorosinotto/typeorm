import {Category} from "./Category";
import {ManyToMany} from "../../../../../src/decorator/relations/ManyToMany";
import {Table} from "../../../../../src/decorator/tables/Table";
import {PrimaryGeneratedColumn} from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import {Column} from "../../../../../src/decorator/columns/Column";
import {Tag} from "./Tag";
import {ManyToOne} from "../../../../../src/decorator/relations/ManyToOne";
import {JoinTable} from "../../../../../src/decorator/relations/JoinTable";
import {RelationCount} from "../../../../../src/decorator/relations/RelationCount";

@Table()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    
    @ManyToOne(type => Tag)
    tag: Tag;

    @ManyToMany(type => Category)
    @JoinTable()
    categories: Category[];
    
    @RelationCount((post: Post) => post.categories)
    categoriesCount: number;
    
    secondCategoriesCount: number;

}