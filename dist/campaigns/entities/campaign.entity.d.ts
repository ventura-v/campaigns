import { User } from 'src/users/entities/user.entity';
export declare class Campaign {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date | null;
    owner: User;
    ownerId: number;
}
