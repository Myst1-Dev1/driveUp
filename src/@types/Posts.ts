export type Posts = {
    id: number;
    post_image_url: string;
    post_title: string;
    post_description: string;
    post_comments: [],
    post_categories: string[];
    related_posts: Posts[];
    createdAt: string;
}