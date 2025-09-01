export type Posts = {
    id: number;
    post_image_url: string;
    post_title: string;
    post_description: string;
    post_comments: Comment[],
    post_categories: string[];
    related_posts: Posts[];
    createdAt: string;
}

type Comment = {
    avatarUrl: string; 
    comment: string
    createdAt: string
    name: string;
}